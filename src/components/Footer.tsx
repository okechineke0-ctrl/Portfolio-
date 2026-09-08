import React from 'react';
import { ArrowUp, Heart, ExternalLink, Mail, Phone, Briefcase, Download, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-900 bg-[#040406]/95 py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Bio / Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/80 flex items-center justify-center text-white font-heading font-extrabold text-sm tracking-wider shadow-lg">
                OSC
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block">
                  Okechineke Success Chiemerie
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  CEO @ Ocean Technologies • ESUT Agbani CS
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
              Computer Science student at Enugu State University of Science and Technology (ESUT), Agbani. 
              Founder and CEO of Ocean Technologies, with 3+ years delivering robust web systems and software solutions.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
              <span>Enugu State, Nigeria</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available for Engineering Roles
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li><a href="#home" className="hover:text-white transition-colors">Executive Overview</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Academic Journey</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Career Timeline & CIITA Awgu</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects & Ocean Technologies</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Technical Skills & Tooling</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Direct Inquiry</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Quick Actions (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Direct Channels
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                <span>Ocean Tech: ocean-f4gj.onrender.com</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +234 814 657 8477</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={downloadVCard}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download vCard Contact</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Okechineke Success Chiemerie. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
