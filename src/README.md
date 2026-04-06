# Nikunj Patel — Portfolio

Production-ready React portfolio with HUD-inspired motion, Web Audio API interaction cues, Web Speech API voice support, and an integrated AI chatbot driven by a static response base.

---

## Project Structure

```
src/
├── audio/
│   ├── engine.js          # Web Audio API synth + Web Speech API
│   └── SoundContext.jsx   # React context for mute state
│
├── components/
│   ├── primitives.jsx     # Reusable UI atoms: Reveal, SkillBar, SectionHead, SpeakText
│   ├── StarField.jsx      # Animated starfield background
│   ├── AIBot.jsx          # Chat widget with keyword-based responses
│   └── botMatcher.js      # Keyword scoring logic for bot replies
│
├── data/
│   └── index.js           # Static content: skills, experience, projects, chatbot knowledge
│
├── hooks.js              # Custom hooks: scroll progress, reveal animations, typewriter, skill bar animation
├── sections/
│   ├── Nav.jsx            # Navigation and scroll progress UI
│   ├── Hero.jsx           # Hero landing section with role summary and CTA buttons
│   ├── Skills.jsx         # Skill cards, animated progress, and deployment stats
│   ├── Experience.jsx     # Experience timeline, education, and achievements
│   ├── Projects.jsx       # Project archive with metrics and highlights
│   └── Contact.jsx        # Contact form and social links
│
├── styles/
│   └── global.css         # Global theme and component styles
├── App.jsx                # Root application component
└── main.jsx               # React DOM mount point
```

---

## Design notes

- Static portfolio content is centralized in `src/data/index.js`.
- The chatbot operates locally with no backend dependency.
- Sections are lazy-loaded to improve initial load performance.
- All audio effects are generated with native browser APIs.
