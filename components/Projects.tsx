import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { PROJECTS } from '../constants';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Deployed Systems" subtitle="Portfolio" number="03" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
                
                <div className="absolute top-4 right-4">
                   <span className={`
                     px-2 py-1 text-xs font-mono uppercase border
                     ${project.status === 'completed' ? 'text-accent-green border-accent-green bg-accent-green/10' : ''}
                     ${project.status === 'in-progress' ? 'text-accent-gold border-accent-gold bg-accent-gold/10' : ''}
                     ${project.status === 'prototype' ? 'text-accent-cyan border-accent-cyan bg-accent-cyan/10' : ''}
                   `}>
                     {project.status}
                   </span>
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-accent-cyan text-xs font-mono tracking-widest uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                </div>
              </div>

              <p className="text-text-secondary mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono uppercase px-2 py-1 bg-white/5 border border-white/10 text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" className="!px-0">
                  Details
                </Button>
                <div className="flex-1" />
                <button className="text-text-muted hover:text-accent-cyan transition-colors">
                  <Github className="w-5 h-5" />
                </button>
                <button className="text-text-muted hover:text-accent-cyan transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};