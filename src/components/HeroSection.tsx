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
  Download,
  Maximize2,
  X
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

export const HeroSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

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
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                <span>Computer Science Scholar & Tech Executive</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.06]">
                Okechineke Success <span className="text-zinc-400 font-normal">Chiemerie</span>
              </h1>

              {/* Sub-Headline / Institution & Venture */}
              <div className="text-sm sm:text-base text-zinc-300 font-medium flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-white">CEO @ Ocean Technologies</span>
                <span className="text-zinc-600">•</span>
                <span>Computer Science @ ESUT Agbani</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">Ex-CIIT Awgu Developer</span>
              </div>
            </div>

            {/* Executive Bio Narrative */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Science undergraduate at <span className="text-zinc-200 font-medium">Enugu State University of Science and Technology (ESUT), Agbani</span>. 
              With <span className="text-zinc-200 font-medium">3+ years in tech</span>, founder & CEO of{' '}
              <a 
                href={PERSONAL_INFO.companyUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Ocean Technologies
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , and former software developer at Catholic Institute of Information Technology (CIIT) Awgu. Specializing in modern React, Next.js, and reliable cloud platform delivery.
            </p>

            {/* Quick Credentials Summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                <span>CEO, Ocean Technologies</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                <span>CS @ ESUT Agbani</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Ex-CIIT Awgu Developer</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Enugu, Nigeria</span>
              </div>
            </div>

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

          {/* Right Column: Studio Portrait Spotlight (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Studio Backdrop Glow / Rim Light Effect */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-b from-zinc-700/20 via-zinc-800/10 to-transparent blur-2xl pointer-events-none" />

              {/* Portrait Container Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/90 shadow-[0_25px_70px_rgba(0,0,0,0.95)] group">
                
                {/* Image itself - Pure and unedited without artificial filters or overlays */}
                <div className="relative aspect-square w-full bg-black overflow-hidden">
                  <img
                    src="/grok_1788850503948.jpg"
                    onError={(e) => {
                      // Fallback to portrait.jpg if uploaded as portrait.jpg
                      const target = e.currentTarget;
                      if (target.src !== window.location.origin + '/portrait.jpg') {
                        target.src = '/portrait.jpg';
                      }
                    }}
                    alt="Okechineke Success Chiemerie"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />

                  {/* Studio Tag Top Right */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => setIsPhotoLightboxOpen(true)}
                      className="p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white backdrop-blur-md transition-colors"
                      title="Enlarge Headshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/85 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-lg">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Original Portrait</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-5 bg-gradient-to-b from-zinc-950 to-zinc-900/95 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">
                        Okechineke Success Chiemerie
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        CEO @ Ocean Technologies • ESUT Agbani
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono font-bold text-zinc-300">
                      OSC
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Verified Leadership
                    </span>
                    <a
                      href={PERSONAL_INFO.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
                    >
                      <span>ocean-f4gj.onrender.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating Badge (Left bottom) */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Ocean Technologies</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Leading Tech Delivery</div>
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

      {/* Lightbox Modal for Headshot */}
      {isPhotoLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setIsPhotoLightboxOpen(false)}
        >
          <div className="relative max-w-lg w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsPhotoLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-zinc-800"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src="/grok_1788850503948.jpg"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + '/portrait.jpg') {
                  target.src = '/portrait.jpg';
                }
              }}
              alt="Okechineke Success Chiemerie"
              className="w-full h-auto object-contain max-h-[80vh]"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-zinc-950 text-center space-y-1">
              <div className="text-sm font-bold text-white">Okechineke Success Chiemerie</div>
              <div className="text-xs font-mono text-zinc-400">Founder & CEO @ Ocean Technologies • Computer Science @ ESUT Agbani</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
