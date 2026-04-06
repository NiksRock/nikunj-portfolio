import { memo, useCallback, useState } from 'react';
import { sfxCard, sfxClick, sfxDeploy } from '../audio/engine';
import { PROJECTS } from '../data';
import { Brackets, Reveal, SectionHead, SpeakText } from '../components/primitives';

// ─── ProjectCard ──────────────────────────────────────────────────────────────
const ProjectCard = memo(function ProjectCard({ project, onOpen, featured = false }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(() => {
    sfxDeploy();
    onOpen(project);
  }, [project, onOpen]);

  return (
    <Reveal delay={0}>
      <div
        className={`card${featured ? ' proj-featured' : ''}`}
        onClick={handleClick}
        style={{
          border: `1px solid ${hovered ? project.color + '66' : 'rgba(42,58,80,0.5)'}`,
          boxShadow: hovered
            ? `0 20px 56px ${project.color}28, 0 6px 20px rgba(0,0,0,0.45)`
            : '0 2px 12px rgba(0,0,0,0.2)',
          transform: hovered ? 'translateY(-6px) scale(1.012)' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.22,0.68,0,1.1), box-shadow 0.25s, border-color 0.25s',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: featured ? 'row' : 'column',
        }}
        onMouseEnter={() => { sfxCard(); setHovered(true); }}
        onMouseLeave={() => setHovered(false)}
      >
        <Brackets color={project.color} />

        {/* Card header image area */}
        <div style={{
          height: featured ? '100%' : 160,
          minHeight: featured ? 180 : 'unset',
          width: featured ? '42%' : '100%',
          flexShrink: 0,
          background: project.bg,
          position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'flex-end',
          padding: '14px 18px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,4,8,0.35)' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
          }} />

          {/* Decorative diagonal lines */}
          <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.12 }} width={120} height={120} viewBox="0 0 120 120">
            <line x1="120" y1="0"  x2="60"  y2="120" stroke={project.color} strokeWidth="1" />
            <line x1="90"  y1="0"  x2="30"  y2="120" stroke={project.color} strokeWidth="0.5" />
            <line x1="60"  y1="0"  x2="0"   y2="120" stroke={project.color} strokeWidth="0.3" />
          </svg>

          {/* Corner accent */}
          <div style={{
            position: 'absolute', top: 12, left: 12,
            width: 24, height: 24,
            borderTop: `2px solid ${project.color}`,
            borderLeft: `2px solid ${project.color}`,
            transition: 'width 0.2s, height 0.2s',
            ...(hovered ? { width: 32, height: 32 } : {}),
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: project.color,
              letterSpacing: 2, marginBottom: 4,
            }}>
              MISSION {project.id}
            </div>
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700, fontSize: featured ? 26 : 20,
              color: 'var(--white)', lineHeight: 1.1,
            }}>
              {project.name}
            </div>
          </div>

          {/* "Expand" hint — only visible on hover */}
          <div style={{
            position: 'absolute', top: 12, right: 12,
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 8, color: project.color,
            letterSpacing: 1,
            opacity: hovered ? 0.85 : 0,
            transition: 'opacity 0.2s',
          }}>
            CLICK TO EXPAND ▸
          </div>
        </div>

        {/* Card body */}
        <div style={{
          padding: '18px 18px 16px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <SpeakText style={{
            fontSize: 13.5, color: 'var(--text-body)',
            lineHeight: 1.65, marginBottom: 16,
            display: 'block', flex: 1,
          }}>
            {project.desc}
          </SpeakText>

          {/* Metrics row */}
          <div style={{
            display: 'flex', gap: 0, marginBottom: 14,
            borderTop: '1px solid rgba(42,58,80,0.4)',
            borderBottom: '1px solid rgba(42,58,80,0.4)',
            padding: '10px 0',
          }}>
            {project.metrics.map((metric, i) => (
              <div
                key={metric.l}
                style={{
                  flex: 1, textAlign: 'center',
                  borderRight: i < project.metrics.length - 1 ? '1px solid rgba(42,58,80,0.4)' : 'none',
                  padding: '0 8px',
                }}
              >
                <div style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700, fontSize: 22,
                  color: project.color, lineHeight: 1, marginBottom: 2,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {metric.v}
                </div>
                <div style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 8, color: 'var(--muted-bright)',
                  letterSpacing: 1,
                }}>
                  {metric.l}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
});

// ─── ProjectModal ─────────────────────────────────────────────────────────────
const ProjectModal = memo(function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(2,4,8,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        zIndex: 'var(--z-modal)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '16px',
        animation: 'msgIn 0.2s ease',
        overflowY: 'auto',
      }}
      onClick={() => { sfxClick(); onClose(); }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 640, width: '100%',
          border: `1px solid ${project.color}55`,
          boxShadow: `0 0 80px ${project.color}14, 0 20px 60px rgba(0,0,0,0.6)`,
          maxHeight: '88vh', overflowY: 'auto',
          margin: 'auto',
        }}
      >
        <Brackets color={project.color} />

        {/* Modal header */}
        <div style={{
          height: 110, background: project.bg,
          position: 'relative', padding: '0 24px',
          display: 'flex', alignItems: 'flex-end',
          paddingBottom: 18, flexShrink: 0,
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,4,8,0.55)' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)',
          }} />
          <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: project.color,
              letterSpacing: 2, marginBottom: 4,
            }}>
              MISSION {project.id} // CLASSIFIED
            </div>
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700, fontSize: 22,
              color: 'var(--white)', lineHeight: 1,
            }}>
              {project.name}
            </div>
          </div>
          <button
            onClick={() => { sfxClick(); onClose(); }}
            style={{
              position: 'absolute', top: 12, right: 12,
              background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,70,85,0.4)',
              color: 'var(--red)', width: 38, height: 38,
              cursor: 'pointer',
              fontFamily: "'Share Tech Mono',monospace", fontSize: 14,
              zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,70,85,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
          >
            ✕
          </button>
        </div>

        {/* Modal content */}
        <div style={{ padding: '24px 24px 28px' }}>
          <div style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9, color: project.color,
            letterSpacing: 2, marginBottom: 12,
          }}>
            // MISSION BRIEF
          </div>
          <SpeakText style={{
            fontSize: 14, lineHeight: 1.75,
            color: 'var(--text-body)', marginBottom: 24,
            display: 'block',
          }}>
            {project.details}
          </SpeakText>

          {/* Metrics */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
            gap: 12, marginBottom: 24,
          }}>
            {project.metrics.map((metric) => (
              <div key={metric.l} style={{
                background: 'rgba(2,4,8,0.6)',
                padding: '14px 12px', textAlign: 'center',
                border: `1px solid ${project.color}28`,
              }}>
                <div style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700, fontSize: 28,
                  color: project.color, lineHeight: 1, marginBottom: 4,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {metric.v}
                </div>
                <div style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 9, color: 'var(--muted-bright)',
                }}>
                  {metric.l}
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9, color: project.color,
            letterSpacing: 2, marginBottom: 12,
          }}>
            // TECH STACK
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: "'Share Tech Mono',monospace", fontSize: 10,
                color: 'var(--text-primary)',
                background: 'rgba(42,58,80,0.35)',
                border: '1px solid rgba(90,122,154,0.4)',
                padding: '4px 12px',
                clipPath: 'var(--clip-sm)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

// ─── Projects ─────────────────────────────────────────────────────────────────
export function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const handleClose = useCallback(() => setActiveModal(null), []);

  return (
    <section
      id="missions"
      style={{
        background: 'rgba(7,13,22,0.6)',
        borderTop: '1px solid rgba(42,58,80,0.3)',
      }}
    >
      <div className="section-inner">
        <SectionHead sub="// MISSION ARCHIVE" title="CLASSIFIED OPS" color="var(--red)" />
        <div className="proj-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveModal}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={activeModal} onClose={handleClose} />
    </section>
  );
}
