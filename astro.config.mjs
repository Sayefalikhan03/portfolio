// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project page: https://sayefalikhan03.github.io/portfolio/
// `site` + `base` keep absolute URLs and asset paths correct under the /portfolio subpath.
export default defineConfig({
  site: 'https://sayefalikhan03.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
});
