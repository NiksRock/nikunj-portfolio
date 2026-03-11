import { useEffect, useRef, useState } from 'react';
import { sfxBtn, sfxClick, sfxNav, sfxTransmission, sfxTyping } from '../audio/engine';
import { useSound } from '../audio/SoundContext';
import { BOT_QUICK_PROMPTS } from '../data';
import { getBotResponse } from '../botMatcher';

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_MESSAGE = {
  role: 'bot',
  text: 'NEXUS-AI ONLINE ⚡ // Tactical portfolio assistant active. Ask me about Nikunj\'s skills, experience, or availability. Click any bot message to hear it.',
};

const RESPONSE_DELAY_MIN = 380;
const RESPONSE_DELAY_MAX = 280; // adds jitter: min + random * max

// ─── Sub-components ───────────────────────────────────────────────────────────

function BotHeader({ onClose }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: '1px solid rgba(255,70,85,.25)',
      background: 'rgba(2,4,8,.6)',
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
          background: 'none',
          border: '1px solid rgba(255,70,85,.3)',
          color: 'var(--red)',
          width: 28, height: 28,
          cursor: 'pointer',
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        ✕
      </button>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div
      className="msg msg-bot"
      style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '12px 14px' }}
    >
      {[0, 150, 300].map((delay) => (
        <span key={delay} className="typing-dot" style={{ animationDelay: `${delay}ms` }} />
      ))}
    </div>
  );
}

function QuickPrompts({ onSelect }) {
  return (
    <div style={{
      padding: '8px 14px 4px',
      display: 'flex', flexWrap: 'wrap', gap: 6,
      borderTop: '1px solid rgba(42,58,80,.35)',
      flexShrink: 0,
    }}>
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
}

// ─── Main component ───────────────────────────────────────────────────────────

export function AIBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const { muted } = useSound();

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (next) sfxTransmission();
    else sfxClick();
  };

  const handleSend = (text) => {
    const query = (text ?? input).trim();
    if (!query || loading) return;

    sfxClick();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: query }]);
    setLoading(true);

    // Simulate natural response delay
    const delay = RESPONSE_DELAY_MIN + Math.random() * RESPONSE_DELAY_MAX;
    setTimeout(() => {
      const reply = getBotResponse(query);
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);

      // Play typing sounds proportional to response length
      if (!muted) {
        const wordCount = Math.min(reply.split(' ').length, 25);
        for (let i = 0; i < wordCount; i++) {
          setTimeout(sfxTyping, i * 55 + 200);
        }
      }

      setLoading(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
    else sfxTyping();
  };

  const handleBotMessageClick = (msg) => {
    if (msg.role !== 'bot') return;
    sfxClick();
    // Dynamic import to avoid loading speech synthesis until needed
    import('../audio/engine').then(({ speakText }) => speakText(msg.text));
  };

  const showQuickPrompts = messages.length <= 2;

  return (
    <>
      {/* Chat panel */}
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
              className="bot-input"
              placeholder="ASK NEXUS-AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
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

      {/* Floating action button */}
      <button
        className="bot-fab"
        onClick={handleToggle}
        onMouseEnter={sfxBtn}
        title="Chat with NEXUS-AI"
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
