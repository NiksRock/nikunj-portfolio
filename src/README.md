# Nikunj Patel — Portfolio

Production-grade React portfolio with a tactical HUD aesthetic, Web Audio API sounds,
Web Speech API voice, scroll-triggered animations, and a zero-dependency AI chatbot.

---

## Project Structure

```
src/
├── audio/
│   ├── engine.js          # Web Audio API synth + Web Speech API
│   └── SoundContext.jsx   # React context for mute state
│
├── components/
│   ├── primitives.jsx     # Reusable UI atoms: Brackets, Reveal, MagBtn,
│   │                      #   Typewriter, SkillBar, SectionHead, SpeakText
│   ├── StarField.jsx      # Animated starfield background
│   ├── AIBot.jsx          # Chat widget (no API — keyword matcher)
│   └── botMatcher.js      # Keyword scoring logic for bot responses
│
├── data/
│   └── index.js           # All static content: skills, experience,
│                          #   projects, bot KB, nav links, hero stats
│
├── hooks/
│   └── index.js           # useReveal, useScrollProgress, useScrolled,
│                          #   useTypewriter, useSkillBarReveal
│
├── sections/
│   ├── Nav.jsx            # Fixed navigation + scroll progress bar
│   ├── Hero.jsx           # Hero section with glitch name + card
│   ├── Skills.jsx         # Skill cards + animated bars + stats
│   ├── Experience.jsx     # Accordion timeline + education
│   ├── Projects.jsx       # Project grid + detail modal
│   └── Contact.jsx        # Contact section + footer
│
├── styles/
│   └── global.js          # CSS variables, keyframes, utility classes
│
└── Portfolio.jsx          # Root component — assembles everything
```

---

## Key design decisions

| Concern              | Approach |
|----------------------|----------|
| Audio               | Single `engine.js` module — all oscillators/noise/speech centralized |
| Mute state          | React Context so any component can read/toggle without prop drilling |
| Scroll state        | Two hooks: `useScrollProgress` (progress bar) and `useScrolled` (nav bg) |
| Reveal animations   | `useReveal` IntersectionObserver — fires once, then disconnects |
| Skill bar animation | `useSkillBarReveal` — same pattern, drives CSS width transition |
| Typewriter          | `useTypewriter` — self-contained with configurable speeds |
| Bot                 | `botMatcher.js` pure function — zero dependencies, easily unit-tested |
| All static data     | `data/index.js` — single source of truth, no data scattered in components |
| Styles              | Single `global.js` string — avoids styled-components overhead for a static site |

---

## Bot: adding new knowledge

Open `src/data/index.js` and add a new entry to `BOT_KNOWLEDGE_BASE`:

```js
myNewTopic: {
  keywords: ['keyword one', 'keyword two'],
  responses: [
    'Response variant A',
    'Response variant B — randomly selected',
  ],
},
```

The matcher scores by keyword length (multi-word keywords rank higher).

---

## Audio

All sounds are one-shot synth bursts via Web Audio API — no audio files, no network requests.
Speech uses the browser's built-in Web Speech API and prefers a robotic-sounding voice.

Sounds play only on user interaction. No ambient or autoplay audio.
