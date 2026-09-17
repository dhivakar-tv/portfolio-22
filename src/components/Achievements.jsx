import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Award, 
  Terminal, 
  HeartHandshake, 
  GraduationCap, 
  Sparkles,
  Zap
} from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

export default function Achievements() {
  const iconMap = {
    Trophy: Trophy,
    Users: Users,
    Award: Award,
    Terminal: Terminal,
    HeartHandshake: HeartHandshake,
    GraduationCap: GraduationCap
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Key milestones in leadership, symposium organization, hackathons, and collaborative campus initiatives.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 relative group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.accentColor} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      {item.highlight}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Leadership & Participation</span>
                  <span className="text-cyan-400">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
