import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  number: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, number }) => {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-accent-cyan font-mono text-sm font-bold tracking-widest">
          {number}
        </span>
        <div className="h-px w-12 bg-accent-cyan/50" />
        <span className="text-accent-cyan font-mono text-xs tracking-[0.2em] uppercase">
          {subtitle || 'System Module'}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary uppercase tracking-tight relative inline-block">
        {title}
        <div className="absolute -bottom-2 right-0 w-1/3 h-1 bg-accent-cyan shadow-glow-cyan" />
      </h2>
    </div>
  );
};