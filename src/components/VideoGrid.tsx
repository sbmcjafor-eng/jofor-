import React, { useState } from 'react';
import { ExternalLink, Plus, Film, Tag, Sparkles, X, Check, Play, Pause, RotateCcw } from 'lucide-react';
import { VideoItem, PORTFOLIO_VIDEOS } from '../data/portfolioData';

export const VideoGrid: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>(PORTFOLIO_VIDEOS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newUrl, setNewUrl] = useState<string>('');
  const [newCategory, setNewCategory] = useState<'Reels & Shorts' | 'Cinematic & Trailers' | 'Commercial & Promo'>('Reels & Shorts');
  const [newDescription, setNewDescription] = useState<string>('');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const categories = ['All', 'Reels & Shorts', 'Cinematic & Trailers', 'Commercial & Promo'];

  const filteredVideos = activeFilter === 'All'
    ? videos
    : videos.filter(v => v.category === activeFilter);

  const extractYoutubeId = (url: string): string => {
    const trimmed = url.trim();
    if (!trimmed) return '';
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

    const shortsMatch = trimmed.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

    const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch && watchMatch[1]) return watchMatch[1];

    const beMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (beMatch && beMatch[1]) return beMatch[1];

    return trimmed;
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedId = extractYoutubeId(newUrl);
    if (!parsedId || !newTitle) return;

    const colorPalettes = [
      {
        accent: 'from-amber-400 via-orange-500 to-yellow-500',
        glow: 'rgba(245, 158, 11, 0.55)',
        border: 'group-hover:border-amber-400',
        tag: 'text-amber-300 bg-amber-950/70 border-amber-500/40',
        badge: 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950',
        play: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/50',
        text: 'group-hover:text-amber-300',
      },
      {
        accent: 'from-cyan-400 via-teal-400 to-blue-500',
        glow: 'rgba(6, 182, 212, 0.55)',
        border: 'group-hover:border-cyan-400',
        tag: 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40',
        badge: 'bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950',
        play: 'bg-gradient-to-tr from-cyan-400 to-teal-500 text-slate-950 shadow-cyan-500/50',
        text: 'group-hover:text-cyan-300',
      },
      {
        accent: 'from-pink-500 via-purple-500 to-indigo-500',
        glow: 'rgba(217, 70, 239, 0.55)',
        border: 'group-hover:border-pink-400',
        tag: 'text-pink-300 bg-pink-950/70 border-pink-500/40',
        badge: 'bg-gradient-to-r from-pink-500 to-purple-600 text-slate-100',
        play: 'bg-gradient-to-tr from-pink-500 to-purple-500 text-slate-100 shadow-pink-500/50',
        text: 'group-hover:text-pink-300',
      },
    ];

    const chosen = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

    const newVideo: VideoItem = {
      id: `v-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      youtubeId: parsedId,
      isShort: newUrl.includes('/shorts/'),
      description: newDescription || 'Fast-paced cut with sound effects, dynamic zooms, and motion grading.',
      tags: ['Video Edit', newCategory, 'Visual Story'],
      accentColor: chosen.accent,
      glowColor: chosen.glow,
      borderColor: chosen.border,
      tagColor: chosen.tag,
      badgeBg: chosen.badge,
      playBtnBg: chosen.play,
      accentTextColor: chosen.text,
    };

    setVideos(prev => [newVideo, ...prev]);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setIsAddModalOpen(false);
      setNewTitle('');
      setNewUrl('');
      setNewDescription('');
    }, 1200);
  };

  return (
    <section id="videos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header with zero white elements, pure vivid luxury */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-amber-500/20">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3.5 border border-amber-500/30 shadow-lg shadow-amber-500/15">
            <Film className="w-4 h-4 animate-spin-slow text-amber-400" />
            <span>Interactive Video Showcase &bull; Hover to Animate</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Curated Video Works
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            High-retention editing, seamless match cuts, sound-designed impacts, and vivid cinematic palettes. Move your cursor over any slide to experience smooth dynamic animations.
          </p>
        </div>

        {/* Action button: Add custom video */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#141926] hover:bg-[#1f2638] text-amber-400 border border-amber-500/35 font-bold text-xs sm:text-sm transition-all shadow-xl hover:shadow-amber-500/25 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Add Video Link</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs - Ultra Colorful & Dark Obsidian */}
      <div className="flex flex-wrap items-center gap-3.5 mb-14">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 border-amber-400 shadow-xl shadow-amber-500/30 scale-105'
                  : 'bg-[#0f1422] text-slate-300 border-slate-800 hover:border-amber-500/50 hover:text-amber-300 hover:bg-[#161d30]'
              }`}
            >
              {cat}
            </button>
          );
        })}
        <span className="text-xs text-amber-400/80 ml-auto hidden sm:inline font-mono">
          {filteredVideos.length} {filteredVideos.length === 1 ? 'project displayed' : 'projects displayed'}
        </span>
      </div>

      {/* Video Portfolio Grid: Noticeably LARGER cards, Zero White, Instant Hover Animation & Dynamic Glow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14">
        {filteredVideos.map((video) => {
          const isPlaying = playingVideoId === video.id;

          return (
            <div
              key={video.id}
              className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3.5 hover:scale-[1.035] cursor-pointer"
              style={{
                boxShadow: '0 25px 50px -15px rgba(0,0,0,0.85)',
              }}
            >
              {/* Dynamic Colorful Ambient Aura Backlight on Hover */}
              <div 
                className={`absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r ${video.accentColor} opacity-0 group-hover:opacity-45 blur-2xl transition-all duration-500 pointer-events-none`}
              />

              {/* Shimmer Light Sweep on Cursor Hover */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-[2rem]">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent card-shimmer" />
              </div>

              {/* Glowing Colorful Dynamic Accent Border on Hover */}
              <div 
                className={`absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-opacity-100 transition-colors duration-500 pointer-events-none z-30 ${video.borderColor}`}
              />

              {/* Video Player & Interactive Animated Preview Container (Larger 16:9 Aspect) */}
              <div className="relative w-full bg-[#030509] overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                {isPlaying ? (
                  <div className="w-full h-full relative z-20">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                    {/* Floating Close / Reset Preview button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideoId(null);
                      }}
                      className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 hover:bg-rose-600 text-slate-100 border border-slate-700 transition-colors shadow-lg"
                      title="Return to preview"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Interactive Custom Video Slide Cover with Zero White Flash & Immediate Cursor Animation */
                  <div
                    onClick={() => setPlayingVideoId(video.id)}
                    className="relative w-full h-full overflow-hidden group/slide cursor-pointer"
                  >
                    {/* YouTube High-Resolution Thumbnail with Fallback and smooth zoom on cursor */}
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] group-hover:brightness-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('hqdefault.jpg')) {
                          target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }
                      }}
                    />

                    {/* Dark Cinematic Vignette & Colorful Tint (No white anywhere) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-black/35 to-black/20 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Large Animated Neon Play Button in Center */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="relative flex items-center justify-center">
                        {/* Outer Pulsing Wave Ring */}
                        <div className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r ${video.accentColor} opacity-25 group-hover:opacity-80 blur-md group-hover:scale-125 transition-all duration-500 animate-pulse`} />
                        
                        {/* Main Center Button */}
                        <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full ${video.playBtnBg} flex items-center justify-center shadow-2xl group-hover:scale-115 active:scale-95 transition-all duration-300 border-2 border-slate-950`}>
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Hover Hint Badge */}
                    <div className="absolute bottom-4 inset-x-0 flex justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-black/85 text-amber-300 border border-amber-500/40 shadow-xl backdrop-blur-md">
                        Click to Play Reel
                      </span>
                    </div>

                    {/* Floating Colorful Category Pill on top corner */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className={`px-4 py-1.5 rounded-xl text-xs font-extrabold backdrop-blur-md shadow-xl border ${video.tagColor}`}>
                        {video.category}
                      </span>
                    </div>

                    {/* Duration or Format Pill */}
                    {video.duration && (
                      <div className="absolute top-4 right-4 z-20 pointer-events-none">
                        <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-extrabold bg-black/85 text-slate-200 border border-slate-700/60 backdrop-blur-md shadow-lg">
                          {video.duration}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Content & Metadata: Noticeably Larger & More Spacious */}
              <div className="p-8 sm:p-9 flex-1 flex flex-col justify-between relative z-20 bg-gradient-to-b from-transparent to-[#080b14]">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 ${video.accentTextColor} transition-colors line-clamp-1`}>
                      {video.title}
                    </h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-[#181f32] text-slate-300 hover:text-amber-300 hover:bg-[#232c44] border border-slate-700/60 transition-all hover:scale-110 shadow-md shrink-0"
                      title="Open on YouTube in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 line-clamp-2 mb-6 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Tags & Action Buttons with Zero White & Colorful Accents */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-[#171e2e] text-slate-300 border border-slate-800 hover:border-amber-500/40 transition-colors"
                      >
                        <Tag className="w-3 h-3 text-amber-400" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPlayingVideoId(isPlaying ? null : video.id)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                        isPlaying
                          ? 'bg-rose-600 text-slate-100 hover:bg-rose-500 border border-rose-400'
                          : `${video.badgeBg} border border-amber-400/50 hover:shadow-xl`
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>Close Player</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Watch Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Add Custom Video Modal - 100% Dark Luxury Glass with Zero White */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0e121d] rounded-3xl p-7 sm:p-9 border border-amber-500/35 shadow-2xl">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-100">
                    Add Video to Portfolio
                  </h3>
                  <p className="text-xs text-slate-400">
                    Paste YouTube watch or shorts URL
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2.5 rounded-2xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {addedSuccess ? (
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-xl font-bold text-slate-100">
                  Video Added Successfully!
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Your new video is now live in your curated portfolio showcase.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddVideo} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Video Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Cinematic Travel Reel | Speed Ramp Cut"
                    className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    YouTube URL or ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=... or /shorts/..."
                    className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm cursor-pointer"
                  >
                    <option value="Reels & Shorts">Reels &amp; Shorts</option>
                    <option value="Cinematic & Trailers">Cinematic &amp; Trailers</option>
                    <option value="Commercial & Promo">Commercial &amp; Promo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Short Description (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Pacing breakdown, sound design texture, and transitions used..."
                    className="w-full px-4 py-3 rounded-xl bg-[#141926] border border-slate-800 focus:border-amber-500 focus:outline-none text-slate-100 text-sm"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
                  >
                    Add Project
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
