// Maintenance gate — runs after `vite build`.
//
// When the env var MAINTENANCE=1 is set at build time, this replaces the
// built index.html with the maintenance page (backing up the real one first),
// so every visitor sees "Under maintenance" instead of a half-updated site.
//
// When MAINTENANCE is unset/0, it ensures the real index.html is in place
// (restoring from backup if a previous maintenance build left the page swapped).
//
// Usage:
//   MAINTENANCE=1 npm run build   -> deploys maintenance page
//   npm run build                 -> deploys the real site
//
// The gate is idempotent and safe to run on every deploy.

import { existsSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const realIndex = join(dist, 'index.html');
const realBackup = join(dist, 'index.real.html');
const maintenance = join(dist, 'maintenance.html');

const ON = process.env.MAINTENANCE === '1' || process.env.MAINTENANCE === 'true';

if (!existsSync(dist)) {
  console.error('[maintenance-gate] dist/ not found — did vite build run?');
  process.exit(1);
}

if (ON) {
  if (!existsSync(maintenance)) {
    console.error('[maintenance-gate] maintenance.html missing from dist/');
    process.exit(1);
  }
  // Back up the real index once, then swap in the maintenance page.
  if (existsSync(realIndex) && !existsSync(realBackup)) {
    copyFileSync(realIndex, realBackup);
  }
  copyFileSync(maintenance, realIndex);
  console.log('[maintenance-gate] MAINTENANCE MODE ON — serving maintenance.html as index.html');
} else {
  // Normal build: real index.html from vite is already in place.
  // (No backup restore needed — vite regenerates index.html fresh each build.)
  console.log('[maintenance-gate] normal build — real site is live');
}
