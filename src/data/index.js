// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS = [
  { id: 'ALPHA', level: 95, name: 'React Ecosystem', tags: ['React', 'Next.js', 'Redux', 'Redux-Saga'] },
  { id: 'BRAVO', level: 92, name: 'TypeScript & JS', tags: ['TypeScript', 'ES6+', 'HTML5', 'CSS3'] },
  { id: 'CHARLIE', level: 90, name: 'Micro-Frontends', tags: ['Module Fed.', 'Webpack', 'Rollup', 'Nx'] },
  { id: 'DELTA', level: 87, name: 'UI & Styling', tags: ['Material UI', 'Storybook', 'Tailwind', 'ARIA'] },
  { id: 'ECHO', level: 85, name: 'Cloud & Infra', tags: ['AWS Amplify', 'S3', 'CloudFront', 'CodeArtifact'] },
  { id: 'FOXTROT', level: 83, name: 'Testing & CI', tags: ['Jest', 'RTL', 'SonarQube', 'Snyk', 'Husky'] },
];

export const SKILL_BARS = [
  ['React / Next.js', 95],
  ['TypeScript', 92],
  ['Module Federation', 90],
  ['Redux / Redux-Saga', 88],
  ['Material UI / Storybook', 85],
  ['AWS Cloud Infra', 83],
];

export const DEPLOYMENT_STATS = [
  ['MFE APPS', '4', 'var(--red)'],
  ['TEAM SIZE', '10', 'var(--cyan)'],
  ['USERS', '600K', 'var(--gold)'],
  ['EXP', '7 YRS', 'var(--red)'],
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    init: 'SH',
    company: 'Star Health & Allied Insurance',
    tag: 'INSURTECH',
    role: 'Software Development Engineer – 3',
    period: 'Apr 2023 — Present',
    color: 'var(--red)',
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
    init: 'AZ',
    company: 'AltezzaSys Systems',
    tag: 'HEALTHTECH',
    role: 'Software Engineer',
    period: 'Mar 2022 — Nov 2022',
    color: 'var(--cyan)',
    achievements: [
      'Developed operational dashboards and workflow UIs for BSWHealth using React, TypeScript, Redux, and Redux-Saga.',
      'Built a Storybook-based component library covering forms, tables, and layout primitives.',
      'Improved large-dataset rendering through table virtualization, filtering optimization, and pagination strategies.',
      'Deployed frontend apps on AWS Amplify with CloudFront CDN for optimal global delivery.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Redux-Saga', 'Storybook', 'AWS Amplify', 'AWS CloudFront'],
  },
  {
    init: 'TA',
    company: 'TechAvidus',
    tag: 'PRODUCT',
    role: 'Software Developer',
    period: 'Feb 2020 — Feb 2022',
    color: 'var(--gold)',
    achievements: [
      'Delivered React-based client applications using Redux Thunk and React Router across multiple product domains.',
      'Built reusable Material UI component systems including forms, dialogs, tables, and complex inputs.',
      'Integrated Stripe payment workflows, Facebook OAuth, email verification, and password reset flows.',
      'Connected frontend apps with AWS S3 for asset storage and EC2-hosted APIs.',
    ],
    tech: ['React', 'Redux', 'Redux Thunk', 'Material UI', 'Stripe', 'AWS S3', 'AWS EC2', 'Jest'],
  },
  {
    init: 'LS',
    company: 'Lodestone',
    tag: 'ENTERPRISE',
    role: 'Software Developer',
    period: 'Jan 2019 — Dec 2019',
    color: 'var(--muted-bright)',
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
    id: 'OPS-001',
    name: 'ATOM PORTAL — MFE PLATFORM',
    desc: '4-application micro-frontend platform for 600K insurance agents across Agency, Alternate, and Banca channels at Star Health.',
    tags: ['Next.js', 'Module Federation', 'Webpack 5', 'TypeScript', 'Redux Toolkit'],
    metrics: [{ v: '600K', l: 'USERS' }, { v: '4', l: 'MFE APPS' }, { v: '10', l: 'ENGINEERS' }],
    color: 'var(--red)',
    bg: 'linear-gradient(135deg,#1a0608 0%,#070d16 100%)',
    details: 'Mission-critical insurance distribution platform serving 600K agents. Architected 4 independently deployable micro-frontends with a shared Module Federation runtime. Implemented JSON-driven UI config for dynamic workflow rendering, distributed component libraries via AWS CodeArtifact, and enforced quality gates using Husky, SonarQube, and Snyk across a 10-engineer team.',
  },
  {
    id: 'OPS-002',
    name: 'GROWPRO MARKETING ENGINE',
    desc: 'Agent-facing campaign platform enabling 600K insurance agents to generate personalized marketing materials with 40–55% engagement lift.',
    tags: ['React', 'Next.js', 'Material UI', 'react-draggable', 'AWS S3'],
    metrics: [{ v: '600K', l: 'AGENTS' }, { v: '55%', l: 'ENGAGEMENT' }, { v: '100K', l: 'ASSETS' }],
    color: 'var(--cyan)',
    bg: 'linear-gradient(135deg,#001518 0%,#070d16 100%)',
    details: 'Full-featured marketing creation platform built within the ATOM ecosystem. Drag-and-drop poster editor using react-draggable, dynamic template rendering with runtime campaign data, HTML-to-PDF export via Next.js API routes, and full asset management workflow supporting 100K+ campaign assets.',
  },
  {
    id: 'OPS-003',
    name: '@STAR-UI CLAIMS PACKAGE',
    desc: 'Internal NPM package — claims workflow UI modules covering intake, review, query management, and settlement.',
    tags: ['React', 'TypeScript', 'Rollup', 'Material UI', 'AWS CodeArtifact'],
    metrics: [{ v: '20+', l: 'COMPONENTS' }, { v: '4', l: 'APP CONSUMERS' }, { v: '0', l: 'BREAKING CHANGES' }],
    color: 'var(--gold)',
    bg: 'linear-gradient(135deg,#120a00 0%,#070d16 100%)',
    details: 'Private npm package @star-ui/atom-claims-ui distributed via AWS CodeArtifact. Covers full claims domain UI — hospital search, claim intake, review queues, query management, and settlement workflows. Built with Rollup ES module builds with tree-shaking, strict TypeScript, ESLint, and Storybook docs.',
  },
  {
    id: 'OPS-004',
    name: 'QVISION — QA DASHBOARD',
    desc: 'Real-time QA monitoring dashboard displaying CI pipeline execution results with analytics for automation performance.',
    tags: ['React', 'Redux', 'Spring Boot', 'Data Visualization', 'CSS3'],
    metrics: [{ v: 'CI', l: 'INTEGRATED' }, { v: '∞', l: 'PIPELINE RUNS' }, { v: '⚡', l: 'REAL-TIME' }],
    color: 'var(--red)',
    bg: 'linear-gradient(135deg,#0a0208 0%,#070d16 100%)',
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
    keywords: [
      'hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'yo', 'start', 'portfolio', 'help'
    ],
    responses: [
      "Hi! I'm Nikunj's portfolio assistant. I can help you explore his experience, projects, and the technologies he works with.",
      "Hello 👋 Feel free to ask anything about Nikunj — his background, technical skills, architecture work, or projects.",
      "Hey there! If you're curious about Nikunj's work, I can walk you through his experience, systems he has built, and the technologies he uses."
    ]
  },

  who: {
    keywords: [
      'who is nikunj', 'about nikunj', 'tell me about nikunj', 'profile', 'summary', 'background', 'overview'
    ],
    responses: [
      "Nikunj Patel is a Senior Frontend Engineer and React Architect with over 7 years of experience building scalable web applications. He focuses on large-scale frontend architecture, React and Next.js systems, and modular UI platforms.",
      "Nikunj currently works as an SDE-3 at Star Health and Allied Insurance in Pune, where he helps design and build enterprise frontend platforms used by hundreds of thousands of users."
    ]
  },

  experience: {
    keywords: [
      'experience', 'years experience', 'career', 'work history', 'companies', 'employment'
    ],
    responses: [
      `Nikunj has over 7 years of professional frontend development experience across multiple companies.

Current Role
SDE-3 — Star Health and Allied Insurance Co. Ltd, Pune (Apr 2023 – Present)

Previous Roles
• AltezzaSys Systems, Noida — Software Engineer (Mar 2022 – Nov 2022)
• TechAvidus, Gandhinagar — Software Developer (Feb 2020 – Feb 2022)
• Lodestone, Ahmedabad — Software Developer (Jan 2019 – Dec 2019)

His work has focused on large-scale React applications, frontend architecture, and enterprise UI platforms.`
    ]
  },

  current_role: {
    keywords: [
      'current role', 'current job', 'current company', 'star health', 'sde-3', 'sde3', 'present job'
    ],
    responses: [
      `Nikunj currently works as an SDE-3 at Star Health and Allied Insurance in Pune.

He contributes to the ATOM Portal — an internal insurance distribution platform used by more than 600K agents and operations teams.

Some of his work includes:
• Designing a micro-frontend platform with independently deployed React/Next.js applications  
• Building reusable component libraries and design systems  
• Introducing engineering standards and quality tooling across the team  
• Creating dynamic UI systems using configuration-driven architecture  

The platform supports multiple insurance products across different business channels.`
    ]
  },

  architecture: {
    keywords: [
      'architecture', 'system design', 'frontend architecture', 'microfrontend', 'micro frontend', 'module federation', 'scalable frontend', 'system architecture'
    ],
    responses: [
      `Nikunj has strong experience designing scalable frontend architecture.

At Star Health Insurance he helped build a micro-frontend platform using Webpack Module Federation, enabling multiple teams to develop and deploy independently.

Areas he frequently works in:
• Micro-frontend architecture  
• Component-driven development with Storybook  
• Reusable UI libraries and internal packages  
• Dynamic UI systems using JSON configuration  
• Scalable state management with Redux and related tools  
• Frontend performance optimization  

These systems support large enterprise platforms used by hundreds of thousands of users.`
    ]
  },

  skills: {
    keywords: [
      'skills', 'tech stack', 'technologies', 'tools', 'frameworks', 'languages', 'tech', 'skill loadout'
    ],
    responses: [
      `Nikunj works primarily in modern frontend engineering.

Core Technologies
• React  
• TypeScript  
• Next.js  
• Node.js  
• HTML / CSS  

Architecture & Platform Work
• Micro-frontends (Webpack Module Federation)  
• Component libraries and design systems  
• Internal NPM packages  

Libraries & Frameworks
• Redux, Redux Toolkit, Redux-Saga  
• Context API  
• Material UI  

Tooling & Quality
• Jest and React Testing Library  
• SonarQube and Snyk  
• Webpack, Rollup, ESLint, Husky  

Cloud & Infrastructure
• AWS Amplify  
• AWS S3  
• AWS CloudFront  
• AWS CodeArtifact`
    ]
  },

  projects: {
    keywords: [
      'projects', 'what projects', 'major work', 'portfolio', 'products', 'what has he built'
    ],
    responses: [
      `Some of the main systems Nikunj has worked on include:

ATOM Portal  
A micro-frontend insurance distribution platform supporting multiple insurance products and used by 600K+ agents.

GrowPro Marketing Engine  
A platform that allows agents to generate marketing creatives using a poster editor and campaign asset system.

Claims UI Package  
A reusable internal component package used across multiple applications for claim workflows.

QVision  
A dashboard that visualizes automation and CI pipeline results.

BSWHealth Dashboard  
Operational dashboards for healthcare workflows.

Tango HRMS  
An attendance and workforce management module within an HR platform.`
    ]
  },

  strengths: {
    keywords: [
      'strength', 'strengths', 'strong points', 'advantages'
    ],
    responses: [
      `Some of Nikunj's strengths include:

• Strong expertise in React and modern frontend architecture  
• Designing scalable UI platforms and component systems  
• Building reusable libraries and internal tooling  
• Performance optimization for large applications  
• Improving engineering standards and development workflows  
• Mentoring engineers and supporting collaborative development  

He enjoys building systems that remain maintainable as they grow.`
    ]
  },

  specialization: {
    keywords: [
      'specialize', 'specialty', 'core expertise', 'main strength', 'focus', 'react architect'
    ],
    responses: [
      "Nikunj focuses on frontend architecture for large React applications. Much of his work revolves around modular UI systems and micro-frontend platforms that allow teams to build and deploy independently.",
      "He is especially interested in building scalable component systems, reusable UI libraries, and maintainable frontend platforms."
    ]
  },

  frontend_performance: {
    keywords: [
      'performance', 'frontend performance', 'optimize', 'bundle size', 'optimization'
    ],
    responses: [
      `Nikunj pays close attention to frontend performance.

Some of the approaches he commonly applies include:
• Code splitting and lazy loading  
• Tree-shaking using optimized builds  
• Virtualization for large data tables  
• Efficient state management patterns  
• CDN delivery with CloudFront  
• Bundle analysis and optimization`
    ]
  },

  testing: {
    keywords: [
      'testing', 'test', 'jest', 'unit test', 'react testing library', 'quality'
    ],
    responses: [
      `Nikunj follows a layered approach to code quality.

Testing
• Jest  
• React Testing Library  

Code Quality
• SonarQube for static analysis  
• Snyk for security scanning  

Development Process
• Husky pre-commit hooks  
• Structured pull-request reviews  
• ESLint for consistent coding standards`
    ]
  },

  aws: {
    keywords: [
      'aws', 'cloud', 'amazon', 'amplify', 's3', 'cloudfront', 'ec2', 'codeartifact'
    ],
    responses: [
      `Nikunj has hands-on experience with several AWS services used in frontend platforms.

• AWS Amplify for frontend hosting and CI/CD  
• AWS CloudFront for CDN delivery  
• AWS S3 for asset storage and deployments  
• AWS CodeArtifact for distributing internal NPM packages  
• Integration with backend APIs hosted on AWS infrastructure`
    ]
  },

  leadership_examples: {
    keywords: [
      'leadership', 'team leadership', 'mentoring', 'lead experience'
    ],
    responses: [
      `At Star Health Insurance, Nikunj helped improve frontend engineering practices across a team of developers.

Some examples include:
• Introducing shared component libraries  
• Establishing code quality checks with SonarQube  
• Adding security scanning through Snyk  
• Setting up pre-commit hooks with Husky  
• Encouraging structured code reviews  

These practices helped improve consistency and collaboration within the team.`
    ]
  },

  education: {
    keywords: [
      'education', 'degree', 'college', 'study', 'qualification'
    ],
    responses: [
      `Nikunj studied Information and Communication Technology at Veer Narmad South Gujarat University.

• M.Sc. ICT — J.P. Dawer Institute of Information Science and Technology  
• BCA — M.K. Institute of Computer Studies`
    ]
  },

  location: {
    keywords: [
      'location', 'where is he based', 'city', 'country'
    ],
    responses: [
      "Nikunj is currently based in Pune, India and is open to discussing opportunities in different locations or remote setups."
    ]
  },

  availability: {
    keywords: [
      'available', 'open to work', 'job', 'opportunity'
    ],
    responses: [
      "Nikunj is open to discussing opportunities involving scalable frontend systems, product platforms, and architecture-focused frontend work."
    ]
  },

  contact: {
    keywords: [
      'contact', 'email', 'linkedin', 'github', 'phone', 'reach'
    ],
    responses: [
      `You can connect with Nikunj through the following:

Email: nikunjpatel1581996@gmail.com  
Phone: +91 8980368059  
LinkedIn: linkedin.com/in/nikunj-patel-1aa949156  
GitHub: github.com/NiksRock

You can also reach out directly through the contact section on his portfolio.`
    ]
  },

  smalltalk: {
    keywords: [
      'ok', 'thanks', 'good', 'bye'
    ],
    responses: [
      "You're welcome! Let me know if you'd like to explore Nikunj's projects or experience.",
      "Thanks for visiting Nikunj's portfolio. Feel free to ask anything else."
    ]
  },

  abuse: {
    keywords: [
      'stupid', 'idiot', 'dumb', 'useless'
    ],
    responses: [
      "No worries 🙂 If you have any questions about Nikunj's work or projects, I'm happy to help.",
      "All good. Let me know if you'd like to explore Nikunj's experience or portfolio."
    ]
  },

  fallback: [
    "I'm not sure I fully understood that. You can ask about Nikunj's experience, projects, skills, or background.",
    "Feel free to ask about Nikunj's work, technologies he uses, or systems he has built."
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
  { label: 'SKILLS', href: '#skills' },
  { label: 'RECORD', href: '#record' },
  { label: 'MISSIONS', href: '#missions' },
  { label: 'CONTACT', href: '#contact' },
];

// ─── Hero stats ───────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: '7+', label: 'YEARS EXP' },
  { value: '4', label: 'MFE APPS' },
  { value: '600K', label: 'USERS SERVED' },
  { value: '20+', label: 'COMPONENTS' },
];

// ─── Google Sheets logger config ──────────────────────────────────────────────
// Free unanswered-question logging via Google Apps Script web app
// Setup: see README_BOT_LOGGER.md
export const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL || '';
