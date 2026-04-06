import { memo, useCallback, useEffect, useState } from 'react';
import { sfxBtn, sfxClick } from '../audio/engine';
import { useSound } from '../audio/SoundContext';
import { useScrolled } from '../hooks';
import { NAV_LINKS } from '../data';
import { MagBtn } from '../components/primitives';

// ─── Sound Toggle ─────────────────────────────────────────────────────────────
const SoundToggle = memo(function SoundToggle({ muted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={muted ? 'Unmute interaction sounds & voice' : 'Mute all sounds'}
      aria-label={muted ? 'Unmute' : 'Mute'}
      style={{
        background: 'none',
        border: '1px solid',
        borderColor: muted ? 'rgba(42,58,80,0.5)' : 'rgba(255,70,85,0.4)',
        color: muted ? 'var(--muted-bright)' : 'var(--red)',
        width: 32, height: 32,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        clipPath: 'var(--clip-sm)',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        if (!muted) e.currentTarget.style.background = 'rgba(255,70,85,0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'none';
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

// ─── Nav link ─────────────────────────────────────────────────────────────────
const NavLink = memo(function NavLink({ label, href, download = false, isActive = false }) {
  return (
    <a
      href={href}
      download={download || undefined}
      onMouseEnter={sfxBtn}
      className={isActive ? 'nav-link-active' : ''}
      style={{
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 11,
        color: isActive ? 'var(--white)' : 'var(--muted-bright)',
        textDecoration: 'none',
        letterSpacing: 1.5,
        transition: 'color 0.2s, text-shadow 0.2s',
        position: 'relative',
        whiteSpace: 'nowrap',
        textShadow: isActive ? '0 0 14px rgba(255,70,85,0.8)' : 'none',
      }}
      onMouseOver={e => {
        if (!isActive) {
          e.currentTarget.style.color = 'var(--white)';
          e.currentTarget.style.textShadow = '0 0 12px var(--red)';
        }
      }}
      onMouseOut={e => {
        if (!isActive) {
          e.currentTarget.style.color = 'var(--muted-bright)';
          e.currentTarget.style.textShadow = 'none';
        }
      }}
    >
      {label}
    </a>
  );
});

// ─── Mobile menu ──────────────────────────────────────────────────────────────
const MobileMenu = memo(function MobileMenu({ isOpen, onClose, muted, onToggleSound }) {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: 'fixed', inset: 0, top: 60,
        background: 'rgba(2,4,8,0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 999,
        display: 'flex', flexDirection: 'column',
        padding: '32px 24px',
        gap: 0,
        animation: 'menuWipe 0.3s cubic-bezier(0.22, 0.68, 0, 1.05) forwards',
        borderTop: '1px solid rgba(255,70,85,0.2)',
      }}
      onClick={onClose}
    >
      {[...NAV_LINKS, { label: 'AGENT FILE', href: '/Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf', download: true }].map(({ label, href, download }, i) => (
        <a
          key={label}
          href={href}
          download={download || undefined}
          onClick={onClose}
          style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 14, color: 'var(--text-primary)',
            textDecoration: 'none', letterSpacing: 2,
            padding: '18px 0',
            borderBottom: '1px solid rgba(42,58,80,0.3)',
            display: 'flex', alignItems: 'center', gap: 14,
            opacity: 0,
            animation: `revealUp 0.3s cubic-bezier(0.22,0.68,0,1.05) ${i * 60}ms forwards`,
          }}
        >
          <span style={{ color: 'var(--red)', fontSize: 10 }}>▸</span>
          {label}
        </a>
      ))}

      <div style={{
        marginTop: 'auto', paddingTop: 28,
        display: 'flex', gap: 12, alignItems: 'center',
        opacity: 0,
        animation: 'revealUp 0.3s cubic-bezier(0.22,0.68,0,1.05) 320ms forwards',
      }}>
        <a
          href="#contact"
          onClick={onClose}
          className="btn btn-red"
          style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
        >
          DEPLOY ME
        </a>
        <SoundToggle muted={muted} onToggle={onToggleSound} />
      </div>
    </div>
  );
});

// ─── Nav ──────────────────────────────────────────────────────────────────────
export const Nav = memo(function Nav({ scrollProgress }) {
  const scrolled = useScrolled(20);
  const { muted, toggle } = useSound();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track which section is in viewport
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: '-60px 0px -30% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleToggleSound = useCallback(() => {
    sfxClick();
    toggle();
  }, [toggle]);

  const handleMenuToggle = useCallback(() => {
    sfxClick();
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: 3,
        background: 'linear-gradient(90deg, var(--red), var(--cyan))',
        boxShadow: '0 0 10px var(--cyan)',
        zIndex: 9999,
        width: `${scrollProgress}%`,
        transition: 'width 0.1s linear',
      }} />

      {/* Nav bar */}
      <nav
        className="nav-inner"
        style={{
          background: scrolled ? 'rgba(7,13,22,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,70,85,0.2)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 0 rgba(255,70,85,0.08), 0 4px 20px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        {/* Logo mark */}
        <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34,
            background: 'var(--red)',
            clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700, fontSize: 13, color: '#fff',
            boxShadow: '0 0 16px rgba(255,70,85,0.4)',
            transition: 'box-shadow 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(255,70,85,0.7)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(255,70,85,0.4)'}
          >
            NP
          </div>
        </a>

        {/* Name + role */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700, fontSize: 17,
            color: 'var(--white)', lineHeight: 1,
          }}>
            NIKUNJ PATEL
          </div>
          <div style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9, color: 'var(--red)',
            letterSpacing: 2,
          }}>
            SDE-3 // PUNE, INDIA
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={label}
              label={label}
              href={href}
              isActive={activeSection === href.slice(1)}
            />
          ))}
          <NavLink
            label="AGENT FILE"
            href="/Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf"
            download="Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf"
          />
          <SoundToggle muted={muted} onToggle={handleToggleSound} />
        </div>

        {/* Desktop CTA */}
        <div className="nav-links">
          <MagBtn variant="red" href="#contact">DEPLOY ME</MagBtn>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid rgba(255,70,85,0.4)',
            color: 'var(--red)',
            width: 36, height: 36,
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            clipPath: 'var(--clip-sm)',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,70,85,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="1" y1="1" x2="15" y2="13" />
                <line x1="15" y1="1" x2="1" y2="13" />
              </>
            ) : (
              <>
                <line x1="1" y1="2"  x2="15" y2="2"  />
                <line x1="1" y1="7"  x2="15" y2="7"  />
                <line x1="1" y1="12" x2="15" y2="12" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        muted={muted}
        onToggleSound={handleToggleSound}
      />
    </>
  );
});
