import React from 'react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Technical Protocols" subtitle="Capabilities" number="01" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <Card key={idx} className="h-full bg-bg-secondary/50 border-accent-muted/20 hover:border-accent-cyan/40 transition-colors duration-300">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent-cyan rotate-45" />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between text-sm font-mono mb-2">
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-accent-cyan text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                        [ {skill.level}% ]
                      </span>
                    </div>

                    {/* Segmented Progress Bar */}
                    <div className="flex gap-1 h-2">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className={`
                             flex-1 rounded-[1px] transition-all duration-300
                             ${(i + 1) * 10 <= skill.level
                              ? 'bg-accent-cyan shadow-[0_0_5px_rgba(0,212,255,0.5)]'
                              : 'bg-bg-tertiary opacity-30'}
                           `}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
