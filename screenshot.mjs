import puppeteer from 'puppeteer-core';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const CHROME = 'C:/Users/DELL/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe';
const OUT_DIR = 'temporary screenshots';

const url = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3] ?? '';
// 4e argument optionnel : offsets de défilement séparés par des virgules.
// Capture alors une image par offset, à la taille du viewport (plus net pour
// examiner les détails) au lieu d'une seule capture pleine page.
const offsets = process.argv[4] ? process.argv[4].split(',').map(Number) : null;
// 5e argument optionnel : largeur du viewport (par défaut 1440). Ex. 390 pour mobile.
const width = Number(process.argv[5]) || 1440;
const height = width < 768 ? 844 : 900;

await mkdir(OUT_DIR, { recursive: true });

const existing = await readdir(OUT_DIR);
const next =
  existing
    .map((f) => Number(/^screenshot-(\d+)/.exec(f)?.[1] ?? 0))
    .reduce((max, n) => Math.max(max, n), 0) + 1;

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const path = join(OUT_DIR, filename);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({
    width,
    height,
    deviceScaleFactor: 1,
    isMobile: width < 768,
    hasTouch: width < 768,
  });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Fait défiler la page pour déclencher les animations d'apparition,
  // sinon les sections restent à opacity:0 sur une capture pleine page.
  await page.addStyleTag({ content: 'html{scroll-behavior:auto !important}' });
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.75;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 1200));

  if (offsets) {
    for (const y of offsets) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
      await new Promise((r) => setTimeout(r, 400));
      const p = join(OUT_DIR, `screenshot-${next}-${label || 'view'}-at${y}.png`);
      await page.screenshot({ path: p });
      console.log(`Saved ${p}`);
    }
  } else {
    await page.screenshot({ path, fullPage: true });
    console.log(`Saved ${path}`);
  }
} finally {
  await browser.close();
}
