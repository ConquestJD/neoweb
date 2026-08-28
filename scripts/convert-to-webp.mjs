/**
 * Convierte JPG/PNG de /public a WebP (deja los favicons PNG).
 * Uso: npm install --no-save sharp; node scripts/convert-to-webp.mjs
 */
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const publicDir = join(process.cwd(), 'public');

const keepPng = new Set([
  'favicon.png',
  'icon-48.png',
  'icon-96.png',
  'icon-192.png',
  'icon-512.png'
]);

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const filePath = join(dir, name);
    if (statSync(filePath).isDirectory()) {
      walk(filePath, acc);
    } else {
      acc.push(filePath);
    }
  }
  return acc;
}

const sources = walk(publicDir).filter((filePath) => {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return false;
  }
  return !keepPng.has(basename(filePath));
});

for (const filePath of sources) {
  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const name = basename(filePath);
  const isScroll = /[/\\]scrolls[/\\]/.test(filePath);
  let image = sharp(filePath);

  if (name === 'nuevo-logo-texto-blanco.png') {
    image = image.resize(320, 320, { fit: 'inside', withoutEnlargement: true });
  } else if (isScroll) {
    image = image.resize({ width: 720, withoutEnlargement: true });
  } else {
    image = image.resize({
      width: 1920,
      height: 1920,
      fit: 'inside',
      withoutEnlargement: true
    });
  }

  await image.webp({ quality: isScroll ? 32 : 80, effort: 6 }).toFile(outPath);
  unlinkSync(filePath);
  console.log(`${name} -> ${basename(outPath)}`);
}

console.log(`Convertidas ${sources.length} imágenes a WebP.`);
