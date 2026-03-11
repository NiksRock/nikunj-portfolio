// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS = [
  { id: 'ALPHA',   level: 95, name: 'React Ecosystem',   tags: ['React', 'Next.js', 'Redux', 'Redux-Saga'] },
  { id: 'BRAVO',   level: 92, name: 'TypeScript & JS',   tags: ['TypeScript', 'ES6+', 'HTML5', 'CSS3'] },
  { id: 'CHARLIE', level: 90, name: 'Micro-Frontends',   tags: ['Module Fed.', 'Webpack', 'Rollup', 'Nx'] },
  { id: 'DELTA',   level: 87, name: 'UI & Styling',      tags: ['Material UI', 'Storybook', 'Tailwind', 'ARIA'] },
  { id: 'ECHO',    level: 85, name: 'Cloud & Infra',     tags: ['AWS Amplify', 'S3', 'CloudFront', 'CodeArtifact'] },
  { id: 'FOXTROT', level: 83, name: 'Testing & CI',      tags: ['Jest', 'RTL', 'SonarQube', 'Snyk', 'Husky'] },
];

export const SKILL_BARS = [
  ['React / Next.js',           95],
  ['TypeScript',                92],
  ['Module Federation',         90],
  ['Redux / Redux-Saga',        88],
  ['Material UI / Storybook',   85],
  ['AWS Cloud Infra',           83],
];

export const DEPLOYMENT_STATS = [
  ['MFE APPS', '4',    'var(--red)'],
  ['TEAM SIZE', '10',  'var(--cyan)'],
  ['USERS',     '600K','var(--gold)'],
  ['EXP',       '7 YRS','var(--red)'],
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    init:    'SH',
    company: 'Star Health & Allied Insurance',
    tag:     'INSURTECH',
    role:    'Software Development Engineer – 3',
    period:  'Apr 2023 — Present',
    color:   'var(--red)',
    achievements: [
      'Architected a micro-frontend platform supporting 4 independently deployed applications via Webpack Module Federation, serving 600K agents and operations teams.',
      'Standardized frontend engineering across a 10-engineer team by introducing reusable component libraries, Husky pre-commit hooks, SonarQube, and Snyk security scanning.',
      'Built a Storybook-driven component system with 20 reusable UI components used across all ATOM applications.',
      'Implemented a JSON-driven UI configuration architecture enabling dynamic rendering of complex insurance workflows.',
      'Engineered claims workflow UI modules — @star-ui/atom-claims-ui — shipped as an internal AWS CodeArtifact package; significantly reduced duplicate implementations.',
      'Built a marketing platform (GrowPro) enabling 600K agents to generate campaign creatives with 40–55% engagement lift; featured drag-and-drop poster editor and HTML-to-PDF export.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Webpack 5', 'Module Federation', 'Redux Toolkit', 'Material UI', 'Storybook', 'Rollup', 'AWS CodeArtifact', 'SonarQube', 'Snyk'],
  },
  {
    init:    'AZ',
    company: 'AltezzaSys Systems',
    tag:     'HEALTHTECH',
    role:    'Software Engineer',
    period:  'Mar 2022 — Nov 2022',
    color:   'var(--cyan)',
    achievements: [
      'Developed operational dashboards and workflow UIs for BSWHealth using React, TypeScript, Redux, and Redux-Saga.',
      'Built a Storybook-based component library covering forms, tables, and layout primitives.',
      'Improved large-dataset rendering through table virtualization, filtering optimization, and pagination strategies.',
      'Deployed frontend apps on AWS Amplify with CloudFront CDN for optimal global delivery.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Redux-Saga', 'Storybook', 'AWS Amplify', 'AWS CloudFront'],
  },
  {
    init:    'TA',
    company: 'TechAvidus',
    tag:     'PRODUCT',
    role:    'Software Developer',
    period:  'Feb 2020 — Feb 2022',
    color:   'var(--gold)',
    achievements: [
      'Delivered React-based client applications using Redux Thunk and React Router across multiple product domains.',
      'Built reusable Material UI component systems including forms, dialogs, tables, and complex inputs.',
      'Integrated Stripe payment workflows, Facebook OAuth, email verification, and password reset flows.',
      'Connected frontend apps with AWS S3 for asset storage and EC2-hosted APIs.',
    ],
    tech: ['React', 'Redux', 'Redux Thunk', 'Material UI', 'Stripe', 'AWS S3', 'AWS EC2', 'Jest'],
  },
  {
    init:    'LS',
    company: 'Lodestone',
    tag:     'ENTERPRISE',
    role:    'Software Developer',
    period:  'Jan 2019 — Dec 2019',
    color:   'var(--muted-bright)',
    achievements: [
      'Built QVision — a QA monitoring dashboard displaying CI pipeline execution results with analytics and data visualization.',
      'Developed frontend systems using React, Redux, and Spring Boot for internal applications and operational dashboards.',
      'Delivered the attendance management module for the Tango HRMS platform supporting workforce tracking.',
    ],
    tech: ['React', 'Redux', 'Spring Boot', 'JavaScript', 'CSS3'],
  },
];

export const EDUCATION = [
  {
    degree: 'M.Sc ICT',
    institute: 'J.P. Dawer Institute of Information Science & Technology',
    university: 'VNSGU',
    period: 'Jul 2017 – Feb 2019',
    color: 'var(--cyan)',
  },
  {
    degree: 'BCA',
    institute: 'M.K. Institute of Computer Studies',
    university: 'VNSGU',
    period: 'Jun 2014 – May 2017',
    color: 'var(--gold)',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id:      'OPS-001',
    name:    'ATOM PORTAL — MFE PLATFORM',
    desc:    '4-application micro-frontend platform for 600K insurance agents across Agency, Alternate, and Banca channels at Star Health.',
    tags:    ['Next.js', 'Module Federation', 'Webpack 5', 'TypeScript', 'Redux Toolkit'],
    metrics: [{ v: '600K', l: 'USERS' }, { v: '4', l: 'MFE APPS' }, { v: '10', l: 'ENGINEERS' }],
    color:   'var(--red)',
    bg:      'linear-gradient(135deg,#1a0608 0%,#070d16 100%)',
    details: 'Mission-critical insurance distribution platform serving 600K agents. Architected 4 independently deployable micro-frontends with a shared Module Federation runtime. Implemented JSON-driven UI config for dynamic workflow rendering, distributed component libraries via AWS CodeArtifact, and enforced quality gates using Husky, SonarQube, and Snyk across a 10-engineer team.',
  },
  {
    id:      'OPS-002',
    name:    'GROWPRO MARKETING ENGINE',
    desc:    'Agent-facing campaign platform enabling 600K insurance agents to generate personalized marketing materials with 40–55% engagement lift.',
    tags:    ['React', 'Next.js', 'Material UI', 'react-draggable', 'AWS S3'],
    metrics: [{ v: '600K', l: 'AGENTS' }, { v: '55%', l: 'ENGAGEMENT' }, { v: '100K', l: 'ASSETS' }],
    color:   'var(--cyan)',
    bg:      'linear-gradient(135deg,#001518 0%,#070d16 100%)',
    details: 'Full-featured marketing creation platform built within the ATOM ecosystem. Drag-and-drop poster editor using react-draggable, dynamic template rendering with runtime campaign data, HTML-to-PDF export via Next.js API routes, and full asset management workflow supporting 100K+ campaign assets.',
  },
  {
    id:      'OPS-003',
    name:    '@STAR-UI CLAIMS PACKAGE',
    desc:    'Internal NPM package — claims workflow UI modules covering intake, review, query management, and settlement.',
    tags:    ['React', 'TypeScript', 'Rollup', 'Material UI', 'AWS CodeArtifact'],
    metrics: [{ v: '20+', l: 'COMPONENTS' }, { v: '4', l: 'APP CONSUMERS' }, { v: '0', l: 'BREAKING CHANGES' }],
    color:   'var(--gold)',
    bg:      'linear-gradient(135deg,#120a00 0%,#070d16 100%)',
    details: 'Private npm package @star-ui/atom-claims-ui distributed via AWS CodeArtifact. Covers full claims domain UI — hospital search, claim intake, review queues, query management, and settlement workflows. Built with Rollup ES module builds with tree-shaking, strict TypeScript, ESLint, and Storybook docs.',
  },
  {
    id:      'OPS-004',
    name:    'QVISION — QA DASHBOARD',
    desc:    'Real-time QA monitoring dashboard displaying CI pipeline execution results with analytics for automation performance.',
    tags:    ['React', 'Redux', 'Spring Boot', 'Data Visualization', 'CSS3'],
    metrics: [{ v: 'CI', l: 'INTEGRATED' }, { v: '∞', l: 'PIPELINE RUNS' }, { v: '⚡', l: 'REAL-TIME' }],
    color:   'var(--red)',
    bg:      'linear-gradient(135deg,#0a0208 0%,#070d16 100%)',
    details: 'Internal engineering tool built at Lodestone to surface CI pipeline health in a visual, actionable dashboard. Features analytics charts for automation pass/fail rates, historical trend analysis, and performance metrics. Also included the Tango HRMS attendance management module.',
  },
];

// ─── AI Bot ───────────────────────────────────────────────────────────────────

export const BOT_QUICK_PROMPTS = [
  "What's Nikunj's specialty?",
  'Tell me about the MFE work',
  'Is he open to hire?',
  'Current tech stack?',
];

/**
 * Keyword-matched response knowledge base.
 * Responses are conversational and human-sounding.
 */
export const BOT_KNOWLEDGE_BASE = {
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'sup', 'howdy', 'yo', 'greetings', 'good morning', 'good afternoon'],
    responses: [
      "Hey! Welcome to Nikunj's portfolio. I'm here to help you learn about his work — feel free to ask about his skills, projects, or whether he's available for new opportunities.",
      "Hi there! Happy to tell you about Nikunj. He's a Senior Frontend Engineer with 7 years of experience, currently working at Star Health Insurance in Pune. What would you like to know?",
      "Hello! I can walk you through Nikunj's background, projects, tech stack, or help you figure out if he'd be a good fit for your team. What's on your mind?",
    ],
  },
  who: {
    keywords: ['who is', 'who are', 'about nikunj', 'tell me about', 'introduce', 'summary', 'overview'],
    responses: [
      "Nikunj Patel is a Senior Frontend Engineer based in Pune, India, with 7 years of experience building enterprise-scale web platforms. He's currently SDE-3 at Star Health Insurance, where he led the architecture of a micro-frontend platform that serves 600K insurance agents. His main strengths are React, Next.js, TypeScript, and Webpack Module Federation.",
      "In short — Nikunj is a frontend specialist who's spent the last 7 years shipping production-grade React applications. What sets him apart is his deep focus on micro-frontend architecture and building scalable component systems. He's currently at Star Health Insurance leading frontend development for a platform used by 600,000 agents.",
    ],
  },
  skills: {
    keywords: ['skill', 'tech', 'technology', 'stack', 'tools', 'expertise', 'proficient', 'know', 'languages', 'frameworks', 'what can'],
    responses: [
      "Nikunj's core stack:\n\n• JavaScript / TypeScript — day-to-day languages\n• React & Next.js — his primary frameworks for 6+ years\n• Webpack Module Federation — his specialty for micro-frontend architecture\n• Redux & Redux-Saga — state management at scale\n• Material UI + Storybook — component-driven UI development\n• AWS — Amplify, S3, CloudFront, EC2, CodeArtifact\n• Testing — Jest, React Testing Library, SonarQube, Snyk\n\nHe's most confident in frontend architecture decisions and building systems that multiple teams can work on simultaneously.",
      "Beyond just 'knowing React', Nikunj specializes in frontend architecture — specifically how to structure large applications that multiple teams can build independently using Module Federation. He's also strong on the tooling side: CI/CD, code quality gates, and building shared component systems that don't become a maintenance headache.",
    ],
  },
  experience: {
    keywords: ['experience', 'work history', 'career', 'companies', 'worked', 'employment', 'years', 'how long'],
    responses: [
      "Nikunj has 7 years of frontend experience across four companies:\n\n1. Star Health Insurance (Apr 2023–Present) — SDE-3, leading micro-frontend architecture\n2. AltezzaSys Systems (Mar–Nov 2022) — building health-tech dashboards for BSWHealth\n3. TechAvidus (Feb 2020–Feb 2022) — full-stack product development with React\n4. Lodestone (Jan–Dec 2019) — his first role, building internal tools and dashboards\n\nHe's spent most of his career in product/platform roles rather than agency work, so he's used to owning things long-term.",
    ],
  },
  current: {
    keywords: ['current', 'currently', 'now', 'present', 'latest', 'star health', 'atom portal'],
    responses: [
      "Right now, Nikunj is SDE-3 at Star Health & Allied Insurance in Pune (since April 2023). He's been leading the ATOM Portal — a micro-frontend platform built with Webpack Module Federation that 600K insurance agents rely on across multiple business channels. He also introduced shared tooling across the 10-engineer team, including Storybook component libraries and automated quality gates.",
    ],
  },
  microfrontend: {
    keywords: ['micro frontend', 'microfrontend', 'micro-frontend', 'module federation', 'webpack', 'mfe', 'architecture'],
    responses: [
      "Micro-frontend architecture is genuinely Nikunj's strongest area. At Star Health, he designed and built a system where 4 separate React/Next.js apps are deployed independently but share a common Module Federation runtime. Teams can ship features without coordinating deployments, and shared UI packages are distributed through AWS CodeArtifact so everyone stays in sync without copy-pasting code.\n\nIt's a real production setup serving 600K users — not just a side project or experiment.",
      "He's spent the last couple of years deep in Module Federation — figuring out how to split large React codebases into independently deployable units that still feel like one coherent product to users. That includes handling shared dependencies, routing between micro-apps, and keeping a team of 10 engineers productive without stepping on each other.",
    ],
  },
  projects: {
    keywords: ['project', 'projects', 'built', 'developed', 'growpro', 'claims', 'atom', 'qvision', 'what has he made'],
    responses: [
      "Here are the main things Nikunj has shipped:\n\n• ATOM Portal — 4-app MFE platform at Star Health, 600K users\n• GrowPro — marketing campaign tool that gave 600K agents a drag-and-drop poster creator; drove 40–55% engagement lift\n• @star-ui/atom-claims-ui — internal npm package covering the entire claims workflow UI (20+ components, 0 breaking changes)\n• QVision — a CI pipeline monitoring dashboard he built at Lodestone\n\nMost of his projects are internal enterprise tools that don't have public URLs, but I can go deeper on any of them.",
    ],
  },
  growpro: {
    keywords: ['growpro', 'marketing', 'campaign', 'poster', 'drag and drop'],
    responses: [
      "GrowPro is one of his more interesting projects — it's a marketing platform he built at Star Health that lets 600K insurance agents create personalized campaign materials without needing a designer. The core of it was a drag-and-drop poster editor using react-draggable, with dynamic templates that pull in real agent data at runtime. It exports to PDF via Next.js API routes and manages 100K+ campaign assets on S3. The result was a 40–55% jump in agent engagement with marketing materials.",
    ],
  },
  education: {
    keywords: ['education', 'degree', 'study', 'college', 'university', 'qualification', 'msc', 'bca'],
    responses: [
      "Nikunj has a Master's in ICT from J.P. Dawer Institute (VNSGU, 2017–2019) and a BCA from M.K. Institute of Computer Studies (VNSGU, 2014–2017). Both from Veer Narmad South Gujarat University.",
    ],
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'github', 'connect', 'number'],
    responses: [
      "Here's how to reach Nikunj:\n\n📧 nikunjpatel1581996@gmail.com\n📞 +91 8980368059\n💼 linkedin.com/in/nikunj-patel-1aa949156\n💻 github.com/NiksRock\n\nEmail or LinkedIn tends to get the fastest response.",
    ],
  },
  availability: {
    keywords: ['available', 'availability', 'hire', 'hiring', 'open to work', 'job', 'opportunity', 'looking', 'open to'],
    responses: [
      "Yes, Nikunj is open to new opportunities! He's based in Pune but open to discussing remote roles or relocation depending on the opportunity. Best way to reach him is directly:\n\n📧 nikunjpatel1581996@gmail.com\n📞 +91 8980368059\n💼 linkedin.com/in/nikunj-patel-1aa949156",
      "He's actively exploring what's next. If you're looking for a senior frontend engineer with real micro-frontend architecture experience and a track record at scale, it's worth reaching out. Drop him a message at nikunjpatel1581996@gmail.com.",
    ],
  },
  aws: {
    keywords: ['aws', 'amazon', 'cloud', 'amplify', 's3', 'cloudfront', 'ec2', 'infrastructure', 'deployment'],
    responses: [
      "On the cloud side, Nikunj primarily works with AWS. His regular toolkit includes Amplify for CI/CD-connected hosting, S3 for asset storage, CloudFront as a CDN, EC2 for backend APIs, and CodeArtifact for distributing private npm packages to his team. It's a practical setup built around frontend needs rather than deep DevOps work.",
    ],
  },
  storybook: {
    keywords: ['storybook', 'component library', 'design system', 'ui components', 'reusable'],
    responses: [
      "Storybook has been a constant in Nikunj's work. At Star Health he built a 20+ component library that's used across all 4 ATOM apps, and he did something similar at AltezzaSys for the BSWHealth platform. His approach is component-first — design in isolation, document in Storybook, then compose into features. It keeps things consistent and makes onboarding new engineers much faster.",
    ],
  },
  location: {
    keywords: ['location', 'where', 'city', 'country', 'based', 'india', 'pune', 'remote', 'relocate'],
    responses: [
      "Nikunj is based in Pune, India. He's open to remote roles and can discuss relocation for the right opportunity. Reach him at nikunjpatel1581996@gmail.com to talk specifics.",
    ],
  },
  salary: {
    keywords: ['salary', 'ctc', 'compensation', 'pay', 'rate', 'package', 'cost', 'budget'],
    responses: [
      "I don't have details on compensation expectations — that's best discussed directly with Nikunj. You can reach him at nikunjpatel1581996@gmail.com or +91 8980368059.",
    ],
  },
  notice: {
    keywords: ['notice period', 'notice', 'joining', 'when can', 'start date', 'available from'],
    responses: [
      "I don't have specifics on his notice period or earliest joining date. Worth asking him directly — nikunjpatel1581996@gmail.com or +91 8980368059.",
    ],
  },
  fallback: [
    "Hmm, I'm not sure I have a good answer for that. I'm mainly set up to talk about Nikunj's skills, projects, work history, and availability. Could you rephrase, or try one of the quick prompts below?",
    "That one's a bit outside what I know well. I can tell you about Nikunj's tech stack, career history, specific projects, or how to get in touch. What would be most useful?",
    "I don't have enough context to answer that confidently. If it's about Nikunj's background or work, try asking it a different way — or reach out to him directly at nikunjpatel1581996@gmail.com.",
    "Not quite sure how to help with that. I'm best at answering questions about Nikunj's frontend engineering experience, skills, and availability for new roles.",
  ],
};

// ─── Typewriter strings ───────────────────────────────────────────────────────

export const TYPEWRITER_ITEMS = [
  'REACT ARCHITECT',
  'NEXT.JS ENGINEER',
  'MFE SPECIALIST',
  'MODULE FEDERATION',
  'AWS FRONTEND',
];

// ─── Nav links ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'SKILLS',   href: '#skills' },
  { label: 'RECORD',   href: '#record' },
  { label: 'MISSIONS', href: '#missions' },
  { label: 'CONTACT',  href: '#contact' },
];

// ─── Hero stats ───────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: '7+',   label: 'YEARS EXP' },
  { value: '4',    label: 'MFE APPS' },
  { value: '600K', label: 'USERS SERVED' },
  { value: '20+',  label: 'COMPONENTS' },
];

// ─── Google Sheets logger config ──────────────────────────────────────────────
// Free unanswered-question logging via Google Apps Script web app
// Setup: see README_BOT_LOGGER.md
export const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL || '';
