/* Audit technique du site (SEO, accessibilité, responsive, poids, liens).
   Usage : node audit.mjs http://localhost:3100                              */
import puppeteer from 'puppeteer-core';

const CHROME = 'C:/Users/DELL/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe';
const BASE = process.argv[2] ?? 'http://localhost:3100';

const ROUTES = [
  '/', '/tarifs', '/installation', '/faq', '/blog', '/contact', '/essai-gratuit',
  '/mentions-legales', '/confidentialite', '/cgv',
  '/blog/installer-iptv-smart-tv-samsung-lg',
  '/blog/amende-utilisateur-iptv-france',
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars'],
});

const rows = [];
const allLinks = new Set();
const issues = [];

for (const route of ROUTES) {
  const page = await browser.newPage();
  let bytes = 0;
  let requests = 0;
  page.on('response', async (res) => {
    requests++;
    const len = Number(res.headers()['content-length'] || 0);
    bytes += len;
  });

  await page.setViewport({ width: 1440, height: 900 });
  const resp = await page.goto(BASE + route, { waitUntil: 'networkidle2', timeout: 60000 });

  const data = await page.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const title = document.title;
    const desc = q('meta[name="description"]')?.content ?? '';
    const canonical = q('link[rel=canonical]')?.href ?? null;
    const og = !!q('meta[property="og:image"]');
    const robots = q('meta[name=robots]')?.content ?? '';
    const h1s = [...document.querySelectorAll('h1')].map((h) => h.innerText.trim());

    // hiérarchie des titres
    const heads = [...document.querySelectorAll('h1,h2,h3,h4')].map((h) => +h.tagName[1]);
    let skips = 0;
    for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) skips++;

    const imgs = [...document.images];
    const noAlt = imgs.filter((i) => !i.hasAttribute('alt')).length;
    const emptyAlt = imgs.filter((i) => i.getAttribute('alt') === '').length;
    const noDims = imgs.filter((i) => !i.getAttribute('width') || !i.getAttribute('height')).length;

    const ld = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const types = [];
    let ldBad = 0;
    ld.forEach((s) => {
      try {
        const d = JSON.parse(s.textContent);
        (d['@graph'] || [d]).forEach((n) => types.push(n['@type']));
      } catch {
        ldBad++;
      }
    });

    const links = [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href'));
    const emptyLinks = [...document.querySelectorAll('a')].filter(
      (a) => !a.innerText.trim() && !a.getAttribute('aria-label') && !a.querySelector('[aria-label]')
    ).length;

    const lang = document.documentElement.lang;
    const words = (document.querySelector('main')?.innerText || '').trim().split(/\s+/).length;

    return { title, desc, canonical, og, robots, h1s, skips, noAlt, emptyAlt, noDims, types, ldBad, links, emptyLinks, lang, words };
  });

  data.links.forEach((l) => allLinks.add(l.split('#')[0].split('?')[0]));

  // contrôles
  if (data.title.length > 60) issues.push(`${route} — <title> ${data.title.length} car. (>60)`);
  if (!data.desc) issues.push(`${route} — meta description absente`);
  else if (data.desc.length > 160) issues.push(`${route} — meta description ${data.desc.length} car. (>160)`);
  if (!data.canonical) issues.push(`${route} — canonical absent`);
  if (!data.og) issues.push(`${route} — og:image absent`);
  if (data.h1s.length !== 1) issues.push(`${route} — ${data.h1s.length} <h1>`);
  if (data.skips) issues.push(`${route} — ${data.skips} saut(s) de niveau de titre`);
  if (data.noAlt) issues.push(`${route} — ${data.noAlt} image(s) sans attribut alt`);
  if (data.noDims) issues.push(`${route} — ${data.noDims} image(s) sans width/height (risque CLS)`);
  if (data.ldBad) issues.push(`${route} — ${data.ldBad} bloc(s) JSON-LD invalides`);
  if (data.emptyLinks) issues.push(`${route} — ${data.emptyLinks} lien(s) sans intitulé accessible`);
  if (data.words < 300) issues.push(`${route} — ${data.words} mots (contenu mince)`);

  rows.push({
    route,
    status: resp.status(),
    kb: Math.round(bytes / 1024),
    req: requests,
    title: data.title.length,
    desc: data.desc.length,
    words: data.words,
    schema: [...new Set(data.types)].join('+') || '—',
    robots: data.robots || 'index',
  });

  await page.close();
}

console.log('\n=== PAGES ===');
console.log('route'.padEnd(42), 'st'.padEnd(4), 'KB'.padEnd(6), 'req'.padEnd(5), 'title'.padEnd(6), 'desc'.padEnd(6), 'mots'.padEnd(6), 'schema');
rows.forEach((r) =>
  console.log(
    r.route.padEnd(42),
    String(r.status).padEnd(4),
    String(r.kb).padEnd(6),
    String(r.req).padEnd(5),
    String(r.title).padEnd(6),
    String(r.desc).padEnd(6),
    String(r.words).padEnd(6),
    r.schema
  )
);

// liens internes cassés
console.log('\n=== LIENS INTERNES ===');
const page = await browser.newPage();
const broken = [];
for (const href of [...allLinks].sort()) {
  const r = await page.goto(BASE + href, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
  const st = r ? r.status() : 0;
  if (st !== 200) broken.push(`${href} → ${st}`);
}
console.log(`${allLinks.size} cibles uniques — ${broken.length ? 'CASSÉS : ' + broken.join(', ') : 'toutes en 200'}`);
await page.close();

// responsive
console.log('\n=== RESPONSIVE ===');
for (const w of [360, 768, 1440]) {
  const p2 = await browser.newPage();
  await p2.setViewport({ width: w, height: 900, isMobile: w < 768 });
  const bad = [];
  for (const route of ROUTES) {
    await p2.goto(BASE + route, { waitUntil: 'networkidle2', timeout: 60000 });
    const r = await p2.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      iw: window.innerWidth,
      small: [...document.querySelectorAll('a,button')].filter((el) => {
        const b = el.getBoundingClientRect();
        return b.width > 0 && b.height > 0 && b.height < 32;
      }).length,
    }));
    if (r.sw > r.iw) bad.push(`${route} déborde (${r.sw}px)`);
    if (w < 768 && r.small) bad.push(`${route} ${r.small} cible(s) <32px`);
  }
  console.log(`${w}px : ${bad.length ? bad.join(' | ') : 'OK'}`);
  await p2.close();
}

console.log('\n=== PROBLÈMES DÉTECTÉS ===');
console.log(issues.length ? issues.map((i) => '• ' + i).join('\n') : 'aucun');

await browser.close();
