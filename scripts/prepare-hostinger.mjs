import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const browserDir = join(process.cwd(), 'dist', 'NeoWeb', 'browser');
const csrIndex = join(browserDir, 'index.csr.html');
const indexHtml = join(browserDir, 'index.html');

if (!existsSync(browserDir)) {
  console.error(`No se encontró ${browserDir}. Ejecuta "npm run build" primero.`);
  process.exit(1);
}

if (existsSync(csrIndex)) {
  copyFileSync(csrIndex, indexHtml);
  console.log('Hostinger: index.csr.html → index.html');
} else if (existsSync(indexHtml)) {
  console.log('Hostinger: index.html ya existe');
} else {
  console.error('No se encontró index.csr.html ni index.html en el build.');
  process.exit(1);
}
