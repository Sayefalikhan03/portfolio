# Sayef Ali Khan — Portfolio

> Engineer and communicator who turns vague requirements into reliable systems — and directs AI to ship them.

A fast, component-driven personal site built with Astro and deployed to GitHub Pages. It showcases
my projects, experience, and skills, with a downloadable résumé.

## Tech stack

- **Framework**: [Astro](https://astro.build) — static output, zero client JS by default.
- **Styling**: Hand-written CSS with design tokens (Inter, Outfit, Fira Code typography).
- **Content**: Projects authored as Markdown in a content collection.
- **Hosting / CI**: GitHub Pages, auto-deployed via GitHub Actions on every push to `main`.
- **Analytics**: Cloudflare Web Analytics (cookie-less, no PII) — optional, token-gated.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/portfolio
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Configuration

Optional environment variables (set as GitHub repository **Variables** for CI, or in a local
`.env` for development — never commit secrets):

| Variable | Purpose |
| --- | --- |
| `PUBLIC_CF_BEACON_TOKEN` | Enables Cloudflare Web Analytics. |

If unset, analytics is skipped.

## Project structure

```text
portfolio/
├── astro.config.mjs          # site + base (/portfolio) config
├── src/
│   ├── content.config.ts      # projects collection schema
│   ├── content/projects/      # one Markdown file per project
│   ├── layouts/Base.astro     # head, SEO/OG, fonts, analytics
│   ├── components/            # Hero, Projects, Skills, Experience, …
│   ├── pages/index.astro      # page assembly + client scripts
│   └── styles/global.css      # design tokens + component styles
├── public/images/            # project thumbnails (1200×675, 16:9)
└── .github/workflows/deploy.yml
```

## Adding a project

Drop a new Markdown file into `src/content/projects/` with frontmatter (`title`, `summary`, `tags`,
optional `image`, `featured`, `status`, `repo`, `link`, `order`). Add its thumbnail to
`public/images/` at 1200×675.

---
© 2019–2026 Sayef Ali Khan.
