[![Deploy to GitHub Pages](https://github.com/NiksRock/nikunj-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/NiksRock/nikunj-portfolio/actions/workflows/deploy.yml)
# Nikunj Patel — Portfolio

A production-ready React portfolio built with Vite for a Senior Frontend Engineer and React Architect. The site includes a custom AI chatbot, Web Audio API sounds, a tactical UI, and SEO metadata for social sharing.

## Features

- React 19 with Vite for fast development and optimized builds
- Keyword-based AI chatbot with local knowledge base and Web Speech output
- Custom Web Audio API synth effects for interaction feedback
- Lazy-loaded portfolio sections to improve initial load performance
- Responsive UI for Hero, Skills, Experience, Projects, and Contact
- SEO and social share metadata defined in `index.html`

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

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
│   └── index.js           # Static portfolio content and chatbot knowledge base
│
├── hooks.js              # Custom hooks: scroll progress, reveal, typewriter, skill bar animation
├── sections/
│   ├── Nav.jsx            # Navigation and scroll progress UI
│   ├── Hero.jsx           # Hero section with role summary and action buttons
│   ├── Skills.jsx         # Skills page and progress visualizations
│   ├── Experience.jsx     # Experience timeline and education section
│   ├── Projects.jsx       # Project cards and mission details
│   └── Contact.jsx        # Contact section and links
│
├── styles/
│   └── global.css         # Global theme and application styles
├── App.jsx                # Root application component
└── main.jsx               # React DOM mount point
```

## Notes

- All static text and portfolio data live in `src/data/index.js`.
- The chatbot runs locally with no external API dependencies.
- Metadata in `index.html` is used for SEO, Open Graph, and Twitter cards.
