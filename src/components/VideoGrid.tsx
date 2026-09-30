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
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-amber-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-2.5 border border-amber-500/30 shadow-md">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Video Showcase &bull; {videos.length} Verified Works</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            Curated Video Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            High-retention editing, motion graphics, podcast pacing, and 3D camera animations by Emad Uddin Jafor.
          </p>
        </div>

        {/* Action button: Add custom video */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141926] hover:bg-[#1f2638] text-amber-400 border border-amber-500/35 font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-amber-400" />
            <span>Add Video Link</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 border-amber-400 shadow-md scale-102'
                  : 'bg-[#0f1422] text-slate-300 border-slate-800 hover:border-amber-500/50 hover:text-amber-300 hover:bg-[#161d30]'
              }`}
            >
              {cat}
            </button>
          );
        })}
        <span className="text-xs text-amber-400/80 ml-auto hidden sm:inline font-mono">
          {filteredVideos.length} {filteredVideos.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      {/* Video Portfolio Grid: 4 Cards Per Row (Just like Graphic Design Section), Compact, Zero Void */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredVideos.map((video) => {
          const isPlaying = playingVideoId === video.id;

          return (
            <div
              key={video.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800/90 shadow-xl transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
              style={{
                boxShadow: '0 16px 36px -10px rgba(0,0,0,0.85)',
              }}
            >
              {/* Colorful Ambient Glow on Cursor Hover */}
              <div 
                className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${video.accentColor} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 pointer-events-none`}
              />

              {/* Light Shimmer Sweep across card */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-2xl">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent card-shimmer" />
              </div>

              {/* Glowing Accent Border Line on Hover */}
              <div 
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-100 transition-colors duration-400 pointer-events-none z-30 ${video.borderColor}`}
              />

              {/* Video Player & Thumbnail Container: Uniform aspect-video */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#030509]">
                {isPlaying ? (
                  <div className="w-full h-full relative z-20">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full border-0"
                    />
                    {/* Floating Controls on top-right */}
                    <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1.5 rounded-lg bg-black/90 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/40 transition-colors shadow-lg text-[11px] font-bold flex items-center gap-1"
                        title="Open directly on YouTube"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>YouTube</span>
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideoId(null);
                        }}
                        className="p-1.5 rounded-lg bg-black/90 hover:bg-rose-600 text-slate-100 border border-slate-700 transition-colors shadow-lg cursor-pointer"
                        title="Return to preview"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Helper Bar for guaranteed playback on any device */}
                    <div className="absolute bottom-2 inset-x-2 z-30 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-amber-500/30 text-[11px] text-slate-300">
                      <span className="truncate">প্লেব্যাক সমস্যা হলে:</span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="ml-2 font-bold text-amber-400 hover:text-amber-300 underline flex items-center gap-1 shrink-0"
                      >
                        <span>YouTube-এ চালান</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Interactive Custom Video Cover */
                  <div
                    onClick={() => setPlayingVideoId(video.id)}
                    className="relative w-full h-full overflow-hidden group/slide cursor-pointer"
                  >
                    {/* YouTube High-Resolution Thumbnail with guaranteed 200 OK fallback */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('mqdefault.jpg')) {
                          target.src = `https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`;
                        }
                      }}
                    />

                    {/* Dark Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-black/30 to-black/20 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Animated Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="relative flex items-center justify-center">
                        <div className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${video.accentColor} opacity-25 group-hover:opacity-80 blur-md group-hover:scale-125 transition-all duration-400`} />
                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full ${video.playBtnBg} flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all duration-300 border border-slate-950`}>
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Category badge on top-left */}
                    <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-extrabold bg-black/85 text-amber-300 backdrop-blur-md border border-amber-500/40 shadow-lg">
                        {video.category}
                      </span>
                    </div>

                    {/* Duration badge on top-right */}
                    {video.duration && (
                      <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/85 text-slate-200 border border-slate-700/60 backdrop-blur-md shadow">
                          {video.duration}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Content: Compact, Tight, Matching Graphic Cards Style (Zero Empty Void) */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between relative z-20 bg-gradient-to-b from-transparent to-[#080b14]">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] sm:text-xs text-amber-400 font-bold truncate">
                      {video.category}
                    </p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-amber-300 transition-colors p-1 rounded hover:bg-slate-800/60 shrink-0"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className={`font-heading font-extrabold text-sm sm:text-base text-slate-100 ${video.accentTextColor} transition-colors line-clamp-1`}>
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom Row: Tags & Compact Watch/Play Button (Snug immediately below description) */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1 overflow-hidden">
                    {video.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-slate-300 border border-slate-800/90 truncate max-w-[95px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setPlayingVideoId(isPlaying ? null : video.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-extrabold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                        isPlaying
                          ? 'bg-rose-600 text-slate-100 hover:bg-rose-500 border border-rose-400'
                          : `${video.badgeBg} border border-amber-400/50 hover:shadow-lg`
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3 h-3 fill-current" />
                          <span>Close</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                          <span>Watch</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#161c2a] text-slate-300 hover:text-amber-300 hover:bg-[#20293d] border border-slate-700/60 transition-all hover:scale-110"
                      title="Watch directly on YouTube"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
