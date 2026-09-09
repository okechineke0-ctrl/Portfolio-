import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck,
  CheckCircle2, 
  ExternalLink,
  MessageSquare, 
  ChevronDown,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

export const HeroSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Executive Pitch (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open to High-Impact Software Roles & Partnerships</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-zinc-400 font-mono text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span>Software Engineer & Tech Executive</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.06]">
                Okechineke Success <span className="text-zinc-400 font-normal">Chiemerie</span>
              </h1>

              {/* Core Credentials Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-200">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CEO @ Ocean Technologies</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-200">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CS @ ESUT Agbani (2024 — Till Now)</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ex-CIITA Awgu Developer</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Enugu, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Executive Bio Narrative */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal pt-1">
              Computer Science undergraduate at <span className="text-white font-medium">Enugu State University of Science and Technology (ESUT), Agbani</span> (2024 — Till Now). 
              With <span className="text-white font-medium">3+ years of professional engineering</span>, founder & CEO of{' '}
              <a 
                href={PERSONAL_INFO.companyUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-400 underline decoration-emerald-500/60 underline-offset-4 hover:decoration-emerald-400 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Ocean Technologies
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , and former software developer at Catholic Institute of Information Technology and Applied Sciences (CIITA) Awgu. Specializing in modern React, Next.js, and reliable cloud software delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 font-semibold text-sm transition-all shadow-xl hover:shadow-2xl active:scale-98"
              >
                <span>Explore Ocean Technologies</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 font-semibold text-sm transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-800/50 font-semibold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={downloadVCard}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-sm transition-all"
                title="Download Okechineke's contact card (vCard)"
              >
                <Download className="w-4 h-4" />
                <span className="text-xs font-mono">vCard</span>
              </button>
            </div>

            {/* Direct Phone & Email quick copy bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 font-mono">
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <span className="text-emerald-400 font-sans flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <span className="text-zinc-600 hover:text-zinc-400">(copy)</span>
                )}
              </button>

              <span className="text-zinc-800">•</span>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="text-emerald-400 font-sans flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <span className="text-zinc-600 hover:text-zinc-400">(copy)</span>
                )}
              </button>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Picture & Studio Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-zinc-800/60 via-zinc-700/20 to-zinc-800/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <img
                  src="/grok_1788850503948.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/portrait.jpg') {
                      target.src = '/portrait.jpg';
                    }
                  }}
                  alt="Okechineke Success Chiemerie"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Studio Photo Footer Badge */}
                <div className="p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Okechineke Success Chiemerie
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      Founder & CEO, Ocean Technologies
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified Alum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors text-xs font-mono"
          >
            <span>DISCOVER MY WORK & LEADERSHIP</span>
            <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
