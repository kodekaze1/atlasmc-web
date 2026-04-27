# Contributing to atlasmc-web

Thanks for your interest. This is the source for the Atlasmc marketing
website at https://atlasmc-web.vercel.app/. The desktop application
itself lives in a separate repo:
[kodekaze1/atlasmc](https://github.com/kodekaze1/atlasmc).

## Development setup

You need Node.js ≥ 22.12 and npm. Then:

```sh
git clone https://github.com/kodekaze1/atlasmc-web.git
cd atlasmc-web
npm install
npm run dev   # http://localhost:4321
```

Build a production-equivalent static export with `npm run build`; the
output lands in `dist/`. `npm run preview` serves the build for sanity
checking.

## Stack

- **[Astro 6](https://astro.build/)** — static site generator. Pages live
  in `src/pages/`; components in `src/components/`; layouts in
  `src/layouts/`.
- **[Tailwind v4](https://tailwindcss.com/)** — utility-first CSS via the
  Vite plugin. Tokens (colors, fonts) live in `src/styles/global.css`
  inside an `@theme` block.
- **[Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans)** +
  Inter — fonts are loaded from Google Fonts in `src/layouts/BaseLayout.astro`.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
  — sitemap.xml auto-generated on build.

## Pull requests

- Branch from `main`. Every push to `main` triggers a Vercel production
  deploy, so don't push WIP directly.
- Run `npm run build` before opening the PR. Vercel runs the same
  command and will fail the deploy otherwise.
- Keep changes scoped — content tweaks and layout refactors in
  separate commits where reasonable.

## Content updates

Most page text lives directly in `.astro` files (frontmatter or
template). For data-driven sections (hero features, FAQ entries, etc.),
the relevant array is at the top of the page file.

Hero video, gallery screenshots, and OG image are user-supplied assets
— see the README files in `public/hero/`, `public/gallery/`, and
`public/og-README.md` for specs.

## Reporting issues

Use [GitHub Issues](https://github.com/kodekaze1/atlasmc-web/issues) for
bugs and content suggestions. For security issues, see
[SECURITY.md](SECURITY.md).

## License

Apache 2.0. Site copy that incorporates attribution to upstream Arnis is
clearly marked as such; everything else is original to Atlasmc.
