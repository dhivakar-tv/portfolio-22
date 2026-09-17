import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  GitFork, 
  Star, 
  GitCommit, 
  FolderGit2, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalData } from '../data/personalData';

export default function GitHubSection() {
  // Pinned representative repositories
  const pinnedRepos = [
    {
      name: "doctor-appointment-system",
      description: "Full-stack healthcare booking platform with real-time doctor availability and automated confirmations.",
      language: "JavaScript",
      langColor: "#f1e05a",
      stars: 14,
      forks: 5,
      url: `${personalData.github}/doctor-appointment-system`
    },
    {
      name: "ai-personal-chatbot-n8n",
      description: "AI conversational assistant integrated with n8n automated webhook workflows and multi-tool orchestration.",
      language: "JavaScript",
      langColor: "#f1e05a",
      stars: 22,
      forks: 8,
      url: `${personalData.github}/ai-personal-chatbot-n8n`
    },
    {
      name: "gym-management-portal",
      description: "Member management and subscription operations suite with attendance QR verification and revenue dashboards.",
      language: "React / Node",
      langColor: "#61dafb",
      stars: 12,
      forks: 3,
      url: `${personalData.github}/gym-management-portal`
    },
    {
      name: "developer-portfolio-v2",
      description: "Modern, high-performance developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.",
      language: "React / CSS",
      langColor: "#38bdf8",
      stars: 18,
      forks: 6,
      url: `${personalData.github}/developer-portfolio`
    }
  ];

  // Generated simulated GitHub contribution matrix (52 weeks x 7 days)
  const generateContributionDays = () => {
    const levels = [0, 0, 1, 0, 2, 1, 3, 2, 4, 1, 0, 2, 3, 1, 2, 4, 3, 2, 1, 0];
    const days = [];
    for (let i = 0; i < 112; i++) {
      const level = levels[i % levels.length];
      days.push(level);
    }
    return days;
  };

  const contributionDays = generateContributionDays();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1: return 'bg-emerald-950/80 border-emerald-800/60';
      case 2: return 'bg-emerald-800/80 border-emerald-700/60';
      case 3: return 'bg-emerald-600 border-emerald-500';
      case 4: return 'bg-emerald-400 border-emerald-300';
      default: return 'bg-slate-900 border-slate-800';
    }
  };

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Code, Projects & <span className="gradient-text">Open Source</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Check out my GitHub to explore my projects, experiments and development journey.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* GitHub Stats & Heatmap Showcase Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white shadow-xl">
                <GithubIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                  <span>github.com/{personalData.name.toLowerCase()}</span>
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Continuous commits, active open source learning & code exploration
                </p>
              </div>
            </div>

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/25 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Activity Matrix Visualizer */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <span>Contributions & Commit Activity Streak</span>
              </span>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-800" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950 border border-emerald-800" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700 border border-emerald-600" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 border border-emerald-300" />
                <span>More</span>
              </div>
            </div>

            {/* Matrix grid */}
            <div className="overflow-x-auto pb-2">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[650px]">
                {contributionDays.map((level, idx) => (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded-sm border transition-transform hover:scale-125 ${getHeatmapColor(level)}`}
                    title={`Active coding day`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedRepos.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors font-mono font-semibold text-sm sm:text-base">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/70 border border-slate-700 text-slate-400">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
