import React from 'react';
import { Film, Sparkles, Send } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-2xl border-b bg-[#05070d]/90 border-slate-800/90 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Name on Left */}
        <a 
          href="#top" 
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl p-1"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 group-hover:scale-105 transition-transform">
            EJ
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
                Emad Uddin Jafor
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Video Editor &amp; Graphic Designer
            </p>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-300">
          <a
            href="#featured"
            className="px-4 py-2 rounded-xl hover:text-amber-400 hover:bg-[#131929] transition-all"
          >
            Home
          </a>
          <a
            href="#videos"
            className="px-4 py-2 rounded-xl hover:text-amber-400 hover:bg-[#131929] transition-all"
          >
            Video Portfolio
          </a>
          <a
            href="#graphics"
            className="px-4 py-2 rounded-xl hover:text-amber-400 hover:bg-[#131929] transition-all"
          >
            Graphic Works
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-xl hover:text-amber-400 hover:bg-[#131929] transition-all"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl hover:text-amber-400 hover:bg-[#131929] transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions: Quick Hire Emad button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-extrabold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Emad</span>
          </a>
        </div>

      </div>
    </header>
  );
};
