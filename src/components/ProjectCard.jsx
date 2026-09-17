import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Activity, 
  Dumbbell, 
  Bot, 
  ShoppingBag, 
  CheckSquare, 
  Code2 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, onSelect }) {
  // Visual thumbnail icon generator based on project ID
  const getThumbnailIcon = (id) => {
    switch (id) {
      case 'doctor-appointment-system':
        return <Activity className="w-10 h-10 text-cyan-400" />;
      case 'gym-management-system':
        return <Dumbbell className="w-10 h-10 text-amber-400" />;
      case 'ai-personal-chatbot':
        return <Bot className="w-10 h-10 text-purple-400" />;
      case 'ecommerce-platform':
        return <ShoppingBag className="w-10 h-10 text-emerald-400" />;
      case 'task-management-app':
        return <CheckSquare className="w-10 h-10 text-blue-400" />;
      default:
        return <Code2 className="w-10 h-10 text-rose-400" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between group shadow-lg"
    >
      {/* Visual Thumbnail Art Header */}
      <div className={`h-48 w-full bg-gradient-to-br ${project.accentColor} relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-800/60`}>
        {/* Subtle Tech Grid inside thumbnail */}
        <div className="absolute inset-0 tech-grid-pattern opacity-30" />
        
        {/* Floating Ambient Glow */}
        <div 
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:scale-125 transition-transform duration-500"
          style={{ background: project.glowColor }}
        />

        {/* Central Icon Illustration */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          {getThumbnailIcon(project.id)}
        </div>

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-medium text-cyan-300">
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Featured Star Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-cyan-500 font-mono mt-0.5">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-slate-800/60 dark:bg-slate-900/80 border border-slate-700/60 dark:border-slate-800 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-slate-800/40 text-[11px] font-mono text-slate-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Button Row */}
        <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-500/30 transition-all text-xs font-semibold"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              title="GitHub Repo"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-cyan-300 border border-slate-700 text-xs font-medium transition-colors"
              title="Live Demo"
              aria-label={`Open live demo for ${project.title}`}
            >
              <span>Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
