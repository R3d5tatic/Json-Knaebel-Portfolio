export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  status: 'completed' | 'in-progress' | 'prototype';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}