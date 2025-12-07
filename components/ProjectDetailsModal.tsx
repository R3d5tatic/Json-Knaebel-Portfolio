import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailsModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const images = project.images || [project.imageUrl];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8">
            <div
                className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md"
                onClick={onClose}
            />

            <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-bg-secondary border border-accent-cyan/20 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-accent-muted/20 bg-bg-tertiary/50">
                    <div>
                        <div className="text-xs text-accent-cyan font-mono uppercase tracking-widest mb-1">
                            Project // {project.category}
                        </div>
                        <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                    >
                        <X className="w-6 h-6 text-text-secondary group-hover:text-accent-red" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                    {/* Image Gallery */}
                    <div className="lg:col-span-8 bg-black relative min-h-[400px] lg:h-full flex items-center justify-center group">
                        <img
                            src={images[currentImageIndex]}
                            alt={`${project.title} view ${currentImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Navigation Controls */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 p-2 bg-black/50 border border-white/10 hover:border-accent-cyan text-white rounded-sm backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 p-2 bg-black/50 border border-white/10 hover:border-accent-cyan text-white rounded-sm backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-accent-cyan w-4' : 'bg-white/30 hover:bg-white/60'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Details Sidebar */}
                    <div className="lg:col-span-4 p-6 lg:p-8 space-y-8 bg-bg-secondary overflow-y-auto">
                        <div>
                            <h3 className="text-sm font-mono text-accent-cyan uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-cyan" />
                                Mission Overview
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-mono text-accent-cyan uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-cyan" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-bg-tertiary border border-accent-muted/30 text-xs font-mono text-text-primary rounded-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-mono text-accent-cyan uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-cyan" />
                                Status
                            </h3>
                            <span className={`
                 inline-flex items-center gap-2 px-3 py-1.5 border rounded-sm font-mono text-xs uppercase
                 ${project.status === 'completed' ? 'border-accent-green/30 bg-accent-green/10 text-accent-green' : ''}
                 ${project.status === 'prototype' ? 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan' : ''}
               `}>
                                <span className={`w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-accent-green' : 'bg-accent-cyan'} animate-pulse`} />
                                {project.status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
