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
      "Hi! I'm Nikunj's portfolio assistant. I can help you learn about his experience, skills, architecture work, and projects.",
      "Hello! If you're evaluating Nikunj as a candidate, I can walk you through his technical strengths, leadership experience, and major projects.",
      "Hey there 👋 Feel free to ask about Nikunj's architecture experience, tech stack, projects, or availability for opportunities."
    ]
  },

  who: {
    keywords: [
      'who is nikunj', 'about nikunj', 'tell me about nikunj', 'profile', 'summary', 'background', 'overview'
    ],
    responses: [
      "Nikunj Patel is a Senior Frontend Engineer and React Architect with 7+ years of experience building scalable, enterprise-grade web platforms. He specializes in micro-frontend architecture with Webpack Module Federation, React and Next.js, and cloud-enabled frontend delivery on AWS. He currently works as an SDE-3 at Star Health and Allied Insurance Co. Ltd in Pune, India.",
      "Nikunj's work supports production systems used by over 600K users. He has led architecture across 4 micro-frontend applications, built 20+ reusable components, and delivered enterprise platforms across 7 years of active development."
    ]
  },

  experience: {
    keywords: [
      'experience', 'years experience', 'career', 'work history', 'companies', 'employment'
    ],
    responses: [
      `Nikunj has 7+ years of professional frontend experience across four companies.

Current Role
SDE-3 — Star Health and Allied Insurance Co. Ltd, Pune (Apr 2023 – Present)
3 years active duty

Previous Roles
• AltezzaSys Systems, Noida — Software Engineer (Mar 2022 – Nov 2022)
• TechAvidus, Gandhinagar — Software Developer (Feb 2020 – Feb 2022)
• Lodestone, Ahmedabad — Software Developer (Jan 2019 – Dec 2019)

His work spans large-scale React applications, micro-frontend architecture, and enterprise UI platform engineering.`
    ]
  },

  current_role: {
    keywords: [
      'current role', 'current job', 'current company', 'star health', 'sde-3', 'sde3', 'present job'
    ],
    responses: [
      `At Star Health and Allied Insurance Co. Ltd (Apr 2023 – Present), Nikunj works as an SDE-3 on the ATOM Portal — an internal insurance distribution platform supporting 10 insurance products across Agency, Alternate, and Banca channels, used by 600K+ agents and operations teams.

Key contributions:
• Architected a micro-frontend platform with 4 independently deployed apps using React, Next.js, TypeScript, and Webpack Module Federation
• Standardized engineering practices across a 10-engineer team with reusable component libraries, Husky, SonarQube, and Snyk
• Built a Storybook-driven component system with 20+ reusable UI components
• Implemented JSON-driven UI configuration for dynamic rendering of complex insurance workflows
• Engineered the Claims UI package (@star-ui/atom-claims-ui) to standardize claims domain components
• Built GrowPro — a marketing platform enabling 600K agents to generate campaign creatives with 40–55% engagement`
    ]
  },

  architecture: {
    keywords: [
      'architecture', 'system design', 'frontend architecture', 'architecture experience',
      'microfrontend', 'micro frontend', 'module federation', 'scalable frontend', 'system architecture'
    ],
    responses: [
      `Nikunj has deep experience designing scalable frontend architecture.

At Star Health Insurance he architected a micro-frontend platform using Webpack Module Federation, supporting 4 independently deployed React/Next.js applications on the ATOM Portal.

Key architecture areas:
• Micro-frontend architecture (Webpack Module Federation)
• Component-driven development with Storybook
• Design systems and reusable UI libraries (NPM packages via AWS CodeArtifact)
• JSON-driven dynamic UI configuration
• Modular frontend platforms across multi-team environments
• Redux/Redux Toolkit/Redux-Saga for scalable state management
• Performance optimization: tree-shaking, Rollup ES module builds, table virtualization

The platform supports 600K+ agents across 10 insurance products.`
    ]
  },

  skills: {
    keywords: [
      'skills', 'tech stack', 'technologies', 'tools', 'frameworks', 'languages', 'tech', 'skill loadout'
    ],
    responses: [
      `Nikunj's Skill Loadout with proficiency scores:

Core Skills
• React — 95
• TypeScript — 92
• Next.js — 90
• Node.js — 87
• CSS/HTML — 85
• Git/CI — 83

Architecture Expertise
• Micro-Frontends (Webpack Module Federation) — Expert
• Component Libraries & Design Systems
• Modular UI Architecture
• Internal NPM Packages (AWS CodeArtifact)

Frameworks & Libraries
• Redux, Redux Toolkit, Redux-Saga, Context API, Material UI

UI Development
• Storybook, Responsive UI, Web Accessibility (ARIA)
• react-draggable, HTML-to-PDF workflows

Testing & Code Quality
• Jest, React Testing Library, SonarQube, Snyk

Build & Tooling
• Webpack, Rollup, Husky, ESLint, Git

Cloud & Infrastructure
• AWS Amplify, AWS S3, AWS CloudFront, AWS EC2, AWS CodeArtifact`
    ]
  },

  skill_scores: {
    keywords: [
      'skill score', 'skill rating', 'proficiency', 'score', 'rating', 'how good'
    ],
    responses: [
      `Nikunj's skill proficiency scores from his portfolio:

• React — 95/100
• TypeScript — 92/100
• Next.js — 90/100
• Node.js — 87/100
• CSS/HTML — 85/100
• Git/CI — 83/100

These scores reflect his hands-on production experience across 7+ years of enterprise frontend development.`
    ]
  },

  projects: {
    keywords: [
      'projects', 'what projects', 'major work', 'what has he built', 'portfolio', 'products', 'classified ops'
    ],
    responses: [
      `Major systems Nikunj has worked on:

ATOM Portal — MFE Platform (Star Health Insurance)
A micro-frontend insurance distribution platform supporting 10 products across Agency, Alternate, and Banca channels.
• 600K users • 4 micro-apps • React, Next.js, Webpack Module Federation, TypeScript

GrowPro Marketing Engine (Star Health Insurance)
A campaign creation platform enabling 600K agents to generate personalized marketing creatives with a drag-and-drop poster editor, HTML-to-PDF export, and asset management for 100K+ campaign assets.
• 600K agents • 40–55% engagement • 100K assets

@star-ui Claims Package (Star Health Insurance)
Reusable UI modules and internal NPM package (@star-ui/atom-claims-ui) supporting claim intake, review, query management, and settlement workflows.
• 20+ components • 4 applications • 0 duplicate implementations

QVision — QA Dashboard (Lodestone)
A CI pipeline monitoring dashboard visualizing automation execution results with analytics for automation performance.

BSWHealth Dashboard (AltezzaSys)
Operational dashboards and workflow interfaces for a healthcare platform, built with React, TypeScript, Redux, and Redux-Saga.

Tango HRMS (Lodestone)
Attendance management module for an HRMS platform supporting workforce tracking.`
    ]
  },

  stats: {
    keywords: [
      'stats', 'numbers', 'metrics', 'achievements', 'impact', 'how many'
    ],
    responses: [
      `Nikunj's key impact metrics:

• 7+ years of experience
• 4 micro-frontend apps architected
• 600K+ users served
• 20+ reusable components built
• 10-engineer team standardized
• 100K+ campaign assets managed
• 40–55% agent engagement on GrowPro
• 3 years active at Star Health Insurance`
    ]
  },

  specialization: {
    keywords: [
      'specialize', 'specialty', 'core expertise', 'main strength', 'focus', 'react architect'
    ],
    responses: [
      "Nikunj specializes in frontend architecture for large-scale React applications. His portfolio titles him as a React Architect. His strongest area is building micro-frontend systems using Webpack Module Federation that allow multiple teams to deploy independently.",
      "He also focuses on reusable component platforms, design systems, internal NPM packages, performance optimization, and standardizing frontend engineering practices across large engineering teams."
    ]
  },

  strengths: {
    keywords: [
      'strength', 'strengths', 'strong points', 'advantages'
    ],
    responses: [
      `Nikunj's key strengths:

• Deep React expertise (95/100 proficiency, 7+ years)
• Scalable micro-frontend architecture design
• Building reusable component libraries and design systems
• JSON-driven dynamic UI configuration
• Performance optimization (Rollup builds, tree-shaking, virtualization)
• Engineering standardization (SonarQube, Snyk, Husky, ESLint)
• Mentoring engineers and conducting structured code reviews
• Cross-functional collaboration with backend, product, and operations teams

He combines strong hands-on development with architectural thinking, making him effective in both IC and tech lead roles.`
    ]
  },

  weakness: {
    keywords: [
      'weakness', 'weaknesses', 'improvement'
    ],
    responses: [
      "Nikunj tends to invest extra time thinking through architecture decisions because he prioritizes long-term maintainability and scalability over short-term speed.",
      "He believes getting the architecture right early significantly reduces future technical debt — which has proven valuable across the large platforms he has built."
    ]
  },

  candidate: {
    keywords: [
      'good candidate', 'hire nikunj', 'should we hire', 'candidate evaluation', 'fit for role'
    ],
    responses: [
      "Nikunj is a strong candidate for teams building complex React applications, enterprise platforms, or micro-frontend systems.",
      "With 7+ years of experience, an SDE-3 track record at a 600K-user platform, React proficiency of 95/100, and proven architecture leadership, he brings both strong engineering execution and system-level thinking suited for senior frontend roles."
    ]
  },

  team: {
    keywords: [
      'team fit', 'team environment', 'work style', 'collaboration'
    ],
    responses: [
      "Nikunj works best in product-focused engineering teams where frontend engineers collaborate closely with backend engineers, product managers, and designers.",
      "He has led a 10-engineer frontend team at Star Health, introducing standardized engineering practices, code review processes, and shared component systems. He values environments that invest in clean architecture and reusable platforms."
    ]
  },

  problem_solving: {
    keywords: [
      'challenge', 'problem', 'difficulty', 'complex problem'
    ],
    responses: [
      "A major challenge Nikunj solved was enabling multiple frontend teams to develop and deploy independently on the same enterprise insurance platform without blocking each other.",
      "He addressed this by architecting a micro-frontend platform using Webpack Module Federation, standardizing shared component packages via AWS CodeArtifact, and introducing quality gates with SonarQube and Snyk."
    ]
  },

  salary: {
    keywords: [
      'ctc', 'salary', 'expected salary', 'compensation', 'package', 'salary expectation', 'how much he want'
    ],
    responses: [
      "Nikunj is open to discussing compensation based on the role, responsibilities, and overall opportunity.",
      "He typically prefers discussing salary during the interview process once there is a clearer understanding of the role scope and team."
    ]
  },

  notice: {
    keywords: [
      'notice period', 'joining', 'when can he join', 'availability to join'
    ],
    responses: [
      "Nikunj's joining timeline depends on his current commitments at Star Health Insurance. Recruiters can discuss notice period and start date directly with him during the hiring process."
    ]
  },

  location: {
    keywords: [
      'location', 'where is he based', 'city', 'country'
    ],
    responses: [
      "Nikunj is based in Pune, India and is open to discussing remote opportunities or roles in other locations."
    ]
  },

  education: {
    keywords: [
      'education', 'degree', 'college', 'study', 'qualification'
    ],
    responses: [
      `Nikunj holds two degrees from Veer Narmad South Gujarat University (VNSGU):

• M.Sc. ICT — J.P. Dawer Institute of Information Science and Technology, VNSGU (Jul 2017 – Feb 2019)
• BCA (Bachelor of Computer Applications) — M.K. Institute of Computer Studies, VNSGU (Jun 2014 – May 2017)`
    ]
  },

  availability: {
    keywords: [
      'available', 'open to work', 'job', 'opportunity'
    ],
    responses: [
      "Nikunj is open to discussing new opportunities involving scalable frontend systems, micro-frontend architecture, or high-impact enterprise product platforms."
    ]
  },

  contact: {
    keywords: [
      'contact', 'email', 'linkedin', 'github', 'phone', 'initiate contact', 'reach'
    ],
    responses: [
      `You can reach Nikunj here:

Email: nikunjpatel1581996@gmail.com
Phone: +91 8980368059
LinkedIn: linkedin.com/in/nikunj-patel-1aa949156
GitHub: github.com/NiksRock

Or use the "Initiate Contact" section directly on his portfolio.`
    ]
  },

  npm_packages: {
    keywords: [
      'npm', 'package', 'library', 'component library', 'internal package', 'codeartifact'
    ],
    responses: [
      `Nikunj has built and distributed internal NPM packages as part of his micro-frontend architecture work.

• @star-ui/atom-claims-ui — An internal package built with React, TypeScript, and Rollup to standardize claims domain UI components (claim intake, review, query management, settlement) across multiple ATOM applications.
• Shared component packages distributed through AWS CodeArtifact to support multi-team frontend development.
• Storybook-driven component system containing 20+ reusable UI components used across the ATOM platform.`
    ]
  },

  aws: {
    keywords: [
      'aws', 'cloud', 'amazon', 'amplify', 's3', 'cloudfront', 'ec2', 'codeartifact'
    ],
    responses: [
      `Nikunj has hands-on AWS experience across multiple projects:

• AWS Amplify — Frontend hosting and CI/CD pipelines
• AWS CloudFront — CDN for optimizing global asset delivery
• AWS S3 — Asset storage for campaign assets (100K+) and frontend deployments
• AWS EC2 — Integration with EC2-hosted backend APIs
• AWS CodeArtifact — Distribution of internal shared frontend NPM packages`
    ]
  },

  testing: {
    keywords: [
      'testing', 'test', 'jest', 'unit test', 'react testing library', 'quality', 'sonarqube', 'snyk'
    ],
    responses: [
      `Nikunj applies a multi-layer quality approach:

Testing
• Jest and React Testing Library for unit and component testing

Code Quality
• SonarQube for static code analysis and quality gates
• Snyk for security scanning of dependencies

Process
• Husky pre-commit hooks to enforce standards before code is committed
• Structured pull-request reviews across the engineering team
• ESLint for consistent code style enforcement`
    ]
  },

  react: {
    keywords: [
      'react', 'react experience', 'react skills', 'react architecture'
    ],
    responses: [
      `Nikunj has over 7 years of experience building production React applications with a proficiency score of 95/100.

Key areas of expertise include:
• Component architecture and design systems
• React hooks and modern functional patterns
• Redux, Redux Toolkit, and Redux-Saga for state management
• Micro-frontend architecture using Webpack Module Federation
• Performance optimization using memoization and virtualization
• Large-scale enterprise UI platforms

He has built React systems used by more than 600K users across insurance distribution platforms.`
    ]
  },

  frontend_performance: {
    keywords: [
      'performance', 'frontend performance', 'optimize', 'bundle size', 'optimization'
    ],
    responses: [
      `Nikunj focuses heavily on frontend performance.

Techniques he has implemented include:
• Tree-shaking using Rollup ES module builds
• Code splitting and lazy loading
• Virtualization for large data tables
• Optimized Redux state architecture
• CDN delivery using AWS CloudFront
• Bundle analysis and optimization

These practices help maintain high performance in large enterprise applications.`
    ]
  },

  system_design: {
    keywords: [
      'system design', 'design system', 'frontend system design'
    ],
    responses: [
      `Nikunj approaches system design with scalability and maintainability in mind.

Typical frontend system design areas include:
• Micro-frontend architecture
• Shared component libraries
• API contract design with backend teams
• State management architecture
• CI/CD pipelines for frontend deployment
• Performance optimization strategies

His architecture work supports large enterprise systems with hundreds of thousands of users.`
    ]
  },

  leadership_examples: {
    keywords: [
      'leadership example', 'leadership experience', 'team leadership'
    ],
    responses: [
      `At Star Health Insurance, Nikunj helped standardize frontend engineering practices across a 10-engineer team.

Examples of leadership contributions:
• Introduced reusable component libraries
• Implemented SonarQube quality gates
• Integrated Snyk security scanning
• Enforced standards using Husky pre-commit hooks
• Conducted structured pull-request reviews
• Guided engineers adopting shared NPM packages

These improvements significantly improved team productivity and code consistency.`
    ]
  },

  culture_fit: {
    keywords: [
      'culture fit', 'values', 'work culture'
    ],
    responses: [
      `Nikunj values engineering cultures that emphasize:
• Strong code quality practices
• Collaborative engineering teams
• Clean architecture
• Continuous learning
• Scalable system design

He enjoys working in environments where engineers can take ownership of architecture decisions and build impactful systems.`
    ]
  },

  resume: {
    keywords: [
      'resume', 'cv', 'download resume'
    ],
    responses: [
      "Nikunj's resume highlights 7+ years of frontend engineering experience, micro-frontend architecture work, and enterprise platform development. You can download it directly from the portfolio or contact him for the latest version."
    ]
  },

  linkedin: {
    keywords: [
      'linkedin profile', 'linkedin'
    ],
    responses: [
      "You can view Nikunj's LinkedIn profile at linkedin.com/in/nikunj-patel-1aa949156 where you can see his work history, recommendations, and professional network."
    ]
  },

  naukri: {
    keywords: [
      'naukri', 'naukri profile'
    ],
    responses: [
      "Nikunj also maintains an updated Naukri profile highlighting his experience as a Senior Frontend Engineer, including React architecture, micro-frontend systems, and enterprise platform development."
    ]
  },

  why_nikunj: {
    keywords: [
      'why nikunj', 'why hire nikunj', 'why should we hire nikunj'
    ],
    responses: [
      `Nikunj brings a combination of deep frontend expertise and architecture experience.

Reasons teams hire Nikunj:
• 7+ years of React and TypeScript development (React 95/100, TypeScript 92/100)
• Proven experience designing micro-frontend architecture at scale
• Enterprise platform experience supporting 600K+ users
• Strong focus on maintainable and scalable UI systems
• Track record of improving engineering practices across teams
• Delivered 4 production micro-frontend apps and 20+ reusable components

He is effective both as a senior individual contributor and as a technical leader.`
    ]
  },

  interview_questions: {
    keywords: [
      'interview', 'technical interview', 'screening'
    ],
    responses: [
      `Common interview topics Nikunj is experienced discussing include:

Frontend Architecture
• Micro-frontend design and Module Federation
• Component libraries and design systems
• JSON-driven dynamic UI configuration

React Engineering
• State management patterns (Redux, Redux Toolkit, Saga)
• Performance optimization
• Large-scale application structure

Engineering Practices
• CI/CD workflows
• Code quality and testing (Jest, SonarQube, Snyk)
• Scalable frontend systems

He is comfortable discussing both deep technical implementation and high-level architecture decisions.`
    ]
  },

  quick_recruiter_prompts: {
    keywords: [
      'questions', 'ask', 'recruiter prompts', 'what can i ask'
    ],
    responses: [
      `You can ask about:
• Nikunj's architecture experience
• Major projects (ATOM Portal, GrowPro, Claims Package, QVision)
• Technologies and skill scores
• Salary expectations
• Availability to join
• Leadership experience
• React and frontend expertise
• System design approach
• Why he would be a strong hire`
    ]
  },

  smalltalk: {
    keywords: [
      'ok', 'thanks', 'good', 'bye'
    ],
    responses: [
      "Happy to help! Let me know if you'd like to know more about Nikunj's experience or projects.",
      "Thanks for visiting Nikunj's portfolio."
    ]
  },

  abuse: {
    keywords: [
      'stupid', 'idiot', 'dumb', 'useless'
    ],
    responses: [
      "Haha 😄 I'll take that as feedback. Let me know if you'd like to know about Nikunj's work or projects.",
      "No worries — I'm here to help if you have questions about Nikunj."
    ]
  },

  fallback: [
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
