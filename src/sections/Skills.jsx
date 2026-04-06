import { sfxCard, sfxWhoosh } from '../audio/engine';
import { DEPLOYMENT_STATS, SKILL_BARS, SKILLS } from '../data';
import { Brackets, Reveal, SectionHead, SkillBar } from '../components/primitives';

function SkillCards() {
  return (
    <div className="skills-cards">
      {SKILLS.map((skill, i) => (
        <Reveal key={skill.id} delay={i * 70}>
          <div
            className="card"
            style={{
              padding: '20px 18px',
              transition: 'transform var(--t-base), box-shadow var(--t-base), border-color var(--t-base)',
              cursor: 'default',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              sfxCard();
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(255,70,85,0.22)';
              e.currentTarget.style.borderColor = 'rgba(255,70,85,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.borderColor = '';
            }}
          >
            <Brackets color="var(--red)" />

            {/* ID badge */}
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: 'var(--red)',
              letterSpacing: 2, marginBottom: 6,
            }}>
              {skill.id}
            </div>

            {/* Level number */}
            <div style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 700, fontSize: 34,
              color: 'var(--white)', lineHeight: 1,
              marginBottom: 2,
            }}>
              {skill.level}
              <span style={{ fontSize: 14, color: 'var(--red)', marginLeft: 2 }}>%</span>
            </div>

            {/* Skill name */}
            <div style={{
              fontSize: 11,
              color: 'var(--muted-bright)',
              marginBottom: 12,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontFamily: "'Barlow',sans-serif",
              fontWeight: 500,
            }}>
              {skill.name}
            </div>

            {/* Tag chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {skill.tags.map((tag) => (
                <span key={tag} className="tag-chip-cyan">{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function AccuracyMeter() {
  return (
    <Reveal delay={100}>
      <div className="card" style={{ padding: '22px 22px 20px' }}>
        <Brackets color="var(--cyan)" />
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--cyan)',
          letterSpacing: 2, marginBottom: 20,
        }}>
          // ACCURACY METER
        </div>
        {SKILL_BARS.map(([label, level], i) => (
          <SkillBar key={label} label={label} level={level} delay={i * 130} />
        ))}
      </div>
    </Reveal>
  );
}

function DeploymentStats() {
  return (
    <Reveal delay={180}>
      <div className="card" style={{ padding: '22px' }}>
        <Brackets color="var(--gold)" />
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 9, color: 'var(--gold)',
          letterSpacing: 2, marginBottom: 16,
        }}>
          // DEPLOYMENT STATS
        </div>
        <div className="stats-grid">
          {DEPLOYMENT_STATS.map(([metric, value, color]) => (
            <div key={metric} style={{
              background: 'rgba(2,4,8,0.5)',
              padding: '12px 14px',
              borderLeft: `2px solid ${color}`,
              transition: 'background var(--t-fast)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(2,4,8,0.8)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(2,4,8,0.5)'}
            >
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: 'var(--muted-bright)',
                letterSpacing: 2, marginBottom: 2,
              }}>
                {metric}
              </div>
              <div style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700, fontSize: 30, color,
                lineHeight: 1, marginBottom: 4,
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 8, color: 'var(--green)',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <span style={{
                  display: 'inline-block', width: 5, height: 5,
                  borderRadius: '50%', background: 'var(--green)',
                  boxShadow: '0 0 6px var(--green)',
                  animation: 'pulse-g 2s infinite',
                }} />
                CONFIRMED
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: 'rgba(7,13,22,0.6)',
        borderTop: '1px solid rgba(42,58,80,0.3)',
        borderBottom: '1px solid rgba(42,58,80,0.3)',
      }}
    >
      <div
        className="section-inner"
        onMouseEnter={sfxWhoosh}
      >
        <SectionHead sub="// CLASS OVERVIEW" title="SKILL LOADOUT" color="var(--cyan)" />
        <div className="skills-grid">
          <SkillCards />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <AccuracyMeter />
            <DeploymentStats />
          </div>
        </div>
      </div>
    </section>
  );
}