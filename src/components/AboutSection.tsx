import React from 'react';
import { User, Cpu, Music, Clock, Zap, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE_REMOTE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const tools = [
    { name: 'Adobe Premiere Pro', level: 'Primary NLE Timeline', color: 'from-amber-500 to-yellow-500' },
    { name: 'After Effects', level: 'Motion Graphics & VFX', color: 'from-purple-500 to-pink-500' },
    { name: 'DaVinci Resolve', level: 'Color Science & Grading', color: 'from-orange-500 to-amber-600' },
    { name: 'CapCut Pro', level: 'Viral Reels & Fast Pacing', color: 'from-cyan-500 to-blue-500' },
    { name: 'Adobe Photoshop', level: 'Key Art & Commercial Design', color: 'from-blue-500 to-indigo-600' },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Story & Pacing Architecture',
      description: 'Dissecting the raw footage, finding the emotional beats, and establishing a tight narrative structure before touching effects.',
    },
    {
      step: '02',
      title: 'Dynamic Cut & Match Transitions',
      description: 'Cutting on action, utilizing speed ramps and seamless match-cuts that keep viewer attention locked from second one.',
    },
    {
      step: '03',
      title: 'Layered SFX & Sound Design',
      description: 'Building impactful auditory texture with whooshes, risers, impacts, and crisp dialogue ducking for maximum immersion.',
    },
    {
      step: '04',
      title: 'Cinematic Color Grading & Delivery',
      description: 'Harmonizing tone curves, skin tones, and stylistic color palettes tailored for high-res mobile and desktop displays.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-amber-500/20">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3.5 border border-amber-500/30">
            <User className="w-4 h-4 text-amber-400" />
            <span>Honest &amp; Dedicated Bio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            About Emad Uddin Jafor
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Passionate craft, daily timeline immersion, and modern creative drive across video editing and commercial graphic design.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Profile Card & Bio statement */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Honest Bio Card - 100% Dark Luxury Glass */}
          <div className="p-8 sm:p-10 rounded-[2rem] bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-900 shrink-0 shadow-lg">
                <img
                  src="profile.jpg"
                  alt="Emad Uddin Jafor"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.currentTarget.src !== PROFILE_REMOTE) {
                      e.currentTarget.src = PROFILE_REMOTE;
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-100">
                  Emad Uddin Jafor
                </h3>
                <p className="text-xs sm:text-sm font-bold text-amber-400">
                  Video Editor &amp; Graphic Designer
                </p>
              </div>
            </div>

            {/* Default Honest Bio as strictly requested */}
            <div className="relative pl-6 border-l-2 border-amber-500 my-6">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal italic">
                &ldquo;I am a passionate video editor dedicated to the art of visual storytelling. Over the past several months, I have immersed myself in learning the ins and outs of editing—practicing daily, refining my pacing, and perfecting my sound design. While I don&apos;t claim decades of industry experience, I bring fresh creativity, high-energy dedication, and a modern aesthetic to every frame. Let&apos;s create something memorable together.&rdquo;
              </p>
            </div>

            {/* Dedication Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#131929] border border-slate-800">
                <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 shrink-0 border border-amber-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    Daily Practice &amp; Rapid Learning
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Analyzing viral trends, perfecting cut speed, and mastering fresh visual techniques daily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#131929] border border-slate-800">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 shrink-0 border border-purple-500/30">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    Sound-Driven Editing
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Audio is 50% of the video. Every hit, transition, and riser is sculpted for maximum retention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#131929] border border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0 border border-cyan-500/30">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    Retention-Focused Flow
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Crafting compelling hooks, pattern interrupts, and seamless pacing to minimize drop-off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#131929] border border-slate-800">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">
                    Client Commitment
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Responsive communication, fast turnaround iterations, and attention to project details.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Workflow Steps Container */}
          <div className="p-8 sm:p-10 rounded-[2rem] bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-2xl">
            <h3 className="font-heading font-extrabold text-2xl text-slate-100 mb-6">
              My 4-Step Editing Protocol
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {workflowSteps.map((ws, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#131929] border border-slate-800/80">
                  <span className="text-xl font-black font-mono text-amber-400">
                    {ws.step}
                  </span>
                  <h4 className="font-bold text-sm text-slate-100 mt-1 mb-1.5">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ws.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Software Tools & Skills */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Software Toolkit */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-slate-100">
                Primary Software Suite
              </h3>
            </div>

            <div className="space-y-4">
              {tools.map((t, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#131929] border border-slate-800/90 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-extrabold text-sm text-slate-100">
                      {t.name}
                    </span>
                    <span className="text-[11px] font-bold text-amber-400">
                      {t.level}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${t.color}`}
                      style={{ width: `${88 - idx * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats / Work Ethics */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-2xl">
            <h3 className="font-heading font-extrabold text-xl text-slate-100 mb-6">
              Core Creative Pillars
            </h3>

            <div className="space-y-3.5">
              {[
                { title: 'Hook Retention Design', desc: 'Crafting first 3-second visual interest' },
                { title: 'Sound Design Priority', desc: 'Multi-track layered SFX & music sync' },
                { title: 'Color Vibrancy', desc: 'Clean skin tones and high-contrast punch' },
                { title: 'Reliable Communication', desc: 'Active updates on project progress' },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#131929] border border-slate-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-100">{p.title}</h5>
                    <p className="text-[11px] text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
