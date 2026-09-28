// Script to create placeholder files for profile.jpg and graphic1-6.jpg
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Minimal valid 1x1 JPEG bytes to ensure valid binary JPEG
const minimalJpgBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
const jpgBuffer = Buffer.from(minimalJpgBase64, 'base64');

const files = ['profile.jpg', 'graphic1.jpg', 'graphic2.jpg', 'graphic3.jpg', 'graphic4.jpg', 'graphic5.jpg', 'graphic6.jpg'];

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  fs.writeFileSync(filePath, jpgBuffer);
  console.log(`Created ${filePath}`);
});
