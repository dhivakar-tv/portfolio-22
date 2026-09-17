/**
 * =========================================================================
 * PROJECTS DATA CONFIGURATION
 * =========================================================================
 * Edit, add, or remove your projects here. The modal and cards automatically
 * sync with this data array.
 */

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full-Stack" },
  { id: "ai", name: "AI & Automation" },
  { id: "web", name: "Web Applications" }
];

export const projectsData = [
  {
    id: "doctor-appointment-system",
    title: "Doctor Appointment Booking System",
    subtitle: "Healthcare Management & Scheduling Platform",
    category: "fullstack",
    featured: true,
    shortDescription: "A full-stack healthcare appointment platform that allows patients to discover doctors, book appointments, and manage their health consultations seamlessly.",
    accentColor: "from-cyan-500/20 to-blue-600/20",
    glowColor: "rgba(6, 182, 212, 0.4)",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/dhivakar-dev/doctor-appointment-system", // [EDIT: Your repo link]
    liveUrl: "https://doctor-booking-demo.vercel.app", // [EDIT: Your live demo link]
    problemStatement: "Patients frequently encounter long waiting times, lack of real-time schedule visibility, and inefficient manual booking phone calls. Doctors also face scheduling conflicts and high cancellation rates.",
    solution: "Developed an end-to-end full-stack web application with role-based access for Patients, Doctors, and Administrators. Provides live doctor availability, automated appointment confirmation, slot locking, and medical records dashboard.",
    features: [
      "Specialty-based Doctor Directory with live search and filtering by location & experience.",
      "Real-time slot booking engine preventing double-bookings with transactional locks.",
      "Role-Based Access Control (RBAC) for Patients, Doctors, and Admin portals.",
      "Automated email confirmations and SMS reminder notifications.",
      "Secure patient prescription history and appointment timeline management."
    ],
    challenges: "Handling concurrent booking requests for the same time slot required atomic database operations in MongoDB and debounced client-side slot state synchronization.",
    status: "Completed / Production Ready"
  },
  {
    id: "gym-management-system",
    title: "Gym Management System",
    subtitle: "Fitness Club Operations & Member Portal",
    category: "fullstack",
    featured: true,
    shortDescription: "A comprehensive web application for managing gym members, subscription plans, personal trainers, attendance logging, and automated payment tracking.",
    accentColor: "from-amber-500/20 to-orange-600/20",
    glowColor: "rgba(245, 158, 11, 0.4)",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "REST APIs"],
    githubUrl: "https://github.com/dhivakar-dev/gym-management-system", // [EDIT: Your repo link]
    liveUrl: "https://gym-management-demo.vercel.app", // [EDIT: Your live demo link]
    problemStatement: "Traditional fitness centers struggle with tracking expired memberships, trainer assignments, and manual attendance spreadsheets, leading to revenue loss and disorganized management.",
    solution: "Engineered a centralized dashboard for gym owners to manage recurring membership tiers, check-in barcodes/QR codes, trainer schedules, and financial analytics with automated expiration alerts.",
    features: [
      "Member lifecycle management with tier upgrades, renewals, and expiration warnings.",
      "Daily digital attendance tracker with quick QR/ID check-in for members.",
      "Trainer assignment module and customized workout & diet plan logging.",
      "Financial analytics dashboard displaying monthly recurring revenue (MRR) and attendance graphs.",
      "Exportable reports for tax and operational audits in PDF/CSV format."
    ],
    challenges: "Building an intuitive multi-metric analytics dashboard with Chart.js while ensuring high-speed aggregation queries across thousands of attendance records.",
    status: "Completed"
  },
  {
    id: "ai-personal-chatbot",
    title: "AI Personal Chatbot & Automation Suite",
    subtitle: "Intelligent Assistant with n8n Workflow Integration",
    category: "ai",
    featured: true,
    shortDescription: "An AI-powered personal assistant integrated with automation workflows to schedule tasks, answer queries, summarize documents, and execute multi-app actions.",
    accentColor: "from-purple-500/20 to-indigo-600/20",
    glowColor: "rgba(139, 92, 246, 0.4)",
    technologies: ["React.js", "Node.js", "Google Gemini API", "n8n Automation", "Webhooks", "Tailwind CSS"],
    githubUrl: "https://github.com/dhivakar-dev/ai-personal-chatbot", // [EDIT: Your repo link]
    liveUrl: "https://ai-assistant-demo.vercel.app", // [EDIT: Your live demo link]
    problemStatement: "Users waste significant time switching between multiple productivity tools, manually logging reminders, searching through notes, and orchestrating everyday digital workflows.",
    solution: "Built a conversational AI assistant utilizing LLM function-calling capabilities connected via webhooks to self-hosted n8n workflows for cross-platform automation (email, calendar, Notion, and Discord).",
    features: [
      "Natural language understanding powered by Google Gemini / OpenAI with conversational memory.",
      "Automated n8n webhook triggers for creating calendar events, sending emails, and creating task boards.",
      "Document ingestion and instant summarization with semantic markdown rendering.",
      "Voice-to-text input support and custom developer prompt templates.",
      "Streaming responses with typewriter effect and syntax-highlighted code blocks."
    ],
    challenges: "Designing reliable JSON output schemas from LLM prompts to seamlessly parse parameter arguments into n8n automated workflow nodes without execution failures.",
    status: "Completed / Active"
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Application",
    subtitle: "High-Performance Digital Storefront & Checkout",
    category: "fullstack",
    featured: false,
    shortDescription: "A full-fledged e-commerce application featuring dynamic product filtering, cart state management, checkout with Stripe integration, and an admin inventory management suite.",
    accentColor: "from-emerald-500/20 to-teal-600/20",
    glowColor: "rgba(16, 185, 129, 0.4)",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/dhivakar-dev/modern-ecommerce-platform", // [EDIT: Your repo link]
    liveUrl: "https://ecommerce-storefront-demo.vercel.app", // [EDIT: Your live demo link]
    problemStatement: "Slow page loads, cumbersome checkout flows, and unreliable cart state synchronization lead to high cart abandonment rates on conventional online shopping stores.",
    solution: "Crafted an optimized SPA storefront with instant client-side filtering, persistent cart synchronization, secure credit card checkout via Stripe, and an admin inventory management portal.",
    features: [
      "Faceted product filtering by category, price slider, brand, and rating.",
      "Persistent cart and wishlist stored in Redux with localStorage hydration.",
      "Secure Stripe checkout with webhook confirmation and invoice generation.",
      "Admin CRUD dashboard for products, categories, discount coupons, and inventory logs.",
      "Customer order tracking history with visual shipment status indicator."
    ],
    challenges: "Managing complex asynchronous state across product filters, cart calculations, tax rates, and secure Stripe tokenization.",
    status: "Completed"
  },
  {
    id: "task-management-app",
    title: "Task Management & Collaboration Suite",
    subtitle: "Kanban Board & Productivity Workspace",
    category: "web",
    featured: false,
    shortDescription: "An interactive Kanban-style project and task management web application designed for agile teams, featuring drag-and-drop task boards, labels, and deadlines.",
    accentColor: "from-blue-500/20 to-indigo-600/20",
    glowColor: "rgba(59, 130, 246, 0.4)",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion"],
    githubUrl: "https://github.com/dhivakar-dev/task-management-app", // [EDIT: Your repo link]
    liveUrl: "https://task-manager-demo.vercel.app", // [EDIT: Your live demo link]
    problemStatement: "Teams struggle with fragmented communication, missed sprint deadlines, and clunky user interfaces when tracking agile sprint tasks and priorities.",
    solution: "Designed a lightweight, responsive Kanban board featuring drag-and-drop column transitions, priority color-coding, subtask checklists, and activity audit trails.",
    features: [
      "Fluid drag-and-drop task movement between Backlog, In Progress, Review, and Done columns.",
      "Rich task editor with markdown notes, due date picker, priority badges, and checklist items.",
      "Workspace project switcher and team member tag assignments.",
      "Fast search and instant filtering by label, assignee, or deadline urgency.",
      "Activity history log tracking all card movements and state changes."
    ],
    challenges: "Creating smooth, physics-based drag animations across columns on both touch screens and desktop displays using modern interaction libraries.",
    status: "Completed"
  },
  {
    id: "devpulse-portfolio-analytics",
    title: "DevPulse Developer Platform & Portfolio",
    subtitle: "Interactive Engineering Showcase & Performance System",
    category: "web",
    featured: false,
    shortDescription: "A high-performance modern developer portfolio and engineering showcase engineered with Vite, Tailwind CSS, Framer Motion, and dynamic interactive widgets.",
    accentColor: "from-rose-500/20 to-purple-600/20",
    glowColor: "rgba(244, 63, 94, 0.4)",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    githubUrl: "https://github.com/dhivakar-dev/developer-portfolio", // [EDIT: Your repo link]
    liveUrl: "https://dhivakar.dev", // [EDIT: Your live demo link]
    problemStatement: "Standard resume templates fail to visually convey an engineer's full capabilities, UI finesse, code structuring, and real project problem-solving acumen.",
    solution: "Built an ultra-fast, accessible, dark-themed interactive developer portfolio featuring a live terminal simulation, filterable project showcase with deep-dive modals, and centralized data configuration.",
    features: [
      "Modular data-driven architecture allowing 100% configuration from single data files.",
      "Dark and Light theme switching with localStorage memory and smooth transitions.",
      "Deep project modal inspection with architectural breakdowns and solution summaries.",
      "Client-side validated contact form with celebratory feedback animations.",
      "100/100 Lighthouse performance, fully accessible semantic HTML, and responsive UI."
    ],
    challenges: "Balancing rich glowing visual aesthetics, glassmorphism, and micro-animations while strictly maintaining 60fps frame rates and sub-second load times.",
    status: "Completed / Active"
  }
];
