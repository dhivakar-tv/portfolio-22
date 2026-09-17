import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Terminal, 
  Wrench, 
  Sparkles, 
  Bot, 
  Workflow, 
  Globe, 
  Server, 
  Cpu, 
  FileCode2, 
  Palette, 
  Network, 
  GitBranch, 
  Laptop, 
  Send, 
  Coffee, 
  Binary, 
  Share2,
  Atom
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skillsData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Atom: Atom,
    FileCode2: FileCode2,
    Palette: Palette,
    Code2: Code2,
    Sparkles: Sparkles,
    Server: Server,
    Cpu: Cpu,
    Network: Network,
    Database: Database,
    Layers: Layers,
    FileJson: FileCode2,
    Terminal: Terminal,
    Coffee: Coffee,
    Binary: Binary,
    GitBranch: GitBranch,
    Github: Code2,
    Laptop: Laptop,
    Send: Send,
    Globe: Globe,
    Bot: Bot,
    Workflow: Workflow,
    Share2: Share2
  };

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            A comprehensive overview of my core technology stack, programming languages, databases, and developer tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-panel text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  key={skill.name}
                  className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 relative group overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                      style={{ 
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        borderColor: `${skill.color}30`,
                        borderWidth: '1px'
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/60 dark:bg-slate-900 border border-slate-700/60 dark:border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold font-heading text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Subtle bottom indicator */}
                  <div 
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full mt-3"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
