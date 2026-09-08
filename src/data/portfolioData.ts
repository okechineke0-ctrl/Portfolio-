import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Okechineke Success Chiemerie',
  preferredName: 'Success Okechineke',
  title: 'Full-Stack Software Engineer & Tech Leader',
  subtitles: [
    'CEO & Founder @ Ocean Technologies',
    'Computer Science @ ESUT Agbani',
    'Former Developer @ Catholic Institute of Information Technology and Applied Sciences (CIITA), Awgu',
    '3+ Years Building Scalable Web & Cloud Systems'
  ],
  bio: 'Computer Science undergraduate at Enugu State University of Science and Technology (ESUT), Agbani (2024 — Till Now), with over 3 years of hands-on professional software engineering experience. As the CEO of Ocean Technologies and a former software developer at the Catholic Institute of Information Technology and Applied Sciences (CIITA) Awgu, I specialize in crafting high-performance, mobile-responsive web applications with modern architectures like React, Next.js, and Tailwind CSS.',
  institution: 'Enugu State University of Science and Technology (ESUT), Agbani',
  degree: 'B.Sc. in Computer Science',
  yearsInTech: '3+ Years',
  location: 'Enugu State, Nigeria',
  email: 'okechineke0@gmail.com',
  phone: '08146578477',
  formattedPhone: '+234 814 657 8477',
  whatsappUrl: 'https://wa.me/2348146578477?text=Hello%20Okechineke%20Success,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!',
  companyUrl: 'https://ocean-f4gj.onrender.com/',
  companyName: 'Ocean Technologies',
  availability: 'Available for freelance, contract & full-time tech roles',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'ocean-tech',
    role: 'Chief Executive Officer & Lead Software Engineer',
    organization: 'Ocean Technologies',
    location: 'Enugu, Nigeria',
    period: '2023 — Present',
    type: 'Leadership & Engineering',
    description: 'Founded and directing Ocean Technologies, overseeing end-to-end software architecture, product strategy, and cloud deployment of high-availability web applications for business and individual clients.',
    achievements: [
      'Architected and deployed the official Ocean Technologies web platform on Render with 99.9% uptime',
      'Spearheaded full-lifecycle digital product development from client requirements to UI/UX and backend API delivery',
      'Engineered mobile-responsive interfaces using React, Next.js, and Tailwind CSS delivering fast sub-second page loads',
      'Mentored junior developers and technical contributors in modern Git workflows and full-stack web standards'
    ],
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'System Architecture', 'Cloud Deployment', 'Leadership'],
    link: 'https://ocean-f4gj.onrender.com/'
  },
  {
    id: 'ciita-awgu',
    role: 'Software Developer & IT Systems Specialist',
    organization: 'Catholic Institute of Information Technology and Applied Sciences (CIITA)',
    location: 'Awgu, Enugu State',
    period: '2022 — 2024',
    type: 'Professional Experience',
    description: 'Developed and maintained institutional software systems, student databases, and web portals at CIITA Awgu. Provided technical leadership and computer science instruction in modern software engineering fundamentals.',
    achievements: [
      'Built and upgraded institutional database utilities and digital portals, streamlining student and administrative data access',
      'Conducted practical IT workshops and programming sessions, training over 100+ learners in programming and web tech',
      'Maintained network and computational infrastructure, eliminating system downtime during critical academic cycles',
      'Collaborated with institute management to digitize internal administrative workflows and document processes'
    ],
    skills: ['Web Development', 'Database Management', 'IT Infrastructure', 'Technical Training', 'JavaScript', 'Linux Systems']
  },
  {
    id: 'esut-agbani',
    role: 'Computer Science Scholar & Tech Innovator',
    organization: 'Enugu State University of Science and Technology (ESUT)',
    location: 'Agbani, Enugu State',
    period: '2024 — Till Now',
    type: 'Academic & Applied Computing',
    description: 'Pursuing Bachelor of Science in Computer Science, focusing on algorithms, distributed computing, database systems, software engineering methodologies, and human-computer interaction.',
    achievements: [
      'Active contributor to student developer communities and computational research initiatives',
      'Applied theoretical computer science principles (data structures, algorithmic optimization) to real-world commercial software',
      'Developed academic utility tools and led collaborative study groups on modern web and cloud technologies'
    ],
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Design', 'System Analysis']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ocean-technologies',
    title: 'Ocean Technologies Platform',
    tagline: 'Flagship Digital Hub & Software Engineering Services Platform',
    description: 'The official digital platform for Ocean Technologies, showcasing the company’s digital solutions, client engineering services, technical portfolio, and direct onboarding workflows. Built for high performance, mobile adaptability, and crisp typography.',
    category: 'company',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Render Cloud', 'Responsive Design'],
    liveUrl: 'https://ocean-f4gj.onrender.com/',
    featured: true,
    highlights: [
      'Fully responsive executive UI with dark-mode aesthetic and fast fluid transitions',
      'Hosted and continuously deployed on Render cloud infrastructure',
      'Interactive client contact and service discovery architecture'
    ]
  },
  {
    id: 'ciita-portal',
    title: 'CIITA Awgu Academic Information System',
    tagline: 'Institutional Management & Student Academic Record Portal',
    description: 'A digitized records and academic management portal conceptualized and developed for the Catholic Institute of Information Technology and Applied Sciences (CIITA), Awgu. Streamlines course registrations, grade access, and institutional announcements.',
    category: 'enterprise',
    tags: ['React', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Auth'],
    featured: true,
    highlights: [
      'Role-based dashboard for students, administrative staff, and instructors',
      'Secure data verification and responsive record rendering',
      'Clean tabular outputs with PDF record export capabilities'
    ]
  },
  {
    id: 'esut-resource-hub',
    title: 'ESUT Student Dev & Computational Hub',
    tagline: 'Collaborative Resource Engine for Computer Science Scholars',
    description: 'An academic repository and collaborative dev tool tailored for Computer Science students at ESUT Agbani, providing curated computational resources, past examination archives, and algorithmic problem-solving discussions.',
    category: 'academic',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloud Platforms'],
    featured: true,
    highlights: [
      'Categorized academic repository with search and filter functionality',
      'Markdown-rendered study notes with syntax highlighted code snippets',
      'Optimized for low-bandwidth mobile devices common across university campuses'
    ]
  },
  {
    id: 'fullstack-saas-starter',
    title: 'CloudSaaS Modular Architecture',
    tagline: 'Next.js & Tailwind Production Starter for African Tech Ventures',
    description: 'A modern, developer-first full-stack web application starter designed for rapid product deployment on cloud environments, featuring modular components, responsive layouts, and robust API endpoints.',
    category: 'web',
    tags: ['Next.js', 'React 19', 'Tailwind CSS', 'TypeScript', 'REST API'],
    featured: false,
    highlights: [
      'Production-ready folder structure compliant with modern deployment standards',
      'Dark studio theme with customizable palette and accessible contrast',
      'Built-in form validation and notification toasts'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend & UI Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React.js & Next.js', level: 95, description: 'Single-page applications, SSR, server components, and dynamic routing' },
      { name: 'Tailwind CSS', level: 95, description: 'Utility-first styling, responsive layouts, design systems, and dark studio themes' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 90, description: 'Type-safe codebases, interfaces, async/await patterns, and DOM manipulation' },
      { name: 'Motion & Animations', level: 85, description: 'Fluid micro-interactions, gesture animations, and smooth view transitions' }
    ]
  },
  {
    title: 'Backend & Cloud Systems',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 88, description: 'RESTful API design, middleware pipelines, authentication, and error handling' },
      { name: 'Cloud Infrastructure & Render', level: 92, description: 'Production deployments, environment configuration, custom domains, and CI/CD' },
      { name: 'Databases (SQL & NoSQL)', level: 84, description: 'Data modeling, relational schemas, query optimization, and persistence' },
      { name: 'API Integration & Webhooks', level: 88, description: 'Third-party integrations, payment gateways, and data streaming' }
    ]
  },
  {
    title: 'Computer Science & Leadership',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms', level: 86, description: 'Time/space complexity analysis, problem solving from ESUT CS coursework' },
      { name: 'Git & Version Control', level: 92, description: 'Branching models, pull requests, collaborative development, and code reviews' },
      { name: 'Tech Leadership & Product Vision', level: 90, description: 'Leading Ocean Technologies, client communication, and roadmap execution' },
      { name: 'Technical Teaching & Mentorship', level: 88, description: 'Knowledge transfer honed during tenure at CIITA Awgu' }
    ]
  }
];

export const STATS = [
  { value: '3+', label: 'Years in Tech' },
  { value: 'CEO', label: 'Ocean Technologies' },
  { value: '15+', label: 'Projects Completed' },
  { value: '100%', label: 'Commitment to Craft' },
];
