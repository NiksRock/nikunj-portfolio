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

export const BOT_KNOWLEDGE_BASE = {
  greeting: {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "yo", "start", "portfolio", "help"],
    responses: [
      "Hi! I'm Nikunj's portfolio assistant. I can help you explore his experience, projects, and the technologies he works with.",
      "Hello 👋 Feel free to ask anything about Nikunj — his background, technical skills, architecture work, or projects.",
      "Hey there! If you're curious about Nikunj's work, I can walk you through his experience, systems he's built, and the technologies he uses.",
    ],
  },
  who: {
    keywords: ["who is nikunj", "about nikunj", "tell me about nikunj", "profile", "summary", "background", "overview"],
    responses: [
      "Nikunj Patel is a Senior Frontend Engineer and React Architect with over 7 years of experience building scalable web applications. He specializes in large-scale frontend architecture, micro-frontend platforms using Webpack Module Federation, and React/Next.js ecosystems.",
      "Nikunj currently works as an SDE-3 at Star Health and Allied Insurance in Pune, building enterprise frontend platforms used by 600K+ users. You can explore his work at nikunj.life.",
    ],
  },
  website: {
    keywords: ["website", "portfolio website", "nikunj.life", "portfolio url", "portfolio link"],
    responses: [
      "Nikunj's portfolio is live at https://nikunj.life — it showcases his skills, work experience, and key projects with an interactive UI.",
    ],
  },
  experience: {
    keywords: ["experience", "years experience", "career", "work history", "companies", "employment"],
    responses: [
      `Nikunj has over 7 years of professional frontend development experience across multiple companies.

Current Role
SDE-3 — Star Health and Allied Insurance Co. Ltd, Pune (Apr 2023 – Present)

Previous Roles
• AltezzaSys Systems, Noida — Software Engineer (Mar 2022 – Nov 2022)
• TechAvidus, Gandhinagar — Software Developer (Feb 2020 – Feb 2022)
• Lodestone, Ahmedabad — Software Developer (Jan 2019 – Dec 2019)

His work has focused on large-scale React applications, micro-frontend architecture, and enterprise UI platforms.`,
    ],
  },
  current_role: {
    keywords: ["current role", "current job", "current company", "star health", "sde-3", "sde3", "present job", "atom portal"],
    responses: [
      `Nikunj currently works as an SDE-3 at Star Health and Allied Insurance in Pune.

He is the lead architect on the ATOM Portal — an internal insurance distribution platform supporting 10 insurance products across Agency, Alternate, and Banca channels, used by 600K agents and operations teams.

Key contributions:
• Designed and built a 4-app micro-frontend platform using Webpack Module Federation
• Built GrowPro — a marketing campaign platform with drag-and-drop poster editor
• Created @star-ui/atom-claims-ui, an internal NPM package used across 4 applications
• Standardized engineering practices across a 10-person team`,
    ],
  },
  architecture: {
    keywords: ["architecture", "system design", "frontend architecture", "microfrontend", "micro frontend", "module federation", "scalable frontend"],
    responses: [
      `Nikunj is deeply specialized in scalable frontend architecture.

At Star Health he designed a micro-frontend platform using Webpack Module Federation where 4 applications are independently deployed and share runtime dependencies without coupling.

His architecture experience includes:
• Webpack Module Federation for MFE orchestration
• JSON-driven dynamic UI configuration systems
• Reusable component libraries shipped as internal NPM packages
• Design systems with Storybook documentation
• Scalable Redux state management patterns
• Tree-shaken Rollup builds for library packages

These systems serve 600K+ users in production.`,
    ],
  },
  skills: {
    keywords: ["skills", "tech stack", "technologies", "tools", "frameworks", "languages", "tech", "skill loadout"],
    responses: [
      `Nikunj's core technical stack:

Languages & Runtime
• JavaScript (ES6+), TypeScript, HTML5, CSS3

Frameworks & Libraries
• React, Next.js, Redux, Redux Toolkit, Redux-Saga, Context API, Material UI

Frontend Architecture
• Micro-frontends (Webpack Module Federation)
• Component libraries, design systems, internal NPM packages
• Storybook, responsive UI, Web Accessibility (ARIA)

Testing & Quality
• Jest, React Testing Library
• SonarQube, Snyk, ESLint, Husky

Build & Tooling
• Webpack, Rollup, AWS CodeArtifact

Cloud & Infrastructure
• AWS Amplify, S3, CloudFront, EC2`,
    ],
  },
  projects: {
    keywords: ["projects", "what projects", "major work", "products", "what has he built", "growpro", "claims", "qvision"],
    responses: [
      `Key systems Nikunj has built:

ATOM Portal
4-app micro-frontend insurance distribution platform serving 600K+ agents at Star Health.

GrowPro Marketing Engine
Campaign creation platform with drag-and-drop poster editor, template rendering, and HTML-to-PDF export. 40–55% engagement lift for 600K agents.

@star-ui/atom-claims-ui
Internal NPM package with 20+ components covering claim intake, review, query management, and settlement — consumed by 4 applications.

QVision
Real-time QA dashboard visualizing CI pipeline results and automation performance at Lodestone.

BSWHealth Dashboard
Operational dashboards for healthcare workflows at AltezzaSys.

Tango HRMS
Attendance management module for workforce tracking.`,
    ],
  },
  strengths: {
    keywords: ["strength", "strengths", "strong points", "advantages", "best at"],
    responses: [
      `Nikunj's core strengths:

• Frontend architecture — designing scalable MFE platforms and component systems
• Building reusable UI libraries and internal NPM packages
• Performance optimization — virtualization, code splitting, tree-shaking, CDN delivery
• Engineering standards — quality tooling, code reviews, pre-commit hooks
• Cross-team collaboration — working with product, backend, and operations teams
• Mentoring engineers on shared frontend packages and architecture patterns`,
    ],
  },
  specialization: {
    keywords: ["specialize", "specialty", "core expertise", "main strength", "focus", "react architect"],
    responses: [
      "Nikunj specializes in enterprise frontend architecture — particularly micro-frontend platforms with Webpack Module Federation and reusable component systems that scale across multiple teams.",
      "His primary focus is building frontend platforms that stay maintainable at scale: modular UI libraries, JSON-driven dynamic rendering, and standardized engineering workflows.",
    ],
  },
  frontend_performance: {
    keywords: ["performance", "frontend performance", "optimize", "bundle size", "optimization", "lazy load"],
    responses: [
      `Nikunj applies a systematic approach to frontend performance:

• Code splitting and lazy loading (React.lazy + Suspense)
• Tree-shaking with optimized Rollup/Webpack builds
• Table virtualization for large datasets
• Efficient Redux selector patterns to minimize re-renders
• CloudFront CDN for global asset delivery
• Bundle analysis to identify and eliminate bloat`,
    ],
  },
  testing: {
    keywords: ["testing", "test", "jest", "unit test", "react testing library", "quality", "sonarqube"],
    responses: [
      `Nikunj's approach to code quality is layered:

Testing
• Jest for unit and integration tests
• React Testing Library for component behavior tests

Static Analysis
• SonarQube for code quality gates
• Snyk for dependency vulnerability scanning

Process
• Husky pre-commit hooks to block bad code at commit time
• Structured pull-request reviews with documented feedback`,
    ],
  },
  aws: {
    keywords: ["aws", "cloud", "amazon", "amplify", "s3", "cloudfront", "ec2", "codeartifact"],
    responses: [
      `Nikunj has hands-on experience with these AWS services:

• AWS Amplify — frontend hosting and CI/CD pipelines
• AWS CloudFront — CDN for optimized global asset delivery
• AWS S3 — static asset storage and deployment hosting
• AWS CodeArtifact — private NPM registry for internal component packages
• AWS EC2 — integration with backend APIs hosted on EC2 instances`,
    ],
  },
  leadership_examples: {
    keywords: ["leadership", "team leadership", "mentoring", "lead experience", "team lead"],
    responses: [
      `At Star Health, Nikunj takes an informal tech-lead role within the 10-engineer frontend team.

Examples of his leadership impact:
• Introduced shared component libraries that eliminated redundant UI code across teams
• Set up SonarQube and Snyk as mandatory quality gates in the CI pipeline
• Implemented Husky pre-commit hooks to enforce linting and tests before any commit
• Ran structured pull-request reviews with clear, educational feedback
• Guided engineers adopting internal packages distributed via AWS CodeArtifact`,
    ],
  },
  education: {
    keywords: ["education", "degree", "college", "study", "qualification", "university", "vnsgu"],
    responses: [
      `Nikunj's academic background:

• M.Sc. ICT — J.P. Dawer Institute of Information Science and Technology, VNSGU (Jul 2017 – Feb 2019)
• BCA — M.K. Institute of Computer Studies, VNSGU (Jun 2014 – May 2017)

Both from Veer Narmad South Gujarat University (VNSGU), Surat.`,
    ],
  },
  location: {
    keywords: ["location", "where is he based", "city", "country", "pune", "india"],
    responses: [
      "Nikunj is based in Pune, India. He is open to discussing remote opportunities or roles in other locations.",
    ],
  },
  availability: {
    keywords: ["available", "open to work", "job", "opportunity", "hiring", "hire"],
    responses: [
      "Nikunj is open to new opportunities — particularly roles involving frontend architecture, micro-frontend platforms, or engineering leadership on product-focused teams.",
      "Yes, Nikunj is actively exploring opportunities. He's a good fit for teams building scalable React platforms or looking for someone to lead frontend architecture decisions.",
    ],
  },
  contact: {
    keywords: ["contact", "email", "linkedin", "github", "phone", "reach", "get in touch"],
    responses: [
      `You can reach Nikunj through:

Email: nikunjpatel1581996@gmail.com
Phone: +91 8980368059
LinkedIn: linkedin.com/in/nikunj-patel-1aa949156
GitHub: github.com/NiksRock
Portfolio: https://nikunj.life

Or use the Contact section on this portfolio to send a message directly.`,
    ],
  },
  smalltalk: {
    keywords: ["ok", "thanks", "good", "bye", "cool", "nice", "great"],
    responses: [
      "You're welcome! Let me know if you'd like to explore Nikunj's projects or experience.",
      "Thanks for visiting. Feel free to ask anything else about Nikunj's work.",
    ],
  },
  abuse: {
    keywords: ["stupid", "idiot", "dumb", "useless", "moron"],
    responses: [
      "No worries 🙂 If you have questions about Nikunj's work or projects, I'm happy to help.",
      "All good. Let me know if you'd like to explore Nikunj's experience or portfolio.",
    ],
  },
  fallback: [
    "I'm not sure I caught that. Try asking about Nikunj's experience, skills, projects, or whether he's open to new opportunities.",
    "Feel free to rephrase — I can answer questions about Nikunj's background, tech stack, architecture work, or contact details.",
  ],
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