import React from 'react';
import { Button } from './ui/Button';
import { Download, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative">
      {/* Decorative Circuit Lines */}
      <div className="absolute right-0 top-1/3 w-1/3 h-px bg-gradient-to-l from-accent-cyan/50 to-transparent" />
      <div className="absolute right-0 bottom-1/3 w-2/3 h-px bg-gradient-to-l from-accent-cyan/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-mono tracking-wider animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            SYSTEM ONLINE // READY FOR ASSIGNMENT
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight leading-none animate-fade-in-up [animation-delay:100ms]">
              JASON <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-green">KNAEBEL</span>
            </h1>
            <div className="text-xl md:text-2xl text-accent-cyan font-mono flex items-center gap-3 animate-fade-in-up [animation-delay:200ms]">
              <span className="text-accent-muted">&gt;</span>
              <span className="typing-effect">Electrical Engineer | PCB Designer</span>
              <span className="w-2 h-5 bg-accent-cyan animate-blink ml-1" />
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed border-l-2 border-accent-muted/30 pl-6 animate-fade-in-up [animation-delay:300ms]">
            Specializing in high-reliability circuit design, embedded systems, and mission-critical hardware architecture. 
            Bridging the gap between theory and functional, deployable technology.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up [animation-delay:400ms]">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              View Directives <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              Download Dossier <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Column / Decorative HUD */}
        <div className="hidden lg:block lg:col-span-4 relative h-full min-h-[400px]">
          <div className="absolute inset-0 border border-accent-cyan/20 rounded-sm bg-bg-secondary/50 p-6 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
              <span className="text-xs text-accent-muted uppercase tracking-widest">Sys.Status</span>
              <span className="text-accent-green text-xs font-mono">NOMINAL</span>
            </div>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">LOCATION</span>
                <span className="text-text-primary">SECTOR 7 [USA]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">EXPERIENCE</span>
                <span className="text-text-primary">6+ YEARS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">CLEARANCE</span>
                <span className="text-accent-gold">LEVEL 4</span>
              </div>
              
              <div className="pt-8 space-y-2">
                <div className="flex justify-between text-xs text-accent-cyan">
                  <span>CPU LOAD</span>
                  <span>12%</span>
                </div>
                <div className="w-full bg-bg-tertiary h-1 rounded-full overflow-hidden">
                  <div className="h-full w-[12%] bg-accent-cyan shadow-glow-cyan" />
                </div>
                
                <div className="flex justify-between text-xs text-accent-green mt-4">
                  <span>MEMORY</span>
                  <span>64%</span>
                </div>
                <div className="w-full bg-bg-tertiary h-1 rounded-full overflow-hidden">
                  <div className="h-full w-[64%] bg-accent-green shadow-glow-green" />
                </div>
              </div>
            </div>

            {/* Decor corners */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent-cyan" />
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent-cyan" />
          </div>
        </div>

      </div>
    </section>
  );
};