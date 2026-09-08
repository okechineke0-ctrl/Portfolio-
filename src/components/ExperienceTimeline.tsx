import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ArrowRight, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
            <span>Career Milestones & Leadership</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Leading engineering at Ocean Technologies, building institutional digital systems at CIIT Awgu, and studying computer science at ESUT Agbani.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 max-w-4xl mx-auto relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-zinc-700 before:via-zinc-800 before:to-transparent before:hidden md:before:block">
          {EXPERIENCES.map((exp, index) => {
            const isCurrent = exp.period.includes('Present');

            return (
              <div
                key={exp.id}
                className="relative pl-0 md:pl-16 transition-all group"
              >
                {/* Visual node on timeline */}
                <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-600 group-hover:border-white group-hover:scale-125 transition-all items-center justify-center">
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                <div className="p-7 sm:p-9 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/90 transition-all shadow-xl backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-zinc-800/70">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-medium">
                          {exp.type}
                        </span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors font-semibold"
                          >
                            <span>Live Company Platform</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-zinc-100 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-zinc-300">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex md:flex-col md:items-end gap-3 md:gap-1 text-xs font-mono text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="py-5 space-y-4">
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5">
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Key Achievements & Impact</span>
                      </div>
                      <ul className="space-y-2 pl-1">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900/80 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
