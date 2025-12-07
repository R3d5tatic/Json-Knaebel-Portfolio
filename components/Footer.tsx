import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-bg-primary border-t border-accent-muted/20 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-text-muted text-sm font-mono">
          © {new Date().getFullYear()} JASON KNAEBEL. ALL SYSTEMS OPERATIONAL.
        </p>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-[10px] text-accent-green uppercase tracking-widest">Signal Stable</span>
        </div>
      </div>
    </footer>
  );
};