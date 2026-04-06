import { MagBtn, Reveal, SpeakText } from '../components/primitives';
import { sfxBtn } from '../audio/engine';

export function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid rgba(42,58,80,0.3)' }}>
      <div
        className="section-inner"
        style={{ textAlign: 'center' }}
      >
        {/* Section heading */}
        <Reveal>
          <div style={{
            fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: 'var(--red)',
            letterSpacing: 3, marginBottom: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}>
            <span style={{ display: 'inline-block', width: 3, height: 16, background: 'var(--red)' }} />
            // OPEN COMMS
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 auto 10px', maxWidth: 400 }}>
            <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg,var(--red),transparent)' }} />
            <div style={{ width: 5, height: 5, background: 'var(--red)', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 36, background: 'rgba(255,70,85,0.25)' }} />
          </div>
          <div style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700, fontSize: 'clamp(36px,4vw,52px)',
            color: 'var(--white)', lineHeight: 1, marginBottom: 44,
          }}>
            INITIATE CONTACT
          </div>
        </Reveal>

        {/* Body copy + contact info */}
        <Reveal delay={100}>
          <SpeakText
            tag="p"
            style={{
              maxWidth: 460, margin: '0 auto 16px',
              color: 'var(--text-body)', lineHeight: 1.8,
              fontSize: 15.5, display: 'block',
            }}
          >
            Ready to discuss your next mission. Whether it's architecting a micro-frontend platform,
            scaling frontend teams, or building robust React ecosystems — let's deploy together.
          </SpeakText>

          {/* Contact details chip row */}
          <div style={{
            display: 'flex', gap: 20, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 40,
          }}>
            {[
              { icon: '✉', text: 'nikunjpatel1581996@gmail.com', href: 'mailto:nikunjpatel1581996@gmail.com' },
              { icon: '☎', text: '+91 8980368059', href: 'tel:+918980368059' },
              { icon: '⊕', text: 'Pune, India', href: null },
            ].map(({ icon, text, href }) => (
              <div
                key={text}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  fontFamily: "'Share Tech Mono',monospace",
                  fontSize: 10, color: 'var(--text-dim)',
                  letterSpacing: 0.5,
                }}
              >
                <span style={{ color: 'var(--cyan)', fontSize: 11 }}>{icon}</span>
                {href ? (
                  <a
                    href={href}
                    style={{
                      color: 'var(--muted-bright)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-bright)'}
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={180}>
          <div className="contact-btns">
            <MagBtn variant="red" href="mailto:nikunjpatel1581996@gmail.com">
              SEND TRANSMISSION
            </MagBtn>
            <MagBtn variant="cyan" href="https://github.com/NiksRock" target="_blank" rel="noopener noreferrer">
              GitHub // NiksRock
            </MagBtn>
            <MagBtn variant="ghost" href="https://linkedin.com/in/nikunj-patel-dev" target="_blank" rel="noopener noreferrer">
              LinkedIn // nikunj-patel-dev
            </MagBtn>
            <a
              href="/Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf"
              download="Nikunj_Patel_Senior_Frontend_Engineer_2026.pdf"
              className="btn-resume"
              onMouseEnter={sfxBtn}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD RESUME
            </a>
          </div>
        </Reveal>

        {/* Divider + footer */}
        <Reveal delay={260}>
          <div style={{ marginTop: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,var(--red))' }} />
              <div style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 9, color: 'var(--muted-bright)',
                letterSpacing: 2,
              }}>
                NKP // SDE-3 // STAR HEALTH &amp; ALLIED INSURANCE // PUNE
              </div>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--red),transparent)' }} />
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 9, color: 'rgba(42,58,80,0.6)',
              letterSpacing: 1,
            }}>
              &copy; 2026 NIKUNJ PATEL &mdash; ALL RIGHTS RESERVED // DEPLOYED IN PRODUCTION
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}