import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  return (
    <div className={`
      relative bg-bg-secondary border border-white/5 p-6 
      transition-all duration-300 hover:border-accent-cyan/30
      ${glow ? 'shadow-glow-cyan-lg border-accent-cyan/40' : 'hover:shadow-glow-cyan-lg'}
      ${className}
    `}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-cyan" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-cyan" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent-cyan" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-cyan" />
      
      {children}
    </div>
  );
};