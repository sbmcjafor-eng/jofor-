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
  title: "Featured Showreel — Dynamic Cuts & Visual Impact",
  subtitle: "Showcasing high-energy pacing, immersive sound design, and crisp color science.",
  youtubeId: "LXb3EKWsInQ",
  aspectRatio: "16/9",
};

export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "High Energy Rhythm & Flow Cut",
    category: "Reels & Shorts",
    youtubeId: "E02IOylGR4U",
    isShort: true,
    duration: "0:45",
    description: "Punchy, fast-paced retention editing with sound effects, dynamic zooms, and swift transitions.",
    tags: ["Sound Design", "Fast Pacing", "Premiere Pro"],
    accentColor: "from-amber-400 via-orange-500 to-yellow-500",
    glowColor: "rgba(245, 158, 11, 0.55)",
    borderColor: "group-hover:border-amber-400",
    tagColor: "text-amber-300 bg-amber-950/70 border-amber-500/40",
    badgeBg: "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/50",
    accentTextColor: "group-hover:text-amber-300",
  },
  {
    id: "v2",
    title: "Dynamic Cinematic Motion Reel",
    category: "Reels & Shorts",
    youtubeId: "B5QczfQz_gw",
    isShort: true,
    duration: "0:38",
    description: "Seamless match cuts, speed ramps, and color grading tuned specifically for mobile displays.",
    tags: ["Speed Ramps", "Color Grade", "DaVinci"],
    accentColor: "from-pink-500 via-purple-500 to-indigo-500",
    glowColor: "rgba(217, 70, 239, 0.55)",
    borderColor: "group-hover:border-pink-400",
    tagColor: "text-pink-300 bg-pink-950/70 border-pink-500/40",
    badgeBg: "bg-gradient-to-r from-pink-500 to-purple-600 text-slate-100",
    playBtnBg: "bg-gradient-to-tr from-pink-500 to-purple-500 text-slate-100 shadow-pink-500/50",
    accentTextColor: "group-hover:text-pink-300",
  },
  {
    id: "v3",
    title: "Visual Storytelling & Atmosphere",
    category: "Reels & Shorts",
    youtubeId: "zq3-7KOfniA",
    isShort: true,
    duration: "0:52",
    description: "Story-driven rhythm with balanced audio textures, atmosphere building, and cinematic tone.",
    tags: ["Story Arc", "SFX Foley", "After Effects"],
    accentColor: "from-cyan-400 via-teal-400 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.55)",
    borderColor: "group-hover:border-cyan-400",
    tagColor: "text-cyan-300 bg-cyan-950/70 border-cyan-500/40",
    badgeBg: "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-cyan-400 to-teal-500 text-slate-950 shadow-cyan-500/50",
    accentTextColor: "group-hover:text-cyan-300",
  },
  {
    id: "v4",
    title: "Retention & Visual Hooks Edit",
    category: "Cinematic & Trailers",
    youtubeId: "jfKfPfyJRdk",
    isShort: true,
    duration: "1:00",
    description: "Engaging hook design, layered audio design, and smooth motion graphics to maximize watch time.",
    tags: ["Hook Design", "Transitions", "CapCut / AE"],
    accentColor: "from-emerald-400 via-green-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.55)",
    borderColor: "group-hover:border-emerald-400",
    tagColor: "text-emerald-300 bg-emerald-950/70 border-emerald-500/40",
    badgeBg: "bg-gradient-to-r from-emerald-400 to-teal-600 text-slate-950",
    playBtnBg: "bg-gradient-to-tr from-emerald-400 to-green-500 text-slate-950 shadow-emerald-500/50",
    accentTextColor: "group-hover:text-emerald-300",
  },
];

// All 14 real graphic design works uploaded by Emad Uddin Jafor
export const GRAPHIC_WORKS: GraphicItem[] = [
  {
    id: "g1",
    filename: "graphic1.jpg",
    remoteUrl: "https://i.postimg.cc/CB6b722w/3747-emad-uddin-jafor-Banner-Design-0.png",
    title: "Creative Agency Hero Banner",
    category: "Social & Banner",
    clientOrTheme: "Brand Identity & Web Display",
    description: "High-impact horizontal banner design with sleek typography, dynamic gradients, and modern layout balance.",
    tags: ["Banner Design", "Typography", "Branding"],
    aspectRatio: "16/9",
    accentColor: "from-blue-500 via-indigo-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.5)",
    borderColor: "group-hover:border-cyan-400",
    accentTextColor: "group-hover:text-cyan-300",
  },
  {
    id: "g2",
    filename: "graphic2.jpg",
    remoteUrl: "https://i.postimg.cc/VrHXghVV/3747-EMAD-UDDIN-JAFOR-Photo-Retuching-02-Recovered-3x.jpg",
    title: "High-End Photo Retouching & Manipulation",
    category: "Photo Retouching",
    clientOrTheme: "Editorial & Portrait Polish",
    description: "Precision skin tone smoothing, micro-contrast enhancement, and realistic composite lighting.",
    tags: ["Photo Retouching", "Color Science", "Photoshop"],
    aspectRatio: "3/4",
    accentColor: "from-amber-500 via-orange-500 to-rose-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    borderColor: "group-hover:border-amber-400",
    accentTextColor: "group-hover:text-amber-300",
  },
  {
    id: "g3",
    filename: "graphic3.jpg",
    remoteUrl: "https://i.postimg.cc/47FpP00G/3747-EMAD-UDDIN-JAFOR-pizza-Recovered.png",
    title: "Delicious Pizza Commercial Poster",
    category: "Product & Commercial",
    clientOrTheme: "Food & Beverage Advertising",
    description: "Mouth-watering commercial key visual with dynamic ingredient splash, bold typography, and appetite appeal.",
    tags: ["Food Advertising", "Visual Effects", "Commercial Art"],
    aspectRatio: "1/1",
    accentColor: "from-red-500 via-orange-500 to-amber-400",
    glowColor: "rgba(239, 68, 68, 0.5)",
    borderColor: "group-hover:border-orange-400",
    accentTextColor: "group-hover:text-orange-300",
  },
  {
    id: "g4",
    filename: "graphic4.jpg",
    remoteUrl: "https://i.postimg.cc/47FpP00Z/3747-EMAD-UDDIN-JAFOR-SHOW-M.png",
    title: "Urban Athletic Sneaker Campaign",
    category: "Product & Commercial",
    clientOrTheme: "Footwear & Fashion Commercial",
    description: "Energetic product showcase featuring flying kicks, neon contrast lighting, and bold promotional badges.",
    tags: ["Product Showcase", "Sneaker Campaign", "Lighting"],
    aspectRatio: "1/1",
    accentColor: "from-cyan-500 via-blue-600 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.5)",
    borderColor: "group-hover:border-cyan-400",
    accentTextColor: "group-hover:text-cyan-300",
  },
  {
    id: "g5",
    filename: "graphic5.jpg",
    remoteUrl: "https://i.postimg.cc/rR0xPJ6T/3747Emad-uddin-jafor-Behance-Poster-Design-01-3x.jpg",
    title: "Cinematic Film Poster Series 01",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series",
    description: "Atmospheric movie key visual with moody shadows, title treatment hierarchy, and character focus.",
    tags: ["Behance Series", "Poster Art", "Key Art"],
    aspectRatio: "3/4",
    accentColor: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
    borderColor: "group-hover:border-purple-400",
    accentTextColor: "group-hover:text-purple-300",
  },
  {
    id: "g6",
    filename: "graphic6.jpg",
    remoteUrl: "https://i.postimg.cc/zbPT7QQf/3747Emad-uddin-jafor-Behance-Poster-Design-03-Copy.jpg",
    title: "Cyberpunk Action Key Art 03",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series",
    description: "High-contrast visual poster with neon cyan and magenta rim lighting and dramatic action framing.",
    tags: ["Action Key Art", "Cyberpunk Style", "Lighting FX"],
    aspectRatio: "3/4",
    accentColor: "from-teal-400 via-cyan-500 to-indigo-600",
    glowColor: "rgba(20, 184, 166, 0.5)",
    borderColor: "group-hover:border-teal-400",
    accentTextColor: "group-hover:text-teal-300",
  },
  {
    id: "g7",
    filename: "graphic7.jpg",
    remoteUrl: "https://i.postimg.cc/tZmFkccT/3747Emad-uddin-jafor-Behance-Poster-Design-05-3x.jpg",
    title: "Dramatic Narrative Poster 05",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series",
    description: "Epic cinematic visual layout emphasizing emotional tension, custom color grading, and texture overlays.",
    tags: ["Behance Series", "Cinematic", "Texture Work"],
    aspectRatio: "3/4",
    accentColor: "from-orange-500 via-amber-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.5)",
    borderColor: "group-hover:border-amber-400",
    accentTextColor: "group-hover:text-amber-300",
  },
  {
    id: "g8",
    filename: "graphic8.jpg",
    remoteUrl: "https://i.postimg.cc/GT8G5Q0C/3747Emad-uddin-jafor-Behance-Poster-Design-10-3x-Copy.jpg",
    title: "Minimalist Typographic Key Art 10",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series",
    description: "Refined aesthetic poster layout with intentional negative space, bold headline typography, and golden hour palette.",
    tags: ["Typography", "Layout Composition", "Visual Balance"],
    aspectRatio: "3/4",
    accentColor: "from-emerald-500 via-teal-500 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.5)",
    borderColor: "group-hover:border-emerald-400",
    accentTextColor: "group-hover:text-emerald-300",
  },
  {
    id: "g9",
    filename: "graphic9.jpg",
    remoteUrl: "https://i.postimg.cc/H8cXh2Gs/3747Emad-uddin-jafor-Behance-Poster-Design-12.jpg",
    title: "Thriller Mystery Key Art 12",
    category: "Poster & Key Art",
    clientOrTheme: "Behance Featured Series",
    description: "Deep shadows, monochromatic contrasts, and mysterious character silhouettes tailored for indie cinema.",
    tags: ["Thriller Film", "Shadow Contrast", "Behance"],
    aspectRatio: "3/4",
    accentColor: "from-rose-500 via-pink-600 to-purple-600",
    glowColor: "rgba(244, 63, 94, 0.5)",
    borderColor: "group-hover:border-rose-400",
    accentTextColor: "group-hover:text-rose-300",
  },
  {
    id: "g10",
    filename: "graphic10.jpg",
    remoteUrl: "https://i.postimg.cc/zHbKcjm3/air-pods-f.png",
    title: "AirPods Pro Floating Soundstage Visual",
    category: "Product & Commercial",
    clientOrTheme: "Consumer Electronics Commercial",
    description: "Clean spatial audio visual concept with acoustic waves, floating product geometry, and luxury glass reflections.",
    tags: ["Tech Commercial", "Soundwave FX", "Product Rendering"],
    aspectRatio: "1/1",
    accentColor: "from-cyan-400 via-sky-500 to-blue-600",
    glowColor: "rgba(14, 165, 233, 0.5)",
    borderColor: "group-hover:border-sky-400",
    accentTextColor: "group-hover:text-sky-300",
  },
  {
    id: "g11",
    filename: "graphic11.jpg",
    remoteUrl: "https://i.postimg.cc/4H7VS5CY/emad-uddin-jafor.png",
    title: "Emad Uddin Jafor Personal Brand Artwork 01",
    category: "Social & Banner",
    clientOrTheme: "Creator Brand Identity",
    description: "Custom digital illustration & typography badge crafted for creator profile branding and YouTube channel art.",
    tags: ["Brand Identity", "Creator Graphic", "Photoshop"],
    aspectRatio: "1/1",
    accentColor: "from-amber-400 via-yellow-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    borderColor: "group-hover:border-amber-400",
    accentTextColor: "group-hover:text-amber-300",
  },
  {
    id: "g12",
    filename: "graphic12.jpg",
    remoteUrl: "https://i.postimg.cc/5QYLR3cy/emad-uddin-jafor-png.png",
    title: "Emad Uddin Jafor Personal Brand Artwork 02",
    category: "Social & Banner",
    clientOrTheme: "Creator Brand Identity",
    description: "Alternate high-energy creative monogram with glowing gradient geometry and modern creator aesthetic.",
    tags: ["Monogram", "Creative Identity", "Vector Composition"],
    aspectRatio: "1/1",
    accentColor: "from-purple-500 via-indigo-600 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
    borderColor: "group-hover:border-purple-400",
    accentTextColor: "group-hover:text-purple-300",
  },
  {
    id: "g13",
    filename: "graphic13.jpg",
    remoteUrl: "https://i.postimg.cc/304mcBMw/emad-uddin-jafor-Poster-Design-0.jpg",
    title: "Commercial Promotional Poster Design",
    category: "Poster & Key Art",
    clientOrTheme: "Corporate & Event Promotion",
    description: "Commercial event promotional poster with strong visual focal point, grid hierarchy, and clear call-to-action.",
    tags: ["Event Poster", "Marketing Art", "Visual Hierarchy"],
    aspectRatio: "3/4",
    accentColor: "from-amber-500 via-red-500 to-pink-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    borderColor: "group-hover:border-amber-400",
    accentTextColor: "group-hover:text-amber-300",
  },
  {
    id: "g14",
    filename: "graphic14.jpg",
    remoteUrl: "https://i.postimg.cc/JHDZ2qwk/fanle-orikkavvvv-1-Recovered.jpg",
    title: "Complex Composite Artwork Recovery",
    category: "Photo Retouching",
    clientOrTheme: "Advanced Digital Composite",
    description: "Multi-layered digital photo manipulation showcasing lighting balance, background blending, and high-fidelity texture pass.",
    tags: ["Digital Composite", "Layer Blending", "Retouching"],
    aspectRatio: "3/4",
    accentColor: "from-teal-400 via-emerald-500 to-green-600",
    glowColor: "rgba(20, 184, 166, 0.5)",
    borderColor: "group-hover:border-teal-400",
    accentTextColor: "group-hover:text-teal-300",
  },
];
