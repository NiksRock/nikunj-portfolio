// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    id: "ALPHA",
    level: 95,
    name: "React Ecosystem",
    tags: ["React", "Next.js", "Redux Toolkit", "Redux-Saga", "Context API", "Tailwind CSS", "Material UI"],
  },
  {
    id: "BRAVO",
    level: 92,
    name: "TypeScript & JavaScript",
    tags: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    id: "CHARLIE",
    level: 90,
    name: "Frontend Architecture",
    tags: ["Module Federation", "Design Systems", "Component Libraries", "Internal NPM", "Monorepo"],
  },
  {
    id: "DELTA",
    level: 87,
    name: "UI & Performance",
    tags: ["Core Web Vitals", "Lighthouse", "Bundle Optimisation", "Code Splitting", "Lazy Loading", "Virtualisation"],
  },
  {
    id: "ECHO",
    level: 85,
    name: "Cloud & DevOps",
    tags: ["AWS Amplify", "S3", "CloudFront", "EC2", "CodeArtifact", "CI/CD", "Git", "WCAG / ARIA"],
  },
  {
    id: "FOXTROT",
    level: 83,
    name: "Testing & Quality",
    tags: ["Jest", "React Testing Library", "Storybook", "SonarQube", "Snyk", "ESLint", "Husky"],
  },
];

export const SKILL_BARS = [
  ["React / Next.js", 95],
  ["TypeScript", 92],
  ["Module Federation", 90],
  ["Design Systems", 88],
  ["AWS Cloud Infra", 83],
  ["Testing / QA", 85],
];

export const DEPLOYMENT_STATS = [
  ["MFE APPS", "4", "var(--red)"],
  ["MONTHLY USERS", "5M+", "var(--gold)"],
  ["COMPONENTS", "20+", "var(--cyan)"],
  ["EXP", "7 YRS", "var(--red)"],
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    init: "SH",
    company: "Star Health and Allied Insurance Co. Ltd",
    tag: "INSURTECH",
    role: "Software Development Engineer – 3",
    period: "Apr 2023 — Present",
    color: "var(--red)",
    achievements: [
      "Took ATOM Portal from zero to a working 4-app micro-frontend setup — React, Next.js, TypeScript, Webpack Module Federation — covering 10+ insurance products across Agency, Alternate, and Banca channels; it now handles 600K+ agents daily, and deployment conflicts dropped 60% while new module onboarding got ~40% faster once teams stopped stepping on each other's releases.",
      "Eliminated ~45% of repetitive sprint back-and-forth by introducing a JSON config layer that lets product spin up new insurance workflows without raising a frontend ticket.",
      "Cut cross-app integration issues from 8–10 per sprint to 2–3 by initiating upfront API contract sessions with backend, product, and ops before any build kicked off — saving several hours of rework each cycle across all 4 apps.",
      "Saved 30% of UI build time across 3+ products by advocating for and delivering a shared Material UI component system after the third React app began duplicating UI work — the system now underpins 5+ apps collectively serving 5M+ users across US markets.",
      "Reduced production defects by 30% and improved PR throughput by rolling out SonarQube, Snyk, and Husky pre-commit hooks into the workflow for 10+ developers, ending quality back-and-forth at review time.",
      "Reduced new feature scaffolding time by ~40% by building a 40+ component Storybook library after identifying that three teams were independently rebuilding identical UI across parallel applications.",
      "Slashed UI inconsistencies by 50% by packaging @star-ui/atom-claims-ui — a shared library covering 4 claims workflows (intake, review, query management, settlement) that were previously being built independently across 3 apps.",
      "Removed 25% of dead code and reduced consumer bundle size by migrating bundling to Rollup ES modules with tree-shaking; shipped 3 major releases with zero breaking changes by establishing a one-major deprecation policy and wiring auto-publishing to AWS CodeArtifact on merge via CI/CD — adopted by 20+ developers.",
      "Reduced mid-sprint scope changes by ~30% and kept the package API stable across all releases by collaborating with backend and QA upfront to define claim state transitions and edge-case handling before build started.",
      "Owned GrowPro's entire frontend solo — a campaign creation tool used by 600K+ agents; MoEngage data shows 40–50% regularly reach the campaign editor, with 10–25% customising poster placement and styling themselves.",
      "Delivered 10K+ PDF exports at 20–40 ms render time by engineering a drag-and-drop poster editor (react-draggable, Material UI) with 10+ configurable poster types, dynamic templates, and an HTML-to-PDF export pipeline through Next.js API routes.",
      "Scaled asset management to 100K+ campaign assets without incident by building and owning the full gallery, drafts, favourites, preview, and multipart upload pipeline end-to-end.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Webpack 5",
      "Module Federation",
      "Redux Toolkit",
      "Material UI",
      "Storybook",
      "Rollup",
      "AWS CodeArtifact",
      "SonarQube",
      "Snyk",
      "Husky",
    ],
  },
  {
    init: "AZ",
    company: "AltezzaSys Systems – BSWHealth",
    tag: "HEALTHTECH",
    role: "Software Engineer",
    period: "Mar 2022 — Nov 2022",
    color: "var(--cyan)",
    achievements: [
      "Eased bug reports by 20% and improved workflow speed by 10–15% by building dashboards and workflow UIs across 5+ clinical modules for BSWHealth (200+ DAU) in React, TypeScript, and Redux-Saga — diagnosing and reworking the async flow structure causing persistent state bugs.",
      "Brought table render time down by 40% on 10K+-row datasets by adding row virtualisation.",
      "Got UI delivery moving 35% faster by putting together a 15-component Storybook library.",
      "Shaved 30% off page load by wiring up AWS Amplify CI/CD with CloudFront caching.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Redux-Saga",
      "Storybook",
      "AWS Amplify",
      "AWS CloudFront",
      "WebSockets",
      "REST APIs",
    ],
  },
  {
    init: "TA",
    company: "TechAvidus",
    tag: "PRODUCT",
    role: "Software Developer",
    period: "Feb 2020 — Feb 2022",
    color: "var(--gold)",
    achievements: [
      "Reduced initial bundle by ~35% and brought page loads under 2s for 5M+ monthly visitors by leading bundle optimisation, code splitting, and lazy loading on NetworkedLive.",
      "Completed a full platform migration for 100K+ users — 4 auth flows rebuilt, 78% re-registration rate achieved, zero data loss, Stripe integrated end-to-end — delivered in under 3 months.",
    ],
    tech: [
      "React",
      "Redux",
      "Redux Thunk",
      "Material UI",
      "Stripe",
      "OAuth",
      "AWS S3",
      "AWS EC2",
      "Jest",
    ],
  },
  {
    init: "LS",
    company: "Lodestone",
    tag: "ENTERPRISE",
    role: "Software Developer",
    period: "Jan 2019 — Dec 2019",
    color: "var(--muted-bright)",
    achievements: [
      "Reduced defect triage time by 30% and returned 2+ hours per week to engineers by building QVision — an internal QA monitoring dashboard now used daily by 700+ engineers across 10+ CI test suites — and wiring Jira PI integration to auto-create tickets from pipeline events.",
      "Cut manual HR work by ~35% by deploying Tango HRMS across 8 modules for 300+ employees, integrating RFID attendance, fingerprint recognition, and Jira PI automation.",
    ],
    tech: ["React", "Redux", "Spring Boot", "JavaScript", "CSS3", "Data Visualization"],
  },
];

export const EDUCATION = [
  {
    degree: "M.Sc. (Information & Communication Technology)",
    institute: "Veer Narmad South Gujarat University",
    university: "VNSGU",
    period: "Jul 2017 – Jul 2019",
    cgpa: "7.03 / 10.0",
    grade: "First Class with Distinction",
    color: "var(--cyan)",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institute: "Veer Narmad South Gujarat University",
    university: "VNSGU",
    period: "Jul 2014 – Feb 2017",
    cgpa: "7.87 / 10.0",
    grade: "First Class with Distinction",
    color: "var(--gold)",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "OPS-001",
    name: "ATOM PORTAL — MFE PLATFORM",
    desc: "4-app micro-frontend insurance platform serving 600K+ agents daily and supporting 10+ insurance products across Agency, Alternate, and Banca channels.",
    tags: [
      "Next.js",
      "Module Federation",
      "Webpack 5",
      "TypeScript",
      "Redux Toolkit",
    ],
    metrics: [
      { v: "600K+", l: "AGENTS" },
      { v: "4", l: "MFE APPS" },
      { v: "5M+", l: "MONTHLY USERS" },
    ],
    color: "var(--red)",
    bg: "linear-gradient(135deg,#1a0608 0%,#070d16 100%)",
    details:
      "Built ATOM Portal as a 4-app micro-frontend platform with React, Next.js, TypeScript and Webpack Module Federation. Delivered a shared component system, JSON-driven workflow configuration, and AWS CodeArtifact package distribution to reduce deployment conflicts by 60% and speed new module onboarding by ~40%.",
  },
  {
    id: "OPS-002",
    name: "GROWPRO MARKETING ENGINE",
    desc: "Agent-facing campaign platform used by 600K+ agents with drag-and-drop poster creation and HTML-to-PDF export.",
    tags: ["React", "Next.js", "Material UI", "react-draggable", "AWS S3"],
    metrics: [
      { v: "600K+", l: "AGENTS" },
      { v: "40-55%", l: "ENGAGEMENT" },
      { v: "100K+", l: "ASSETS" },
    ],
    color: "var(--cyan)",
    bg: "linear-gradient(135deg,#001518 0%,#070d16 100%)",
    details:
      "Built GrowPro as a solo frontend engine for campaign creation — a drag-and-drop poster editor with 10+ configurable poster types, dynamic templates, and HTML-to-PDF export via Next.js API routes. Scaled to support 100K+ campaign assets and achieve 20-40ms PDF render times.",
  },
  {
    id: "OPS-003",
    name: "@STAR-UI CLAIMS PACKAGE",
    desc: "Shared internal NPM package for claims workflows, distributed via AWS CodeArtifact and consumed by multiple apps.",
    tags: ["React", "TypeScript", "Rollup", "Material UI", "AWS CodeArtifact"],
    metrics: [
      { v: "20+", l: "COMPONENTS" },
      { v: "4", l: "CONSUMERS" },
      { v: "0", l: "BREAKING CHANGES" },
    ],
    color: "var(--gold)",
    bg: "linear-gradient(135deg,#120a00 0%,#070d16 100%)",
    details:
      "Built @star-ui/atom-claims-ui as a shared internal NPM package for claims intake, review, query management, and settlement. Migrated bundling to Rollup ES modules with tree-shaking, cut dead code by 25%, and shipped 3 major releases with zero breaking changes via AWS CodeArtifact.",
  },
  {
    id: "OPS-004",
    name: "QVISION — QA DASHBOARD",
    desc: "Real-time QA monitoring dashboard used by 700+ engineers across CI suites, paired with Jira PI automation and HRMS attendance tooling.",
    tags: ["React", "Redux", "Spring Boot", "Data Visualization", "CSS3"],
    metrics: [
      { v: "700+", l: "ENGINEERS" },
      { v: "10+", l: "CI SUITES" },
      { v: "8", l: "HR MODULES" },
    ],
    color: "var(--red)",
    bg: "linear-gradient(135deg,#0a0208 0%,#070d16 100%)",
    details:
      "Built QVision to surface CI pipeline health with analytics, automation trend reporting, and Jira PI ticket automation. Also delivered the Tango HRMS attendance module across 8 modules for 300+ employees with RFID and fingerprint integration.",
  },
];

// ─── AI Bot ───────────────────────────────────────────────────────────────────
export const BOT_QUICK_PROMPTS = [
  "What's Nikunj's specialty?",
  "Tell me about the MFE work",
  "Is he open to hire?",
  "Current tech stack?",
];

/**
 * BOT_KNOWLEDGE_BASE — Humanized, conversational responses
 *
 * Paste this into src/data/index.js, replacing the existing BOT_KNOWLEDGE_BASE export.
 *
 * Changes:
 *  - 3-5 response variants per topic (random pick = feels less robotic)
 *  - Written like a knowledgeable colleague, not a bullet-point FAQ
 *  - "extra" field used when visitor says "tell me more / elaborate"
 *  - bye + smalltalk categories added
 */

export const BOT_KNOWLEDGE_BASE = {

  // ── Greeting ──────────────────────────────────────────────────────────────
  greeting: {
    keywords: ["hi", "hello", "hey", "yo", "start", "help"],
    responses: [
      "Hey! Happy to help. You can ask me about Nikunj's experience, the systems he's built, his tech stack, or whether he's open to new opportunities.",
      "Hi there! I know Nikunj's work pretty well — feel free to ask about his projects, skills, background, or how to get in touch.",
      "Hello! Ask me anything about Nikunj — his architecture work, the tech he uses, or what kind of roles he's looking at.",
    ],
  },

  // ── Who is Nikunj ─────────────────────────────────────────────────────────
  who: {
    keywords: ["who is nikunj", "about nikunj", "tell me about", "profile", "summary", "background", "overview", "introduce"],
    responses: [
      "Nikunj is a Senior Frontend Engineer based in Pune with 7+ years of experience. He's currently at Star Health & Allied Insurance as an SDE-3, where he architects large-scale React and micro-frontend platforms used by 600K+ users.",
      "He's a frontend architect specialising in React, Next.js, and micro-frontend systems built with Webpack Module Federation. His current platform at Star Health serves 600K agents across multiple insurance channels.",
      "Nikunj has been building scalable frontend systems for 7+ years. His sweet spot is large-scale React architecture, micro-frontends, and cloud-native delivery on AWS — currently doing exactly that at Star Health in Pune.",
    ],
    extra: [
      "Beyond the tech, he's also focused on engineering standards — he introduced SonarQube, Snyk, and Husky across a 10-engineer team to raise code quality and security consistency.",
      "He's the kind of engineer who thinks about the whole system — not just the UI, but the build pipeline, package distribution, team workflows, and long-term maintainability.",
    ],
  },

  // ── Current role ──────────────────────────────────────────────────────────
  current_role: {
    keywords: ["current role", "current job", "star health", "sde-3", "atom portal", "present", "working now", "current company"],
    responses: [
      "He's currently an SDE-3 at Star Health & Allied Insurance in Pune. His main project is the ATOM Portal — a micro-frontend platform with 4 independently deployed apps that serve 600K agents across Agency, Alternate, and Banca channels.",
      "At Star Health, Nikunj leads the frontend architecture for ATOM Portal. It's a 4-app micro-frontend system built on Webpack Module Federation, serving 600K agents. He also built GrowPro — a campaign platform that delivered a 40-55% engagement lift.",
      "He joined Star Health in April 2023 as SDE-3. The big project there is ATOM Portal — four independently deployable micro-frontends sharing a Module Federation runtime. He also created an internal NPM package (@star-ui/atom-claims-ui) that's now used by all four apps.",
    ],
    extra: [
      "One of the more interesting things he built there is a JSON-driven UI configuration system — complex insurance workflows render dynamically without any code changes. It's made the platform significantly easier to maintain.",
      "He's also standardised the team's engineering practices: SonarQube for code quality, Snyk for security scanning, Husky for pre-commit hooks, and Storybook for component documentation across a 10-engineer team.",
    ],
  },

  // ── Experience / career ───────────────────────────────────────────────────
  experience: {
    keywords: ["experience", "years", "career", "work history", "companies", "employment", "past jobs", "previous"],
    responses: [
      "Nikunj has 7+ years in frontend development across four companies. Currently SDE-3 at Star Health (2023–present). Before that: AltezzaSys (healthcare dashboards, 2022), TechAvidus (product apps, 2020–2022), and Lodestone (internal tooling, 2019).",
      "His career spans insurtech, healthtech, and product companies. He's been at Star Health since April 2023, and before that worked at AltezzaSys on the BSWHealth platform, TechAvidus building React product apps, and Lodestone where he built a CI monitoring dashboard called QVision.",
      "Seven-plus years, four companies. The thread through all of them is building React-based systems that scale — from internal dashboards at Lodestone to a platform serving 600K users at Star Health.",
    ],
    extra: [
      "At AltezzaSys he worked on the BSWHealth healthcare platform — React, Redux-Saga, and Storybook for a component library, deployed on AWS Amplify with CloudFront. At TechAvidus he handled more full-stack-adjacent work: Stripe payments, Facebook OAuth, AWS S3/EC2 integrations.",
    ],
  },

  // ── Architecture / MFE ────────────────────────────────────────────────────
  architecture: {
    keywords: ["architecture", "micro frontend", "microfrontend", "mfe", "module federation", "webpack", "system design", "scalable"],
    responses: [
      "Micro-frontend architecture is genuinely his speciality. At Star Health he designed a system where 4 apps deploy independently but share a Module Federation runtime — each team ships without touching the others.",
      "His MFE work at Star Health is the real deal: 4 independently deployable apps using Webpack Module Federation, a shared component library via AWS CodeArtifact, and a JSON-driven rendering layer so business workflows change without code deploys.",
      "He's built two major micro-frontend systems in production. The ATOM Portal at Star Health (4 apps, 600K users) and earlier work at AltezzaSys. He handles everything from the Webpack config and shared dependency strategy down to how teams consume the packages.",
    ],
    extra: [
      "The interesting design decision on ATOM Portal was the JSON-driven UI config — rather than hardcoding insurance workflow screens, the UI renders from a configuration object. That means product and ops teams can change complex workflows without a frontend release.",
      "For package distribution he built @star-ui/atom-claims-ui — a private NPM package distributed via AWS CodeArtifact with Rollup ES module output and full tree-shaking. It covers the entire claims domain UI and has had zero breaking changes across 4 consuming apps.",
    ],
  },

  // ── Skills / tech stack ───────────────────────────────────────────────────
  skills: {
    keywords: ["skills", "tech stack", "technologies", "tools", "frameworks", "languages", "typescript", "react", "next"],
    responses: [
      "His core stack is React, Next.js, and TypeScript — with Redux Toolkit and Redux-Saga for state management at scale. On the architecture side he specialises in Webpack Module Federation and Rollup for library builds. Cloud-wise he's comfortable with AWS Amplify, S3, CloudFront, and CodeArtifact.",
      "React ecosystem is his home base: React, Next.js, TypeScript, Redux Toolkit, Material UI, Storybook. He's also deep on the build tooling side — Webpack 5, Rollup, Module Federation. For quality: Jest, React Testing Library, SonarQube, Snyk, and Husky.",
      "Frontend-first but infrastructure-aware. React/Next.js/TypeScript for the UI layer, Webpack Module Federation for MFE architecture, Rollup for library bundling, and AWS (Amplify, S3, CloudFront, CodeArtifact) for deployment and package distribution.",
    ],
    extra: [
      "On the testing and quality side: Jest and React Testing Library for unit/integration tests, SonarQube as a code quality gate, Snyk for dependency vulnerability scanning, and Husky to enforce all of this at commit time.",
    ],
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: {
    keywords: ["projects", "what has he built", "growpro", "claims", "qvision", "atom", "portfolio", "built", "made"],
    responses: [
      "The four main projects worth knowing: ATOM Portal (4-app MFE insurance platform, 600K users), GrowPro (agent marketing campaign tool with drag-and-drop editor, 40-55% engagement lift), @star-ui/atom-claims-ui (internal NPM package for claims workflows), and QVision (real-time CI monitoring dashboard at Lodestone).",
      "His flagship work is ATOM Portal at Star Health — a micro-frontend platform serving 600K agents. Alongside that he built GrowPro, a campaign creation tool where agents generate personalised marketing materials. He also authored an internal claims UI package used by 4 separate apps.",
      "ATOM Portal is the big one — 4 micro-frontends, 600K users, 10 engineers. GrowPro is the most product-visible: agents use it to create campaign posters with a drag-and-drop editor, and it drove a 40-55% engagement lift. The @star-ui claims package is more infrastructure — 20+ components, zero breaking changes across 4 consumers.",
    ],
    extra: [
      "GrowPro has some interesting technical bits: a drag-and-drop poster editor built with react-draggable, dynamic template rendering with live campaign data, and HTML-to-PDF export via a Next.js API route. It also handles 100K+ asset uploads through a multipart S3 workflow.",
      "QVision was built at Lodestone to surface CI pipeline health in a visual dashboard — pass/fail rates, historical trends, automation performance. It was paired with a Tango HRMS attendance module. Smaller scale than the Star Health work, but it's where he got sharp on React + data visualisation.",
    ],
  },

  // ── Availability / hiring ─────────────────────────────────────────────────
  availability: {
    keywords: ["available", "open to work", "job", "opportunity", "hire", "hiring", "looking", "open to", "new role", "recruit", "position"],
    responses: [
      "Yes, he's open to new opportunities — especially roles involving frontend architecture, micro-frontend platforms, or leading frontend engineering on product-focused teams.",
      "He's actively exploring. He's a strong fit for teams that need someone to own the frontend architecture end-to-end, not just write components. Particularly interested in roles where he can work on large-scale or complex UI systems.",
      "Open to new roles, yes. His ideal fit is a team building something ambitious on the frontend — whether that's a micro-frontend platform, a design system at scale, or a product where frontend performance and architecture actually matter.",
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    keywords: ["contact", "email", "linkedin", "github", "phone", "reach", "get in touch", "connect", "message"],
    responses: [
      "Best ways to reach Nikunj: email at nikunjpatel1581996@gmail.com, phone +91 8980368059, or LinkedIn at linkedin.com/in/nikunj-patel-dev. You can also use the Contact section on this site to send a message directly.",
      "You can email him at nikunjpatel1581996@gmail.com or connect on LinkedIn (nikunj-patel-dev). His GitHub is github.com/NiksRock if you want to see his code. The contact form on this page works too.",
      "Reach him via email (nikunjpatel1581996@gmail.com), phone (+91 8980368059), or LinkedIn at linkedin.com/in/nikunj-patel-dev. The Contact section at the bottom of this portfolio also has a direct message option.",
    ],
  },

  // ── Location ──────────────────────────────────────────────────────────────
  location: {
    keywords: ["location", "where", "city", "country", "pune", "india", "based", "remote"],
    responses: [
      "He's based in Pune, India. Open to discussing remote roles or opportunities in other locations.",
      "Pune, India — and open to remote opportunities or relocation depending on the role.",
    ],
  },

  // ── Education ─────────────────────────────────────────────────────────────
  education: {
    keywords: ["education", "degree", "college", "study", "university", "vnsgu", "qualification", "academic"],
    responses: [
      "He holds an M.Sc. in Information & Communication Technology from Veer Narmad South Gujarat University (2017–2019, CGPA 7.03, First Class with Distinction) and a BCA from the same university (2014–2017, CGPA 7.87, First Class with Distinction).",
      "His academic background: M.Sc. ICT and BCA, both from VNSGU in Surat. Graduated in 2019 and moved into professional development straight after.",
    ],
  },

  // ── AWS / cloud ───────────────────────────────────────────────────────────
  aws: {
    keywords: ["aws", "cloud", "amazon", "amplify", "s3", "cloudfront", "ec2", "codeartifact", "infrastructure"],
    responses: [
      "He's used AWS pretty extensively on the frontend side: Amplify for hosting and CI/CD, CloudFront for CDN delivery, S3 for asset storage, CodeArtifact for distributing private NPM packages, and EC2 for backend API integration.",
      "His AWS experience is frontend-deployment focused — Amplify, CloudFront, S3, and CodeArtifact are the main ones. CodeArtifact is interesting; he set it up as a private NPM registry for the @star-ui claims package so all 4 consuming apps could version and install it cleanly.",
    ],
  },

  // ── Performance ───────────────────────────────────────────────────────────
  frontend_performance: {
    keywords: ["performance", "optimize", "bundle", "lazy load", "speed", "fast", "lighthouse", "core web vitals"],
    responses: [
      "Performance is baked into how he works — code splitting and lazy loading with React.lazy, tree-shaken Rollup builds for library packages, table virtualization for large datasets, and CloudFront CDN for global asset delivery.",
      "He approaches performance systematically: bundle analysis to find bloat, lazy loading below-the-fold sections, efficient Redux selectors to cut re-renders, and Rollup's tree-shaking to keep library packages lean. CloudFront handles the CDN layer.",
    ],
  },

  // ── Testing / quality ─────────────────────────────────────────────────────
  testing: {
    keywords: ["testing", "jest", "unit test", "react testing library", "quality", "sonarqube", "snyk", "husky"],
    responses: [
      "His quality setup has several layers: Jest and React Testing Library for tests, SonarQube as a code quality gate in CI, Snyk for dependency vulnerability scanning, and Husky pre-commit hooks to block anything that fails linting or tests before it even commits.",
      "He introduced a full quality stack at Star Health — SonarQube gates, Snyk security scans, and Husky hooks that run ESLint and tests on every commit. Combined with structured PR reviews, it raised the baseline across the whole 10-engineer team.",
    ],
  },

  // ── Leadership / team ─────────────────────────────────────────────────────
  leadership_examples: {
    keywords: ["leadership", "team", "mentoring", "lead", "manage", "people", "engineering culture", "standards"],
    responses: [
      "He takes an informal tech-lead role at Star Health — not a people manager, but the person who sets the architectural direction and raises the engineering bar. He introduced the shared component libraries, CI quality gates, and Storybook documentation that the whole team now relies on.",
      "He's led by example at Star Health: built the shared tooling, ran structured PR reviews with real feedback, guided engineers through adopting the internal NPM packages, and set up the SonarQube/Snyk/Husky pipeline that became the team's standard.",
    ],
  },

  // ── Specialisation ────────────────────────────────────────────────────────
  specialization: {
    keywords: ["specialize", "specialty", "best at", "core expertise", "focus", "strengths", "strong"],
    responses: [
      "Micro-frontend architecture and large-scale React systems. He's done it twice in production — the ATOM Portal at Star Health and earlier work at AltezzaSys — so it's not just theoretical.",
      "His sharpest edge is frontend architecture at scale: designing MFE platforms with Webpack Module Federation, distributing reusable component libraries, and building the engineering workflows that keep large teams productive.",
      "React architecture and micro-frontends are where he's strongest. The interesting bit is that he works across the whole delivery stack — from Webpack config and Rollup builds to AWS deployment and team engineering standards.",
    ],
  },

  // ── Website ───────────────────────────────────────────────────────────────
  website: {
    keywords: ["website", "portfolio", "nikunj.life", "url", "link", "site"],
    responses: [
      "You're already on it! nikunj.life is his portfolio — built with React, Vite, and a custom audio engine. The full experience is right here.",
      "This is the portfolio — nikunj.life. Built with React + Vite. You can scroll through his skills, experience, and projects, or just keep asking me things.",
    ],
  },

  // ── Smalltalk ─────────────────────────────────────────────────────────────
  smalltalk: {
    keywords: ["ok", "cool", "nice", "great", "interesting", "thanks", "thank you", "awesome", "got it"],
    responses: [
      "Glad that helped! Anything else you'd like to know about Nikunj?",
      "Of course! Feel free to ask about his projects, tech stack, or how to get in touch.",
      "Happy to help. Let me know if you want to dig into any of his work in more detail.",
    ],
  },

  // ── Bye ───────────────────────────────────────────────────────────────────
  bye: {
    keywords: ["bye", "goodbye", "see you", "later", "take care", "cya"],
    responses: [
      "Take care! If you ever want to revisit Nikunj's work, I'll be right here.",
      "Cheers! Feel free to come back if you have more questions.",
      "Goodbye! Hope you found what you were looking for.",
    ],
  },

  // ── Abuse ─────────────────────────────────────────────────────────────────
  abuse: {
    keywords: ["stupid", "idiot", "dumb", "useless", "moron", "hate", "suck"],
    responses: [
      "All good — if you have questions about Nikunj's work or experience, I'm happy to help with those.",
      "No worries. Feel free to ask anything about Nikunj's background or projects.",
    ],
  },

  // ── Fallback ──────────────────────────────────────────────────────────────
  fallback: [
    "I'm not sure I caught that. You could ask about Nikunj's experience, his micro-frontend work, tech stack, projects, or whether he's open to new roles.",
    "That one's outside what I know. Try asking about his background, the systems he's built, or how to get in touch.",
    "Not quite sure what you're after — feel free to rephrase! I can cover his skills, career, projects, availability, or contact details.",
  ],
  salary: {
  keywords: [
    "salary",
    "ctc",
    "salary expectation",
    "expected salary",
    "compensation",
    "package",
    "pay",
    "how much salary",
    "salary range",
    "salary expectation nikunj",
    "expected ctc"
  ],
  responses: [
    "Nikunj is open to discussing compensation depending on the role, scope, and team. For the right senior frontend or architecture role, he's happy to align with market standards.",
    
    "Compensation is flexible and depends on the role and responsibilities. For senior frontend architecture roles, he's open to discussing competitive market packages.",
    
    "He's open to discussing salary based on the opportunity, team, and impact of the role. Best approach is to connect with him directly to discuss details."
  ]
},
challenges: {
  keywords: [
    "challenge",
    "difficult",
    "difficulty",
    "problem",
    "hard part",
    "biggest challenge",
    "issues"
  ],
  responses: [
    "One of the biggest challenges he tackled was designing a micro-frontend platform where multiple teams could deploy independently without breaking shared dependencies. Solving that required careful Module Federation configuration and shared package strategy.",

    "Scaling frontend architecture for hundreds of thousands of users can be tricky. At Star Health he solved this by splitting the platform into independently deployable micro-frontends and building shared libraries distributed through AWS CodeArtifact.",

    "Large enterprise frontend systems often suffer from coupling between teams. Nikunj focused on solving that by designing shared UI packages, automated quality gates, and clear architecture boundaries."
  ]
},
};

// ─── Typewriter strings ───────────────────────────────────────────────────────
export const TYPEWRITER_ITEMS = [
  "SENIOR FRONTEND ENGINEER",
  "MICRO-FRONTEND ARCHITECT",
  "REACT / NEXT.JS",
  "UI SYSTEMS",
  "AWS-DRIVEN FRONTEND",
];

// ─── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "SKILLS", href: "#skills" },
  { label: "RECORD", href: "#record" },
  { label: "MISSIONS", href: "#missions" },
  { label: "CONTACT", href: "#contact" },
];

// ─── Hero stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "7+", label: "YEARS EXP" },
  { value: "4", label: "MFE APPS" },
  { value: "5M+", label: "MONTHLY USERS" },
  { value: "20+", label: "COMPONENTS" },
];

// ─── Google Sheets logger config ──────────────────────────────────────────────
export const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL || "";