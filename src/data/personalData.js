/**
 * =========================================================================
 * PERSONAL DATA & CENTRAL CONFIGURATION
 * =========================================================================
 * You can edit all your personal information, contact links, stats,
 * and highlights from this single file.
 */

export const personalData = {
  name: "Dhivakar",
  title: "Software Developer",
  brandName: "Dhivakar.dev",
  tagline: "I build modern, scalable and user-friendly web applications using modern technologies.",
  typedRoles: [
    "Software Developer",
    "Full-Stack Web Developer",
    "MERN Stack Specialist",
    "AI & Automation Builder",
    "Problem Solver"
  ],
  shortIntro: "I’m a passionate software developer focused on building full-stack applications, solving real-world problems, and continuously learning new technologies.",
  aboutStory: [
    "I'm a passionate software developer who enjoys turning ideas into practical and user-friendly applications. I work with modern web technologies and enjoy exploring new tools, frameworks, and development practices.",
    "With a strong foundation in full-stack web architecture, API design, and modern databases, I love solving challenging engineering problems and crafting fluid user experiences. I actively participate in tech symposiums, lead collaborative initiatives, and build real-world software products."
  ],
  
  // Contact & Social Links (Easy to customize)
  email: "dhivadhivakar29k@gmail.com",
  location: "Tamil Nadu, India",
  github: "https://github.com/dhivakar-tv",
  linkedin: "https://www.linkedin.com/in/dhivakar-tv",
  twitter: "https://x.com/dhivakar_dev", // [OPTIONAL: REPLACE OR REMOVE]
  
  // Resume Configuration
  resumeUrl: "/resume.pdf", // Place your resume PDF in the /public folder named "resume.pdf"
  resumeFilename: "Dhivakar_Software_Developer_Resume.pdf",

  // Availability Badge
  availability: {
    status: "Available for Opportunities",
    subtext: "Open to Full-time, Internships & Freelance",
    isAvailable: true
  },

  // Key Statistics
  stats: [
    {
      id: "projects",
      value: "10+",
      label: "Projects Completed",
      sublabel: "Full-stack & AI apps"
    },
    {
      id: "technologies",
      value: "15+",
      label: "Technologies",
      sublabel: "Languages & Frameworks"
    },
    {
      id: "certifications",
      value: "10+",
      label: "Certifications",
      sublabel: "Verified Credentials"
    },
    {
      id: "events",
      value: "5+",
      label: "Events & Leadership",
      sublabel: "Symposiums & Organizing"
    }
  ],

  // Highlights in About Section
  highlights: [
    {
      title: "Full-Stack Development",
      description: "Building end-to-end responsive web apps using React, Node.js, Express, and modern databases."
    },
    {
      title: "Problem Solving & DSA",
      description: "Analytical mindset focused on writing clean, modular, and optimized code."
    },
    {
      title: "AI & Workflow Automation",
      description: "Integrating modern LLM APIs and building automated workflows using n8n and webhooks."
    },
    {
      title: "Leadership & Collaboration",
      description: "Organizing national-level symposiums, mentoring peers, and contributing to agile teams."
    }
  ],

  // Terminal & Code card demonstration object
  codeSnippet: {
    name: "Dhivakar",
    role: "Software Developer",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
    passion: "Building impactful software & scalable systems",
    currentFocus: "Full-Stack Web & AI Automations",
    hardWorker: true,
    quickLearner: true,
    hireable: () => true
  }
};
