import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send, Sparkles, Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'YouTube Video & Shorts',
    budget: '$100 - $300',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const contactEmail = 'emaduddinjafor@gmail.com';
  const whatsappNumber = '8801700000000';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Emad! I checked out your video editing & graphic design portfolio and I'd like to discuss a project."
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Background Container - 100% Dark Luxury Glass with Vibrant Glow, Zero White */}
      <div className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#131726] via-[#0f1322] to-[#060812] border border-amber-500/25 text-slate-100 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio summary & Instant Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase border border-amber-500/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Let&apos;s Build Something Memorable</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-100">
              Ready to elevate your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-500">
                visual content?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Have raw footage that needs dynamic pacing, sound design, and a clean modern aesthetic? Or need high-converting commercial graphic posters? Let&apos;s connect and create impact.
            </p>

            {/* Quick Action Buttons (Email & WhatsApp) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-[#181f30] hover:bg-[#222b42] text-slate-200 border border-slate-700/80 text-sm font-bold transition-all cursor-pointer hover:scale-105"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3.5">
                Connect on Socials
              </p>
              <div className="flex items-center gap-3">
                {[
                  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-400' },
                  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-400' },
                  { name: 'X / Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-amber-400' },
                  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-400' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3.5 rounded-2xl bg-[#141a27] hover:bg-[#1e273a] text-slate-300 ${s.color} border border-slate-800 transition-all hover:scale-110 shadow-md`}
                      title={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-[2rem] bg-[#0c101a]/90 border border-slate-800 shadow-2xl backdrop-blur-md">
              <h3 className="font-heading font-extrabold text-2xl text-slate-100 mb-1">
                Drop a Quick Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Tell me about your video project or graphic design vision.
              </p>

              {isSent ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-100">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Thanks for reaching out! I usually reply within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'YouTube Video & Shorts',
                        budget: '$100 - $300',
                        message: '',
                      });
                    }}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-[#182032] text-xs font-bold text-slate-200 hover:bg-[#202a42] border border-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm cursor-pointer"
                      >
                        <option value="YouTube Video & Shorts">YouTube Video &amp; Shorts</option>
                        <option value="Commercial & Brand Ad">Commercial &amp; Brand Ad</option>
                        <option value="Graphic Poster Design">Graphic Poster Design</option>
                        <option value="Full Retouching / Branding">Full Retouching / Branding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm cursor-pointer"
                      >
                        <option value="< $100">&lt; $100</option>
                        <option value="$100 - $300">$100 - $300</option>
                        <option value="$300 - $800">$300 - $800</option>
                        <option value="$800+">$800+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Give me an overview of your footage, desired pacing, deadline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Project Inquiry'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
