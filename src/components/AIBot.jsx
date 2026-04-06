import { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  sfxBtn,
  sfxClick,
  sfxNav,
  sfxTransmission,
  sfxTyping,
} from "../audio/engine";
import { useSound } from "../audio/SoundContext";
import { logContactInfo, logUnansweredQuestion } from "../botLogger";
import { getBotResponse } from "../botMatcher";
import { BOT_QUICK_PROMPTS } from "../data";

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_MESSAGE = {
  role: "bot",
  text: "Hey! I'm Nikunj's portfolio assistant. Ask me about his skills, experience, projects, or whether he's open to new opportunities.\n\nClick any of my messages to hear them read aloud — click again to stop.",
};

const CONTACT_ASK_MSG =
  "Your question has been flagged for Nikunj — he'll get back to you shortly.\n\nTo help him reach you directly, could you share your **email** or **phone number**?";

const RESPONSE_DELAY_MIN = 400;
const RESPONSE_DELAY_JITTER = 320;
const TYPING_DELAYS = [0, 150, 300];

// ─── Contact detection helpers ────────────────────────────────────────────────

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const PHONE_RE = /(\+?\d[\s\-.()]?){7,15}/;

function isContactInfo(text) {
  return EMAIL_RE.test(text) || PHONE_RE.test(text.replace(/[\s\-.()+]/g, ""));
}

const DECLINE_WORDS = ["no", "nope", "skip", "later", "not now", "na", "nah", "cancel", "pass"];

function isDecline(text) {
  const t = text.toLowerCase().trim().replace(/[.!?]$/, "");
  return DECLINE_WORDS.includes(t);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const BotHeader = memo(function BotHeader({ onClose }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255,70,85,.2)",
        background: "rgba(2,6,14,.7)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#00ff64",
          boxShadow: "0 0 8px #00ff64",
          animation: "pulse-g 2s infinite",
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: "var(--white)",
          }}
        >
          NEXUS-AI
        </div>
        <div
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9,
            color: "var(--red)",
            letterSpacing: 2,
          }}
        >
          PORTFOLIO ASSISTANT // ONLINE
        </div>
      </div>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "1px solid rgba(255,70,85,.3)",
          color: "var(--red)",
          width: 28,
          height: 28,
          cursor: "pointer",
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background .2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,70,85,.12)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
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
      style={{
        display: "flex",
        gap: 5,
        alignItems: "center",
        padding: "14px 14px",
      }}
    >
      {TYPING_DELAYS.map((delay) => (
        <span
          key={delay}
          className="typing-dot"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
});

const QuickPrompts = memo(function QuickPrompts({ onSelect }) {
  return (
    <div
      style={{
        padding: "8px 14px 6px",
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        borderTop: "1px solid rgba(42,58,80,.3)",
        flexShrink: 0,
        background: "rgba(2,6,14,.3)",
      }}
    >
      <div
        style={{
          width: "100%",
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 8,
          color: "var(--text-dim)",
          letterSpacing: 1.5,
          marginBottom: 4,
        }}
      >
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

// ─── BotMessage ───────────────────────────────────────────────────────────────

const BotMessage = memo(function BotMessage({ msg, onSpeak }) {
  const [speaking, setSpeaking] = useState(false);

  const handleClick = useCallback(() => {
    if (msg.role !== "bot") return;
    sfxClick();

    if (speaking) {
      window.speechSynthesis?.cancel();
      setSpeaking(false);
      return;
    }

    setSpeaking(true);
    onSpeak(msg.text, () => setSpeaking(false));
  }, [msg, speaking, onSpeak]);

  // Render bold markers (**text**) in bot messages
  const renderText = (text) => {
    if (!text.includes("**")) return text;
    return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} style={{ color: "var(--white)", fontWeight: 600 }}>
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`msg msg-${msg.role}`}
      onClick={handleClick}
      title={
        msg.role === "bot"
          ? speaking
            ? "🔇 Click to stop"
            : "🔊 Click to hear"
          : ""
      }
      style={{
        cursor: msg.role === "bot" ? "pointer" : "default",
        boxShadow: speaking ? "0 0 10px rgba(0,212,255,.25)" : undefined,
        borderColor: speaking ? "rgba(0,212,255,.4)" : undefined,
        transition: "box-shadow .2s, border-color .2s",
      }}
    >
      {msg.role === "bot" ? renderText(msg.text) : msg.text}
      {speaking && (
        <span
          style={{
            display: "inline-block",
            marginLeft: 6,
            fontSize: "0.7em",
            color: "var(--cyan)",
            animation: "blink .55s infinite",
          }}
        >
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
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [awaitingContact, setAwaitingContact] = useState(false);

  const pendingQuestionRef = useRef("");
  const msgsContainerRef = useRef(null);
  const inputRef = useRef(null);
  const { muted } = useSound();

  // Scroll so the start of the latest bot reply is visible
  useEffect(() => {
    if (!msgsContainerRef.current) return;
    const container = msgsContainerRef.current;

    if (loading) {
      container.scrollTop = container.scrollHeight;
      return;
    }

    const allMsgs = container.querySelectorAll(".msg-bot");
    if (allMsgs.length > 0) {
      const lastBot = allMsgs[allMsgs.length - 1];
      const offsetTop = lastBot.offsetTop - 12;
      container.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      const id = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(id);
    }
  }, [open]);

  // Cleanup on unmount
  useEffect(
    () => () => {
      window.speechSynthesis?.cancel();
    },
    [],
  );

  const handleToggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) sfxTransmission();
      else {
        sfxClick();
        window.speechSynthesis?.cancel();
      }
      return next;
    });
  }, []);

  const addBotMsg = useCallback((text) => {
    setMessages((prev) => [...prev, { role: "bot", text }]);
  }, []);

  const handleSend = useCallback(
    (text) => {
      const query = (text ?? input).trim();
      if (!query || loading) return;

      sfxClick();
      setInput("");
      setMessages((prev) => [...prev, { role: "user", text: query }]);
      setLoading(true);

      // ── Contact-collection mode ──────────────────────────────────────────
      if (awaitingContact) {
        const delay = 500 + Math.random() * 200;
        setTimeout(() => {
          let response;

          if (isContactInfo(query)) {
            logContactInfo(query, pendingQuestionRef.current);
            response =
              "Noted ✓ I've passed your contact to Nikunj — he'll be in touch soon.\n\nYou can also reach him directly at nikunjpatel1581996@gmail.com or on LinkedIn at linkedin.com/in/nikunj-patel-dev.";
          } else if (isDecline(query)) {
            response =
              "No problem! You can reach Nikunj directly at nikunjpatel1581996@gmail.com or on LinkedIn at linkedin.com/in/nikunj-patel-dev.";
          } else {
            // Treat as a new question — exit contact mode
            setAwaitingContact(false);
            const { response: botResponse, isFallback } = getBotResponse(query);
            addBotMsg(botResponse);
            if (isFallback) logUnansweredQuestion(query);
            setLoading(false);
            return;
          }

          setAwaitingContact(false);
          addBotMsg(response);
          setLoading(false);
        }, delay);
        return;
      }

      // ── Normal processing ────────────────────────────────────────────────
      const delay = RESPONSE_DELAY_MIN + Math.random() * RESPONSE_DELAY_JITTER;
      setTimeout(async () => {
        const { response, isFallback } = getBotResponse(query);
        addBotMsg(response);

        if (!muted) {
          const wordCount = Math.min(response.split(" ").length, 20);
          for (let i = 0; i < wordCount; i++) {
            setTimeout(sfxTyping, i * 50 + 180);
          }
        }

        if (isFallback) {
          await logUnansweredQuestion(query);
          pendingQuestionRef.current = query;

          // Follow-up: notify visitor and ask for contact
          setTimeout(() => {
            addBotMsg(CONTACT_ASK_MSG);
            setAwaitingContact(true);
            setLoading(false);
          }, 900);
        } else {
          setLoading(false);
        }
      }, delay);
    },
    [awaitingContact, addBotMsg, input, loading, muted],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      } else {
        sfxTyping();
      }
    },
    [handleSend],
  );

  const handleInputChange = useCallback((e) => setInput(e.target.value), []);

  const handleSpeak = useCallback((text, onDone) => {
    window.speechSynthesis?.cancel();
    import("../audio/engine").then(({ speakWithCallbacks }) => {
      speakWithCallbacks(text, {
        onEnd: onDone,
        onError: onDone,
      });
    });
  }, []);

  const showQuickPrompts = messages.length <= 2;

  return (
    <>
      {open && (
        <div className="bot-panel">
          <BotHeader onClose={handleToggle} />

          <div className="bot-msgs" ref={msgsContainerRef}>
            {messages.map((msg, i) => (
              <BotMessage key={i} msg={msg} onSpeak={handleSpeak} />
            ))}
            {loading && <TypingIndicator />}
          </div>

          {showQuickPrompts && !awaitingContact && (
            <QuickPrompts onSelect={handleSend} />
          )}

          {/* Contact-awaiting hint */}
          {awaitingContact && (
            <div
              style={{
                padding: "8px 14px",
                borderTop: "1px solid rgba(0,212,255,.15)",
                background: "rgba(0,212,255,.04)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--cyan)",
                  boxShadow: "0 0 6px var(--cyan)",
                  animation: "pulse-g 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 9,
                  color: "var(--cyan)",
                  letterSpacing: 1,
                }}
              >
                AWAITING CONTACT INFO
              </span>
            </div>
          )}

          <div className="bot-input-row">
            <input
              ref={inputRef}
              className="bot-input"
              placeholder={
                awaitingContact
                  ? "Enter your email or phone..."
                  : "Ask something about Nikunj..."
              }
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
          <span
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "'Share Tech Mono',monospace",
            }}
          >
            ✕
          </span>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
              fill="white"
              opacity=".92"
            />
            <circle cx="8" cy="11" r="1.3" fill="#ff4655" />
            <circle cx="12" cy="11" r="1.3" fill="#ff4655" />
            <circle cx="16" cy="11" r="1.3" fill="#ff4655" />
          </svg>
        )}
      </button>
    </>
  );
}
