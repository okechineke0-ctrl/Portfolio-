import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  Terminal, 
  Layers, 
  Globe2,
  Cpu,
  CheckCircle2,
  Download,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'esut' | 'ciit' | 'ocean'>('all');

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>The Engineer Behind the Vision</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Academic Rigor Meets Industry Leadership
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            From algorithmic foundations at ESUT Agbani to institutional software engineering at CIITA Awgu and leading Ocean Technologies.
          </p>
        </div>

        {/* 3 Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Education (ESUT) */}
          <div className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4 shadow-xl backdrop-blur-sm group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:scale-105 transition-all">
                <GraduationCap className="w-6 h-6 text-zinc-300" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Academic Foundation</span>
                <h3 className="font-heading font-bold text-xl text-white">
                  ESUT Agbani
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Pursuing Bachelor of Science in Computer Science at <strong className="text-zinc-200">Enugu State University of Science and Technology</strong>. Deep immersion in data structures, algorithms, systems analysis, and software engineering principles.
              </p>
            </div>
            
            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Department of CS
              </span>
              <span>2024 — Till Now</span>
            </div>
          </div>

          {/* Pillar 2: Industry Track Record (CIITA) */}
          <div className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4 shadow-xl backdrop-blur-sm group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:scale-105 transition-all">
                <Briefcase className="w-6 h-6 text-zinc-300" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Applied Engineering</span>
                <h3 className="font-heading font-bold text-xl text-white">
                  CIITA Awgu
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Software developer and IT instructor at the <strong className="text-zinc-200">Catholic Institute of Information Technology and Applied Sciences (CIITA), Awgu</strong>. Built institutional databases, modernized administrative portals, and trained 100+ aspiring software engineers.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                CIITA Awgu Systems
              </span>
              <span>2022 — 2024</span>
            </div>
          </div>

          {/* Pillar 3: Ocean Technologies */}
          <div className="p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-4 shadow-xl backdrop-blur-sm group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:scale-105 transition-all">
                <Globe2 className="w-6 h-6 text-zinc-300" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Executive Leadership</span>
                <h3 className="font-heading font-bold text-xl text-white">
                  Ocean Technologies
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Founder and Chief Executive Officer of <strong className="text-zinc-200">Ocean Technologies</strong>. Directing cloud product design, client delivery, and building web platforms using React, Next.js, and reliable modern cloud architectures.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>2023 — Present</span>
            </div>
          </div>

        </div>

        {/* Narrative Box with Key Highlights & vCard Action */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900/60 to-zinc-950 border border-zinc-800/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>3+ Years of Continuous Engineering Growth</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Engineering with Purpose, Craft, and Precision
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                "My mission is bridging robust computer science foundations with commercial product excellence. Whether engineering responsive client portals in React and Tailwind CSS, architecting scalable Node.js microservices, or steering technology initiatives at Ocean Technologies, every line of code is written to solve real-world problems for clients and institutions across Nigeria and globally."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Clean, Maintainable Next.js & React Architectures',
                  'High Focus on 100% Mobile Responsiveness',
                  '3+ Years Production Engineering Experience',
                  'Direct Client & Product Leadership Track Record'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Executive Dossier
                </div>
                <button
                  onClick={downloadVCard}
                  className="flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white px-2 py-1 rounded bg-zinc-800 border border-zinc-700 transition-colors"
                  title="Download vCard file"
                >
                  <Download className="w-3 h-3 text-emerald-400" />
                  <span>Save vCard</span>
                </button>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-800 text-zinc-400">
                  <span>Name:</span>
                  <span className="text-white font-medium">Okechineke Success</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800 text-zinc-400">
                  <span>Institution:</span>
                  <span className="text-white font-medium">ESUT Agbani</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800 text-zinc-400">
                  <span>Department:</span>
                  <span className="text-white font-medium">Computer Science</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800 text-zinc-400">
                  <span>Experience:</span>
                  <span className="text-white font-medium">3+ Years</span>
                </div>
                <div className="flex justify-between py-1.5 text-zinc-400">
                  <span>Company:</span>
                  <span className="text-emerald-400 font-medium">Ocean Technologies</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  <span>Request Full CV / Connect</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
