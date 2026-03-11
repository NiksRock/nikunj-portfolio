import { useRef, useState } from 'react';
import { sfxBtn, sfxClick, speakWithCallbacks } from '../audio/engine';
import { useReveal, useSkillBarReveal, useTypewriter } from '../hooks';
import { useSound } from '../audio/SoundContext';

// ─── Brackets ─────────────────────────────────────────────────────────────────
/**
 * Decorative corner brackets placed absolutely inside a `position:relative` parent.
 */
export function Brackets({ color = 'var(--red)' }) {
  const base = { position: 'absolute', width: 13, height: 13, zIndex: 10, borderColor: color };
  const corners = {
    tl: { ...base, top: 0, left: 0,  borderTop: '2px solid',    borderLeft: '2px solid' },
    tr: { ...base, top: 0, right: 0, borderTop: '2px solid',    borderRight: '2px solid' },
    bl: { ...base, bottom: 0, left: 0,  borderBottom: '2px solid', borderLeft: '2px solid' },
    br: { ...base, bottom: 0, right: 0, borderBottom: '2px solid', borderRight: '2px solid' },
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
/**
 * Wraps children in a div that animates in when it enters the viewport.
 */
export function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}

// ─── MagBtn ───────────────────────────────────────────────────────────────────
/**
 * Magnetic button — follows the cursor slightly on hover.
 * Plays sound effects on hover and click.
 */
export function MagBtn({ children, variant = 'red', onClick, href, style = {} }) {
  const ref = useRef(null);
  const Tag = href ? 'a' : 'button';

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(
      ${(e.clientX - rect.left - rect.width / 2) * 0.25}px,
      ${(e.clientY - rect.top - rect.height / 2) * 0.25}px
    )`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = '';
  };

  const handleClick = (e) => {
    sfxClick();
    onClick?.(e);
  };

  return (
    <Tag
      ref={ref}
      className={`btn btn-${variant}`}
      onMouseEnter={sfxBtn}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      href={href}
      style={style}
    >
      {children}
    </Tag>
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
/**
 * Animated typewriter that cycles through a string array.
 */
export function Typewriter({ items }) {
  const text = useTypewriter(items);
  return (
    <span style={{ fontFamily: "'Share Tech Mono',monospace", color: 'var(--cyan)' }}>
      {text}
      <span style={{
        display: 'inline-block',
        width: 2, height: '1em',
        background: 'var(--cyan)',
        marginLeft: 3,
        verticalAlign: 'middle',
        animation: 'blink .8s infinite',
      }} />
    </span>
  );
}

// ─── SkillBar ─────────────────────────────────────────────────────────────────
/**
 * Animated progress bar that fills to `level`% when scrolled into view.
 */
export function SkillBar({ label, level, delay = 0 }) {
  const barRef = useSkillBarReveal(level, delay);
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: 'var(--muted)', letterSpacing: 1 }}>
          {label}
        </span>
        <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: 'var(--red)' }}>
          {level}%
        </span>
      </div>
      <div style={{ height: 3, background: 'rgba(42,58,80,.5)' }}>
        <div ref={barRef} className="sk-bar" />
      </div>
    </div>
  );
}

// ─── SectionHead ──────────────────────────────────────────────────────────────
/**
 * Consistent section heading with sub-label, decorative divider, and title.
 */
export function SectionHead({ sub, title }) {
  return (
    <Reveal>
      <div style={{
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 11, color: 'var(--red)', letterSpacing: 3,
        marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ display: 'inline-block', width: 3, height: 16, background: 'var(--red)' }} />
        {sub}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 10px' }}>
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg,var(--red),transparent)' }} />
        <div style={{ width: 5, height: 5, background: 'var(--red)', transform: 'rotate(45deg)' }} />
        <div style={{ height: 1, width: 36, background: 'rgba(255,70,85,.25)' }} />
      </div>
      <div style={{
        fontFamily: "'Rajdhani',sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(36px,4vw,52px)',
        color: 'var(--white)',
        lineHeight: 1,
        marginBottom: 48,
      }}>
        {title}
      </div>
    </Reveal>
  );
}

// ─── SpeakText ────────────────────────────────────────────────────────────────
/**
 * Wraps a text node; clicking it reads the text aloud via Web Speech API
 * with a subtle active-state indicator.
 */
export function SpeakText({ children, style = {}, tag: Tag = 'span' }) {
  const { muted } = useSound();
  const [active, setActive] = useState(false);
  const text = typeof children === 'string' ? children : '';

  const handleClick = (e) => {
    e.stopPropagation();
    if (!text || muted) return;
    sfxClick();
    setActive(true);
    speakWithCallbacks(text, {
      onEnd: () => setActive(false),
      onError: () => setActive(false),
    });
  };

  return (
    <Tag
      onClick={handleClick}
      title={muted ? '' : '🔊 Click to hear'}
      style={{
        cursor: text && !muted ? 'pointer' : 'inherit',
        borderBottom: active ? '1px solid var(--cyan)' : '1px solid transparent',
        color: active ? 'var(--cyan)' : 'inherit',
        transition: 'color .2s, border-color .2s',
        ...style,
      }}
    >
      {children}
      {active && (
        <span style={{
          marginLeft: 5,
          fontSize: '0.7em',
          color: 'var(--cyan)',
          animation: 'blink .55s infinite',
        }}>
          ▶
        </span>
      )}
    </Tag>
  );
}
