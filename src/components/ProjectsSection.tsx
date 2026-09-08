import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ArrowUpRight, 
  Globe, 
  Layers, 
  Sparkles,
  X,
  Code2,
  Server,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-zinc-400" />
            <span>Portfolio & Production Systems</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Featured Systems & Deployments
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Real products built for scale, performance, and immediate client value — from the Ocean Technologies platform to institutional systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'company', label: 'Ocean Technologies' },
            { id: 'enterprise', label: 'Institutional / CIITA' },
            { id: 'academic', label: 'ESUT & Academic' },
            { id: 'web', label: 'Web Applications' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-zinc-950 font-bold shadow-lg'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => {
            const isOceanTech = project.id === 'ocean-technologies';

            return (
              <div
                key={project.id}
                className={`relative rounded-2xl overflow-hidden transition-all flex flex-col justify-between group ${
                  isOceanTech
                    ? 'p-8 sm:p-10 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-zinc-950 border-2 border-zinc-700/80 shadow-[0_15px_50px_rgba(0,0,0,0.85)] md:col-span-2'
                    : 'p-7 sm:p-8 bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 shadow-xl'
                }`}
              >
                <div>
                  {/* Top Bar / Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800/70">
                    <div className="flex items-center gap-2.5">
                      {isOceanTech ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 font-mono text-xs font-semibold">
                          <Sparkles className="w-3.5 h-3.5" />
                          Flagship Venture
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs capitalize">
                          {project.category}
                        </span>
                      )}
                      <span className="text-xs font-mono text-zinc-400">
                        {isOceanTech ? 'CEO & Lead Engineer' : 'Lead Architect'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                      >
                        Architecture Spec
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="pt-6 space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="pt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="pt-5 space-y-2">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags and Actions */}
                <div className="pt-8 mt-6 border-t border-zinc-900/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80 text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition-colors"
                    >
                      View Details
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold transition-all shadow-md active:scale-98"
                      >
                        <span>Open Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 my-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800/80 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  {selectedProject.category} System Architecture
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {selectedProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Project Overview
                </h4>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Technical Architecture & Achievements
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Engineering Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-400">
                Architect: Okechineke Success Chiemerie
              </span>

              <div className="flex items-center gap-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold transition-all"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-800"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
