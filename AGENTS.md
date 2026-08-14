# AGENTS.md

## Project purpose

This repository powers [nikunjpatel.website](https://nikunjpatel.website), Nikunj Patel's single-page professional portfolio. It is a client-only React application: there is no application backend or database in this repository.

The site is deliberately presented as a tactical/HUD interface and includes browser-native sound, text-to-speech, and a local keyword-matched portfolio assistant.

## Stack and commands

- React 19, Vite 7, and plain JavaScript/JSX (ES modules)
- ESLint 9 with React Hooks and React Refresh rules
- Native Web Audio API and Web Speech API; do not add a sound or speech dependency unless browser APIs no longer meet the requirement
- GitHub Actions deploys the production build to GitHub Pages

Use these commands from the repository root:

```sh
npm run dev      # Local Vite development server
npm run lint     # Required static checks
npm run build    # Required production-build check; outputs dist/
npm run preview  # Serve a production build locally
```

`node_modules/` and `dist/` are generated and are not source files to edit.

## Architecture

| Area | Responsibility |
| --- | --- |
| `src/main.jsx` | React mount point and Strict Mode |
| `src/App.jsx` | Top-level composition; above-the-fold UI is eager and later sections are lazy-loaded |
| `src/sections/` | Page sections: navigation, hero, skills, experience, projects, and contact |
| `src/components/primitives.jsx` | Reusable UI primitives and interaction patterns |
| `src/components/StarField.jsx` | Decorative animated background |
| `src/components/AIBot.jsx` | Chat UI, contact-collection flow, speech playback, and interaction sounds |
| `src/data/index.js` | Canonical static portfolio content, navigation, quick prompts, chatbot knowledge, and webhook configuration |
| `src/botMatcher.js` | Local keyword/fuzzy matching and response selection |
| `src/botLogger.js` | Best-effort browser requests for unanswered questions and volunteered contact details |
| `src/audio/` | Sound context plus Web Audio/Web Speech helpers |
| `src/hooks.js` | Scroll, reveal, typewriter, and skill-bar animation hooks |
| `src/styles/global.css` | Global theme tokens, layout, responsive rules, and shared component classes |
| `public/` | Files copied unchanged to the site root: icons, resume, images, CNAME, manifests, sitemap |
| `index.html` | SEO, social metadata, structured data, font preconnects, and document-title behavior |
| `.github/workflows/deploy.yml` | Deployment on pushes to `main` |

## Content and UI conventions

- Put portfolio facts, skills, experience, projects, bot prompts, and bot answers in `src/data/index.js`. Keep claims consistent across the page, chatbot, resume, and metadata.
- Preserve the existing tactical visual language: shared CSS custom properties, `Rajdhani`/`Share Tech Mono` typography, clipped panels, and the red/cyan/gold palette. Prefer existing primitives and CSS classes before adding one-off patterns.
- Keep the section IDs and `NAV_LINKS` targets synchronized. Changing an ID requires checking navigation and any deep links.
- Maintain lazy loading for below-the-fold sections unless a change has a measured reason to alter it.
- Use accessible native controls and retain useful labels, `title` text, focus behavior, and external-link `rel="noopener noreferrer"` safeguards.
- Check desktop and narrow mobile layouts when changing section markup or `global.css`.

## Chatbot and telemetry

- The chatbot is local; it does not call an AI model or external service for replies. Update `BOT_KNOWLEDGE_BASE` and `BOT_QUICK_PROMPTS` together when changing its scope or portfolio facts.
- `botMatcher.js` returns an `isFallback` signal used by `AIBot.jsx` to offer optional contact collection. Preserve this behavior and do not log users' contact details unless they explicitly provide them.
- `VITE_SHEETS_WEBHOOK_URL` is optional. It is injected only during the production build from the GitHub Actions secret. Never commit its value, any other secret, or a `.env` file.
- Logging must remain best-effort: a missing or failed webhook must not block the portfolio experience.

## Assets, SEO, and deployment

- When replacing the resume, retain the filename or update the `Contact.jsx` download link.
- When changing domain, name, role, contact details, or social handles, update all affected places: `package.json`, `src/data/index.js`, `src/sections/Contact.jsx`, `index.html` metadata/JSON-LD, `public/CNAME`, `public/robots.txt`, `public/sitemap.xml`, and relevant public share assets.
- Keep `public/CNAME` as the canonical domain used by the GitHub Pages deployment.
- This is a single-page site, so the sitemap must list only real, canonical indexable URLs. Keep `public/robots.txt` pointing at that sitemap, and keep canonical, Open Graph, Twitter, and JSON-LD URLs aligned.
- Deployment is triggered by a push to `main`. It runs `npm install`, injects `VITE_SHEETS_WEBHOOK_URL` for `npm run build`, and publishes `dist/` with the configured CNAME. Do not assume local `.env` files are available in CI.

## Change workflow

1. Read the files in the ownership area above before changing behavior.
2. Make the smallest coherent change; preserve unrelated user work in a dirty tree.
3. Run `npm run lint` for source changes and `npm run build` for production-affecting changes. Report any pre-existing failures separately from new ones.
4. Review the resulting UI in the browser when changing visual, responsive, animation, sound, or speech behavior.
5. Update this `AGENTS.md` in the same change whenever the project's architecture, commands, dependencies, content source of truth, environment variables, deployment, assets, or working conventions change. Do not update it for a purely local wording/style edit that leaves these facts unchanged.

## Guardrails

- Do not edit generated `dist/` output.
- Do not expose personal contact data or webhook secrets beyond their existing, intentional public locations.
- Avoid introducing a backend, analytics provider, UI framework, or test framework as incidental scope creep.
- Keep browser-only APIs guarded or invoked only after client interaction where appropriate; the app currently runs entirely in the browser.
