import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase transition-all duration-200 border rounded-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent-cyan text-bg-primary border-accent-cyan hover:shadow-glow-cyan hover:-translate-y-0.5",
    secondary: "bg-transparent text-accent-cyan border-accent-cyan hover:bg-accent-cyan/10 hover:shadow-glow-cyan",
    ghost: "bg-transparent text-text-primary border-transparent hover:text-accent-cyan relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent-cyan after:transition-all hover:after:w-full"
  };

  const padding = variant === 'ghost' ? 'px-2 py-1' : 'px-6 py-3';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${padding} ${className}`}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};