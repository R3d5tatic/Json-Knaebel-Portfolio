import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
      ${scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-accent-muted/30 py-3' : 'bg-transparent border-transparent py-6'}
    `}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center border border-accent-cyan bg-accent-cyan/10 rounded-sm transition-transform group-hover:rotate-45">
            <Cpu className="w-6 h-6 text-accent-cyan" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-lg tracking-wider text-text-primary group-hover:text-accent-cyan transition-colors">
              J.KNAEBEL
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-muted">
              Sys.Admin
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-accent-cyan transition-colors py-2 group"
            >
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity rotate-45" />
              {link.name}
              <span className="block h-[1px] w-0 bg-accent-cyan transition-all duration-300 group-hover:w-full mt-1" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-accent-cyan border border-accent-cyan/30 p-2 rounded-sm hover:bg-accent-cyan/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-secondary border-b border-accent-muted/30 shadow-2xl">
          <nav className="flex flex-col p-6 gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono uppercase tracking-widest text-text-secondary hover:text-accent-cyan pl-4 border-l-2 border-transparent hover:border-accent-cyan hover:bg-white/5 py-3 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};