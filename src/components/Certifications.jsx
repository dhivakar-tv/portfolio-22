import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/certificationsData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Industry credentials and technical certifications verifying proficiency in cloud architecture, web development, and algorithms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header with Issuer Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white font-mono font-bold text-xs shadow-md group-hover:scale-110 transition-transform`}>
                      {cert.issuerCode}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400">
                        {cert.issuer}
                      </span>
                      <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span>Issued {cert.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" title="Verified Credential">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/60 dark:bg-slate-900 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 truncate max-w-[150px]">
                  ID: {cert.credentialId}
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-all"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
