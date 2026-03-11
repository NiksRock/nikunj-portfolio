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
    color:   'var(--muted)',
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
 * Each category has an array of keywords and multiple response variants
 * (randomly selected to avoid feeling robotic).
 */
export const BOT_KNOWLEDGE_BASE = {
  greeting: {
    keywords: ['hi', 'hello', 'hey', 'sup', 'howdy', 'yo', 'greetings', 'good morning', 'good afternoon'],
    responses: [
      "NEXUS-AI ONLINE ⚡ Operative confirmed. I'm Nikunj's tactical portfolio assistant — ask me about his skills, experience, or availability.",
      "Scanning records... Hello! I'm NEXUS-AI. What would you like to know about Senior Frontend Engineer Nikunj Patel?",
    ],
  },
  who: {
    keywords: ['who is', 'who are', 'about nikunj', 'tell me about', 'introduce', 'summary', 'overview'],
    responses: [
      'Operative confirmed — Nikunj Patel is a Senior Frontend Engineer with 7 years of experience architecting enterprise web platforms using React, Next.js, TypeScript, and Webpack Module Federation. Currently SDE-3 at Star Health Insurance, serving 600K agents.',
      'Scanning records... Nikunj is a seasoned SDE-3 based in Pune, India, specializing in micro-frontend architecture, reusable component systems, and cloud-native frontend delivery on AWS.',
    ],
  },
  skills: {
    keywords: ['skill', 'tech', 'technology', 'stack', 'tools', 'expertise', 'proficient', 'know', 'languages', 'frameworks'],
    responses: [
      'Affirmative. Core weapons loadout:\n\n⚡ Languages: JavaScript ES6+, TypeScript, HTML5, CSS3\n⚛️ Frameworks: React, Next.js, Redux, Redux-Saga, Material UI\n🏗️ Architecture: Micro-Frontends via Webpack Module Federation\n🧪 Quality: Jest, React Testing Library, SonarQube, Snyk\n☁️ Cloud: AWS Amplify, S3, CloudFront, EC2, CodeArtifact',
    ],
  },
  experience: {
    keywords: ['experience', 'work history', 'career', 'companies', 'worked', 'employment', 'years', 'how long'],
    responses: [
      'Scanning field record... 7 years active duty across 4 deployments:\n\n🔴 Star Health Insurance — SDE-3 (Apr 2023–Present)\n🔵 AltezzaSys Systems — Software Engineer (Mar–Nov 2022)\n🟡 TechAvidus — Software Developer (Feb 2020–Feb 2022)\n⬜ Lodestone — Software Developer (Jan–Dec 2019)',
    ],
  },
  current: {
    keywords: ['current', 'currently', 'now', 'present', 'latest', 'star health', 'atom portal'],
    responses: [
      'Current deployment: SDE-3 at Star Health & Allied Insurance, Pune (Apr 2023–Present). Leading architecture of the ATOM Portal — a 4-app micro-frontend platform on Webpack Module Federation serving 600K agents across insurance distribution channels.',
    ],
  },
  microfrontend: {
    keywords: ['micro frontend', 'microfrontend', 'micro-frontend', 'module federation', 'webpack', 'mfe', 'architecture'],
    responses: [
      'Micro-frontend architecture is Nikunj\'s primary specialization. At Star Health he architected 4 independently deployable React/Next.js apps sharing a Module Federation runtime. Teams consume shared UI packages distributed via AWS CodeArtifact — enabling parallel feature shipping without conflicts.',
    ],
  },
  projects: {
    keywords: ['project', 'projects', 'built', 'developed', 'growpro', 'claims', 'atom', 'qvision', 'what has he made'],
    responses: [
      'Mission archive:\n\n🚀 ATOM Portal — MFE platform, 600K agents\n📣 GrowPro — Marketing campaign engine, 40–55% engagement\n📦 @star-ui/atom-claims-ui — Internal claims UI package, 20+ components\n📊 QVision — CI pipeline QA dashboard\n👥 Tango HRMS — Attendance management module',
    ],
  },
  growpro: {
    keywords: ['growpro', 'marketing', 'campaign', 'poster', 'drag and drop'],
    responses: [
      'GrowPro is a marketing platform enabling 600K agents to create personalized campaign materials — achieving 40–55% engagement. Key systems: drag-and-drop poster editor (react-draggable), dynamic template rendering, HTML-to-PDF export via Next.js API routes, and asset management supporting 100K+ files.',
    ],
  },
  education: {
    keywords: ['education', 'degree', 'study', 'college', 'university', 'qualification', 'msc', 'bca'],
    responses: [
      'Academic clearance confirmed:\n\n🎓 M.Sc ICT — J.P. Dawer Institute / VNSGU (2017–2019)\n🎓 BCA — M.K. Institute / VNSGU (2014–2017)',
    ],
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'github', 'connect', 'number'],
    responses: [
      'Transmitting contact data:\n\n📧 nikunjpatel1581996@gmail.com\n📞 +91 8980368059\n💼 linkedin.com/in/nikunj-patel-1aa949156\n💻 github.com/NiksRock',
    ],
  },
  availability: {
    keywords: ['available', 'availability', 'hire', 'hiring', 'open to work', 'job', 'opportunity', 'looking', 'open to'],
    responses: [
      'Operative is open to deploy. For opportunities, transmit directly:\n📧 nikunjpatel1581996@gmail.com\n📞 +91 8980368059\n💼 linkedin.com/in/nikunj-patel-1aa949156',
    ],
  },
  aws: {
    keywords: ['aws', 'amazon', 'cloud', 'amplify', 's3', 'cloudfront', 'ec2', 'infrastructure', 'deployment'],
    responses: [
      'AWS stack confirmed: Amplify for CI/CD hosting, S3 for asset storage, CloudFront for CDN delivery, EC2 for API infrastructure, and CodeArtifact for private NPM package distribution across engineering teams.',
    ],
  },
  storybook: {
    keywords: ['storybook', 'component library', 'design system', 'ui components', 'reusable'],
    responses: [
      'Affirmative — Nikunj built Storybook-driven component systems at both Star Health (20+ components across all ATOM apps) and AltezzaSys (BSWHealth platform). Design-system-first thinking is core to his frontend architecture approach.',
    ],
  },
  location: {
    keywords: ['location', 'where', 'city', 'country', 'based', 'india', 'pune', 'remote', 'relocate'],
    responses: [
      'Current coordinates: Pune, India. Open to discussing remote or relocation opportunities — transmit to nikunjpatel1581996@gmail.com.',
    ],
  },
  fallback: [
    "Signal unclear. I'm optimized for questions about Nikunj's skills, experience, projects, education, or contact info. Try one of those?",
    "Scanning... no matching records. Ask me about his tech stack, work history, key projects, or how to get in touch.",
    "Transmission incomplete. I can brief you on Nikunj's 7 years of frontend engineering — skills, missions, availability. What would you like to know?",
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
