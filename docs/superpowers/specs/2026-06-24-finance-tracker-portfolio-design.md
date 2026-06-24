# Design: Add Finance Tracker project + personal "About" video to the portfolio

Date: 2026-06-24
Status: Approved (pending spec review)

## Goal

Two independent additions to the Astro portfolio (`/Volumes/Vault/Projects/portfolio`):

1. **Finance Tracker** — feature the `€ Ledger` local-first finance app (`/Volumes/Vault/Projects/finance-tracker`) as a project card, telling the story of *why* it was built.
2. **Personal video** — surface the existing 10s "working with AI / touching grass" clip (`portfolio/video/gemini_generated_video_00584E23.MP4`) in a new personal **About** section. The video is NOT a demo of the finance app; the two are unrelated.

## Constraints discovered

- The portfolio is a **single page of project cards** (`src/components/Site.astro` composes Hero → Stats → Projects → Skills → Languages → Experience → Education → Certs → Contact → Footer). **No detail pages, no routing.**
- `Projects.astro` renders only card frontmatter — **title, summary, tags, links, image**. The markdown body is NOT displayed. → the project "story" must fit in the `summary` field.
- Projects are markdown files in `src/content/projects/*.md`. Schema (`content.config.ts`): `title, titleDe, summary, summaryDe, tags[], image, imageAlt, featured, status('live'|'in-progress'|'research'), repo, link, order`. DE fields fall back to EN when missing.
- Bilingual EN/DE: EN page at `/portfolio/`, DE at `/portfolio/de/`. Component copy lives in an inline `content = { en, de }` object; `t = content[lang]`.
- Images: `public/images/`, referenced as `${base}/images/<file>` where `base = /portfolio`. Recommended 1200×675.
- Deploy: GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. Static assets in `public/` ship as-is — a 2.6 MB MP4 is fine.
- **No `About` component exists yet** — must be created.
- Finance-tracker has **no git remote**. `.gitignore` correctly ignores `/data` (real SQLite DB with real transactions), `.env*`, and `/finance.db`. App is Next.js 16 + React 19 + TS + Tailwind v4, with a Python (pdfplumber) parser and SQLite. Real data lives in `data/finance.db`.

## Part A — Finance Tracker project card

**New file:** `src/content/projects/finance-tracker.md`

Frontmatter:
- `title`: "€ Ledger: a local-first money tracker I built for myself"
- `titleDe`: "€ Ledger: ein lokaler Finanztracker, den ich für mich gebaut habe"
- `summary` (EN): "I've always tracked my spending by hand, but every app I tried was paid, manual, didn't auto-categorize, or just wasn't built for European banks. So I built my own: import German bank & credit-card PDF statements, teach-it-once auto-categorization, recurring-charge detection, a debt-payoff planner, and a 12-month what-if forecast — all running locally, nothing ever leaving my computer. Four years of spending in one view, so I can actually make better decisions."
- `summaryDe`: "Ich verfolge meine Ausgaben schon immer von Hand, aber jede App, die ich ausprobiert habe, war kostenpflichtig, manuell, kategorisierte nicht automatisch oder war einfach nicht für europäische Banken gemacht. Also habe ich meine eigene gebaut: deutsche Bank- und Kreditkartenauszüge als PDF importieren, einmal angelernte automatische Kategorisierung, Erkennung wiederkehrender Zahlungen, einen Tilgungsplaner und eine 12-Monats-Prognose mit Was-wäre-wenn-Reglern — alles lokal, nichts verlässt jemals meinen Computer. Vier Jahre Ausgaben auf einen Blick, damit ich wirklich bessere Entscheidungen treffen kann." (wording refined during build)
- `tags`: `["Next.js", "TypeScript", "SQLite", "Python", "PDF Parsing", "Privacy-first"]`
- `featured`: true
- `status`: "live"
- `repo`: "https://github.com/Sayefalikhan03/finance-tracker"
- `image`: "finance-tracker.png"
- `imageAlt`: "€ Ledger dashboard showing monthly spending breakdown (figures blurred)"
- `order`: 2 — insert near the top among featured projects; cleanly renumber existing `order >= 2` by +1 (ai-news-automation 2→3, daam 3→4, cloud-nas 4→5, sovereign-gateway 5→6, flex-desk 6→7, watchtower 7→8, skill-yourself 8→9, this-portfolio 9→10). Keep autopilot(0), thesis(1) as-is.

**Card image (`public/images/finance-tracker.png`, 1200×675):**
- Source: real screenshot of the running app against the existing `data/finance.db`.
- **Blur sensitive data**: euro amounts, account/card numbers (last-4), and real merchant/payee names. Approach: run app (`npm run dev`), capture the dashboard (richest single view), then blur sensitive regions. Preferred technique: inject a CSS rule (`filter: blur(7px)`) targeting amount/merchant elements before capture so blurring is clean and complete; fall back to post-capture image blur (ImageMagick) on identified regions if selectors are unclear.
- Fallback if a clean blurred shot can't be produced: seed a small synthetic dataset and screenshot that instead (no real data, no blur needed). Flag to user before doing so.

## Part B — Personal "About" section with video

**Video asset:** move `portfolio/video/gemini_generated_video_00584E23.MP4` → `public/media/about.mp4` (git-tracked; 2.6 MB). Extract a poster frame via ffmpeg → `public/media/about-poster.jpg`.

**New component:** `src/components/About.astro`
- `id="about"`, follows the existing section pattern (`<section class="section">`, `.container`, `.reveal`, inline `content={en,de}`).
- Layout: short bilingual "how I work" note + the video side by side (stacks on mobile).
- Video: `<video controls preload="metadata" poster="${base}/media/about-poster.jpg" playsinline>` with the mp4 source. **Click-to-play with controls** (clip has sound; no autoplay-with-audio). `width/height` set to 1280×720 to avoid layout shift; responsive via CSS `max-width:100%`.
- Copy theme: building *with* AI as a daily collaborator, and stepping away from the screen to keep perspective ("touch grass" / balance). Keep it human and brief (2–3 sentences). EN + DE.

**Wiring:**
- Insert `<About lang={lang} />` into `Site.astro` immediately after `<Projects />`.
- Add an "About" / "Über mich" anchor link to `Nav.astro` (and mobile nav) pointing to `#about`, matching existing nav link pattern.

## Part C — Prepare finance-tracker repo for publishing (user pushes)

In `/Volumes/Vault/Projects/finance-tracker`:
1. Verify `.env.local` is NOT tracked (`git ls-files | grep env`); confirm `/data` and `.env*` are effectively ignored.
2. Scan tracked files + full diff for secrets (Anthropic API key, tokens). Abort and flag if any found.
3. Light README tidy if needed (ensure it reads well as a public repo landing page; add repo URL / clone instructions). No functional changes.
4. Stage + commit locally with a conventional message.
5. **Hand the user exact commands** to create the remote and push (`git remote add origin https://github.com/Sayefalikhan03/finance-tracker.git` + `git push -u origin main`). **Do NOT push on the user's behalf.**

## Out of scope / non-goals

- No detail pages or routing changes to the portfolio.
- No functional changes to the finance-tracker app (README/docs polish only).
- No live-hosted demo of the finance app (it's intentionally local-only).
- No autoplay-with-sound; no third-party video host (YouTube/Vimeo) — self-hosted MP4.

## Verification

- `npm run build` succeeds in portfolio; new card renders on both EN and DE pages with image, story, tags, and working Code link.
- About section renders on both languages; video plays with controls; poster shows before play; no layout shift; nav anchor scrolls to it.
- Card screenshot shows no readable euro amounts, account numbers, or real merchant names.
- finance-tracker: `git status` clean, no secrets staged, `/data` and `.env.local` absent from `git ls-files`.

## Decisions (confirmed)

- Video placement: **About section** (after Projects).
- GitHub: **prep, user pushes** to `github.com/Sayefalikhan03/finance-tracker`.
- Card visual: **real screenshots, sensitive values blurred** (synthetic-seed as fallback).
- Video playback: **click-to-play with controls**.
