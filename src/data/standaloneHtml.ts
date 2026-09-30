export const STANDALONE_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <title>Emad Uddin Jafor — Video Editor & Graphic Designer</title>
  <meta name="description" content="Portfolio of Emad Uddin Jafor: Dynamic video editing, cinematic pacing, commercial posters, and graphic artworks.">
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <!-- Google Fonts: Inter & Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #04060a; color: #e2e8f0; overflow-x: hidden; }
    h1, h2, h3, .font-heading { font-family: 'Outfit', sans-serif; letter-spacing: -0.02em; }
    .aspect-16-9 { aspect-ratio: 16 / 9; }
    .aspect-3-4 { aspect-ratio: 3 / 4; }
    .aspect-1-1 { aspect-ratio: 1 / 1; }
    /* Cursor follower styling */
    #cursor-spotlight-torch {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 50;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    #cursor-light-orb {
      pointer-events: none;
      position: fixed;
      width: 46px;
      height: 46px;
      border-radius: 9999px;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(245, 158, 11, 0.40) 0%, rgba(217, 119, 6, 0.22) 50%, rgba(180, 83, 9, 0.06) 75%, transparent 100%);
      border: 1.75px solid rgba(245, 158, 11, 0.85);
      box-shadow: 0 0 28px 7px rgba(245, 158, 11, 0.55), inset 0 0 14px rgba(251, 191, 36, 0.35);
      z-index: 51;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  </style>
</head>
<body class="bg-[#04060a] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">

  <!-- Interactive Circular Cursor Spotlight -->
  <div id="cursor-spotlight-torch"></div>
  <div id="cursor-light-orb"></div>

  <!-- Navigation Bar -->
  <header class="sticky top-0 z-40 backdrop-blur-2xl border-b bg-[#05070d]/90 border-slate-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-base shadow-xl shadow-amber-500/25">
          EJ
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-heading font-extrabold text-lg tracking-tight text-slate-100">Emad Uddin Jafor</span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available
            </span>
          </div>
          <p class="text-xs text-slate-400 font-medium">Video Editor &amp; Graphic Designer</p>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
        <a href="#featured" class="hover:text-amber-400 transition-colors">Home</a>
        <a href="#videos" class="hover:text-amber-400 transition-colors">Video Works</a>
        <a href="#graphics" class="hover:text-amber-400 transition-colors">Graphic Portfolio</a>
        <a href="#about" class="hover:text-amber-400 transition-colors">About</a>
        <a href="#contact" class="hover:text-amber-400 transition-colors">Contact</a>
      </nav>

      <a href="#contact" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs shadow-xl shadow-amber-500/25 hover:scale-105 transition-all">
        Hire Emad
      </a>
    </div>
  </header>

  <!-- Hero Section (Profile on RIGHT, Text on LEFT) -->
  <section id="featured" class="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="relative p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#121626] via-[#0d101c] to-[#060810] border border-amber-500/20 shadow-2xl overflow-hidden">
      <div class="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div class="flex-1 text-center lg:text-left space-y-6">
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30">
            <span>Video Editor &amp; Commercial Graphic Designer</span>
          </div>
          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">Emad Uddin Jafor</span>
            <span class="block text-2xl sm:text-3xl text-slate-300 font-bold mt-2">Crafting High-Retention Visuals &amp; Brand Art.</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Specialized in dynamic timeline pacing, sound-designed retention edits, and high-impact commercial graphics.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#videos" class="px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 transition-all">
              Explore Video Works
            </a>
            <a href="#graphics" class="px-7 py-4 rounded-2xl bg-[#151a28] hover:bg-[#1d2438] text-slate-200 hover:text-amber-300 font-bold text-sm border border-slate-800 hover:border-amber-500/50 shadow-lg hover:scale-105 transition-all">
              Explore Graphic Portfolio
            </a>
          </div>
        </div>

        <!-- Profile on Right -->
        <div class="relative shrink-0 flex flex-col items-center">
          <div class="relative p-1.5 rounded-full bg-gradient-to-tr from-amber-400 via-amber-600 to-purple-600 shadow-2xl">
            <div class="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[#0d101a] border-4 border-[#090b12]">
              <img src="https://i.postimg.cc/7hpnbmcT/Whats-App-Image-2026-09-28-at-06-10-27.jpg" alt="Emad Uddin Jafor" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#101422] text-slate-200 border border-emerald-500/40">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Freelance</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Works Section (Larger, Animated on Cursor Hover, Zero White) -->
  <section id="videos" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="mb-14 pb-8 border-b border-amber-500/20">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-3 border border-amber-500/30">
        <span>Video Showcase &bull; Hover to Animate</span>
      </div>
      <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">Curated Video Works</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      <!-- Video 1: UI Animation | Motion Design -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-amber-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/0Pn_LKxSWow?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-amber-400 font-bold truncate">Commercial &amp; Promo</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1">UI Animation | Motion Design</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Intuitive UI motion design showcasing micro-interactions, responsive mobile application interfaces, and smooth easing curves.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-amber-300 border border-slate-800">UI Animation</span>
            <a href="https://www.youtube.com/watch?v=0Pn_LKxSWow" target="_blank" class="text-xs font-bold text-amber-400 hover:text-amber-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 2: Motion Design & Video Editing (Moved from #8 to #2) -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-fuchsia-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/GfttoSD3OJQ?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-fuchsia-400 font-bold truncate">Reels &amp; Shorts</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-fuchsia-300 transition-colors line-clamp-1">Motion Design &amp; Video Editing</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Fast-paced vertical reel demonstrating seamless cuts, rhythm-synced sound fx, modern kinetic motion, and eye-catching hooks.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-fuchsia-300 border border-slate-800">Shorts Reel</span>
            <a href="https://youtube.com/shorts/GfttoSD3OJQ" target="_blank" class="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 3: 3D Camera Animation -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/h2rl7k65MzU?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-cyan-400 font-bold truncate">Cinematic &amp; Trailers</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">3D Camera Animation</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Cinematic 3D camera sweeps with multi-layered depth, realistic parallax, and immersive lighting dynamics engineered for visual impact.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-cyan-300 border border-slate-800">3D Camera</span>
            <a href="https://www.youtube.com/watch?v=h2rl7k65MzU" target="_blank" class="text-xs font-bold text-cyan-400 hover:text-cyan-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 4: Zayen Motion 1 -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-purple-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/B5QczfQz_gw?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-purple-400 font-bold truncate">Reels &amp; Shorts</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-1">Zayen Motion 1</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Seamless match cuts, speed ramps, and stylized 3D character motion tuned for mobile video retention.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-purple-300 border border-slate-800">Speed Ramps</span>
            <a href="https://www.youtube.com/watch?v=B5QczfQz_gw" target="_blank" class="text-xs font-bold text-purple-400 hover:text-purple-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 5: Fanta Product Motion Graphics -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-rose-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/s6xxrv4RESE?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-rose-400 font-bold truncate">Commercial &amp; Promo</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-rose-300 transition-colors line-clamp-1">Fanta Product Motion Graphics</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Commercial 3D beverage product visual animation featuring dynamic fruit splashes, fluid physics, and high-energy motion design.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-rose-300 border border-slate-800">Product Motion</span>
            <a href="https://www.youtube.com/watch?v=s6xxrv4RESE" target="_blank" class="text-xs font-bold text-rose-400 hover:text-rose-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 6: Video Editing for Nafis Selim (Moved from #2 to #6) -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-pink-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/C1kICpyi6t4?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-pink-400 font-bold truncate">Reels &amp; Shorts</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-pink-300 transition-colors line-clamp-1">Video Editing for Nafis Selim</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">High-retention podcast and content creator editing featuring punchy jump-cuts, animated captions, visual B-roll, and balanced audio.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-pink-300 border border-slate-800">Podcast Edit</span>
            <a href="https://www.youtube.com/watch?v=C1kICpyi6t4" target="_blank" class="text-xs font-bold text-pink-400 hover:text-pink-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 7: Motion Graphics Tutorial Experience -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-sky-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/suv5-vMvSzE?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-sky-400 font-bold truncate">Commercial &amp; Promo</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-sky-300 transition-colors line-clamp-1">Motion Graphics Tutorial Experience</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Dynamic motion design tutorial and visual workflow showcase featuring fluid shape animations, kinetic typography, and audio synchronization.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-sky-300 border border-slate-800">Motion Design</span>
            <a href="https://www.youtube.com/watch?v=suv5-vMvSzE" target="_blank" class="text-xs font-bold text-sky-400 hover:text-sky-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 8: Asunna Foundation | AI-Generated Promotional Video -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-teal-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/Hb9yT3HBnwQ?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-teal-400 font-bold truncate">Commercial &amp; Promo</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-teal-300 transition-colors line-clamp-1">Asunna Foundation | AI Promo</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">AI-assisted non-profit visual campaign with evocative storytelling, atmospheric color grades, and impactful audio narration.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-teal-300 border border-slate-800">AI Video</span>
            <a href="https://www.youtube.com/watch?v=Hb9yT3HBnwQ" target="_blank" class="text-xs font-bold text-teal-400 hover:text-teal-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 9: Education & Entrepreneurship | Motivational Video -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-amber-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/YsnHMeA_Iw0?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-amber-400 font-bold truncate">Commercial &amp; Promo</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1">Education &amp; Entrepreneurship</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Motivational storytelling cut blending narrative pacing, ambient audio grading, and impactful kinetic captions.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-amber-300 border border-slate-800">Motivational</span>
            <a href="https://www.youtube.com/watch?v=YsnHMeA_Iw0" target="_blank" class="text-xs font-bold text-amber-400 hover:text-amber-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 10: Outdoor Learning Session (Placed at bottom as requested) -->
      <div class="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-xl hover:border-emerald-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/E02IOylGR4U?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div class="space-y-1.5">
            <p class="text-[11px] text-emerald-400 font-bold truncate">Reels &amp; Shorts</p>
            <h3 class="font-heading font-extrabold text-sm sm:text-base text-slate-100 group-hover:text-emerald-300 transition-colors line-clamp-1">Outdoor Learning Session</h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">Punchy, fast-paced retention editing with sound effects, dynamic zooms, natural grading, and swift transitions.</p>
          </div>
          <div class="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161c2a] text-emerald-300 border border-slate-800">Sound Design</span>
            <a href="https://www.youtube.com/watch?v=E02IOylGR4U" target="_blank" class="text-xs font-bold text-emerald-400 hover:text-emerald-300">YouTube &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Graphic Works Section (4 columns, compact, zero void) -->
  <section id="graphics" class="py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
    <div class="mb-10 pb-6 border-b border-purple-500/20">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 text-xs font-bold uppercase mb-3 border border-purple-500/30">
        <span>Design Portfolio &bull; Curated Artworks</span>
      </div>
      <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">Graphic &amp; Poster Designs</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      <!-- 1. The Shoe / Sneaker Campaign (SHOW-M) -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic4.jpg" alt="Urban Athletic Sneaker Campaign (SHOW-M)" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-cyan-400">Footwear &amp; Fashion Commercial</span>
          <h3 class="font-bold text-base text-slate-100 truncate">Urban Athletic Sneaker Campaign (SHOW-M)</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Commercial footwear advertising visual with dynamic sneaker presentation.</p>
        </div>
      </div>

      <!-- 2. নফস বড্ড ভয়ংকর -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic7.jpg" alt="নফস বড্ড ভয়ংকর" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-amber-400">Behance Featured Series 05</span>
          <h3 class="font-bold text-base text-slate-100 truncate">নফস বড্ড ভয়ংকর — Typographic Key Art</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Dramatic cinematic visual layout emphasizing emotional tension and calligraphy.</p>
        </div>
      </div>

      <!-- 3. মৃত্যু আমার কাছে সহজ -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-purple-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic5.jpg" alt="মৃত্যু আমার কাছে সহজ" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-purple-400">Behance Featured Series 01</span>
          <h3 class="font-bold text-base text-slate-100 truncate">মৃত্যু আমার কাছে সহজ — Cinematic Drama Poster</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Atmospheric movie key visual with moody shadows and Bengali typography.</p>
        </div>
      </div>

      <!-- 4. Cyberpunk Poster 03 -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-teal-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic6.jpg" alt="Cyberpunk Action Key Art 03" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-teal-400">Behance Featured Series 03</span>
          <h3 class="font-bold text-base text-slate-100 truncate">Cyberpunk Action Key Art 03</h3>
          <p class="text-xs text-slate-400 line-clamp-2">High-contrast visual poster with neon cyan rim lighting.</p>
        </div>
      </div>

      <!-- 5. কিছু টেক স্কিল যা শেখা যায় সহজেই -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-emerald-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic8.jpg" alt="কিছু টেক স্কিল যা শেখা যায় সহজেই" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-emerald-400">Educational &amp; Tech Campaign 10</span>
          <h3 class="font-bold text-base text-slate-100 truncate">কিছু টেক স্কিল যা শেখা যায় সহজেই</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Clean aesthetic poster layout with intentional spacing and hierarchy.</p>
        </div>
      </div>

      <!-- 6. Photo Retouching -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic2.jpg" alt="High-End Photo Retouching" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-amber-400">Editorial &amp; Portrait Polish</span>
          <h3 class="font-bold text-base text-slate-100 truncate">High-End Photo Retouching</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Precision skin tone smoothing and micro-contrast enhancement.</p>
        </div>
      </div>

      <!-- 7. Italian Pizza Banner -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-red-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic3.jpg" alt="Italian Pizza Promotional Food Banner" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-red-400">Product &amp; Commercial Art</span>
          <h3 class="font-bold text-base text-slate-100 truncate">Italian Pizza Promotional Banner</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Vibrant promotional visual for culinary marketing.</p>
        </div>
      </div>

      <!-- 8. Modern Banner Design 0 -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic1.jpg" alt="Modern Social Media Banner Concept 0" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-blue-400">Social &amp; Brand Header</span>
          <h3 class="font-bold text-base text-slate-100 truncate">Modern Social Media Banner Concept 0</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Sleek banner design featuring structured geometric compositions.</p>
        </div>
      </div>

      <!-- 9. AirPods Pro Commercial Visual -->
      <div class="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-sky-400 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 shadow-xl">
        <div class="w-full aspect-[4/3] overflow-hidden bg-[#030509]">
          <img src="graphic10.jpg" alt="AirPods Pro Commercial Visual" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500">
        </div>
        <div class="p-4 sm:p-4.5 space-y-1">
          <span class="text-xs font-bold text-sky-400">Tech Hardware Commercial</span>
          <h3 class="font-bold text-base text-slate-100 truncate">AirPods Pro Commercial Visual</h3>
          <p class="text-xs text-slate-400 line-clamp-2">Minimalist and premium product visualization highlighting earbuds.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 shadow-2xl">
      <h2 class="font-heading text-3xl font-extrabold text-slate-100 mb-4">About Emad Uddin Jafor</h2>
      <p class="text-base text-slate-300 italic border-l-2 border-amber-500 pl-4 my-4">
        &ldquo;I am a passionate video editor dedicated to the art of visual storytelling. Over the past several months, I have immersed myself in learning the ins and outs of editing—practicing daily, refining my pacing, and perfecting my sound design. While I don't claim decades of industry experience, I bring fresh creativity, high-energy dedication, and a modern aesthetic to every frame. Let's create something memorable together.&rdquo;
      </p>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#131726] to-[#060812] border border-amber-500/25 shadow-2xl text-center">
      <h2 class="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">Ready to elevate your visual content?</h2>
      <p class="text-slate-300 max-w-xl mx-auto mb-8">Let's connect and create high-retention video edits or commercial designs.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="mailto:emaduddinjafor@gmail.com" class="px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25">
          Email: emaduddinjafor@gmail.com
        </a>
      </div>
    </div>
  </section>

  <footer class="border-t border-slate-800 py-10 text-center text-xs text-slate-400">
    &copy; 2026 Emad Uddin Jafor &bull; Video Editor &amp; Graphic Designer
  </footer>

  <!-- Cursor Light Follower Script -->
  <script>
    (function() {
      const torch = document.getElementById('cursor-spotlight-torch');
      const orb = document.getElementById('cursor-light-orb');
      if (!torch || !orb) return;
      if (!window.matchMedia('(pointer: fine)').matches) return;

      let mouseX = -100, mouseY = -100;
      let targetX = -100, targetY = -100;
      let visible = false;

      window.addEventListener('mousemove', function(e) {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!visible) {
          visible = true;
          torch.style.opacity = '1';
          orb.style.opacity = '1';
        }
      });

      document.addEventListener('mouseleave', function() {
        visible = false;
        torch.style.opacity = '0';
        orb.style.opacity = '0';
      });

      function animate() {
        mouseX += (targetX - mouseX) * 0.28;
        mouseY += (targetY - mouseY) * 0.28;
        torch.style.background = 'radial-gradient(550px circle at ' + mouseX + 'px ' + mouseY + 'px, rgba(245, 158, 11, 0.10), rgba(168, 85, 247, 0.04), transparent 75%)';
        orb.style.left = mouseX + 'px';
        orb.style.top = mouseY + 'px';
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    })();
  </script>
</body>
</html>`;
