export interface VideoItem {
  id: string;
  title: string;
  category: 'Reels & Shorts' | 'Cinematic & Trailers' | 'Commercial & Promo';
  youtubeId: string;
  isShort?: boolean;
  duration?: string;
  description: string;
  tags: string[];
  accentColor: string;
  glowColor: string;
  borderColor: string;
  tagColor: string;
  badgeBg: string;
  playBtnBg: string;
  accentTextColor: string;
}

export interface GraphicItem {
  id: string;
  filename: string;
  remoteUrl: string;
  title: string;
  category: 'Poster & Key Art' | 'Product & Commercial' | 'Social & Banner' | 'Photo Retouching';
  clientOrTheme: string;
  description: string;
  tags: string[];
  aspectRatio: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  accentTextColor: string;
}

export const PROFILE_IMAGE = 'profile.jpg';
export const PROFILE_REMOTE = 'https://i.postimg.cc/7hpnbmcT/Whats-App-Image-2026-09-28-at-06-10-27.jpg';
export const PROFILE_FALLBACK_SVG = PROFILE_REMOTE;

export const FEATURED_VIDEO_DEFAULT = {
  title: "UI Animation & Motion Design Reel",
  subtitle: "Showcasing smooth UI micro-interactions, dynamic timing, and crisp visual animations by Emad Uddin Jafor.",
  youtubeId: "0Pn_LKxSWow",
  aspectRatio: "16/9",
};

export const PORTFOLIO_VIDEOS: VideoItem[] = [
  // 1. UI Animation | Motion Design (User Video 1)
  {
    id: "v1",
    title: "UI Animation | Motion Design",
    category: "Commercial & Promo",
    youtubeId: "0Pn_LKxSWow",
    isShort: true,
    duration: "0:45",
    description: "Intuitive UI motion design showcasing micro-interactions, responsive mobile application interfaces, and smooth easing curves.",
    tags: ["UI Animation", "Motion Design", "After Effects"],
    accentColor: "from-amber-400 via-orange-500 to-yellow-500",
    glowColor: "rgba(245, 158, 11, 0.55)",
    borderColor: "group-hover:border-amber-400",
    tagColor: "text-amber-300 bg-amber-950/70 border-amber-500/40",
    badgeBg: "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/50",
    accentTextColor: "group-hover:text-amber-300",
  },
  // 2. Motion Design & Video Editing (Moved from #8 to #2 as requested)
  {
    id: "v9",
    title: "Motion Design & Video Editing — Dynamic Reel",
    category: "Reels & Shorts",
    youtubeId: "GfttoSD3OJQ",
    isShort: true,
    duration: "0:30",
    description: "Fast-paced vertical reel demonstrating seamless cuts, rhythm-synced sound fx, modern kinetic motion, and eye-catching hooks.",
    tags: ["Vertical Reel", "Kinetic Motion", "Shorts Edit"],
    accentColor: "from-fuchsia-500 via-purple-600 to-pink-500",
    glowColor: "rgba(217, 70, 239, 0.55)",
    borderColor: "group-hover:border-fuchsia-400",
    tagColor: "text-fuchsia-300 bg-fuchsia-950/70 border-fuchsia-500/40",
    badgeBg: "bg-gradient-to-r from-fuchsia-500 to-purple-600 text-slate-100",
    playBtnBg: "bg-gradient-to-tr from-fuchsia-500 to-pink-500 text-slate-100 shadow-fuchsia-500/50",
    accentTextColor: "group-hover:text-fuchsia-300",
  },
  // 3. 3D Camera Animation | Visual Motion (User Video 3)
  {
    id: "v3",
    title: "3D Camera Animation | Emad Uddin Jafor",
    category: "Cinematic & Trailers",
    youtubeId: "h2rl7k65MzU",
    isShort: true,
    duration: "0:52",
    description: "Cinematic 3D camera sweeps with multi-layered depth, realistic parallax, and immersive lighting dynamics engineered for visual impact.",
    tags: ["3D Camera", "Motion Graphics", "Parallax"],
    accentColor: "from-cyan-400 via-teal-400 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.55)",
    borderColor: "group-hover:border-cyan-400",
    tagColor: "text-cyan-300 bg-cyan-950/70 border-cyan-500/40",
    badgeBg: "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-cyan-400 to-teal-500 text-slate-950 shadow-cyan-500/50",
    accentTextColor: "group-hover:text-cyan-300",
  },
  // 4. Zayen Motion 1 | Dynamic Cinematic Motion Reel
  {
    id: "v5",
    title: "Zayen Motion 1 | Dynamic Cinematic Reel",
    category: "Reels & Shorts",
    youtubeId: "B5QczfQz_gw",
    isShort: true,
    duration: "0:38",
    description: "Seamless match cuts, speed ramps, and stylized 3D character motion tuned for mobile video retention.",
    tags: ["Speed Ramps", "Character Motion", "DaVinci"],
    accentColor: "from-violet-500 via-purple-500 to-fuchsia-500",
    glowColor: "rgba(168, 85, 247, 0.55)",
    borderColor: "group-hover:border-purple-400",
    tagColor: "text-purple-300 bg-purple-950/70 border-purple-500/40",
    badgeBg: "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-slate-100",
    playBtnBg: "bg-gradient-to-tr from-purple-500 to-pink-500 text-slate-100 shadow-purple-500/50",
    accentTextColor: "group-hover:text-purple-300",
  },
  // 5. Fanta Product Motion Graphics
  {
    id: "v6",
    title: "Fanta Product Motion Graphics",
    category: "Commercial & Promo",
    youtubeId: "s6xxrv4RESE",
    isShort: true,
    duration: "0:35",
    description: "Commercial 3D beverage product visual animation featuring dynamic fruit splashes, fluid physics, and high-energy motion design.",
    tags: ["Commercial Art", "Product Motion", "3D Animation"],
    accentColor: "from-rose-500 via-red-500 to-orange-500",
    glowColor: "rgba(244, 63, 94, 0.55)",
    borderColor: "group-hover:border-rose-400",
    tagColor: "text-rose-300 bg-rose-950/70 border-rose-500/40",
    badgeBg: "bg-gradient-to-r from-rose-500 to-orange-500 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-rose-500 to-orange-500 text-slate-950 shadow-rose-500/50",
    accentTextColor: "group-hover:text-rose-300",
  },
  // 6. Video Editing for Nafis Selim (Moved from #2 to #6 as requested)
  {
    id: "v2",
    title: "Video Editing for Nafis Selim | Content Creator & Podcaster",
    category: "Reels & Shorts",
    youtubeId: "C1kICpyi6t4",
    isShort: true,
    duration: "0:48",
    description: "High-retention podcast and content creator editing featuring punchy jump-cuts, animated captions, visual B-roll, and balanced audio.",
    tags: ["Podcast Editing", "Nafis Selim", "Content Creator"],
    accentColor: "from-pink-500 via-purple-500 to-indigo-500",
    glowColor: "rgba(217, 70, 239, 0.55)",
    borderColor: "group-hover:border-pink-400",
    tagColor: "text-pink-300 bg-pink-950/70 border-pink-500/40",
    badgeBg: "bg-gradient-to-r from-pink-500 to-purple-600 text-slate-100",
    playBtnBg: "bg-gradient-to-tr from-pink-500 to-purple-500 text-slate-100 shadow-pink-500/50",
    accentTextColor: "group-hover:text-pink-300",
  },
  // 7. Motion Graphics Tutorial Experience
  {
    id: "v7",
    title: "Motion Graphics Tutorial Experience | Creative Motion Design",
    category: "Commercial & Promo",
    youtubeId: "suv5-vMvSzE",
    isShort: false,
    duration: "0:55",
    description: "Dynamic motion design tutorial and visual workflow showcase featuring fluid shape animations, kinetic typography, and audio synchronization.",
    tags: ["Motion Design", "Creative Workflow", "Tutorial Experience"],
    accentColor: "from-sky-400 via-blue-500 to-indigo-600",
    glowColor: "rgba(14, 165, 233, 0.55)",
    borderColor: "group-hover:border-sky-400",
    tagColor: "text-sky-300 bg-sky-950/70 border-sky-500/40",
    badgeBg: "bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-sky-400 to-indigo-500 text-slate-950 shadow-sky-500/50",
    accentTextColor: "group-hover:text-sky-300",
  },
  // 8. Asunna Foundation | AI-Generated Promotional Video
  {
    id: "v8",
    title: "Asunna Foundation | AI-Generated Promotional Video",
    category: "Commercial & Promo",
    youtubeId: "Hb9yT3HBnwQ",
    isShort: false,
    duration: "1:02",
    description: "AI-assisted non-profit visual campaign with evocative storytelling, atmospheric color grades, and impactful audio narration.",
    tags: ["AI Video", "Promotional", "Storytelling"],
    accentColor: "from-teal-400 via-emerald-500 to-green-600",
    glowColor: "rgba(20, 184, 166, 0.55)",
    borderColor: "group-hover:border-teal-400",
    tagColor: "text-teal-300 bg-teal-950/70 border-teal-500/40",
    badgeBg: "bg-gradient-to-r from-teal-400 to-emerald-600 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-teal-400 to-emerald-500 text-slate-950 shadow-teal-500/50",
    accentTextColor: "group-hover:text-teal-300",
  },
  // 9. Education & Entrepreneurship | Motivational Video
  {
    id: "v10",
    title: "Education & Entrepreneurship | Motivational Video",
    category: "Commercial & Promo",
    youtubeId: "YsnHMeA_Iw0",
    isShort: false,
    duration: "1:15",
    description: "Motivational storytelling cut blending narrative pacing, ambient audio grading, and impactful kinetic captions.",
    tags: ["Motivational", "Storytelling", "Documentary Cut"],
    accentColor: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "rgba(245, 158, 11, 0.55)",
    borderColor: "group-hover:border-amber-400",
    tagColor: "text-amber-300 bg-amber-950/70 border-amber-500/40",
    badgeBg: "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/50",
    accentTextColor: "group-hover:text-amber-300",
  },
  // 10. Outdoor Learning Session | Video Editing (Kept at bottom as requested)
  {
    id: "v4",
    title: "Outdoor Learning Session | Video Editing",
    category: "Reels & Shorts",
    youtubeId: "E02IOylGR4U",
    isShort: true,
    duration: "0:45",
    description: "Punchy, fast-paced retention editing with sound effects, dynamic zooms, natural grading, and swift transitions.",
    tags: ["Sound Design", "Fast Pacing", "Premiere Pro"],
    accentColor: "from-emerald-400 via-green-500 to-teal-400",
    glowColor: "rgba(168, 85, 247, 0.55)",
    borderColor: "group-hover:border-emerald-400",
    tagColor: "text-emerald-300 bg-emerald-950/70 border-emerald-500/40",
    badgeBg: "bg-gradient-to-r from-emerald-400 to-teal-600 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-emerald-400 to-green-500 text-slate-950 shadow-emerald-500/50",
    accentTextColor: "group-hover:text-emerald-300",
  },
];

// Curated 14 Authentic Graphic Works by Emad Uddin Jafor
export const GRAPHIC_WORKS: GraphicItem[] = [
  // 1. SHOW-M Urban Sneaker Campaign
  {
    id: "g4",
    filename: "graphic4.jpg",
    remoteUrl: "https://i.postimg.cc/sVnSsVk4/3747-EMAD-UDDIN-JAFOR-SHOW-M.png",
    title: "Urban Athletic Sneaker Campaign (SHOW-M)",
    category: "Product & Commercial",
    clientOrTheme: "Footwear & Fashion Commercial",
    description: "Commercial footwear advertising visual with dynamic sneaker presentation, high-contrast urban background, and clean typography.",
    tags: ["Product Showcase", "Sneaker Campaign", "Lighting & FX"],
    aspectRatio: "1/1",
    accentColor: "from-cyan-500 via-blue-600 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.5)",
    borderColor: "group-hover:border-cyan-400",
    accentTextColor: "group-hover:text-cyan-300",
  },
  // 2. নফস বড্ড ভয়ংকর (Behance Featured Series 05)
  {
    id: "g7",
    filename: "graphic7.jpg",
    remoteUrl: "https://i.postimg.cc/tZmFkccT/3747Emad-uddin-jafor-Behance-Poster-Design-05-3x.jpg",
    title: "নফস বড্ড ভয়ংকর — Typographic Key Art",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series 05",
    description: "Dramatic cinematic visual layout emphasizing emotional tension, custom Bengali calligraphy typography, and dark atmospheric color grading.",
    tags: ["নফস বড্ড ভয়ংকর", "Behance Series", "Poster Art"],
    aspectRatio: "3/4",
    accentColor: "from-amber-500 via-orange-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.55)",
    borderColor: "group-hover:border-amber-400",
    accentTextColor: "group-hover:text-amber-300",
  },
  // 3. মৃত্যু আমার কাছে সহজ (Behance Featured Series 01)
  {
    id: "g5",
    filename: "graphic5.jpg",
    remoteUrl: "https://i.postimg.cc/rR0xPJ6T/3747Emad-uddin-jafor-Behance-Poster-Design-01-3x.jpg",
    title: "মৃত্যু আমার কাছে সহজ — Cinematic Drama Poster",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series 01",
    description: "Atmospheric movie key visual with moody shadows, powerful Bengali headline typography, and character emotional focus.",
    tags: ["মৃত্যু আমার কাছে সহজ", "Drama Poster", "Key Art"],
    aspectRatio: "3/4",
    accentColor: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
    borderColor: "group-hover:border-purple-400",
    accentTextColor: "group-hover:text-purple-300",
  },
  // 4. Cyberpunk Action Key Art 03
  {
    id: "g6",
    filename: "graphic6.jpg",
    remoteUrl: "https://i.postimg.cc/zbPT7QQf/3747Emad-uddin-jafor-Behance-Poster-Design-03-Copy.jpg",
    title: "Cyberpunk Action Key Art 03",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series 03",
    description: "High-contrast visual poster with neon cyan and magenta rim lighting and dramatic action framing.",
    tags: ["Action Key Art", "Cyberpunk Style", "Lighting FX"],
    aspectRatio: "3/4",
    accentColor: "from-teal-400 via-cyan-500 to-indigo-600",
    glowColor: "rgba(20, 184, 166, 0.5)",
    borderColor: "group-hover:border-teal-400",
    accentTextColor: "group-hover:text-teal-300",
  },
  // 5. কিছু টেক স্কিল যা শেখা যায় সহজেই (Behance Series 10)
  {
    id: "g8",
    filename: "graphic8.jpg",
    remoteUrl: "https://i.postimg.cc/GT8G5Q0C/3747Emad-uddin-jafor-Behance-Poster-Design-10-3x-Copy.jpg",
    title: "কিছু টেক স্কিল যা শেখা যায় সহজেই",
    category: "Poster & Key Art",
    clientOrTheme: "Educational & Tech Campaign 10",
    description: "Clean aesthetic poster layout with intentional spacing, clear Bengali typographic hierarchy, and warm golden lighting.",
    tags: ["Tech Skill", "Typography", "Visual Balance"],
    aspectRatio: "3/4",
    accentColor: "from-emerald-500 via-teal-500 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.5)",
    borderColor: "group-hover:border-emerald-400",
    accentTextColor: "group-hover:text-emerald-300",
  },
  // 6. High-End Photo Retouching & Manipulation
  {
    id: "g2",
    filename: "graphic2.jpg",
    remoteUrl: "https://i.postimg.cc/VrHXghVV/3747-EMAD-UDDIN-JAFOR-Photo-Retuching-02-Recovered-3x.jpg",
    title: "High-End Photo Retouching & Manipulation",
    category: "Photo Retouching",
    clientOrTheme: "Editorial & Portrait Polish",
    description: "Precision skin tone smoothing, micro-contrast enhancement, and realistic composite lighting.",
    tags: ["Photo Retouching", "Color Science", "Photoshop"],
    aspectRatio: "16/9",
    accentColor: "from-amber-500 via-orange-500 to-rose-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    borderColor: "group-hover:border-amber-400",
    accentTextColor: "group-hover:text-amber-300",
  },
  // 7. Italian Pizza Promotional Food Banner
  {
    id: "g3",
    filename: "graphic3.jpg",
    remoteUrl: "https://i.postimg.cc/47FpP00G/3747-EMAD-UDDIN-JAFOR-pizza-Recovered.png",
    title: "Italian Pizza Promotional Food Banner",
    category: "Product & Commercial",
    clientOrTheme: "Food & Beverage Commercial Art",
    description: "Vibrant promotional visual for culinary marketing, with appetizing color balance, textured typography, and special deal badge.",
    tags: ["Food Commercial", "Menu Promotion", "Graphic Art"],
    aspectRatio: "1/1",
    accentColor: "from-red-500 via-orange-500 to-amber-500",
    glowColor: "rgba(239, 68, 68, 0.5)",
    borderColor: "group-hover:border-red-400",
    accentTextColor: "group-hover:text-red-300",
  },
  // 8. Modern Social Media Banner Design 0
  {
    id: "g1",
    filename: "graphic1.jpg",
    remoteUrl: "https://i.postimg.cc/CB6b722w/3747-emad-uddin-jafor-Banner-Design-0.png",
    title: "Modern Social Media Banner Concept 0",
    category: "Social & Banner",
    clientOrTheme: "Brand Identity & Web Header",
    description: "Sleek banner design featuring structured geometric compositions, modern corporate aesthetics, and bold brand messaging.",
    tags: ["Banner Design", "Brand Header", "Photoshop"],
    aspectRatio: "1/1",
    accentColor: "from-blue-500 via-indigo-600 to-violet-600",
    glowColor: "rgba(99, 102, 241, 0.5)",
    borderColor: "group-hover:border-indigo-400",
    accentTextColor: "group-hover:text-indigo-300",
  },
  // 9. Behance Creative Poster Series 12
  {
    id: "g9",
    filename: "graphic9.jpg",
    remoteUrl: "https://i.postimg.cc/H8cXh2Gs/3747Emad-uddin-jafor-Behance-Poster-Design-12.jpg",
    title: "Behance Creative Poster Series 12",
    category: "Poster & Key Art",
    clientOrTheme: "Artistic Poster Exploration 12",
    description: "Conceptual poster study experimenting with contrast, focal depth, and striking narrative typography.",
    tags: ["Poster Series", "Creative Direction", "Behance"],
    aspectRatio: "3/4",
    accentColor: "from-violet-500 via-purple-600 to-pink-500",
    glowColor: "rgba(139, 92, 246, 0.5)",
    borderColor: "group-hover:border-violet-400",
    accentTextColor: "group-hover:text-violet-300",
  },
  // 10. AirPods Pro Commercial Visual
  {
    id: "g10",
    filename: "graphic10.jpg",
    remoteUrl: "https://i.postimg.cc/zHbKcjm3/air-pods-f.png",
    title: "AirPods Pro Commercial Visual",
    category: "Product & Commercial",
    clientOrTheme: "Tech Hardware Advertisement",
    description: "Minimalist and premium product visualization highlighting wireless earbuds with clean studio background and floating composition.",
    tags: ["Product Render", "AirPods Commercial", "Clean Studio"],
    aspectRatio: "3/4",
    accentColor: "from-sky-400 via-blue-500 to-cyan-400",
    glowColor: "rgba(56, 189, 248, 0.5)",
    borderColor: "group-hover:border-sky-400",
    accentTextColor: "group-hover:text-sky-300",
  },
  // 11. Creative Vector Art & Character Design
  {
    id: "g11",
    filename: "graphic11.jpg",
    remoteUrl: "https://i.postimg.cc/4H7VS5CY/emad-uddin-jafor.png",
    title: "Creative Vector Art & Character Design",
    category: "Poster & Key Art",
    clientOrTheme: "Character & Vector Illustration",
    description: "Distinctive illustrative character design with smooth vector curves, clean color fills, and expressive styling.",
    tags: ["Vector Art", "Character Design", "Illustration"],
    aspectRatio: "1/1",
    accentColor: "from-fuchsia-500 via-pink-500 to-rose-400",
    glowColor: "rgba(217, 70, 239, 0.5)",
    borderColor: "group-hover:border-fuchsia-400",
    accentTextColor: "group-hover:text-fuchsia-300",
  },
  // 12. Cinematic Character Illustration
  {
    id: "g12",
    filename: "graphic12.jpg",
    remoteUrl: "https://i.postimg.cc/5QYLR3cy/emad-uddin-jafor-png.png",
    title: "Cinematic Character Illustration",
    category: "Poster & Key Art",
    clientOrTheme: "Digital Character Artwork",
    description: "Moody character portrait with atmospheric backlight, strong silhouette, and modern stylized design.",
    tags: ["Digital Art", "Character Portrait", "Concept"],
    aspectRatio: "3/4",
    accentColor: "from-blue-500 via-indigo-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
    borderColor: "group-hover:border-blue-400",
    accentTextColor: "group-hover:text-blue-300",
  },
  // 13. Poster Design Concept 0
  {
    id: "g13",
    filename: "graphic13.jpg",
    remoteUrl: "https://i.postimg.cc/304mcBMw/emad-uddin-jafor-Poster-Design-0.jpg",
    title: "Poster Design Concept 0",
    category: "Poster & Key Art",
    clientOrTheme: "Experimental Graphic Key Art",
    description: "Bold layout exploration blending texture, strong focal points, and expressive typography.",
    tags: ["Concept Art", "Poster Design", "Layout"],
    aspectRatio: "1/1",
    accentColor: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "rgba(249, 115, 22, 0.5)",
    borderColor: "group-hover:border-orange-400",
    accentTextColor: "group-hover:text-orange-300",
  },
  // 14. Typographic Visual Art (Fanle Orikkavvvv)
  {
    id: "g14",
    filename: "graphic14.jpg",
    remoteUrl: "https://i.postimg.cc/JHDZ2qwk/fanle-orikkavvvv-1-Recovered.jpg",
    title: "Typographic Visual Art (Fanle Orikkavvvv)",
    category: "Poster & Key Art",
    clientOrTheme: "Expressive Calligraphy & Print Art",
    description: "Intricate visual layout combining typography, deep color grading, and emotive visual storytelling.",
    tags: ["Typography", "Visual Art", "Cover Art"],
    aspectRatio: "1/1",
    accentColor: "from-rose-500 via-red-500 to-amber-500",
    glowColor: "rgba(244, 63, 94, 0.5)",
    borderColor: "group-hover:border-rose-400",
    accentTextColor: "group-hover:text-rose-300",
  },
];
