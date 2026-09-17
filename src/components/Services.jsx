import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Layers, 
  Network, 
  Sparkles, 
  Workflow, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const iconMap = {
    Layout: Layout,
    Layers: Layers,
    Network: Network,
    Sparkles: Sparkles,
    Workflow: Workflow
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SOLUTIONS & OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Specialized engineering capabilities tailored to building modern digital products, scalable backends, and intelligent automations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layout;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-7 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Top Glowing Ambient Dot */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"
                  style={{ background: service.glow }}
                />

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.accent} flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/15 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.short}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-800/60">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">Ready to build</span>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors group-hover:underline"
                  >
                    Discuss project &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
