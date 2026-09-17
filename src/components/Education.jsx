import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { educationData } from '../data/educationData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            My formal engineering background, computer science coursework, and academic credentials.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Education Grid */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 relative group overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium">
                      {edu.field}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="text-sm font-semibold text-slate-400 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {edu.description}
              </p>

              {/* Coursework Tags */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Coursework & Focus Areas</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/50 dark:bg-slate-900 border border-slate-700/60 text-xs font-mono text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-4 border-t border-slate-800/60">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
