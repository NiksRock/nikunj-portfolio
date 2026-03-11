import { sfxCard, sfxWhoosh } from '../audio/engine';
import { DEPLOYMENT_STATS, SKILL_BARS, SKILLS } from '../data';
import { Brackets, Reveal, SectionHead, SkillBar } from '../components/primitives';

// ─── Skill Cards Grid ─────────────────────────────────────────────────────────

function SkillCards() {
  return (
    <div
      className="skills-cards"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
    >
      {SKILLS.map((skill, i) => (
        <Reveal key={skill.id} delay={i * 70}>
          <div
            className="card"
            style={{ padding: '18px 16px', transition: 'transform .2s, box-shadow .2s' }}
            onMouseEnter={(e) => {
              sfxCard();
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(255,70,85,.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <Brackets color="var(--red)" />
            <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--red)', letterSpacing: 2, marginBottom: 4 }}>
              {skill.id}
            </div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 30, color: 'var(--white)', lineHeight: 1 }}>
              {skill.level}
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
              {skill.name}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Share Tech Mono',monospace", fontSize: 9,
                    color: 'var(--cyan)', background: 'rgba(0,212,255,.07)',
                    padding: '2px 6px', border: '1px solid rgba(0,212,255,.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Accuracy Meter ───────────────────────────────────────────────────────────

function AccuracyMeter() {
  return (
    <Reveal delay={100}>
      <div className="card" style={{ padding: '22px 22px 18px' }}>
        <Brackets color="var(--cyan)" />
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--cyan)', letterSpacing: 2, marginBottom: 16 }}>
          // ACCURACY METER
        </div>
        {SKILL_BARS.map(([label, level], i) => (
          <SkillBar key={label} label={label} level={level} delay={i * 130} />
        ))}
      </div>
    </Reveal>
  );
}

// ─── Deployment Stats ─────────────────────────────────────────────────────────

function DeploymentStats() {
  return (
    <Reveal delay={180}>
      <div className="card" style={{ padding: '22px' }}>
        <Brackets color="var(--gold)" />
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--gold)', letterSpacing: 2, marginBottom: 14 }}>
          // DEPLOYMENT STATS
        </div>
        <div
          className="stats-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
        >
          {DEPLOYMENT_STATS.map(([metric, value, color]) => (
            <div
              key={metric}
              style={{ background: 'rgba(2,4,8,.5)', padding: '11px 13px', borderLeft: `2px solid ${color}` }}
            >
              <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>{metric}</div>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 28, color }}>{value}</div>
              <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 8, color: '#00ff64' }}>● CONFIRMED</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

export function Skills() {
  return (
    <section
      id="skills"
      style={{ background: 'rgba(7,13,22,.6)', borderTop: '1px solid rgba(42,58,80,.3)', borderBottom: '1px solid rgba(42,58,80,.3)' }}
    >
      <div
        className="section-inner"
        style={{ padding: '100px 60px', maxWidth: 1280, margin: '0 auto' }}
        onMouseEnter={sfxWhoosh}
      >
        <SectionHead sub="// CLASS OVERVIEW" title="SKILL LOADOUT" />

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
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
