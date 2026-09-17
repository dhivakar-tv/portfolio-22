import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code, 
  Cpu, 
  Brain, 
  Users, 
  CheckCircle, 
  Sparkles, 
  FolderGit2, 
  Layers, 
  Award, 
  Calendar 
} from 'lucide-react';
import { personalData } from '../data/personalData';

export default function About() {
  const statIcons = {
    projects: FolderGit2,
    technologies: Layers,
    certifications: Award,
    events: Calendar
  };

  const highlightIcons = [Code, Brain, Cpu, Users];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Turning Ideas into Practical Solutions</span>
            </h3>

            {personalData.aboutStory.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-2.5">
              {["Full-Stack Engineering", "Clean Code Architecture", "RESTful Systems", "Agile & Collaborative", "Fast Learner"].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/40 dark:bg-slate-900/60 border border-slate-700/50 dark:border-slate-800 text-xs font-mono text-cyan-400"
                >
                  <CheckCircle className="w-3 h-3 text-cyan-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalData.highlights.map((item, idx) => {
              const IconComp = highlightIcons[idx % highlightIcons.length];
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Statistics Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalData.stats.map((stat, idx) => {
            const Icon = statIcons[stat.id] || FolderGit2;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 mx-auto flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mb-1 tracking-tight">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
