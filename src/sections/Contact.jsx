import { MagBtn, Reveal, SpeakText } from '../components/primitives';

export function Contact() {
  return (
    <section id="contact" style={{ borderTop: '1px solid rgba(42,58,80,.3)' }}>
      <div
        className="section-inner"
        style={{ padding: '100px 60px', maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}
      >
        {/* Heading */}
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
            <div style={{ height: 1, width: 36, background: 'rgba(255,70,85,.25)' }} />
          </div>
          <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,4vw,52px)', color: 'var(--white)', lineHeight: 1, marginBottom: 44 }}>
            INITIATE CONTACT
          </div>
        </Reveal>

        {/* Body copy */}
        <Reveal delay={100}>
          <SpeakText
            tag="p"
            style={{ maxWidth: 450, margin: '0 auto 12px', color: 'rgba(232,240,255,.6)', lineHeight: 1.75, fontSize: 15, display: 'block' }}
          >
            Ready to discuss your next mission. Whether it's architecting a micro-frontend platform,
            scaling frontend teams, or building robust React ecosystems — let's deploy together.
          </SpeakText>
          <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: 'var(--cyan)', letterSpacing: 1, marginBottom: 36 }}>
            nikunjpatel1581996@gmail.com &nbsp;·&nbsp; +91 8980368059 &nbsp;·&nbsp; Pune, India
          </div>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={180}>
          <div className="contact-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagBtn variant="red"   href="mailto:nikunjpatel1581996@gmail.com">✉ SEND TRANSMISSION</MagBtn>
            <MagBtn variant="cyan"  href="https://github.com/NiksRock">GitHub // NiksRock</MagBtn>
            <MagBtn variant="ghost" href="https://linkedin.com/in/nikunj-patel-1aa949156">LinkedIn Profile</MagBtn>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={260}>
          <div style={{ marginTop: 80, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,var(--red))' }} />
            <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>
              NP // SDE-3 // STAR HEALTH & ALLIED INSURANCE // PUNE
            </span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--red),transparent)' }} />
          </div>
          <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, color: 'rgba(42,58,80,.4)', marginTop: 14, letterSpacing: 1 }}>
            © 2025 NIKUNJ PATEL — ALL RIGHTS RESERVED // DEPLOYED IN PRODUCTION
          </div>
        </Reveal>
      </div>
    </section>
  );
}
