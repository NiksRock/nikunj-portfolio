// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    id: "ALPHA",
    level: 95,
    name: "React Ecosystem",
    tags: ["React", "Next.js", "Redux", "Redux-Saga"],
  },
  {
    id: "BRAVO",
    level: 92,
    name: "TypeScript & JS",
    tags: ["TypeScript", "ES6+", "HTML5", "CSS3"],
  },
  {
    id: "CHARLIE",
    level: 90,
    name: "Micro-Frontends",
    tags: ["Module Fed.", "Webpack", "Rollup", "Nx"],
  },
  {
    id: "DELTA",
    level: 87,
    name: "UI & Styling",
    tags: ["Material UI", "Storybook", "Tailwind", "ARIA"],
  },
  {
    id: "ECHO",
    level: 85,
    name: "Cloud & Infra",
    tags: ["AWS Amplify", "S3", "CloudFront", "CodeArtifact"],
  },
  {
    id: "FOXTROT",
    level: 83,
    name: "Testing & CI",
    tags: ["Jest", "RTL", "SonarQube", "Snyk", "Husky"],
  },
];

export const SKILL_BARS = [
  ["React / Next.js", 95],
  ["TypeScript", 92],
  ["Module Federation", 90],
  ["Redux / Redux-Saga", 88],
  ["Material UI / Storybook", 85],
  ["AWS Cloud Infra", 83],
];

export const DEPLOYMENT_STATS = [
  ["MFE APPS", "4", "var(--red)"],
  ["TEAM SIZE", "10", "var(--cyan)"],
  ["USERS", "600K", "var(--gold)"],
  ["EXP", "7 YRS", "var(--red)"],
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    init: "SH",
    company: "Star Health & Allied Insurance",
    tag: "INSURTECH",
    role: "Software Development Engineer – 3",
    period: "Apr 2023 — Present",
    color: "var(--red)",
    achievements: [
      "Architected a micro-frontend platform supporting 4 independently deployed applications via Webpack Module Federation, serving 600K agents and operations teams across Agency, Alternate, and Banca channels.",
      "Standardized frontend engineering across a 10-engineer team — introduced reusable component libraries, Husky pre-commit hooks, SonarQube quality checks, and Snyk security scanning.",
      "Built a Storybook-driven component system with 20 reusable UI components used across all ATOM Portal applications.",
      "Implemented a JSON-driven UI configuration architecture enabling dynamic rendering of complex insurance workflows without code changes.",
      "Engineered @star-ui/atom-claims-ui — an internal AWS CodeArtifact NPM package covering claim intake, review, query management, and settlement; reduced duplicate frontend implementations across 4 consuming apps.",
      "Built GrowPro marketing platform enabling 600K agents to generate personalized campaign creatives with 40–55% engagement lift; featured a drag-and-drop poster editor and HTML-to-PDF export via Next.js API routes.",
      "Collaborated with backend, product, and operations teams to define stable API contracts and workflow interfaces across micro-frontends.",
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
    ],
  },
  {
    init: "AZ",
    company: "AltezzaSys Systems",
    tag: "HEALTHTECH",
    role: "Software Engineer",
    period: "Mar 2022 — Nov 2022",
    color: "var(--cyan)",
    achievements: [
      "Developed operational dashboards and workflow UIs for the BSWHealth healthcare platform using React, TypeScript, Redux, and Redux-Saga.",
      "Built a Storybook-based component library covering forms, tables, and layout primitives for consistent UI across the platform.",
      "Architected Redux store structures and async workflows using Redux-Saga for scalable API integration.",
      "Improved large-dataset rendering performance through table virtualization, filtering optimization, and pagination strategies.",
      "Deployed frontend applications on AWS Amplify with CloudFront CDN for optimized global asset delivery.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Redux-Saga",
      "Storybook",
      "AWS Amplify",
      "AWS CloudFront",
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
      "Delivered React-based client applications using Redux Thunk and React Router across multiple product domains.",
      "Built reusable Material UI component systems including forms, dialogs, tables, and complex input components.",
      "Implemented authentication and account management flows — email/password login, Facebook OAuth, email verification, and password reset.",
      "Integrated Stripe payment workflows and notification services supporting transactional application features.",
      "Connected frontend apps with AWS S3 for asset storage and EC2-hosted APIs, ensuring reliable data access and scalable infrastructure.",
    ],
    tech: [
      "React",
      "Redux",
      "Redux Thunk",
      "Material UI",
      "Stripe",
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
      "Built QVision — a real-time QA monitoring dashboard displaying CI pipeline execution results with analytics and automation performance visualization.",
      "Developed frontend systems using React, Redux, and Spring Boot for internal applications and operational dashboards.",
      "Delivered the attendance management module for the Tango HRMS platform supporting workforce tracking.",
      "Improved dashboard responsiveness by optimizing data processing and rendering for large datasets.",
    ],
    tech: ["React", "Redux", "Spring Boot", "JavaScript", "CSS3"],
  },
];

export const EDUCATION = [
  {
    degree: "M.Sc ICT",
    institute: "J.P. Dawer Institute of Information Science & Technology",
    university: "VNSGU",
    period: "Jul 2017 – Feb 2019",
    color: "var(--cyan)",
  },
  {
    degree: "BCA",
    institute: "M.K. Institute of Computer Studies",
    university: "VNSGU",
    period: "Jun 2014 – May 2017",
    color: "var(--gold)",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "OPS-001",
    name: "ATOM PORTAL — MFE PLATFORM",
    desc: "4-application micro-frontend insurance distribution platform serving 600K agents across Agency, Alternate, and Banca channels at Star Health.",
    tags: [
      "Next.js",
      "Module Federation",
      "Webpack 5",
      "TypeScript",
      "Redux Toolkit",
    ],
    metrics: [
      { v: "600K", l: "USERS" },
      { v: "4", l: "MFE APPS" },
      { v: "10", l: "ENGINEERS" },
    ],
    color: "var(--red)",
    bg: "linear-gradient(135deg,#1a0608 0%,#070d16 100%)",
    details:
      "Mission-critical insurance distribution platform serving 600K+ agents across 10 insurance products. Architected 4 independently deployable micro-frontends with a shared Module Federation runtime. Implemented JSON-driven UI configuration for dynamic workflow rendering, distributed 20+ component libraries via AWS CodeArtifact, and enforced quality gates using Husky, SonarQube, and Snyk across a 10-engineer team.",
  },
  {
    id: "OPS-002",
    name: "GROWPRO MARKETING ENGINE",
    desc: "Agent-facing campaign platform enabling 600K insurance agents to generate personalized marketing materials with 40–55% engagement lift.",
    tags: ["React", "Next.js", "Material UI", "react-draggable", "AWS S3"],
    metrics: [
      { v: "600K", l: "AGENTS" },
      { v: "55%", l: "ENGAGEMENT" },
      { v: "100K", l: "ASSETS" },
    ],
    color: "var(--cyan)",
    bg: "linear-gradient(135deg,#001518 0%,#070d16 100%)",
    details:
      "Full-featured marketing creation platform built within the ATOM ecosystem. Features a drag-and-drop poster editor built with react-draggable, dynamic template rendering with runtime campaign data, HTML-to-PDF export via Next.js API routes, and a full asset management workflow supporting gallery, drafts, favorites, preview, and multipart uploads for 100K+ campaign assets.",
  },
  {
    id: "OPS-003",
    name: "@STAR-UI CLAIMS PACKAGE",
    desc: "Internal NPM package — claims workflow UI modules covering intake, review, query management, and settlement, distributed via AWS CodeArtifact.",
    tags: ["React", "TypeScript", "Rollup", "Material UI", "AWS CodeArtifact"],
    metrics: [
      { v: "20+", l: "COMPONENTS" },
      { v: "4", l: "APP CONSUMERS" },
      { v: "0", l: "BREAKING CHANGES" },
    ],
    color: "var(--gold)",
    bg: "linear-gradient(135deg,#120a00 0%,#070d16 100%)",
    details:
      "Private NPM package @star-ui/atom-claims-ui distributed via AWS CodeArtifact. Covers the full claims domain UI — hospital search, claim intake, review queues, query management, and settlement workflows. Built with Rollup ES module output with tree-shaking, strict TypeScript and ESLint standards, and full Storybook documentation. Consumed by 4 applications with zero breaking changes.",
  },
  {
    id: "OPS-004",
    name: "QVISION — QA DASHBOARD",
    desc: "Real-time QA monitoring dashboard displaying CI pipeline execution results with analytics and automation performance visualization.",
    tags: ["React", "Redux", "Spring Boot", "Data Visualization", "CSS3"],
    metrics: [
      { v: "CI", l: "INTEGRATED" },
      { v: "∞", l: "PIPELINE RUNS" },
      { v: "⚡", l: "REAL-TIME" },
    ],
    color: "var(--red)",
    bg: "linear-gradient(135deg,#0a0208 0%,#070d16 100%)",
    details:
      "Internal engineering tool built at Lodestone to surface CI pipeline health in a visual, actionable dashboard. Features analytics charts for automation pass/fail rates, historical trend analysis, and performance metrics. Improved dashboard responsiveness through optimized data processing and rendering for large datasets. Also delivered the Tango HRMS attendance management module at the same company.",
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
      "Best ways to reach Nikunj: email at nikunjpatel1581996@gmail.com, phone +91 8980368059, or LinkedIn at linkedin.com/in/nikunj-patel-1aa949156. You can also use the Contact section on this site to send a message directly.",
      "You can email him at nikunjpatel1581996@gmail.com or connect on LinkedIn (nikunj-patel-1aa949156). His GitHub is github.com/NiksRock if you want to see his code. The contact form on this page works too.",
      "Reach him via email (nikunjpatel1581996@gmail.com), phone (+91 8980368059), or LinkedIn. The Contact section at the bottom of this portfolio also has a direct message option.",
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
      "He has an M.Sc. in ICT from J.P. Dawer Institute (VNSGU, 2017-2019) and a BCA from M.K. Institute of Computer Studies (VNSGU, 2014-2017) — both from Veer Narmad South Gujarat University in Surat.",
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
  "REACT ARCHITECT",
  "NEXT.JS ENGINEER",
  "MFE SPECIALIST",
  "MODULE FEDERATION",
  "AWS FRONTEND",
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
  { value: "600K", label: "USERS SERVED" },
  { value: "20+", label: "COMPONENTS" },
];

// ─── Google Sheets logger config ──────────────────────────────────────────────
export const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL || "";