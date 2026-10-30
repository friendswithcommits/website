// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Canonical URLs + sitemap are built for this host even though the private
// stage is served at fwc.eve.asapo.at. Assets are emitted with relative paths (default) so the
// same dist/ works under either origin. Same setup as johanneswachter.dev (blog-site).
export default defineConfig({
  site: 'https://friendswithcommits.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
