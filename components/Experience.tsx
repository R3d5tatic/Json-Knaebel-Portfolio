import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Mission History" subtitle="Experience" number="02" />

        <div className="relative border-l-2 border-accent-muted/20 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-bg-primary border-2 border-accent-muted group-hover:border-accent-cyan group-hover:bg-accent-cyan group-hover:shadow-glow-cyan transition-all duration-300 rounded-sm rotate-45" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                  {job.role}
                </h3>
                <span className="font-mono text-accent-gold text-sm bg-accent-gold/10 px-3 py-1 rounded-sm border border-accent-gold/20">
                  {job.period}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-text-secondary">
                <Briefcase className="w-4 h-4" />
                <span className="font-mono uppercase tracking-wider">{job.company}</span>
              </div>

              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted group-hover:text-text-secondary transition-colors">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent-cyan/50 rotate-45 flex-shrink-0" />
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