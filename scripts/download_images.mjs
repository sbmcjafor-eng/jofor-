import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const images = [
  { file: 'profile.jpg', url: 'https://i.postimg.cc/ygr0jGGz/3747-emad-uddin-jafor.jpg' },
  { file: 'graphic1.jpg', url: 'https://i.postimg.cc/CB6b722w/3747-emad-uddin-jafor-Banner-Design-0.png' },
  { file: 'graphic2.jpg', url: 'https://i.postimg.cc/VrHXghVV/3747-EMAD-UDDIN-JAFOR-Photo-Retuching-02-Recovered-3x.jpg' },
  { file: 'graphic3.jpg', url: 'https://i.postimg.cc/47FpP00G/3747-EMAD-UDDIN-JAFOR-pizza-Recovered.png' },
  { file: 'graphic4.jpg', url: 'https://i.postimg.cc/47FpP00Z/3747-EMAD-UDDIN-JAFOR-SHOW-M.png' },
  { file: 'graphic5.jpg', url: 'https://i.postimg.cc/rR0xPJ6T/3747Emad-uddin-jafor-Behance-Poster-Design-01-3x.jpg' },
  { file: 'graphic6.jpg', url: 'https://i.postimg.cc/zbPT7QQf/3747Emad-uddin-jafor-Behance-Poster-Design-03-Copy.jpg' },
  { file: 'graphic7.jpg', url: 'https://i.postimg.cc/tZmFkccT/3747Emad-uddin-jafor-Behance-Poster-Design-05-3x.jpg' },
  { file: 'graphic8.jpg', url: 'https://i.postimg.cc/GT8G5Q0C/3747Emad-uddin-jafor-Behance-Poster-Design-10-3x-Copy.jpg' },
  { file: 'graphic9.jpg', url: 'https://i.postimg.cc/H8cXh2Gs/3747Emad-uddin-jafor-Behance-Poster-Design-12.jpg' },
  { file: 'graphic10.jpg', url: 'https://i.postimg.cc/zHbKcjm3/air-pods-f.png' },
  { file: 'graphic11.jpg', url: 'https://i.postimg.cc/4H7VS5CY/emad-uddin-jafor.png' },
  { file: 'graphic12.jpg', url: 'https://i.postimg.cc/5QYLR3cy/emad-uddin-jafor-png.png' },
  { file: 'graphic13.jpg', url: 'https://i.postimg.cc/304mcBMw/emad-uddin-jafor-Poster-Design-0.jpg' },
  { file: 'graphic14.jpg', url: 'https://i.postimg.cc/JHDZ2qwk/fanle-orikkavvvv-1-Recovered.jpg' }
];

async function downloadAll() {
  for (const item of images) {
    try {
      console.log(`Downloading ${item.url} -> ${item.file}...`);
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed ${item.url}: status ${res.status}`);
        continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filePath = path.join(publicDir, item.file);
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved ${filePath} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.file}:`, err.message);
    }
  }
}

downloadAll();
