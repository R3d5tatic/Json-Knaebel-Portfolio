import React from 'react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Technical Protocols" subtitle="Capabilities" number="01" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <Card key={idx} className="h-full">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-cyan block" />
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between text-sm font-mono mb-1">
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-bg-tertiary rounded-sm overflow-hidden">
                      <div 
                        className="h-full bg-accent-cyan/70 group-hover:bg-accent-cyan transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
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