/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoGrid } from './components/VideoGrid';
import { GraphicSection } from './components/GraphicSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Code, Download, Check, Sparkles } from 'lucide-react';
import { STANDALONE_HTML_TEMPLATE } from './data/standaloneHtml';

export default function App() {
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const handleCopyStandaloneHtml = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_TEMPLATE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadStandaloneHtml = () => {
    const blob = new Blob([STANDALONE_HTML_TEMPLATE], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#04060a] text-slate-100 selection:bg-amber-500/30 selection:text-amber-300"
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Floating Single-File HTML Exporter Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowExportModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111624]/95 hover:bg-[#1a2134] text-slate-100 border border-amber-500/30 hover:border-amber-400 shadow-2xl backdrop-blur-md text-xs font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          title="Download single-file standalone index.html"
        >
          <Code className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Export Standalone HTML</span>
          <span className="sm:hidden">Export HTML</span>
        </button>
      </div>

      {/* Main Content Layout:
          1. Hero Section (Profile Picture on RIGHT side, Text on LEFT)
          2. Video Portfolio Grid (Larger, animated on cursor, vivid colors, zero white)
          3. Graphic Work Section (14 Curated Artworks + Lightbox)
          4. Detailed About Me (Bio) Section
          5. Get in Touch Section
      */}
      <main>
        {/* 1. Profile & Hero Section */}
        <HeroSection
          onExploreVideos={() => {
            document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreGraphics={() => {
            document.getElementById('graphics')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Video Portfolio Grid */}
        <VideoGrid />

        {/* 3. Graphic Work Section */}
        <GraphicSection />

        {/* 4. Detailed About Me (Bio) Section */}
        <AboutSection />

        {/* 5. Get in Touch Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Standalone HTML Code Modal - 100% Dark Luxury Glass */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e121d] rounded-3xl p-6 sm:p-8 border border-amber-500/35 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-500/25">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-slate-100">
                    Standalone Single-File HTML
                  </h3>
                  <p className="text-xs text-slate-400">
                    Zero white, animated video cards &amp; full lightbox included.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="py-4 text-xs text-slate-300 leading-relaxed">
              Complete, self-contained single-file HTML code with Tailwind CSS CDN, all 14 graphic artworks, video embeds, and pure dark luxurious styling.
            </div>

            <div className="flex-1 overflow-auto rounded-xl bg-[#06080e] border border-slate-800 p-4 font-mono text-xs text-slate-300 select-all">
              <pre className="whitespace-pre-wrap">{STANDALONE_HTML_TEMPLATE.slice(0, 1200)}... (truncated for preview)</pre>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={handleCopyStandaloneHtml}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161c2b] hover:bg-[#20283c] text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5 text-amber-400" />}
                <span>{copiedCode ? 'Full Code Copied!' : 'Copy Entire HTML'}</span>
              </button>

              <button
                onClick={handleDownloadStandaloneHtml}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg hover:shadow-amber-500/25 transition-all cursor-pointer hover:scale-105"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download index.html</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
