import { sfxCard } from '../audio/engine';
import { HERO_STATS, TYPEWRITER_ITEMS } from '../data';
import { Brackets, MagBtn, Reveal, SpeakText, Typewriter } from '../components/primitives';

function HeroCard() {
  return (
    <div className="card" style={{
      width: 272, height: 390,
      border: '1px solid rgba(255,70,85,.3)',
      background: 'transparent',
      position: 'relative', overflow: 'hidden',
    }}>
      <Brackets color="var(--red)" />

      <img
        src="./profile.png"
        alt="Nikunj Patel"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top center',
          filter: 'saturate(0.5) contrast(1.2)',
          zIndex: 0,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(255,70,85,.18) 0%, rgba(7,13,22,.75) 45%, rgba(7,13,22,.97) 80%, var(--surface) 100%)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.07) 3px, rgba(0,0,0,.07) 4px)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <svg
        style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%,-50%)', opacity: .1, zIndex: 3 }}
        width={90} height={90} viewBox="0 0 90 90"
      >
        <line x1="45" y1="0"  x2="45" y2="32" stroke="#ff4655" strokeWidth="1.5" />
        <line x1="45" y1="58" x2="45" y2="90" stroke="#ff4655" strokeWidth="1.5" />
        <line x1="0"  y1="45" x2="32" y2="45" stroke="#ff4655" strokeWidth="1.5" />
        <line x1="58" y1="45" x2="90" y2="45" stroke="#ff4655" strokeWidth="1.5" />
        <circle cx="45" cy="45" r="10" fill="none" stroke="#ff4655" strokeWidth="1" />
      </svg>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px', zIndex: 4 }}>
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--red)', letterSpacing: 2 }}>
          // AGENT ID
        </div>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 19, color: 'var(--white)' }}>
          NIKUNJ PATEL
        </div>
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--gold)', marginBottom: 10 }}>
          RANK: SDE-3 // STAR HEALTH
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {['REACT', 'NEXT.JS', 'MFE', 'AWS'].map((tag) => (
            <span key={tag} onMouseEnter={sfxCard} style={{
              fontFamily: "'Share Tech Mono',monospace", fontSize: 9,
              color: 'var(--red)', border: '1px solid rgba(255,70,85,.35)',
              padding: '2px 7px', background: 'rgba(255,70,85,.07)',
              clipPath: 'var(--clip-sm)', cursor: 'default',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', top: 13, right: 13,
        background: 'rgba(0,212,255,.14)', border: '1px solid var(--cyan)',
        padding: '4px 9px', zIndex: 5,
        fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--cyan)', letterSpacing: 1,
        animation: 'floatY 2.5s ease-in-out infinite alternate',
        clipPath: 'var(--clip-sm)',
      }}>
        ⚡ OPEN TO DEPLOY
      </div>

      <div style={{
        position: 'absolute', bottom: 146, right: -1,
        // background: 'rgba(2,4,8,.92)', 
        border: '1px solid var(--gold)', borderRight: 'none',
        padding: '7px 11px', zIndex: 5,
        animation: 'floatY 3s ease-in-out infinite alternate-reverse',
      }}>
        <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 22, color: 'var(--gold)' }}>600K</div>
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--muted-bright)' }}>USERS</div>
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <Reveal delay={380}>
      <div className="hero-stats" style={{
        display: 'flex',
        borderTop: '1px solid rgba(42,58,80,.5)',
        paddingTop: 24, marginTop: 16,
      }}>
        {HERO_STATS.map(({ value, label }, i) => (
          <div key={label} style={{
            flex: 1, padding: '0 12px',
            borderRight: i < HERO_STATS.length - 1 ? '1px solid rgba(42,58,80,.4)' : 'none',
          }}>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 28, color: 'var(--red)' }}>
              {value}
            </div>
            {/* Improved: was var(--muted) — now muted-bright */}
            <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--muted-bright)', letterSpacing: 1.2 }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section className="hero-wrap" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '80px 60px 60px', maxWidth: 1280, margin: '0 auto',
      gap: 60, flexWrap: 'wrap',
    }}>
      <div style={{ flex: '1 1 420px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#00ff64', boxShadow: '0 0 0 0 rgba(0,255,100,.5)',
              animation: 'pulse-g 2s infinite',
            }} />
            <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: '#00ff64', letterSpacing: 2 }}>
              OPERATIVE STATUS: ACTIVE
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: 'var(--muted-bright)', letterSpacing: 3, marginBottom: 8 }}>
            // AGENT PROFILE — PUNE, INDIA
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h1 style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, lineHeight: .9, userSelect: 'none' }}>
            <div style={{ fontSize: 'clamp(64px,9vw,108px)', color: 'var(--white)', position: 'relative', display: 'inline-block' }}>
              NIKUNJ
              <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, color: 'var(--cyan)', animation: 'glitch1 9s infinite', pointerEvents: 'none' }}>NIKUNJ</span>
              <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, animation: 'glitch2 9s infinite 1s', pointerEvents: 'none' }}>NIKUNJ</span>
            </div>
            <br />
            <span style={{ fontSize: 'clamp(64px,9vw,108px)', color: 'var(--red)', textShadow: '0 0 32px rgba(255,70,85,.5), 0 0 64px rgba(255,70,85,.2)' }}>
              PATEL
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <div style={{ fontSize: 19, marginTop: 14, marginBottom: 18, fontFamily: "'Rajdhani',sans-serif", fontWeight: 500, minHeight: 30 }}>
            <Typewriter items={TYPEWRITER_ITEMS} />
          </div>
        </Reveal>

        <Reveal delay={280}>
          {/* Improved: was rgba(232,240,255,.68) — now text-body for better legibility */}
          <SpeakText tag="p" style={{
            maxWidth: 500, lineHeight: 1.8, color: 'var(--text-body)',
            marginBottom: 32, fontSize: 15.5, display: 'block',
          }}>
            Senior Frontend Engineer with 7 years architecting scalable, enterprise-grade web platforms.
            Specialist in micro-frontend architecture with Webpack Module Federation, React and Next.js ecosystems,
            and cloud-native frontend delivery on AWS.
          </SpeakText>
        </Reveal>

        <Reveal delay={330}>
          <div className="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <MagBtn variant="red"   href="#missions">VIEW MISSIONS</MagBtn>
            <MagBtn variant="cyan"  href="#record">FIELD RECORD</MagBtn>
            <MagBtn variant="ghost" href="#contact">OPEN COMMS</MagBtn>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="sound-hint">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            CLICK ANY PARAGRAPH TO HEAR IT READ ALOUD
          </div>
        </Reveal>

        <HeroStats />
      </div>

      <Reveal delay={250} style={{ flexShrink: 0 }} className="hero-card-wrap">
        <HeroCard />
      </Reveal>
    </section>
  );
}
