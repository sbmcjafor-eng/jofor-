import React, { useState, useEffect } from 'react';
import { Palette, Maximize2, X, ChevronLeft, ChevronRight, Download, Layers, Tag, Eye, Sparkles } from 'lucide-react';
import { GraphicItem, GRAPHIC_WORKS } from '../data/portfolioData';

export const GraphicSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');
  const [selectedGraphicIndex, setSelectedGraphicIndex] = useState<number | null>(null);

  const categories = [
    'All Works',
    'Poster & Key Art',
    'Product & Commercial',
    'Photo Retouching',
    'Social & Banner',
  ];

  const filteredGraphics = activeCategory === 'All Works'
    ? GRAPHIC_WORKS
    : GRAPHIC_WORKS.filter(g => g.category === activeCategory);

  const openLightbox = (indexInFiltered: number) => {
    const item = filteredGraphics[indexInFiltered];
    const globalIndex = GRAPHIC_WORKS.findIndex(g => g.id === item.id);
    setSelectedGraphicIndex(globalIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedGraphicIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedGraphicIndex !== null) {
      setSelectedGraphicIndex((selectedGraphicIndex + 1) % GRAPHIC_WORKS.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedGraphicIndex !== null) {
      setSelectedGraphicIndex((selectedGraphicIndex - 1 + GRAPHIC_WORKS.length) % GRAPHIC_WORKS.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedGraphicIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGraphicIndex]);

  const activeGraphic: GraphicItem | null =
    selectedGraphicIndex !== null ? GRAPHIC_WORKS[selectedGraphicIndex] : null;

  return (
    <section id="graphics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-purple-500/20">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-purple-500/10 text-purple-400 text-xs font-bold tracking-wider uppercase mb-3.5 border border-purple-500/30 shadow-lg shadow-purple-500/15">
            <Palette className="w-4 h-4 text-purple-400" />
            <span>Design Portfolio &bull; 14 Curated Artworks</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Graphic &amp; Poster Designs
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            High-converting commercial key art, Behance poster series, product commercials, and advanced photo retouching. Move cursor over any card to animate and inspect in HD.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs sm:text-sm font-bold text-slate-200 bg-[#121624] px-5 py-3 rounded-2xl border border-slate-800 flex items-center gap-2.5 shadow-xl">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Showing {filteredGraphics.length} of {GRAPHIC_WORKS.length} Artworks</span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs - Vibrant & Zero White */}
      <div className="flex flex-wrap items-center gap-3.5 mb-14">
        {categories.map((cat) => {
          const count = cat === 'All Works' 
            ? GRAPHIC_WORKS.length 
            : GRAPHIC_WORKS.filter(g => g.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2.5 border ${
                isActive
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-slate-950 border-pink-400 shadow-xl shadow-pink-500/30 scale-105'
                  : 'bg-[#0f1422] text-slate-300 border-slate-800 hover:border-pink-500/50 hover:text-pink-300 hover:bg-[#161d30]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[11px] px-2.5 py-0.5 rounded-lg font-black ${
                isActive ? 'bg-black/30 text-slate-950' : 'bg-[#182034] text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 14 Graphic Image Cards Grid: Noticeably Larger, Animated on Cursor Hover, Colorful Glowing Aura */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        {filteredGraphics.map((graphic, idx) => (
          <div
            key={graphic.id}
            onClick={() => openLightbox(idx)}
            className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3.5 hover:scale-[1.035] cursor-pointer"
            style={{
              boxShadow: '0 25px 50px -15px rgba(0,0,0,0.85)',
            }}
          >
            {/* Colorful Ambient Glow on Cursor Hover */}
            <div 
              className={`absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r ${graphic.accentColor} opacity-0 group-hover:opacity-45 blur-2xl transition-all duration-500 pointer-events-none`}
            />

            {/* Light Shimmer Sweep across card */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-[2rem]">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent card-shimmer" />
            </div>

            {/* Glowing Accent Border Line on Hover */}
            <div 
              className={`absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-opacity-100 transition-colors duration-500 pointer-events-none z-30 ${graphic.borderColor}`}
            />

            {/* Image Container with Exact Filename & Remote Fallback */}
            <div className={`relative w-full overflow-hidden bg-[#030509] ${
              graphic.aspectRatio === '16/9' 
                ? 'aspect-[16/9]' 
                : graphic.aspectRatio === '1/1' 
                ? 'aspect-square' 
                : 'aspect-[3/4]'
            }`}>
              
              <img
                src={graphic.filename}
                alt={graphic.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.92] group-hover:brightness-105"
                onError={(e) => {
                  if (e.currentTarget.src !== graphic.remoteUrl) {
                    e.currentTarget.src = graphic.remoteUrl;
                  }
                }}
              />

              {/* Hover overlay gradient and action icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-950 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand HD Artwork</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 bg-black/85 px-2.5 py-1 rounded-md border border-slate-700">
                    {graphic.filename}
                  </span>
                </div>
              </div>

              {/* Category tag badge on top corner */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-black/85 text-amber-300 backdrop-blur-md border border-amber-500/40 shadow-xl">
                  {graphic.category}
                </span>
              </div>
            </div>

            {/* Card Content Footer: Larger & Colorful */}
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between relative z-20 bg-gradient-to-b from-transparent to-[#080b14]">
              <div>
                <h3 className={`font-heading font-extrabold text-xl sm:text-2xl text-slate-100 ${graphic.accentTextColor} transition-colors line-clamp-1`}>
                  {graphic.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-400 font-bold mt-1.5">
                  {graphic.clientOrTheme}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                  {graphic.description}
                </p>
              </div>

              {/* Tags and Enlarge Button */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {graphic.tags.slice(0, 2).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold px-3 py-1 rounded-lg bg-[#161c2a] text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-xs sm:text-sm font-extrabold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-transform group-hover:translate-x-1">
                  <span>View Full</span>
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Modal - 100% Dark Luxury Obsidian Glass, Zero White */}
      {selectedGraphicIndex !== null && activeGraphic && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
        >
          {/* Main Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[94vh] flex flex-col md:flex-row bg-[#0c101a] rounded-[2rem] overflow-hidden border border-amber-500/35 shadow-2xl"
          >
            {/* Top Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/85 hover:bg-rose-600 text-slate-100 backdrop-blur-md border border-slate-700 transition-all cursor-pointer shadow-xl"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/85 hover:bg-[#1a2134] text-slate-100 backdrop-blur-md border border-slate-700 transition-colors shadow-xl cursor-pointer"
              title="Previous graphic (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-auto md:left-[calc(65%-2.5rem)] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/85 hover:bg-[#1a2134] text-slate-100 backdrop-blur-md border border-slate-700 transition-colors shadow-xl cursor-pointer"
              title="Next graphic (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Left Preview Pane */}
            <div className="md:w-[65%] bg-[#030509] flex items-center justify-center p-4 sm:p-8 relative min-h-[320px] md:min-h-[580px]">
              <img
                src={activeGraphic.filename}
                alt={activeGraphic.title}
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-xl shadow-2xl select-none"
                onError={(e) => {
                  if (e.currentTarget.src !== activeGraphic.remoteUrl) {
                    e.currentTarget.src = activeGraphic.remoteUrl;
                  }
                }}
              />
            </div>

            {/* Right Information Details Pane */}
            <div className="md:w-[35%] p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#111624] to-[#0a0d16] border-t md:border-t-0 md:border-l border-slate-800 overflow-y-auto">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-extrabold bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
                  <Palette className="w-3.5 h-3.5" />
                  <span>{activeGraphic.category}</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-100 leading-tight">
                  {activeGraphic.title}
                </h3>

                <p className="text-xs text-amber-400 font-bold mt-1">
                  {activeGraphic.clientOrTheme}
                </p>

                <p className="text-xs text-slate-400 mt-1 font-mono">
                  File: {activeGraphic.filename}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Design Narrative
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeGraphic.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Techniques &amp; Workflow
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeGraphic.tags.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#182032] text-slate-300 border border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions: Download / Open Original */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
                <a
                  href={activeGraphic.filename}
                  download={activeGraphic.filename}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Artwork File</span>
                </a>

                <a
                  href={activeGraphic.remoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#182032] hover:bg-[#202a42] text-slate-300 hover:text-slate-100 border border-slate-700/80 text-xs font-bold transition-colors"
                >
                  <span>View Original PostImg Link</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
