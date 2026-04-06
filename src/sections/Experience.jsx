import { memo, useCallback, useState } from 'react';
import { sfxClick, sfxDeploy, sfxNav } from '../audio/engine';
import { EDUCATION, EXPERIENCE } from '../data';
import { Brackets, Reveal, SectionHead, SpeakText } from '../components/primitives';

// ─── ExperienceItem ───────────────────────────────────────────────────────────
const ExperienceItem = memo(function ExperienceItem({ item, isOpen, onToggle }) {
  return (
    <Reveal>
      <div
        className="card"
        style={{
          border: `1px solid ${isOpen ? item.color + '55' : 'rgba(42,58,80,0.4)'}`,
          boxShadow: isOpen ? `0 0 24px ${item.color}18, 0 4px 16px rgba(0,0,0,0.3)` : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <Brackets color={item.color} />

        {/* Header button */}
        <button
          onClick={onToggle}
          onMouseEnter={sfxNav}
          aria-expanded={isOpen}
          style={{
            width: '100%', background: 'none', border: 'none',
            cursor: 'pointer', padding: '18px 22px',
            display: 'flex', alignItems: 'center', gap: 14,
            textAlign: 'left',
          }}
        >
          {/* Company initials badge */}
          <div style={{
            width: 44, height: 44, flexShrink: 0,
            background: `${item.color}12`,
            border: `1px solid ${item.color}35`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13,
            color: item.color,
            transition: 'background 0.2s',
          }}>
            {item.init}
          </div>

          {/* Company info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'Rajdhani',sans-serif", fontWeight: 700,
                fontSize: 17, color: 'var(--white)',
                whiteSpace: 'nowrap',
              }}>
                {item.company}
              </span>
              <span style={{
                fontFamily: "'Share Tech Mono',monospace", fontSize: 9,
                color: item.color, border: `1px solid ${item.color}44`,
                padding: '2px 7px', flexShrink: 0,
              }}>
                {item.tag}
              </span>
            </div>
            <div style={{
              fontFamily: "'Barlow',sans-serif", fontSize: 13,
              color: 'var(--text-body)',
            }}>
              {item.role}
              <span style={{ color: 'var(--muted)', margin: '0 8px' }}>·</span>
              {item.period}
            </div>
          </div>

          {/* Chevron */}
          <span style={{
            color: item.color, fontSize: 13, flexShrink: 0,
            transition: 'transform 0.3s cubic-bezier(0.22,0.68,0,1.1)',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            display: 'flex', alignItems: 'center',
          }}>
            ▶
          </span>
        </button>

        {/* Accordion body — grid-template-rows trick for pixel-perfect animation */}
        <div className={`acc-body ${isOpen ? 'open' : ''}`}>
          <div className="acc-body-inner">
          <div
            className="acc-inner"
            style={{ padding: '0 22px 24px' }}
          >
            {/* Achievements */}
            <div>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: item.color,
                letterSpacing: 2, marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  display: 'inline-block', width: 2, height: 12,
                  background: item.color,
                }} />
                ACHIEVEMENTS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {item.achievements.map((achievement, j) => (
                  <div
                    key={j}
                    className="kf"
                    style={{
                      fontFamily: "'Barlow',sans-serif",
                      fontSize: 13.5, color: 'var(--text-body)',
                      lineHeight: 1.65,
                    }}
                  >
                    <SpeakText>{achievement}</SpeakText>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: item.color,
                letterSpacing: 2, marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  display: 'inline-block', width: 2, height: 12,
                  background: item.color,
                }} />
                TECH STACK
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "'Share Tech Mono',monospace", fontSize: 10,
                      color: 'var(--text-primary)',
                      background: 'rgba(42,58,80,0.35)',
                      border: '1px solid rgba(90,122,154,0.4)',
                      padding: '4px 10px',
                      clipPath: 'var(--clip-sm)',
                      transition: 'background 0.15s, border-color 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${item.color}15`;
                      e.currentTarget.style.borderColor = `${item.color}50`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(42,58,80,0.35)';
                      e.currentTarget.style.borderColor = 'rgba(90,122,154,0.4)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </div>{/* acc-body-inner */}
        </div>{/* acc-body */}
      </div>
    </Reveal>
  );
});

// ─── EducationCards ───────────────────────────────────────────────────────────
const EducationCards = memo(function EducationCards() {
  return (
    <Reveal delay={120}>
      <div style={{ marginTop: 48 }}>
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--cyan)',
          letterSpacing: 3, marginBottom: 16,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            display: 'inline-block', width: 2, height: 12,
            background: 'var(--cyan)',
          }} />
          ACADEMIC CLEARANCE
        </div>
        <div className="edu-grid">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="card"
              style={{
                padding: '20px 20px',
                border: `1px solid ${edu.color}28`,
                transition: 'border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${edu.color}55`;
                e.currentTarget.style.boxShadow = `0 4px 20px ${edu.color}12`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${edu.color}28`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Brackets color={edu.color} />
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 8, color: edu.color,
                letterSpacing: 2, marginBottom: 6,
              }}>
                // DEGREE
              </div>
              <div style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700, fontSize: 24,
                color: edu.color, marginBottom: 6, lineHeight: 1,
              }}>
                {edu.degree}
              </div>
              <SpeakText style={{
                fontSize: 13.5, color: 'var(--text-primary)',
                marginBottom: 6, display: 'block', lineHeight: 1.4,
              }}>
                {edu.institute}
              </SpeakText>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: 'var(--muted-bright)',
                letterSpacing: 1,
                display: 'flex', alignItems: 'center', gap: 6,
                marginBottom: edu.cgpa ? 4 : 0,
              }}>
                <span>{edu.university}</span>
                <span style={{ color: 'var(--muted)' }}>·</span>
                <span>{edu.period}</span>
              </div>
              {edu.cgpa && (
                <div style={{
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 9, color: 'var(--muted-bright)',
                  letterSpacing: 1,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ color: edu.color }}>CGPA {edu.cgpa}</span>
                  <span style={{ color: 'var(--muted)' }}>·</span>
                  <span>{edu.grade}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
});

// ─── Experience ───────────────────────────────────────────────────────────────
export function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => {
      const next = prev === index ? -1 : index;
      if (next !== -1) sfxDeploy();
      else sfxClick();
      return next;
    });
  }, []);

  return (
    <section id="record">
      <div className="section-inner">
        <SectionHead sub="// OPERATION LOG" title="FIELD RECORD" />

        {/* Summary banner */}
        <Reveal delay={60}>
          <div
            className="card"
            style={{
              height: 88, marginBottom: 28,
              background: 'linear-gradient(90deg, rgba(255,70,85,0.08) 0%, rgba(0,212,255,0.03) 60%, transparent 100%)',
              border: '1px solid rgba(42,58,80,0.4)',
              display: 'flex', alignItems: 'center',
              padding: '0 28px', gap: 20,
            }}
          >
            <Brackets color="var(--red)" />

            {/* Decorative line element */}
            <div style={{
              width: 3, height: 40, flexShrink: 0,
              background: 'linear-gradient(180deg, var(--red), var(--cyan))',
            }} />

            <div>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: 'var(--gold)',
                letterSpacing: 3, marginBottom: 4,
              }}>
                DEPLOYMENT ENVIRONMENT
              </div>
              <div style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700, fontSize: 18,
                color: 'var(--white)',
              }}>
                FRONTEND COMMAND
                <span style={{ color: 'var(--red)', margin: '0 10px' }}>//</span>
                7 YEARS ACTIVE DUTY
                <span style={{ color: 'var(--red)', margin: '0 10px' }}>//</span>
                PUNE, INDIA
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experience accordion list */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 0 }}>
          {/* Timeline connector */}
          <div className="exp-timeline" />
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem
              key={item.company}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <EducationCards />
      </div>
    </section>
  );
}