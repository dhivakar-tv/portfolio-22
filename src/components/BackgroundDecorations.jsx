import React from 'react';

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 dark:opacity-60" />

      {/* Ambient Gradient Blobs */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl" 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-3xl" 
      />
      <div 
        className="absolute top-2/3 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-3xl" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl" 
      />

      {/* Subtle top edge lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </div>
  );
}
