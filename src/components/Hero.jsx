import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Send, 
  Mail, 
  Sparkles, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/personalData';
import profileImage from './WhatsApp Image 2026-05-02 at 9.24.40 AM_edited.png';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalData.typedRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-20 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Availability / Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-medium text-cyan-400 self-center lg:self-start shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono">{personalData.availability.status}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 hidden sm:inline">{personalData.location}</span>
            </div>

            {/* Greeting & Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 dark:text-slate-400 font-mono text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Hi, I'm</span>
                <span className="text-cyan-400 font-semibold">{personalData.name}</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black font-heading tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                <span className="block">Software</span>
                <span className="gradient-text">Developer</span>
              </h1>

              {/* Dynamic Rotating Subtitle */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <span className="text-base sm:text-xl font-mono text-slate-600 dark:text-slate-300 font-medium">
                  &gt;{' '}
                  <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">
                    {personalData.typedRoles[currentRoleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalData.shortIntro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.resumeUrl}
                download={personalData.resumeFilename}
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-card text-slate-200 hover:text-cyan-400 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700/60 dark:border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <Send className="w-4 h-4 text-slate-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links & Quick Contact Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                aria-label="Send Email"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-xl min-h-[31rem] flex items-center justify-center">
              <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl" />

              <div className="relative h-[27rem] w-[min(100%,25rem)] overflow-hidden rounded-[2.5rem] border border-cyan-400/25 bg-slate-900/60 shadow-2xl shadow-cyan-950/40">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img
                  src={profileImage}
                  alt={`${personalData.name} - ${personalData.title}`}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                  className="h-full w-full object-contain object-bottom p-5 transition-transform duration-500 hover:scale-[1.03]"
                />
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300">Currently building</p>
                    <p className="mt-1 text-lg font-heading font-bold text-white">Useful software, thoughtfully made.</p>
                  </div>
                  <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300" title="Available for opportunities">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
