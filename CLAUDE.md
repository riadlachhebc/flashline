# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (Next.js, `http://localhost:3000`)
- Start it in the background before taking any screenshots. First boot takes ~20 s.
- If the server is already running, do not start a second instance.
- Verify a production build with `npm run build` before calling work done.

## Screenshot Workflow
- Puppeteer's Chrome cache is at `C:/Users/DELL/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- **Stack: Next.js 16 (App Router) + React, JSX only.** Routes live in `app/<route>/page.jsx`,
  shared UI in `components/`, content and data in `lib/`.
- Styling is a hand-written design system in `app/globals.css` (no Tailwind). Use the existing
  tokens — never hard-code a colour, radius, or spacing value that already has a variable.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive
- Site copy is **French** — the audience is France.

## SEO — règles à respecter
Le trafic vient de Google : ne cassez pas ces conventions.
- **Domaine** : `lib/seo.js` → `SITE_URL` (ou `NEXT_PUBLIC_SITE_URL`). Tout en dépend.
- Chaque page exporte `alternates: { canonical: '/chemin' }` **et**
  `openGraph: openGraph({ path, title, description })`. Déclarer un `openGraph`
  brut écrase celui du layout et fait disparaître l'image de partage.
- Un seul `<h1>` par page. Le `title` ne répète pas la marque : le template
  `%s | Flashline IPTV` l'ajoute déjà.
- Données structurées via `components/JsonLd.jsx` + helpers de `lib/seo.js`,
  un seul bloc `@graph` par page. Le balisage doit refléter le contenu visible.
- **Ne jamais ajouter `aggregateRating` ou `review` en JSON-LD** tant que les
  témoignages du site sont des placeholders : faux avis = action manuelle Google.
- Nouvelle page ⇒ l'ajouter à `app/sitemap.js`.

## Next.js 16 gotchas hit on this project
- `params` in a page is **async**: `const { slug } = await params`.
- Do **not** hand-write `-webkit-backdrop-filter`. Lightning CSS drops the standard
  `backdrop-filter` too when the alias is present, silently killing every glass surface.
  Write the standard property only and let the toolchain prefix it.
- `<html>` carries `data-scroll-behavior="smooth"` so route changes stay instant while
  in-page anchors animate.

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
