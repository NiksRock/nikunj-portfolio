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
          border: `1px solid ${isOpen ? item.color : 'rgba(42,58,80,.4)'}`,
          boxShadow: isOpen ? `0 0 20px ${item.color}22` : 'none',
          transition: 'border-color .3s, box-shadow .3s',
        }}
      >
        <Brackets color={item.color} />

        <button
          onClick={onToggle}
          onMouseEnter={sfxNav}
          style={{
            width: '100%', background: 'none', border: 'none',
            cursor: 'pointer', padding: '18px 22px',
            display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
          }}
        >
          <div style={{
            width: 42, height: 42,
            background: `${item.color}15`,
            border: `1px solid ${item.color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13,
            color: item.color, flexShrink: 0,
          }}>
            {item.init}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3 }}>
              <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 17, color: 'var(--white)' }}>
                {item.company}
              </span>
              <span style={{
                fontFamily: "'Share Tech Mono',monospace", fontSize: 9,
                color: item.color, border: `1px solid ${item.color}44`, padding: '2px 7px',
              }}>
                {item.tag}
              </span>
            </div>
            <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, color: 'var(--text-body)' }}>
              {item.role} &nbsp;·&nbsp; {item.period}
            </div>
          </div>

          <span style={{
            color: item.color, fontSize: 15,
            transition: 'transform .3s',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}>
            ▶
          </span>
        </button>

        <div className={`acc-body ${isOpen ? 'open' : ''}`}>
          <div
            className="acc-inner"
            style={{ padding: '0 22px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}
          >
            <div>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: item.color, letterSpacing: 2, marginBottom: 12,
              }}>
                // ACHIEVEMENTS
              </div>
              {item.achievements.map((achievement, j) => (
                <div
                  key={j}
                  className="kf"
                  style={{
                    fontFamily: "'Barlow',sans-serif",
                    fontSize: 13.5, color: 'var(--text-body)',
                    marginBottom: 10, lineHeight: 1.6,
                  }}
                >
                  <SpeakText>{achievement}</SpeakText>
                </div>
              ))}
            </div>

            <div>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: item.color, letterSpacing: 2, marginBottom: 12,
              }}>
                // TECH STACK
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {item.tech.map((tech) => (
                  <span key={tech} style={{
                    fontFamily: "'Share Tech Mono',monospace", fontSize: 10,
                    color: 'var(--text-primary)',
                    background: 'rgba(42,58,80,.35)',
                    border: '1px solid rgba(90,122,154,.4)',
                    padding: '4px 10px', clipPath: 'var(--clip-sm)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
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
          fontSize: 9, color: 'var(--cyan)', letterSpacing: 3, marginBottom: 16,
        }}>
          // ACADEMIC CLEARANCE
        </div>
        <div className="edu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="card"
              style={{ padding: '18px 20px', border: `1px solid ${edu.color}28` }}
            >
              <Brackets color={edu.color} />
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 22, color: edu.color, marginBottom: 5 }}>
                {edu.degree}
              </div>
              <SpeakText style={{ fontSize: 13.5, color: 'var(--text-primary)', marginBottom: 4, display: 'block' }}>
                {edu.institute}
              </SpeakText>
              <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--muted-bright)', letterSpacing: 1 }}>
                {edu.university} &nbsp;·&nbsp; {edu.period}
              </div>
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
      <div className="section-inner" style={{ padding: '100px 60px', maxWidth: 1280, margin: '0 auto' }}>
        <SectionHead sub="// OPERATION LOG" title="FIELD RECORD" />

        <Reveal delay={60}>
          <div
            className="card"
            style={{
              height: 90, marginBottom: 28,
              background: 'linear-gradient(90deg, rgba(255,70,85,.1) 0%, rgba(0,212,255,.04) 100%)',
              border: '1px solid rgba(42,58,80,.4)',
              display: 'flex', alignItems: 'center', padding: '0 28px',
            }}
          >
            <Brackets color="var(--red)" />
            <div>
              <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--gold)', letterSpacing: 3 }}>
                DEPLOYMENT ENVIRONMENT
              </div>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 20, color: 'var(--white)' }}>
                FRONTEND COMMAND // 7 YEARS ACTIVE DUTY // PUNE, INDIA
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
