# Friends with Commits: website

Astro static site (same stack as johanneswachter.dev: Astro 5, sitemap, fontsource, GitHub Pages workflow).
Source of truth for the website. Look and brand come from the Claude Design system "Friends with Commits"
(mirror: ~/projects/friends-with-commits/design). Content lives in `src/data/` (episodes, hosts) and `src/pages/index.astro`;
look in `src/styles/global.css` (tokens at the top).

- `npm run dev` / `npm run build` (output `dist/`)
- Private stage: https://fwc.eve.asapo.at (Caddy serves `dist/` via symlink `~/projects/web/sites/fwc/public`, cookie login)
- Production target: https://friendswithcommits.dev (GitHub Pages via `.github/workflows/deploy.yml`, deploys on every push to `main`)

## Trailer

Put the MP3 at `public/audio/trailer.mp3` (keep it well under 50 MB; GitHub rejects files over 100 MB).
The "Listen to the trailer" section on the homepage appears only when that file exists. Text, duration and date
live in `src/data/trailer.ts`.
