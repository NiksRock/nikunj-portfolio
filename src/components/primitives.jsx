import { useRef, useState } from 'react';
import { sfxBtn, sfxClick, speakWithCallbacks } from '../audio/engine';
import { useReveal, useSkillBarReveal, useTypewriter } from '../hooks';
import { useSound } from '../audio/SoundContext';

// ─── Brackets ─────────────────────────────────────────────────────────────────
export function Brackets({ color = 'var(--red)' }) {
  const base = { position: 'absolute', width: 13, height: 13, zIndex: 10, borderColor: color };
  const corners = {
    tl: { ...base, top: 0,    left: 0,   borderTop: '2px solid', borderLeft: '2px solid' },
    tr: { ...base, top: 0,    right: 0,  borderTop: '2px solid', borderRight: '2px solid' },
    bl: { ...base, bottom: 0, left: 0,   borderBottom: '2px solid', borderLeft: '2px solid' },
    br: { ...base, bottom: 0, right: 0,  borderBottom: '2px solid', borderRight: '2px solid' },
  };
  return (
    <>
      <span style={corners.tl} />
      <span style={corners.tr} />
      <span style={corners.bl} />
      <span style={corners.br} />
    </>
  );
}

// ─── Reveal ───────────────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}

// ─── MagBtn ───────────────────────────────────────────────────────────────────
export function MagBtn({ children, variant = 'red', onClick, href, target, rel, style = {} }) {
  const ref = useRef(null);
  const Tag = href ? 'a' : 'button';

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(
      ${(e.clientX - rect.left - rect.width / 2) * 0.22}px,
      ${(e.clientY - rect.top - rect.height / 2) * 0.22}px
    )`;
  };

  return (
    <Tag
      ref={ref}
      className={`btn btn-${variant}`}
      onMouseEnter={sfxBtn}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { ref.current.style.transform = ''; }}
      onClick={(e) => { sfxClick(); onClick?.(e); }}
      href={href}
      target={target}
      rel={rel}
      style={style}
    >
      {children}
    </Tag>
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
export function Typewriter({ items }) {
  const text = useTypewriter(items);
  return (
    <span style={{ fontFamily: "'Share Tech Mono',monospace", color: 'var(--cyan)' }}>
      {text}
      <span style={{
        display: 'inline-block', width: 2, height: '1em',
        background: 'var(--cyan)', marginLeft: 3,
        verticalAlign: 'middle', animation: 'blink 0.8s infinite',
      }} />
    </span>
  );
}

// ─── SkillBar ─────────────────────────────────────────────────────────────────
export function SkillBar({ label, level, delay = 0 }) {
  const barRef = useSkillBarReveal(level, delay);
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
      }}>
        <span style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11, color: 'var(--muted-bright)',
          letterSpacing: 0.8,
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11, color: 'var(--red)',
          fontWeight: 600,
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: 3,
        background: 'rgba(42,58,80,0.4)',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <div ref={barRef} className="sk-bar" />
      </div>
    </div>
  );
}

// ─── SectionHead ──────────────────────────────────────────────────────────────
export function SectionHead({ sub, title }) {
  return (
    <Reveal>
      {/* Sub label */}
      <div style={{
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 11, color: 'var(--red)',
        letterSpacing: 3, marginBottom: 10,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{
          display: 'inline-block', width: 3, height: 16,
          background: 'var(--red)',
        }} />
        {sub}
      </div>

      {/* Decorative divider */}
      <div style={{
        display: 'flex', alignItems: 'center',
        gap: 12, margin: '0 0 12px',
      }}>
        <div style={{
          height: 1, flex: 1,
          background: 'linear-gradient(90deg,var(--red),transparent)',
        }} />
        <div style={{
          width: 5, height: 5,
          background: 'var(--red)',
          transform: 'rotate(45deg)',
        }} />
        <div style={{
          height: 1, width: 36,
          background: 'rgba(255,70,85,0.25)',
        }} />
      </div>

      {/* Section title */}
      <div style={{
        fontFamily: "'Rajdhani',sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(36px,4vw,52px)',
        color: 'var(--white)',
        lineHeight: 1,
        marginBottom: 52,
        letterSpacing: '-0.5px',
      }}>
        {title}
      </div>
    </Reveal>
  );
}

// ─── SpeakText ────────────────────────────────────────────────────────────────
export function SpeakText({ children, style = {}, tag: Tag = 'span' }) {
  const { muted } = useSound();
  const [active, setActive] = useState(false);
  const text = typeof children === 'string' ? children : '';

  const handleClick = (e) => {
    e.stopPropagation();
    if (!text || muted) return;

    if (active) {
      window.speechSynthesis?.cancel();
      setActive(false);
      return;
    }

    sfxClick();
    setActive(true);
    speakWithCallbacks(text, {
      onEnd:   () => setActive(false),
      onError: () => setActive(false),
    });
  };

  return (
    <Tag
      onClick={handleClick}
      title={muted ? '' : active ? '🔇 Click to stop' : '🔊 Click to hear'}
      style={{
        cursor: text && !muted ? 'pointer' : 'inherit',
        borderBottom: active ? '1px solid var(--cyan)' : '1px solid transparent',
        color: active ? 'var(--cyan)' : 'inherit',
        transition: 'color 0.2s, border-color 0.2s',
        ...style,
      }}
    >
      {children}
      {active && (
        <span style={{
          marginLeft: 6, fontSize: '0.72em',
          color: 'var(--cyan)', animation: 'blink 0.55s infinite',
          fontFamily: "'Share Tech Mono',monospace",
          letterSpacing: 1,
        }}>
          ■ STOP
        </span>
      )}
    </Tag>
  );
}