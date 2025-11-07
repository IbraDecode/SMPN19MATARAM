import React from 'react';

export default function AiSiraIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-16 h-16 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center shadow-lg dark:shadow-2xl border-2 border-accent-light/50 dark:border-accent-dark/50"
      aria-label="Open AI Sira Assistant"
    >
      <div className="absolute inset-0 rounded-full bg-accent-light/20 dark:bg-accent-dark/20 animate-ping group-hover:animate-none"></div>
      <div className="absolute inset-0 rounded-full border-2 border-accent-light dark:border-accent-dark animate-pulse"></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent-light dark:text-accent-dark transition-transform duration-300 group-hover:scale-110">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    </button>
  );
}