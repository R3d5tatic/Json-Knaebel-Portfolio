import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Card } from './ui/Card';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Operational Assets" subtitle="Projects" number="03" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />

                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,20,26,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 z-20">
                  <span className={`
                     px-2 py-1 text-xs font-mono uppercase border backdrop-blur-md
                     ${project.status === 'completed' ? 'text-accent-green border-accent-green bg-accent-green/10' : ''}
                     ${project.status === 'in-progress' ? 'text-accent-gold border-accent-gold bg-accent-gold/10' : ''}
                     ${project.status === 'prototype' ? 'text-accent-cyan border-accent-cyan bg-accent-cyan/10' : ''}
                   `}>
                    [ {project.status} ]
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-accent-cyan text-xs font-mono tracking-widest uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">{project.title}</h3>
                </div>
              </div>

              <p className="text-text-secondary mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs font-mono text-accent-cyan bg-accent-cyan/5 px-2 py-1 rounded-sm border border-accent-cyan/20">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs font-mono text-accent-cyan/70 px-2 py-1">+{project.technologies.length - 3}</span>
                )}
              </div>

              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent-cyan transition-colors group/btn"
                >
                  See Details
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
