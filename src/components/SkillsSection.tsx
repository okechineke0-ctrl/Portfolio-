import React from 'react';
import { Layout, Server, Cpu, Check } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-zinc-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Full-Stack & Systems Expertise
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Proficiencies built over 3+ years of production development, commercial client delivery, and computer science study at ESUT Agbani.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = idx === 0 ? Layout : idx === 1 ? Server : Cpu;

            return (
              <div
                key={group.title}
                className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/90 shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Group Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-zinc-800/80">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-zinc-200">{skill.name}</span>
                          <span className="font-mono text-zinc-400">{skill.level}%</span>
                        </div>

                        {/* Progress track */}
                        <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-zinc-400 to-white transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        <p className="text-[11px] text-zinc-400 leading-snug pt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900 mt-6 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Production Grade</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Badges Cloud */}
        <div className="mt-14 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 text-center space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Daily Engineering Toolkit
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              'React 19', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express',
              'Render Cloud', 'Cloud Infrastructure', 'Git & GitHub', 'REST APIs',
              'PostgreSQL', 'HTML5 & CSS3 Semantic Design', 'ESUT CS Algorithms', 'Responsive Web Design',
              'Linux Bash', 'CIITA Systems', 'Ocean Tech Framework'
            ].map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
