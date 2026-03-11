import { useState } from 'react';
import { sfxCard, sfxClick, sfxDeploy } from '../audio/engine';
import { PROJECTS } from '../data';
import { Brackets, Reveal, SectionHead, SpeakText } from '../components/primitives';

function ProjectCard({ project, onOpen }) {
  return (
    <Reveal delay={0}>
      <div
        className="card proj-card"
        onClick={() => { sfxDeploy(); onOpen(project); }}
        style={{
          border: '1px solid rgba(42,58,80,.5)',
          transition: 'transform .25s, box-shadow .25s, border-color .25s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          sfxCard();
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = `0 16px 48px ${project.color}25`;
          e.currentTarget.style.borderColor = `${project.color}55`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '';
          e.currentTarget.style.borderColor = 'rgba(42,58,80,.5)';
        }}
      >
        <Brackets color={project.color} />

        <div style={{
          height: 165, background: project.bg,
          position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'flex-end', padding: '14px 18px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,4,8,.35)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.06) 3px, rgba(0,0,0,.06) 4px)' }} />
          <svg style={{ position: 'absolute', top: 0, right: 0, opacity: .12 }} width={110} height={110} viewBox="0 0 110 110">
            <line x1="110" y1="0"  x2="50"  y2="110" stroke={project.color} strokeWidth="1" />
            <line x1="80"  y1="0"  x2="20"  y2="110" stroke={project.color} strokeWidth=".5" />
          </svg>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: project.color, letterSpacing: 2,
            }}>
              MISSION {project.id}
            </div>
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700, fontSize: 22, color: 'var(--white)',
            }}>
              {project.name}
            </div>
          </div>
        </div>

        <div style={{ padding: '18px 18px 14px' }}>
          {/* Improved: was rgba(232,240,255,.58) — now text-body */}
          <SpeakText style={{
            fontSize: 13.5, color: 'var(--text-body)',
            lineHeight: 1.65, marginBottom: 14, display: 'block',
          }}>
            {project.desc}
          </SpeakText>

          <div style={{
            display: 'flex', gap: 0, marginBottom: 14,
            borderTop: '1px solid rgba(42,58,80,.4)',
            borderBottom: '1px solid rgba(42,58,80,.4)',
            padding: '9px 0',
          }}>
            {project.metrics.map((metric, i) => (
              <div
                key={metric.l}
                style={{
                  flex: 1, textAlign: 'center',
                  borderRight: i < project.metrics.length - 1 ? '1px solid rgba(42,58,80,.4)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700, fontSize: 20, color: project.color,
                }}>
                  {metric.v}
                </div>
                {/* Improved: was var(--muted) */}
                <div style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 8, color: 'var(--muted-bright)', letterSpacing: 1,
                }}>
                  {metric.l}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="modal-bg"
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(2,4,8,.88)', backdropFilter: 'blur(10px)',
        zIndex: 3000, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: 20,
      }}
      onClick={() => { sfxClick(); onClose(); }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 620, width: '100%',
          border: `1px solid ${project.color}55`,
          boxShadow: `0 0 60px ${project.color}18`,
          maxHeight: '90vh', overflowY: 'auto',
        }}
      >
        <Brackets color={project.color} />

        <div style={{
          height: 105, background: project.bg,
          position: 'relative', padding: '16px 24px',
          display: 'flex', alignItems: 'flex-end',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(2,4,8,.5)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: project.color, letterSpacing: 2,
            }}>
              MISSION {project.id} // CLASSIFIED
            </div>
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700, fontSize: 24, color: 'var(--white)',
            }}>
              {project.name}
            </div>
          </div>
          <button
            onClick={() => { sfxClick(); onClose(); }}
            style={{
              position: 'absolute', top: 12, right: 12,
              background: 'none', border: '1px solid rgba(255,70,85,.4)',
              color: 'var(--red)', width: 28, height: 28, cursor: 'pointer',
              fontFamily: "'Share Tech Mono',monospace", fontSize: 13,
              zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '22px 24px' }}>
          <div style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9, color: project.color, letterSpacing: 2, marginBottom: 10,
          }}>
            // MISSION BRIEF
          </div>
          <SpeakText style={{
            fontSize: 14, lineHeight: 1.75,
            /* Improved: was rgba(232,240,255,.72) — now text-body */
            color: 'var(--text-body)',
            marginBottom: 22, display: 'block',
          }}>
            {project.details}
          </SpeakText>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
            gap: 12, marginBottom: 22,
          }}>
            {project.metrics.map((metric) => (
              <div key={metric.l} style={{
                background: 'rgba(2,4,8,.6)', padding: 14,
                textAlign: 'center', border: `1px solid ${project.color}28`,
              }}>
                <div style={{
                  fontFamily: "'Rajdhani',sans-serif",
                  fontWeight: 700, fontSize: 26, color: project.color,
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

          <div style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 9, color: project.color, letterSpacing: 2, marginBottom: 10,
          }}>
            // TECH STACK
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: "'Share Tech Mono',monospace", fontSize: 10,
                color: 'var(--text-primary)',
                background: 'rgba(42,58,80,.35)',
                border: '1px solid rgba(90,122,154,.4)',
                padding: '4px 12px', clipPath: 'var(--clip-sm)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section
      id="missions"
      style={{ background: 'rgba(7,13,22,.6)', borderTop: '1px solid rgba(42,58,80,.3)' }}
    >
      <div className="section-inner" style={{ padding: '100px 60px', maxWidth: 1280, margin: '0 auto' }}>
        <SectionHead sub="// MISSION ARCHIVE" title="CLASSIFIED OPS" />
        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveModal} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}
