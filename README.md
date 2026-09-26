# Cameron Makarchuk — portfolio

The logbook-style portfolio at [www.cameronmakarchuk.com](https://www.cameronmakarchuk.com): the story on the left, a timeline of work and projects on the right, and a case study page for each project.

Built with React, TypeScript, React Router, Sass and Vite. Hosted on AWS Amplify.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run compile` | Type-check only (also runs on `git push`) |
| `npm run lint` / `npm run format` | Biome lint and format for `src/` and `mockups/` (Biome also runs on staged files at commit) |
| `npm run mockups` | Regenerate the device mockups, diagrams and link preview image (see below) |

## Where things live

- **Content:** `src/data/portfolio.ts` (profile, links, the "Now" items, the timeline) and `src/data/projects.ts` (each case study). Most content changes only touch these two files.
- **Pages:** `src/pages/` (home, project case study, about, 404). Shared pieces are in `src/components/`.
- **Styles:** design tokens and type mixins in `src/styles/partials/`. The visual and writing guidelines are in [`docs/brand-style-guide.md`](docs/brand-style-guide.md).
- **Static files:** `public/` (favicon, resume PDF, `og-image.png`).

## Mockups

The laptop and phone mockups, diagrams, and `public/og-image.png` are generated, not hand-made. The list of images lives in `mockups/config.ts`, and `mockups/generate.ts` explains how to add one. The script uses Playwright, so on a new machine run this once first:

```bash
npx playwright install chromium
```

Re-run `npm run mockups` after content changes that appear in the screenshots, such as the home page or a case study.

## Deploying

Amplify builds with `npm run build` and serves `dist/`. Project pages are client-side routes, so the Amplify app needs a rewrite rule (Hosting → Rewrites and redirects) that sends page URLs to `index.html`:

| Source address | Target address | Type |
| --- | --- | --- |
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|jpeg\|js\|png\|txt\|svg\|webp\|woff\|woff2\|ttf\|map\|json\|pdf)$)([^.]+$)/>` | `/index.html` | `200 (Rewrite)` |
