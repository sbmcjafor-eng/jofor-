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
    <section id="graphics" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-purple-500/20">
        <div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 text-xs font-bold tracking-wider uppercase mb-3 border border-purple-500/30 shadow-lg shadow-purple-500/15">
            <Palette className="w-3.5 h-3.5 text-purple-400" />
            <span>Design Portfolio &bull; {GRAPHIC_WORKS.length} Curated Artworks</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Graphic &amp; Poster Designs
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            High-converting commercial key art, Behance poster series, product commercials, and advanced photo retouching. Move cursor over any card to animate and inspect in HD.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs sm:text-sm font-bold text-slate-200 bg-[#121624] px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-2 shadow-xl">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Showing {filteredGraphics.length} of {GRAPHIC_WORKS.length} Artworks</span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs - Vibrant & Zero White */}
      <div className="flex flex-wrap items-center gap-2.5 mb-10">
        {categories.map((cat) => {
          const count = cat === 'All Works' 
            ? GRAPHIC_WORKS.length 
            : GRAPHIC_WORKS.filter(g => g.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-slate-950 border-pink-400 shadow-xl shadow-pink-500/30 scale-105'
                  : 'bg-[#0f1422] text-slate-300 border-slate-800 hover:border-pink-500/50 hover:text-pink-300 hover:bg-[#161d30]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-lg font-black ${
                isActive ? 'bg-black/30 text-slate-950' : 'bg-[#182034] text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 14 Graphic Image Cards Grid: 4 per row, Compact & Balanced, No Empty Void */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
        {filteredGraphics.map((graphic, idx) => (
          <div
            key={graphic.id}
            onClick={() => openLightbox(idx)}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-xl transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            style={{
              boxShadow: '0 16px 36px -10px rgba(0,0,0,0.85)',
            }}
          >
            {/* Colorful Ambient Glow on Cursor Hover */}
            <div 
              className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${graphic.accentColor} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none`}
            />

            {/* Light Shimmer Sweep across card */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-2xl">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent card-shimmer" />
            </div>

            {/* Glowing Accent Border Line on Hover */}
            <div 
              className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-100 transition-colors duration-400 pointer-events-none z-30 ${graphic.borderColor}`}
            />

            {/* Compact Uniform Image Container (aspect-4/3 so all cards are identical height & not elongated) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#030509]">
              <img
                src={graphic.filename}
                alt={graphic.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108 filter brightness-[0.93] group-hover:brightness-105"
                onError={(e) => {
                  if (e.currentTarget.src !== graphic.remoteUrl) {
                    e.currentTarget.src = graphic.remoteUrl;
                  }
                }}
              />

              {/* Hover overlay gradient and action icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-950 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 shadow-xl">
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand HD</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-black/85 px-2 py-0.5 rounded border border-slate-700">
                    {graphic.filename}
                  </span>
                </div>
              </div>

              {/* Category tag badge on top corner */}
              <div className="absolute top-3 left-3 z-20 pointer-events-none">
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-black/85 text-amber-300 backdrop-blur-md border border-amber-500/40 shadow-lg">
                  {graphic.category}
                </span>
              </div>
            </div>

            {/* Card Content: Compact, Tight, Zero Empty Void */}
            <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between relative z-20 bg-gradient-to-b from-transparent to-[#080b14]">
              <div className="space-y-1.5">
                <p className="text-xs text-amber-400 font-bold truncate">
                  {graphic.clientOrTheme}
                </p>
                <h3 className={`font-heading font-extrabold text-base sm:text-lg text-slate-100 ${graphic.accentTextColor} transition-colors line-clamp-1`}>
                  {graphic.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {graphic.description}
                </p>
              </div>

              {/* Tags and Enlarge Button - Snug immediately below description */}
              <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 overflow-hidden">
                  {graphic.tags.slice(0, 2).map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-slate-300 border border-slate-800/90 truncate max-w-[110px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 shrink-0 transition-transform group-hover:translate-x-0.5">
                  <span>View Full</span>
                  <Eye className="w-3.5 h-3.5" />
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
