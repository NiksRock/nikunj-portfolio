import { sfxCard } from '../audio/engine';
import { HERO_STATS, TYPEWRITER_ITEMS } from '../data';
import { Brackets, MagBtn, Reveal, SpeakText, Typewriter } from '../components/primitives';

function HeroCard() {
  return (
    <div className="card" style={{
      width: 272, height: 390,
      border: '1px solid rgba(255,70,85,0.3)',
      background: 'transparent',
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,70,85,0.08)',
    }}>
      <Brackets color="var(--red)" />

      {/* Profile image */}
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

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(255,70,85,0.18) 0%, rgba(7,13,22,0.75) 45%, rgba(7,13,22,0.97) 80%, var(--surface) 100%)',
        zIndex: 1,
      }} />

      {/* Scanline */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Crosshair */}
      <svg
        style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.1, zIndex: 3 }}
        width={90} height={90} viewBox="0 0 90 90"
      >
        <line x1="45" y1="0"  x2="45" y2="32" stroke="#ff4655" strokeWidth="1.5" />
        <line x1="45" y1="58" x2="45" y2="90" stroke="#ff4655" strokeWidth="1.5" />
        <line x1="0"  y1="45" x2="32" y2="45" stroke="#ff4655" strokeWidth="1.5" />
        <line x1="58" y1="45" x2="90" y2="45" stroke="#ff4655" strokeWidth="1.5" />
        <circle cx="45" cy="45" r="10" fill="none" stroke="#ff4655" strokeWidth="1" />
      </svg>

      {/* Card bottom info */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px', zIndex: 4 }}>
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--red)', letterSpacing: 2, marginBottom: 2,
        }}>
          // AGENT ID
        </div>
        <div style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700, fontSize: 19, color: 'var(--white)',
          lineHeight: 1, marginBottom: 2,
        }}>
          NIKUNJ PATEL
        </div>
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--gold)', marginBottom: 12,
        }}>
          RANK: SDE-3 // STAR HEALTH
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {['REACT', 'NEXT.JS', 'MFE', 'AWS'].map((tag) => (
            <span key={tag} onMouseEnter={sfxCard} style={{
              fontFamily: "'Share Tech Mono',monospace", fontSize: 9,
              color: 'var(--red)', border: '1px solid rgba(255,70,85,0.35)',
              padding: '2px 7px', background: 'rgba(255,70,85,0.07)',
              clipPath: 'var(--clip-sm)', cursor: 'default',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Status badge */}
      <div style={{
        position: 'absolute', top: 13, right: 13,
        background: 'rgba(0,212,255,0.12)',
        border: '1px solid var(--cyan)',
        padding: '4px 9px', zIndex: 5,
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 9, color: 'var(--cyan)', letterSpacing: 1,
        animation: 'floatY 2.5s ease-in-out infinite alternate',
        clipPath: 'var(--clip-sm)',
      }}>
        ⚡ OPEN TO DEPLOY
      </div>

      {/* 600K badge */}
      <div style={{
        position: 'absolute', bottom: 140, right: -1,
        border: '1px solid var(--gold)', borderRight: 'none',
        padding: '7px 11px', zIndex: 5,
        animation: 'floatY 3s ease-in-out infinite alternate-reverse',
        background: 'rgba(7,13,22,0.9)',
      }}>
        <div style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700, fontSize: 22, color: 'var(--gold)',
          lineHeight: 1,
        }}>5M+</div>
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--muted-bright)',
        }}>MONTHLY</div>
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <Reveal delay={380}>
      <div className="hero-stats">
        {HERO_STATS.map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              borderRight: i < HERO_STATS.length - 1 ? '1px solid rgba(42,58,80,0.4)' : 'none',
            }}
          >
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700, fontSize: 28,
              color: 'var(--red)', lineHeight: 1, marginBottom: 2,
            }}>
              {value}
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: 'var(--muted-bright)',
              letterSpacing: 1.2,
            }}>
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
    <section className="hero-wrap">
      {/* Text content */}
      <div style={{ flex: '1 1 420px' }}>
        {/* Status indicator */}
        <Reveal>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20,
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 0 0 rgba(0,255,100,0.5)',
              animation: 'pulse-g 2s infinite',
            }} />
            <span style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 11, color: 'var(--green)', letterSpacing: 2,
            }}>
              OPERATIVE STATUS: ACTIVE
            </span>
          </div>
        </Reveal>

        {/* Location tag */}
        <Reveal delay={100}>
          <div style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 11, color: 'var(--muted-bright)',
            letterSpacing: 3, marginBottom: 8,
          }}>
            // AGENT PROFILE — PUNE, INDIA
          </div>
        </Reveal>

        {/* Name glitch */}
        <Reveal delay={160}>
          <h1 style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700, lineHeight: 0.9,
            userSelect: 'none',
          }}>
            <div style={{
              fontSize: 'clamp(64px,9vw,108px)',
              color: 'var(--white)',
              position: 'relative', display: 'inline-block',
            }}>
              NIKUNJ
              <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, color: 'var(--cyan)', animation: 'glitch1 9s infinite', pointerEvents: 'none' }}>NIKUNJ</span>
              <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, animation: 'glitch2 9s infinite 1s', pointerEvents: 'none' }}>NIKUNJ</span>
            </div>
            <br />
            <span style={{
              fontSize: 'clamp(64px,9vw,108px)',
              color: 'var(--red)',
              textShadow: '0 0 32px rgba(255,70,85,0.5), 0 0 64px rgba(255,70,85,0.2)',
            }}>
              PATEL
            </span>
          </h1>
        </Reveal>

        {/* Typewriter role */}
        <Reveal delay={220}>
          <div style={{
            fontSize: 19, marginTop: 14, marginBottom: 18,
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 500, minHeight: 30,
          }}>
            <Typewriter items={TYPEWRITER_ITEMS} />
          </div>
        </Reveal>

        {/* Summary */}
        <Reveal delay={280}>
          <SpeakText tag="p" style={{
            maxWidth: 500, lineHeight: 1.8,
            color: 'var(--text-body)',
            marginBottom: 32, fontSize: 15.5,
            display: 'block',
          }}>
            Senior Frontend Engineer with 7 years of experience building workflow UIs, shared component ecosystems,
            and micro-frontend platforms across insurance, healthcare, and e-commerce. Core stack: React, TypeScript,
            Next.js, and Webpack Module Federation.
          </SpeakText>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={330}>
          <div className="hero-btns" style={{
            display: 'flex', gap: 12,
            flexWrap: 'wrap', marginBottom: 32,
            alignItems: 'center',
          }}>
            <MagBtn variant="red"   href="#missions">VIEW MISSIONS</MagBtn>
            <MagBtn variant="cyan"  href="#record">FIELD RECORD</MagBtn>
            <MagBtn variant="ghost" href="#contact">OPEN COMMS</MagBtn>
          </div>
        </Reveal>

        {/* Sound hint */}
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

      {/* Profile card */}
      <Reveal delay={250} style={{ flexShrink: 0 }} className="hero-card-wrap">
        <HeroCard />
      </Reveal>
    </section>
  );
}