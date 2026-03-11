import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { sfxBtn, sfxClick, sfxNav, sfxTransmission, sfxTyping } from '../audio/engine';
import { useSound } from '../audio/SoundContext';
import { logUnansweredQuestion } from '../botLogger';
import { getBotResponse } from '../botMatcher';
import { BOT_QUICK_PROMPTS, SHEETS_WEBHOOK_URL } from '../data';

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_MESSAGE = {
  role: 'bot',
  text: "Hey! I'm Nikunj's portfolio assistant. Ask me about his skills, experience, projects, or whether he's open to new opportunities.\n\nYou can also click any of my messages to hear them read aloud.",
};

const RESPONSE_DELAY_MIN = 400;
const RESPONSE_DELAY_JITTER = 320;

const TYPING_DELAYS = [0, 150, 300];

// ─── Sub-components ───────────────────────────────────────────────────────────

const BotHeader = memo(function BotHeader({ onClose }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: '1px solid rgba(255,70,85,.2)',
      background: 'rgba(2,6,14,.7)',
      display: 'flex', alignItems: 'center', gap: 10,
      flexShrink: 0,
    }}>
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: '#00ff64',
        boxShadow: '0 0 8px #00ff64',
        animation: 'pulse-g 2s infinite',
      }} />
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700, fontSize: 15,
          color: 'var(--white)',
        }}>
          NEXUS-AI
        </div>
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--red)', letterSpacing: 2,
        }}>
          PORTFOLIO ASSISTANT // ONLINE
        </div>
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: '1px solid rgba(255,70,85,.3)',
          color: 'var(--red)',
          width: 28, height: 28,
          cursor: 'pointer',
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,70,85,.12)'}
        onMouseLeave={e => e.currentTarget.style.background = 'none'}
      >
        ✕
      </button>
    </div>
  );
});

const TypingIndicator = memo(function TypingIndicator() {
  return (
    <div
      className="msg msg-bot"
      style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '14px 14px' }}
    >
      {TYPING_DELAYS.map((delay) => (
        <span key={delay} className="typing-dot" style={{ animationDelay: `${delay}ms` }} />
      ))}
    </div>
  );
});

const QuickPrompts = memo(function QuickPrompts({ onSelect }) {
  return (
    <div style={{
      padding: '8px 14px 6px',
      display: 'flex', flexWrap: 'wrap', gap: 6,
      borderTop: '1px solid rgba(42,58,80,.3)',
      flexShrink: 0,
      background: 'rgba(2,6,14,.3)',
    }}>
      <div style={{
        width: '100%',
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 8, color: 'var(--text-dim)', letterSpacing: 1.5,
        marginBottom: 4,
      }}>
        SUGGESTED QUESTIONS
      </div>
      {BOT_QUICK_PROMPTS.map((prompt) => (
        <button
          key={prompt}
          className="quick-btn"
          onMouseEnter={sfxNav}
          onClick={() => onSelect(prompt)}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
});

const LoggerToast = memo(function LoggerToast({ visible, question }) {
  if (!visible) return null;
  return (
    <div className="logger-toast">
      <div className="logger-toast-label">// QUESTION LOGGED</div>
      <div style={{ color: 'var(--gold)', fontSize: 11 }}>
        "{question?.slice(0, 40)}{question?.length > 40 ? '…' : ''}"
      </div>
      <div style={{ marginTop: 4, color: 'var(--text-dim)', fontSize: 8, letterSpacing: .5 }}>
        Sent to your Google Sheet
      </div>
    </div>
  );
});

// ─── Main component ───────────────────────────────────────────────────────────

export function AIBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, question: '' });

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const toastTimerRef = useRef(null);
  const { muted } = useSound();

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      const id = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(id);
    }
  }, [open]);

  // Cleanup toast timer on unmount
  useEffect(() => () => clearTimeout(toastTimerRef.current), []);

  const showToast = useCallback((question) => {
    clearTimeout(toastTimerRef.current);
    setToast({ visible: true, question });
    toastTimerRef.current = setTimeout(() => setToast({ visible: false, question: '' }), 4000);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) sfxTransmission();
      else sfxClick();
      return next;
    });
  }, []);

  const handleSend = useCallback((text) => {
    const query = (text ?? input).trim();
    if (!query || loading) return;

    sfxClick();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: query }]);
    setLoading(true);

    const delay = RESPONSE_DELAY_MIN + Math.random() * RESPONSE_DELAY_JITTER;
    setTimeout(async () => {
      const { response, isFallback } = getBotResponse(query);
      setMessages((prev) => [...prev, { role: 'bot', text: response }]);

      if (isFallback) {
        await logUnansweredQuestion(query);
        if (SHEETS_WEBHOOK_URL) showToast(query);
      }

      if (!muted) {
        const wordCount = Math.min(response.split(' ').length, 20);
        for (let i = 0; i < wordCount; i++) {
          setTimeout(sfxTyping, i * 50 + 180);
        }
      }

      setLoading(false);
    }, delay);
  }, [input, loading, muted, showToast]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else {
      sfxTyping();
    }
  }, [handleSend]);

  const handleBotMessageClick = useCallback((msg) => {
    if (msg.role !== 'bot') return;
    sfxClick();
    // Lazy-load speech only on demand
    import('../audio/engine').then(({ speakText }) => speakText(msg.text));
  }, []);

  const handleInputChange = useCallback((e) => setInput(e.target.value), []);

  const showQuickPrompts = messages.length <= 2;

  return (
    <>
      <LoggerToast visible={toast.visible} question={toast.question} />

      {open && (
        <div className="bot-panel">
          <BotHeader onClose={handleToggle} />

          <div className="bot-msgs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`msg msg-${msg.role}`}
                onClick={() => handleBotMessageClick(msg)}
                title={msg.role === 'bot' ? '🔊 Click to hear' : ''}
                style={{ cursor: msg.role === 'bot' ? 'pointer' : 'default' }}
              >
                {msg.text}
              </div>
            ))}
            {loading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          {showQuickPrompts && <QuickPrompts onSelect={handleSend} />}

          <div className="bot-input-row">
            <input
              ref={inputRef}
              className="bot-input"
              placeholder="Ask something about Nikunj..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bot-send"
              onMouseEnter={sfxBtn}
              onClick={() => handleSend()}
              disabled={loading}
            >
              SEND
            </button>
          </div>
        </div>
      )}

      <button
        className="bot-fab"
        onClick={handleToggle}
        onMouseEnter={sfxBtn}
        title="Chat with portfolio assistant"
      >
        {open ? (
          <span style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', fontFamily: "'Share Tech Mono',monospace" }}>
            ✕
          </span>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="white" opacity=".92" />
            <circle cx="8"  cy="11" r="1.3" fill="#ff4655" />
            <circle cx="12" cy="11" r="1.3" fill="#ff4655" />
            <circle cx="16" cy="11" r="1.3" fill="#ff4655" />
          </svg>
        )}
      </button>
    </>
  );
}
