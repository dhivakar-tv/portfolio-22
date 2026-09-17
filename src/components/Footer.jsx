import React from 'react';
import { 
  Terminal, 
  ArrowUp, 
  Heart,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/personalData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono shadow-md shadow-cyan-500/20">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-white">
                {personalData.name}
                <span className="text-cyan-400 font-mono">.dev</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Building software, solving problems, and learning every day. Specialized in high-performance web applications and automated workflows.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-xl glass-card text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <span className="text-xs font-mono font-semibold">@</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
                Quick Navigation
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-cyan-400 transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <div className="pt-6 flex items-center justify-end">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-xl glass-panel border border-slate-800 hover:border-cyan-500/40"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with React, Tailwind & Vite</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}
