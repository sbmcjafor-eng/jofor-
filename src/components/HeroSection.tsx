import React from 'react';
import { Sparkles, Film, Palette, ArrowRight, Video, CheckCircle, Flame } from 'lucide-react';
import { PROFILE_REMOTE } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreVideos: () => void;
  onExploreGraphics: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreVideos, onExploreGraphics }) => {
  return (
    <section id="featured" className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Executive Hero Container with Profile Picture on the RIGHT SIDE & Zero White Vibe */}
      <div className="relative p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#121626] via-[#0d101c] to-[#060810] border border-amber-500/20 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Soft luxury ambient illumination (Warm Amber & Cyber Indigo) */}
        <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* 2-Column Responsive Layout: Text on LEFT, Profile on RIGHT */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Name, Professional Intro, Skills & CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Top Verification Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wide border border-amber-500/30 shadow-lg shadow-amber-500/10">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Video Editor &amp; Commercial Graphic Designer</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.12]">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">
                Emad Uddin Jafor
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-bold block mt-3">
                Crafting High-Retention Visuals &amp; Brand Art.
              </span>
            </h1>

            {/* Concise Value Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Specialized in dynamic timeline pacing, sound-designed retention edits, and high-impact commercial graphics. Bringing fresh creativity, daily dedication, and a modern aesthetic to every frame.
            </p>

            {/* Professional Toolkit Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              {[
                'Adobe Premiere Pro',
                'After Effects',
                'DaVinci Resolve',
                'CapCut Pro',
                'Photoshop Key Art',
                'Sound Design (SFX)',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#151a28] text-slate-200 border border-slate-800 hover:border-amber-500/50 hover:text-amber-300 transition-colors shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#videos"
                onClick={onExploreVideos}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
              >
                <Film className="w-4 h-4" />
                <span>Explore Video Works</span>
              </a>

              <a
                href="#graphics"
                onClick={onExploreGraphics}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#151a28] hover:bg-[#1d2438] text-slate-200 hover:text-amber-300 font-bold text-sm border border-slate-800 hover:border-amber-500/50 shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
              >
                <Palette className="w-4 h-4 text-amber-400" />
                <span>View 14 Graphic Designs</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-amber-400 hover:text-amber-300 font-bold text-sm hover:underline transition-colors"
              >
                <span>Hire Emad</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Profile Picture on the RIGHT SIDE */}
          <div className="relative shrink-0 flex flex-col items-center">
            
            {/* Subtle luxury ambient backlight */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 via-orange-400/20 to-purple-500/25 rounded-full blur-3xl opacity-90 animate-pulse-glow" />

            {/* Frame with Refined Gold & Neon Border */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-amber-400 via-amber-600 to-purple-600 shadow-2xl">
              
              {/* Picture Container (Large, Crisp & Centered) */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[#0d101a] border-4 border-[#090b12] shadow-inner group">
                <img
                  src="profile.jpg"
                  alt="Emad Uddin Jafor - Video Editor & Graphic Designer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    if (e.currentTarget.src !== PROFILE_REMOTE) {
                      e.currentTarget.src = PROFILE_REMOTE;
                    }
                  }}
                />

                {/* Subtle luxury overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Floating Badge 1: Top-Left (Video Editor) */}
            <div className="absolute top-2 -left-3 sm:-left-6 px-4 py-2 rounded-2xl bg-[#101422]/95 text-amber-300 border border-amber-500/40 shadow-2xl backdrop-blur-md text-xs font-black flex items-center gap-2 animate-float pointer-events-none">
              <Film className="w-4 h-4 text-amber-400" />
              <span>Video Editor</span>
            </div>

            {/* Floating Badge 2: Bottom-Right (Graphic Designer) */}
            <div className="absolute bottom-10 -right-3 sm:-right-6 px-4 py-2 rounded-2xl bg-[#101422]/95 text-purple-300 border border-purple-500/40 shadow-2xl backdrop-blur-md text-xs font-black flex items-center gap-2 animate-float-delayed pointer-events-none">
              <Palette className="w-4 h-4 text-purple-400" />
              <span>Graphic Artist</span>
            </div>

            {/* Active Status Badge below picture */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-bold bg-[#101422] text-slate-200 border border-emerald-500/40 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Freelance &amp; Retention Edits</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
