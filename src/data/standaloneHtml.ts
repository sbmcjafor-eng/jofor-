export const STANDALONE_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    body { font-family: 'Inter', sans-serif; background-color: #04060a; color: #e2e8f0; }
    h1, h2, h3, .font-heading { font-family: 'Outfit', sans-serif; letter-spacing: -0.02em; }
    .aspect-16-9 { aspect-ratio: 16 / 9; }
    .aspect-3-4 { aspect-ratio: 3 / 4; }
    .aspect-1-1 { aspect-ratio: 1 / 1; }
  </style>
</head>
<body class="bg-[#04060a] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">

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
              View 14 Graphic Designs
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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Video 1 -->
      <div class="group relative flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-2xl hover:border-amber-400 hover:-translate-y-3.5 hover:scale-[1.035] transition-all duration-500">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/E02IOylGR4U?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen></iframe>
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-100 group-hover:text-amber-300 transition-colors">High Energy Rhythm & Flow Cut</h3>
            <p class="text-sm text-slate-300 mt-2">Punchy, fast-paced retention editing with sound effects and swift transitions.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs px-3 py-1 rounded-lg bg-[#161c2a] text-amber-300 font-bold border border-slate-800">Reels &amp; Shorts</span>
            <a href="https://www.youtube.com/watch?v=E02IOylGR4U" target="_blank" class="text-xs font-extrabold text-amber-400 hover:text-amber-300">Open on YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 2 -->
      <div class="group relative flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-2xl hover:border-pink-400 hover:-translate-y-3.5 hover:scale-[1.035] transition-all duration-500">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/B5QczfQz_gw?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen></iframe>
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-100 group-hover:text-pink-300 transition-colors">Dynamic Cinematic Motion Reel</h3>
            <p class="text-sm text-slate-300 mt-2">Seamless match cuts, speed ramps, and color grading tuned for mobile screens.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs px-3 py-1 rounded-lg bg-[#161c2a] text-pink-300 font-bold border border-slate-800">Reels &amp; Shorts</span>
            <a href="https://www.youtube.com/watch?v=B5QczfQz_gw" target="_blank" class="text-xs font-extrabold text-pink-400 hover:text-pink-300">Open on YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 3 -->
      <div class="group relative flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-2xl hover:border-cyan-400 hover:-translate-y-3.5 hover:scale-[1.035] transition-all duration-500">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/zq3-7KOfniA?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen></iframe>
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-100 group-hover:text-cyan-300 transition-colors">Visual Storytelling & Atmosphere</h3>
            <p class="text-sm text-slate-300 mt-2">Story-driven rhythm with balanced audio textures and cinematic tone.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs px-3 py-1 rounded-lg bg-[#161c2a] text-cyan-300 font-bold border border-slate-800">Reels &amp; Shorts</span>
            <a href="https://www.youtube.com/watch?v=zq3-7KOfniA" target="_blank" class="text-xs font-extrabold text-cyan-400 hover:text-cyan-300">Open on YouTube &rarr;</a>
          </div>
        </div>
      </div>

      <!-- Video 4 -->
      <div class="group relative flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] via-[#0f1322] to-[#080b14] border border-slate-800 shadow-2xl hover:border-emerald-400 hover:-translate-y-3.5 hover:scale-[1.035] transition-all duration-500">
        <div class="relative w-full aspect-16-9 bg-[#030509]">
          <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?rel=0&modestbranding=1" class="w-full h-full border-0" allowfullscreen></iframe>
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-heading font-extrabold text-2xl text-slate-100 group-hover:text-emerald-300 transition-colors">Retention & Visual Hooks Edit</h3>
            <p class="text-sm text-slate-300 mt-2">Engaging hook design, layered audio design, and smooth motion graphics.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs px-3 py-1 rounded-lg bg-[#161c2a] text-emerald-300 font-bold border border-slate-800">Cinematic &amp; Trailers</span>
            <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk" target="_blank" class="text-xs font-extrabold text-emerald-400 hover:text-emerald-300">Open on YouTube &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Graphic Works Section -->
  <section id="graphics" class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="mb-14 pb-8 border-b border-purple-500/20">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 text-purple-400 text-xs font-bold uppercase mb-3 border border-purple-500/30">
        <span>Design Portfolio &bull; 14 Curated Artworks</span>
      </div>
      <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">Graphic &amp; Poster Designs</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <!-- 14 works thumbnails with zero white -->
      <div class="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500">
        <img src="graphic1.jpg" alt="Creative Agency Hero Banner" class="w-full aspect-16-9 object-cover">
        <div class="p-6"><h3 class="font-bold text-lg text-slate-100">Creative Agency Hero Banner</h3></div>
      </div>
      <div class="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500">
        <img src="graphic2.jpg" alt="High-End Photo Retouching" class="w-full aspect-3-4 object-cover">
        <div class="p-6"><h3 class="font-bold text-lg text-slate-100">High-End Photo Retouching</h3></div>
      </div>
      <div class="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500">
        <img src="graphic3.jpg" alt="Delicious Pizza Commercial Poster" class="w-full aspect-1-1 object-cover">
        <div class="p-6"><h3 class="font-bold text-lg text-slate-100">Delicious Pizza Commercial Poster</h3></div>
      </div>
      <div class="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500">
        <img src="graphic4.jpg" alt="Urban Athletic Sneaker Campaign" class="w-full aspect-1-1 object-cover">
        <div class="p-6"><h3 class="font-bold text-lg text-slate-100">Urban Athletic Sneaker Campaign</h3></div>
      </div>
      <div class="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500">
        <img src="graphic5.jpg" alt="Cinematic Film Poster Series 01" class="w-full aspect-3-4 object-cover">
        <div class="p-6"><h3 class="font-bold text-lg text-slate-100">Cinematic Film Poster Series 01</h3></div>
      </div>
      <div class="group relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141928] to-[#080b14] border border-slate-800 hover:border-amber-400 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500">
        <img src="graphic6.jpg" alt="Cyberpunk Action Key Art 03" class="w-full aspect-3-4 object-cover">
        <div class="p-6"><h3 class="font-bold text-lg text-slate-100">Cyberpunk Action Key Art 03</h3></div>
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
</body>
</html>`;
