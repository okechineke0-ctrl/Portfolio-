import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  ExternalLink, 
  Sparkles,
  Building,
  GraduationCap,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadVCard } from '../utils/vcard';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link with encoded parameters
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Direct Inquiries & Collaboration</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Connect with Okechineke Success
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Have a project, partnership opportunity, or technical inquiry? Reach out directly via call, WhatsApp, or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-lg space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400">Phone Hotline (Call / SMS)</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xl font-heading font-bold text-white hover:text-zinc-200 transition-colors block mt-0.5"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  International: {PERSONAL_INFO.formattedPhone}
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-700/60 transition-all shadow-lg space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/40 border border-emerald-800/60 flex items-center justify-center text-emerald-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-800/60">
                  Instant Reply
                </span>
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-400/80">WhatsApp Direct Chat</div>
                <div className="text-lg font-heading font-bold text-white mt-0.5">
                  Start a Live Conversation
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Fastest way to get in touch for software projects, consultation, and quotes.
                </p>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md active:scale-98"
                >
                  <span>Chat on WhatsApp (+234 814 657 8477)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-lg space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400">Official Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-heading font-bold text-white hover:text-zinc-200 transition-colors block mt-0.5 break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* vCard Download & Organization Info */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="text-zinc-300">Digital Contact Card:</span>
                <button
                  onClick={downloadVCard}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-xs transition-colors"
                >
                  <Download className="w-3 h-3 text-emerald-400" />
                  <span>Download .vcf</span>
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Building className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Ocean Technologies: </span>
                  <a 
                    href={PERSONAL_INFO.companyUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    ocean-f4gj.onrender.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <GraduationCap className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>ESUT Agbani • Computer Science</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Enugu State, Nigeria</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Message Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-2xl backdrop-blur-md">
            <div className="space-y-2 mb-6">
              <h3 className="font-heading font-bold text-2xl text-white">
                Send a Direct Message
              </h3>
              <p className="text-sm text-zinc-400">
                Direct transmission to <span className="text-zinc-200 font-medium">okechineke0@gmail.com</span>. Responses typically within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Message Initiated!
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  Your email client has been opened with your pre-filled inquiry. You can also message Okechineke directly on WhatsApp anytime.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
                  >
                    Open WhatsApp Chat
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-xs hover:text-white"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Johnson"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 block">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 block">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Project Inquiry / Tech Role Collaboration"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 block">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or role requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Okechineke</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
