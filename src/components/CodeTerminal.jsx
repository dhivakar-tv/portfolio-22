import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Play, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { personalData } from '../data/personalData';

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState('dhivakar.js');
  const [copied, setCopied] = useState(false);
  const [runOutput, setRunOutput] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const jsCode = `// Dhivakar's Developer Profile
const developer = {
  name: "${personalData.name}",
  role: "${personalData.title}",
  skills: [
    "React.js", "Node.js", "Express.js",
    "MongoDB", "Tailwind CSS", "REST APIs"
  ],
  passion: "${personalData.codeSnippet.passion}",
  focus: "${personalData.codeSnippet.currentFocus}",
  status: "${personalData.availability.status}",
  isHireable: () => true
};

console.log("Ready to build scalable software!");`;

  const jsonCode = `{
  "developer": {
    "name": "${personalData.name}",
    "title": "${personalData.title}",
    "experience": "Full-Stack Development",
    "core_stack": ["MERN", "Tailwind", "REST", "n8n"],
    "location": "${personalData.location}",
    "open_for_work": true
  }
}`;

  const terminalCode = `$ node dhivakar.js
[+] Initializing developer profile...
[✓] Core systems online
[✓] Connecting to databases & APIs...
[✓] Status: Ready to collaborate!
>> Hello, World! Let's build something great.`;

  const copyToClipboard = () => {
    const textToCopy = activeTab === 'dhivakar.js' ? jsCode : activeTab === 'skills.json' ? jsonCode : terminalCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setRunOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setRunOutput(true);
    }, 600);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden glass-card shadow-2xl border border-slate-700/60 dark:border-slate-800 shadow-cyan-950/20 group">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block hover:scale-110 transition-transform" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:scale-110 transition-transform" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:scale-110 transition-transform" />
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800/60">
          <button
            onClick={() => { setActiveTab('dhivakar.js'); setRunOutput(false); }}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === 'dhivakar.js'
                ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            dhivakar.js
          </button>
          <button
            onClick={() => { setActiveTab('skills.json'); setRunOutput(false); }}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === 'skills.json'
                ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            skills.json
          </button>
          <button
            onClick={() => { setActiveTab('terminal.sh'); setRunOutput(false); }}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === 'terminal.sh'
                ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            terminal.sh
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all text-xs flex items-center gap-1 font-mono"
            title="Execute simulation"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Run</span>
          </button>

          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-700/60"
            title="Copy code"
            aria-label="Copy code to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-slate-950/70 min-h-[290px] relative">
        <AnimatePresence mode="wait">
          {activeTab === 'dhivakar.js' && (
            <motion.div
              key="js"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-1 text-slate-300 leading-relaxed"
            >
              <div className="text-slate-500 italic">// Developer Identity & Philosophy</div>
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400 font-semibold">developer</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-amber-300">"{personalData.name}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-amber-300">"{personalData.title}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">skills:</span> [
                <span className="text-cyan-300">"React.js"</span>,{' '}
                <span className="text-cyan-300">"Node.js"</span>,{' '}
                <span className="text-cyan-300">"MongoDB"</span>,{' '}
                <span className="text-cyan-300">"Express"</span>
                ],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">passion:</span>{' '}
                <span className="text-emerald-400">"Building impactful software"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">hireable:</span>{' '}
                <span className="text-purple-400">() =&gt;</span>{' '}
                <span className="text-indigo-400 font-bold">true</span>
              </div>
              <div>{'};'}</div>
              <div className="pt-2 text-slate-400">
                <span className="text-indigo-400">console</span>.<span className="text-cyan-400">log</span>(
                <span className="text-amber-300">"Ready to create scalable solutions 🚀"</span>
                );
              </div>
            </motion.div>
          )}

          {activeTab === 'skills.json' && (
            <motion.div
              key="json"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-slate-300 leading-relaxed"
            >
              <pre className="text-slate-300 font-mono text-xs sm:text-sm whitespace-pre-wrap">
                {jsonCode}
              </pre>
            </motion.div>
          )}

          {activeTab === 'terminal.sh' && (
            <motion.div
              key="term"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-emerald-400 leading-relaxed font-mono"
            >
              <pre className="whitespace-pre-wrap text-xs sm:text-sm font-mono text-emerald-400/90">
                {terminalCode}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Execution Output Overlay */}
        <AnimatePresence>
          {runOutput && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-cyan-300 bg-slate-900/90 p-3 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>[Output]: Ready to build scalable software! ✨</span>
              </div>
              <span className="text-slate-500">exit code 0</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3 h-3 text-cyan-400" />
          <span>JavaScript (V8 Runtime)</span>
        </div>
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          UTF-8
        </span>
      </div>
    </div>
  );
}
