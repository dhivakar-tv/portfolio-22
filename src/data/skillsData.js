/**
 * =========================================================================
 * SKILLS DATA CONFIGURATION
 * =========================================================================
 * Grouped into categories for clean display. Add, remove, or modify skills easily.
 */

export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "programming", name: "Programming" },
  { id: "tools", name: "Tools & DevOps" },
  { id: "other", name: "AI & Automation" }
];

export const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    level: "Core Tech",
    description: "Component architecture, hooks, state management, SPA routing.",
    color: "#61DAFB"
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: "FileCode2",
    level: "Advanced",
    description: "Modern asynchronous JS, promises, DOM manipulation, closures.",
    color: "#F7DF1E"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Palette",
    level: "Core Tech",
    description: "Responsive layouts, custom utilities, dark mode, modern UI design.",
    color: "#38BDF8"
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "Code2",
    level: "Expert",
    description: "Semantic structures, accessibility (a11y), SEO-friendly architecture.",
    color: "#E34F26"
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "Sparkles",
    level: "Advanced",
    description: "Flexbox, CSS Grid, animations, transitions, responsive design.",
    color: "#1572B6"
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    level: "Core Tech",
    description: "Event-driven runtime, asynchronous architecture, backend services.",
    color: "#339933"
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "Cpu",
    level: "Core Tech",
    description: "Middleware architecture, REST API routing, authentication, security.",
    color: "#000000"
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: "Network",
    level: "Advanced",
    description: "RESTful architecture, CRUD operations, endpoint documentation & error handling.",
    color: "#3B82F6"
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    icon: "Database",
    level: "Core Tech",
    description: "NoSQL schema design, Mongoose ODM, aggregation pipelines, indexing.",
    color: "#47A248"
  },
  {
    name: "MySQL",
    category: "database",
    icon: "Layers",
    level: "Intermediate",
    description: "Relational database design, SQL querying, joins, foreign keys, ACID.",
    color: "#4479A1"
  },

  // Programming Languages
  {
    name: "JavaScript",
    category: "programming",
    icon: "FileJson",
    level: "Primary",
    description: "Full-stack scripting, data structures, algorithms, event loop.",
    color: "#F7DF1E"
  },
  {
    name: "Python",
    category: "programming",
    icon: "Terminal",
    level: "Proficient",
    description: "Scripting, data processing, backend logic, automation pipelines.",
    color: "#3776AB"
  },
  {
    name: "Java",
    category: "programming",
    icon: "Coffee",
    level: "Proficient",
    description: "Object-oriented programming, standard data structures, algorithms.",
    color: "#ED8B00"
  },
  {
    name: "C Programming",
    category: "programming",
    icon: "Binary",
    level: "Fundamentals",
    description: "Memory management, pointers, low-level problem solving.",
    color: "#A8B9CC"
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: "GitBranch",
    level: "Essential",
    description: "Version control, branching, rebasing, merge conflict resolution.",
    color: "#F05032"
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "Github",
    level: "Essential",
    description: "Collaboration, pull requests, issue tracking, CI/CD actions.",
    color: "#8B5CF6"
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "Laptop",
    level: "Primary IDE",
    description: "Advanced debugging, productivity extensions, multi-root workspaces.",
    color: "#007ACC"
  },
  {
    name: "Postman",
    category: "tools",
    icon: "Send",
    level: "Testing",
    description: "API testing, automated request collections, environment variables.",
    color: "#FF6C37"
  },
  {
    name: "Vercel",
    category: "tools",
    icon: "Globe",
    level: "Deployment",
    description: "Continuous deployment, serverless functions, domain routing.",
    color: "#000000"
  },

  // Other / AI & Automation
  {
    name: "AI Integration",
    category: "other",
    icon: "Bot",
    level: "Specialized",
    description: "Integrating Gemini / OpenAI APIs, prompt engineering, structured outputs.",
    color: "#8B5CF6"
  },
  {
    name: "n8n Automation",
    category: "other",
    icon: "Workflow",
    level: "Specialized",
    description: "Node-based workflow automation, webhook triggers, multi-service connectors.",
    color: "#EA4B71"
  },
  {
    name: "API Integration",
    category: "other",
    icon: "Share2",
    level: "Advanced",
    description: "Payment gateways, 3rd-party auth, webhook receivers, rate-limit handling.",
    color: "#10B981"
  }
];
