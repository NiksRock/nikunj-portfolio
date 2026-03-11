import { memo, useCallback } from 'react';
import { sfxBtn, sfxClick } from '../audio/engine';
import { useSound } from '../audio/SoundContext';
import { useScrolled } from '../hooks';
import { NAV_LINKS } from '../data';
import { MagBtn } from '../components/primitives';

// ─── Sound Toggle Button ──────────────────────────────────────────────────────

const SoundToggle = memo(function SoundToggle({ muted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={muted ? 'Unmute interaction sounds & voice' : 'Mute all sounds'}
      style={{
        background: 'none',
        border: '1px solid',
        borderColor: muted ? 'rgba(42,58,80,.5)' : 'rgba(255,70,85,.4)',
        color: muted ? 'var(--muted)' : 'var(--red)',
        width: 32, height: 32,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        clipPath: 'var(--clip-sm)',
        transition: 'all .2s',
      }}
    >
      {muted ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </button>
  );
});

// ─── Nav link — isolated to prevent full nav re-render on hover ───────────────

const NavLink = memo(function NavLink({ label, href,download=false }) {
  const handleMouseOver = useCallback((e) => {
    e.target.style.color = 'var(--white)';
    e.target.style.textShadow = '0 0 12px var(--red)';
  }, []);

  const handleMouseOut = useCallback((e) => {
    e.target.style.color = 'var(--muted)';
    e.target.style.textShadow = 'none';
  }, []);

  return (
    <a
      href={href}
      download={download}
      onMouseEnter={sfxBtn}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 11, color: 'var(--muted)',
        textDecoration: 'none', letterSpacing: 1.5,
        transition: 'color .2s, text-shadow .2s',
      }}
    >
      {label}
    </a>
  );
});

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const Nav = memo(function Nav({ scrollProgress }) {
  const scrolled = useScrolled(20);
  const { muted, toggle } = useSound();

  const handleToggle = useCallback(() => {
    sfxClick();
    toggle();
  }, [toggle]);

  return (
    <>
      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: 3,
        background: 'linear-gradient(90deg, var(--red), var(--cyan))',
        boxShadow: '0 0 12px var(--cyan)',
        zIndex: 9999,
        width: `${scrollProgress}%`,
        transition: 'width .1s linear',
      }} />

      <nav
        className="nav-inner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 60,
          display: 'flex', alignItems: 'center',
          padding: '0 40px', gap: 28,
          zIndex: 1000,
          background: scrolled ? 'rgba(7,13,22,.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,70,85,.25)' : '1px solid transparent',
          transition: 'all .3s',
        }}
      >
        {/* Logo mark */}
        <div style={{
          width: 34, height: 34,
          background: 'var(--red)',
          flexShrink: 0,
          clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700, fontSize: 13, color: '#fff',
        }}>
          NP
        </div>

        {/* Name + role */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 17, color: 'var(--white)', lineHeight: 1 }}>
            NIKUNJ PATEL
          </div>
          <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--red)', letterSpacing: 2 }}>
            SDE-3 // PUNE, INDIA
          </div>
        </div>

        {/* Nav links */}
        <div className="nav-links" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink key={label} label={label} href={href} />
          ))}
       <NavLink key={"CV"} label={"Agent File"} href={"/Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf"}  
              download="Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf"/>
          <SoundToggle muted={muted} onToggle={handleToggle} />
        </div>
        <MagBtn variant="red" href="#contact">DEPLOY ME</MagBtn>
      </nav>
    </>
  );
});
