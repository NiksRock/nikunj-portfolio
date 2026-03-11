import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { sfxBtn, sfxClick, sfxNav, sfxTransmission, sfxTyping } from '../audio/engine';
import { useSound } from '../audio/SoundContext';
import { logUnansweredQuestion } from '../botLogger';
import { getBotResponse } from '../botMatcher';
import { BOT_QUICK_PROMPTS, SHEETS_WEBHOOK_URL } from '../data';

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_MESSAGE = {
  role: 'bot',
  text: "Hey! I'm Nikunj's portfolio assistant. Ask me about his skills, experience, projects, or whether he's open to new opportunities.\n\nClick any of my messages to hear them read aloud — click again to stop.",
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
        background: '#00ff64', boxShadow: '0 0 8px #00ff64',
        animation: 'pulse-g 2s infinite',
      }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 15, color: 'var(--white)' }}>
          NEXUS-AI
        </div>
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--red)', letterSpacing: 2 }}>
          PORTFOLIO ASSISTANT // ONLINE
        </div>
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'none', border: '1px solid rgba(255,70,85,.3)',
          color: 'var(--red)', width: 28, height: 28, cursor: 'pointer',
          fontFamily: "'Share Tech Mono',monospace", fontSize: 12,
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
    <div className="msg msg-bot" style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '14px 14px' }}>
      {TYPING_DELAYS.map((delay) => (
        <span key={delay} className="typing-dot" style={{ animationDelay: `${delay}ms` }} />
      ))}
    </div>
  );
});

const QuickPrompts = memo(function QuickPrompts({ onSelect }) {
  return (
    <div style={{
      padding: '8px 14px 6px', display: 'flex', flexWrap: 'wrap', gap: 6,
      borderTop: '1px solid rgba(42,58,80,.3)', flexShrink: 0,
      background: 'rgba(2,6,14,.3)',
    }}>
      <div style={{
        width: '100%', fontFamily: "'Share Tech Mono',monospace",
        fontSize: 8, color: 'var(--text-dim)', letterSpacing: 1.5, marginBottom: 4,
      }}>
        SUGGESTED QUESTIONS
      </div>
      {BOT_QUICK_PROMPTS.map((prompt) => (
        <button key={prompt} className="quick-btn" onMouseEnter={sfxNav} onClick={() => onSelect(prompt)}>
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

// ─── BotMessage ───────────────────────────────────────────────────────────────
// Isolated so speaking state doesn't re-render the full message list

const BotMessage = memo(function BotMessage({ msg, onSpeak }) {
  const [speaking, setSpeaking] = useState(false);

  const handleClick = useCallback(() => {
    if (msg.role !== 'bot') return;
    sfxClick();

    if (speaking) {
      // FIX 1: Click again to STOP speech
      window.speechSynthesis?.cancel();
      setSpeaking(false);
      return;
    }

    setSpeaking(true);
    onSpeak(msg.text, () => setSpeaking(false));
  }, [msg, speaking, onSpeak]);

  return (
    <div
      className={`msg msg-${msg.role}`}
      onClick={handleClick}
      title={msg.role === 'bot' ? (speaking ? '🔇 Click to stop' : '🔊 Click to hear') : ''}
      style={{
        cursor: msg.role === 'bot' ? 'pointer' : 'default',
        // Subtle glow when actively speaking
        boxShadow: speaking ? '0 0 10px rgba(0,212,255,.25)' : undefined,
        borderColor: speaking ? 'rgba(0,212,255,.4)' : undefined,
        transition: 'box-shadow .2s, border-color .2s',
      }}
    >
      {msg.text}
      {speaking && (
        <span style={{
          display: 'inline-block', marginLeft: 6,
          fontSize: '0.7em', color: 'var(--cyan)',
          animation: 'blink .55s infinite',
        }}>
          ▶ TAP TO STOP
        </span>
      )}
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

  // FIX 2: Track the last bot message ref for smart scrolling
  const lastBotMsgRef = useRef(null);
  const msgsContainerRef = useRef(null);
  const inputRef = useRef(null);
  const toastTimerRef = useRef(null);
  const { muted } = useSound();

  // FIX 2: On new message, scroll so the START of the latest bot reply is visible
  // (not the bottom — so long replies are readable from the top)
  useEffect(() => {
    if (!msgsContainerRef.current) return;
    const container = msgsContainerRef.current;

    // If loading, scroll to bottom to show typing indicator
    if (loading) {
      container.scrollTop = container.scrollHeight;
      return;
    }

    // Find the last bot message and scroll its top to the top of the container
    const allMsgs = container.querySelectorAll('.msg-bot');
    if (allMsgs.length > 0) {
      const lastBot = allMsgs[allMsgs.length - 1];
      // Scroll so the start of the last bot reply is at the top of the viewport
      // with a small offset so context above is still visible
      const offsetTop = lastBot.offsetTop - 12;
      container.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      const id = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(id);
    }
  }, [open]);

  // Cleanup
  useEffect(() => () => {
    clearTimeout(toastTimerRef.current);
    window.speechSynthesis?.cancel();
  }, []);

  const showToast = useCallback((question) => {
    clearTimeout(toastTimerRef.current);
    setToast({ visible: true, question });
    toastTimerRef.current = setTimeout(() => setToast({ visible: false, question: '' }), 4000);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) sfxTransmission();
      else {
        sfxClick();
        // Stop any speech when closing
        window.speechSynthesis?.cancel();
      }
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

  const handleInputChange = useCallback((e) => setInput(e.target.value), []);

  // FIX 1: Speak handler with stop callback passed down to BotMessage
  const handleSpeak = useCallback((text, onDone) => {
    window.speechSynthesis?.cancel();
    import('../audio/engine').then(({ speakWithCallbacks }) => {
      speakWithCallbacks(text, {
        onEnd: onDone,
        onError: onDone,
      });
    });
  }, []);

  const showQuickPrompts = messages.length <= 2;

  return (
    <>
      <LoggerToast visible={toast.visible} question={toast.question} />

      {open && (
        <div className="bot-panel">
          <BotHeader onClose={handleToggle} />

          {/* FIX 2: ref on container for manual scroll control */}
          <div className="bot-msgs" ref={msgsContainerRef}>
            {messages.map((msg, i) => (
              <BotMessage key={i} msg={msg} onSpeak={handleSpeak} />
            ))}
            {loading && <TypingIndicator />}
            <div ref={lastBotMsgRef} />
          </div>

          {showQuickPrompts && <QuickPrompts onSelect={handleSend} />}

          <div className="bot-input-row">
            {/* FIX 3: font-size:16px prevents iOS zoom on input focus */}
            <input
              ref={inputRef}
              className="bot-input"
              placeholder="Ask something about Nikunj..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              style={{ fontSize: 16 }}
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