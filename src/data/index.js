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

greeting:{
keywords:[
'hi','hello','hey','good morning','good afternoon','good evening','yo','start','portfolio'
],
responses:[
"Hi! I'm Nikunj's portfolio assistant. I can help you understand his experience, projects, and technical strengths.",
"Hello! If you're evaluating Nikunj as a candidate, I can walk you through his skills, architecture experience, and major projects.",
"Hey there 👋 Feel free to ask about Nikunj's background, tech stack, leadership experience, or whether he'd be a good fit for your team."
]
},

who:{
keywords:[
'who is nikunj','about nikunj','tell me about nikunj','profile','summary','background','overview'
],
responses:[
"Nikunj Patel is a Senior Frontend Engineer with 7+ years of experience building enterprise web platforms using React, Next.js, and TypeScript. He specializes in micro-frontend architecture and scalable UI systems. Currently he works as an SDE-3 at Star Health Insurance in Pune.",
"Nikunj focuses on building scalable frontend systems. His recent work involves designing a micro-frontend architecture supporting multiple independent applications used by over 600K insurance agents."
]
},

architecture:{
keywords:[
'architecture','system design','frontend architecture','architecture experience',
'microfrontend','module federation','scalable frontend'
],
responses:[
"Nikunj has strong experience designing scalable frontend architecture. At Star Health Insurance he architected a micro-frontend platform using Webpack Module Federation that allows multiple React applications to be deployed independently while still sharing a common design system and runtime.",
"He focuses on modular UI architecture, component libraries, and micro-frontend platforms. His architecture enables teams to ship features independently while maintaining consistency across large enterprise systems."
]
},

projects:{
keywords:[
'projects','what projects','major work','what has he built','portfolio','products'
],
responses:[
`Some of the major systems Nikunj has contributed to include:

ATOM Portal  
A micro-frontend insurance distribution platform supporting multiple business channels used by over 600K agents.

GrowPro Marketing Platform  
A campaign management system where agents generate marketing posters using a drag-and-drop editor and dynamic templates.

Claims UI Platform  
Reusable UI modules supporting claims intake, review, and settlement workflows.

QVision Dashboard  
A CI pipeline monitoring dashboard built earlier in his career to visualize automation results and test coverage.`
]
},

leadership:{
keywords:[
'lead','leadership','mentor','team','management','project leadership'
],
responses:[
"Nikunj regularly contributes to architectural decisions and helps guide frontend development practices. He has introduced reusable component libraries, standardized development workflows, and code quality checks that improve collaboration across teams.",
"He works closely with backend engineers, product managers, and operations teams to define API contracts and system workflows."
]
},

skills:{
keywords:[
'skills','tech stack','technologies','tools','frameworks','languages'
],
responses:[
`Nikunj's primary technology stack includes:

Languages
• JavaScript (ES6+)
• TypeScript

Frameworks
• React
• Next.js

State Management
• Redux
• Redux Toolkit
• Redux-Saga

Architecture
• Micro-Frontends
• Webpack Module Federation
• Component Libraries
• Design Systems

UI Development
• Material UI
• Storybook
• Responsive and accessible UI

Testing
• Jest
• React Testing Library

Infrastructure
• AWS Amplify
• S3
• CloudFront
• EC2`
]
},

specialization:{
keywords:[
'specialize','specialty','core expertise','main strength','focus'
],
responses:[
"Nikunj specializes in frontend architecture for large React applications. His strongest area is designing micro-frontend systems that allow multiple teams to build and deploy features independently.",
"He also focuses heavily on reusable component systems, performance optimization, and scalable UI architecture."
]
},

candidate:{
keywords:[
'good candidate','hire nikunj','should we hire','candidate evaluation','fit for role'
],
responses:[
"Nikunj would be a strong candidate for teams building complex React applications or enterprise platforms. He brings both strong coding ability and architecture experience, which is valuable for senior frontend roles.",
"If your team needs someone who can design scalable frontend systems and guide best practices while still being hands-on with development, Nikunj would be a good fit."
]
},

team:{
keywords:[
'team fit','team environment','what team','work style','collaboration'
],
responses:[
"Nikunj works best in product-focused engineering teams where collaboration between frontend, backend, and product teams is important.",
"He enjoys working in environments where architecture decisions matter and teams value clean code, reusable components, and scalable systems."
]
},

problem_solving:{
keywords:[
'challenge','problem','difficulty','complex problem'
],
responses:[
"One challenge Nikunj has solved is enabling multiple frontend teams to work on the same platform without blocking each other. He addressed this using micro-frontend architecture and shared component systems.",
"He often works on systems that require balancing performance, scalability, and maintainability across large codebases."
]
},

hr_questions:{
keywords:[
'hr questions','interview','screening questions','recruiter questions'
],
responses:[
`Common HR questions Nikunj answers well:

Why are you looking for new opportunities?
"I enjoy building scalable frontend systems and I'm always interested in opportunities where I can contribute to impactful platforms and work with strong engineering teams."

What motivates you?
"I enjoy solving complex UI problems and designing frontend systems that help teams move faster."

What are your strengths?
"My strengths include React architecture, scalable UI design, and improving engineering workflows."

What are your weaknesses?
"I tend to spend extra time refining architecture decisions because I care about long-term maintainability."`
]
},

behavioral:{
keywords:[
'behavioral','team conflict','leadership example','challenge example'
],
responses:[
`Example behavioral answers:

Tell me about a challenging project  
"I worked on building a micro-frontend architecture for an insurance platform serving hundreds of thousands of users. The challenge was ensuring independent deployments while maintaining shared UI standards."

How do you handle disagreements in a team?
"I prefer discussing trade-offs openly and focusing on what's best for the product rather than individual preferences."

How do you ensure code quality?
"I rely on automated checks, code reviews, testing, and shared component systems."`
]
},

availability:{
keywords:[
'available','open to work','job','opportunity','hire'
],
responses:[
"Nikunj is open to discussing new opportunities including remote roles and roles based in India.",
"If you'd like to discuss opportunities, the best way is to reach him directly via email or LinkedIn."
]
},

contact:{
keywords:[
'contact','email','linkedin','github','phone'
],
responses:[
`You can reach Nikunj here:

Email: nikunjpatel1581996@gmail.com  
Phone: +91 8980368059  
LinkedIn: linkedin.com/in/nikunj-patel-1aa949156  
GitHub: github.com/NiksRock`
]
},

smalltalk:{
keywords:[
'ok','thanks','good','bye'
],
responses:[
"Happy to help! Let me know if you'd like to know more about Nikunj's work.",
"Thanks for visiting Nikunj's portfolio."
]
},

abuse:{
keywords:[
'stupid','idiot','dumb','useless'
],
responses:[
"Haha 😄 I'll take that as feedback. Let me know if you'd like to know about Nikunj's experience or projects.",
"No worries! If you're evaluating Nikunj as a candidate, I'm here to help."
]
},

fallback:[
"I'm not sure I fully understood that question. I can help with Nikunj's experience, skills, projects, or availability.",
"If you're evaluating Nikunj as a candidate, feel free to ask about his architecture experience, projects, or technical skills."
]

}

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
