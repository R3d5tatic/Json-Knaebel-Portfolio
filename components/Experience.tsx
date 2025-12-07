import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-bg-primary/80 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Mission History" subtitle="Experience" number="02" />

        <div className="relative border-l-2 border-accent-muted/20 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-0">
                <div className="w-4 h-4 bg-bg-primary border-2 border-accent-muted group-hover:border-accent-cyan group-hover:bg-accent-cyan group-hover:shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-all duration-300 rounded-sm rotate-45 z-10 relative" />
                <div className="absolute inset-0 bg-accent-cyan/30 blur-md rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                  {job.role}
                </h3>
                <span className="font-mono text-accent-gold text-sm bg-accent-gold/5 px-3 py-1 rounded-sm border border-accent-gold/20 shadow-[0_0_10px_rgba(212,165,116,0.1)]">
                  {job.period}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-text-secondary">
                <Briefcase className="w-4 h-4 text-accent-muted group-hover:text-accent-cyan transition-colors" />
                <span className="font-mono uppercase tracking-wider text-sm">{job.company}</span>
              </div>

              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent-cyan/40 rotate-45 flex-shrink-0 group-hover:bg-accent-cyan group-hover:shadow-[0_0_5px_rgba(0,212,255,0.5)] transition-all" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
