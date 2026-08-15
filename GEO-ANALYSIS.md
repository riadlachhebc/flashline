# GEO Analysis — /faq

**Page:** `https://flashlineiptv.online/faq`
**Analysed:** 13 août 2026 · production build, raw HTML (no JS execution)

> Framing per Google's AI optimization guide (updated 2026-06-29): optimising for
> generative AI search **is still SEO**. Findings below are SEO fundamentals
> applied to AI-search surfaces, not a separate discipline.

---

## 1. GEO Readiness Score

```
Before: 55/100        After: 74/100

Citability        55 → 78   ████████░░   (25% weight)
Structural        75 → 92   █████████░   (20%)
Multi-modal       15 → 45   ████░░░░░░   (15%)
Authority         30 → 45   ████░░░░░░   (20%)
Technical         90 → 90   █████████░   (20%)
```

## 2. Platform Breakdown

| Surface | Score | Reasoning |
|---|---|---|
| **Google AI Overviews** | 72 | Strongly ranking-correlated. Page is technically sound; ceiling is set by classic rankings, which are unproven on a new domain. |
| **Google AI Mode** | 68 | Broader pool, weights freshness + entity authority. Freshness now signalled; entity authority remains the gap. |
| **ChatGPT** | 40 | Cites Wikipedia (47.9%) and Reddit (11.3%). Brand has no presence on either. |
| **Perplexity** | 35 | Cites Reddit (46.7%) heavily. No community footprint. |

Only ~11% of domains are cited by both ChatGPT and AI Overviews for the same
query — these surfaces need separate work.

## 3. AI Crawler Access

`robots.txt` uses `User-Agent: *` + `Allow: /`, so **every AI crawler is
permitted**: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended,
CCBot. No action needed. `Disallow: /api/` only.

## 4. llms.txt

**Absent (404).** Deliberately not recommended as a priority: Google states it
ignores these files entirely and that they "won't harm (nor help)" visibility.
Optional for non-Google crawlers only.

## 5. Brand Mention Analysis

Brand mentions correlate ~3× more strongly with AI visibility than backlinks
(Ahrefs, 75k brands).

| Platform | Presence | Correlation |
|---|---|---|
| YouTube | ❌ none | ~0.737 (strongest) |
| Reddit | ❌ none | high |
| Wikipedia / Wikidata | ❌ none | high |
| LinkedIn | ❌ none | moderate |

**This is the single largest constraint on AI citation**, and it cannot be fixed
on-page.

## 6. Passage-Level Citability

Optimal citation block: **134–167 words**. ~44% of AI citations come from the
first 30% of a page.

| | Before | After |
|---|---|---|
| Answers ≥100 words | 0 / 17 | **6 / 17** |
| Average answer length | 31 words | **60 words** |
| Longest answers | 48 w | **124, 122, 120, 120, 113, 104 w** |
| Page word count | 1 336 | **2 356** |

Expanded: definition of Flashline IPTV, required bandwidth, delivery time, free
trial, compatible devices, which app to install. The brand definition sits at
**2% of page depth** — ideal front-loading.

Remaining 11 answers are 23–45 words. Deliberate: padding a one-line factual
answer to hit a word target degrades it for humans.

## 7. Server-Side Rendering

**Pass — the critical check.** AI crawlers do not execute JavaScript. Fetched
raw HTML with no JS: all **17 questions and 17 answers present**. The accordion
collapses via CSS (`grid-template-rows`), it does not remove content from the
DOM. Everything is statically prerendered.

## 8. Top 5 Highest-Impact Changes

| # | Change | Status |
|---|---|---|
| 1 | Expand key answers into self-contained citable blocks | ✅ done |
| 2 | Question-based H2 headings (match query patterns) | ✅ done — 4/5 |
| 3 | Comparison table (multi-modal + extractable data) | ✅ done |
| 4 | Freshness signals: visible date + `dateModified` | ✅ done |
| 5 | **Build entity presence (Reddit / YouTube / Wikidata)** | ⬜ off-page |

## 9. Schema

Present: `FAQPage`, `WebPage` (+ dates), `BreadcrumbList`, `Organization`,
`WebSite`.

`FAQPage` no longer produces rich results (retired May 2026) but is retained —
it still helps machine comprehension and costs nothing. Not recommended:
`HowTo` (deprecated), `aggregateRating` (testimonials are placeholders).

Worth adding once a named person exists: `Person` schema with credentials as the
FAQ author — authorship is a scored authority signal and the page has none.

## 10. Content Reformatting — remaining opportunities

- **No cited primary sources.** Bandwidth figures are asserted, not attributed.
  Citing ARCOM, a manufacturer spec, or an ISP page would raise citability.
- **No author or credentials.** Anonymous content scores weakly on authority.
- **No video/visual content** beyond the new table.
- **Schedule a refresh.** Content under 3 months old is ~3× more likely to be
  cited; past 6 months, eligibility drops sharply. Update `SITE_MODIFIED` in
  `lib/seo.js` and re-check figures quarterly.
