import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 border border-emerald-400/30"
        title="Quick Chat on WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        title="Back to Top"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </aside>
  );
};
