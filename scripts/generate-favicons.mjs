// Favicon generation script using sharp
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, '../src/assets/splash_guru.webp');
const publicDir = resolve(__dirname, '../public');

const sizes = [
  { name: 'favicon-16x16.png',           size: 16 },
  { name: 'favicon-32x32.png',           size: 32 },
  { name: 'apple-touch-icon.png',        size: 180 },
  { name: 'android-chrome-192x192.png',  size: 192 },
  { name: 'android-chrome-512x512.png',  size: 512 },
];

console.log('Generating favicons from splash_guru.webp...');

for (const { name, size } of sizes) {
  const outPath = resolve(publicDir, name);
  await sharp(inputPath)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(outPath);
  console.log(`Generated ${name} (${size}x${size})`);
}

// Generate favicon.ico as a 32x32 PNG (modern browsers accept PNG renamed as .ico)
await sharp(inputPath)
  .resize(32, 32, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(resolve(publicDir, 'favicon.ico'));
console.log('Generated favicon.ico (32x32)');

// Write site.webmanifest
const manifest = {
  name: "Best Astrologer in London",
  short_name: "Psychic Astrology",
  description: "Confidential psychic astrology and spiritual healing in London.",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
  ],
  theme_color: "#020713",
  background_color: "#020713",
  display: "standalone",
  start_url: "/"
};

writeFileSync(resolve(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('Generated site.webmanifest');
console.log('All favicons generated in public/');
