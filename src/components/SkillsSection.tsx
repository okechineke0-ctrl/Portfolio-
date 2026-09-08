import React, { useState } from 'react';
import { Layout, Server, Cpu, Check, Terminal, Code2, ShieldAlert, Sparkles, Database } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'visual' | 'terminal'>('visual');

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
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

          {/* View Mode Toggle */}
          <div className="pt-3 flex justify-center">
            <div className="p-1 rounded-xl bg-zinc-950 border border-zinc-800 inline-flex items-center gap-1 text-xs font-mono">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'visual'
                    ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Visual Matrix
              </button>
              <button
                onClick={() => setViewMode('terminal')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'terminal'
                    ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dev Console</span>
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'visual' ? (
          /* Visual Cards Grid */
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
        ) : (
          /* Terminal / Architecture Spec View */
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#090a0f] border border-zinc-800 overflow-hidden shadow-2xl font-mono text-xs text-zinc-300">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-zinc-400 text-[11px]">okechineke@ocean-technologies:~ (env: production)</span>
              </div>
              <span className="text-[10px] text-zinc-500">arch: x86_64 linux</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-emerald-400">➜ </span>
                <span className="text-cyan-400">~ </span>
                <span className="text-white font-bold">cat /etc/engineer-profile.json</span>
              </div>

              <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-300 overflow-x-auto text-[11px] leading-relaxed">
{`{
  "engineer": "Okechineke Success Chiemerie",
  "experience": "3+ years professional full-stack delivery",
  "current_roles": [
    "CEO & Founder @ Ocean Technologies",
    "Computer Science Scholar @ ESUT Agbani",
    "Former Developer @ Catholic Institute of Information Technology (CIIT) Awgu"
  ],
  "frontend_stack": {
    "frameworks": ["React 19", "Next.js 14/15", "Vite"],
    "styling": ["Tailwind CSS", "Design Systems", "CSS3 Flex/Grid"],
    "language": "TypeScript (strict mode)"
  },
  "backend_and_cloud": {
    "runtime": "Node.js (ESM & CommonJS)",
    "apis": ["Express.js RESTful endpoints", "JSON Web Tokens", "Webhooks"],
    "databases": ["PostgreSQL", "MongoDB", "Structured Query Language"],
    "deployment": ["Render Cloud Hosting", "Cloud Infrastructure", "Docker Containers"]
  },
  "contact": {
    "phone": "08146578477",
    "email": "okechineke0@gmail.com",
    "company_url": "https://ocean-f4gj.onrender.com/"
  }
}`}
              </pre>

              <div className="text-zinc-400 text-[11px] flex items-center gap-2">
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
                <span>Status: Available for technical leadership and engineering contracts.</span>
              </div>
            </div>
          </div>
        )}

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
              'Linux Bash', 'CIIT Systems', 'Ocean Tech Framework'
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
