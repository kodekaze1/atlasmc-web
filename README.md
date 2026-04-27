# atlasmc-web

Marketing website for [Atlasmc](https://github.com/kodekaze1/atlasmc) — a fork of [Arnis](https://github.com/louis-e/arnis) by Louis Erbkamm.

Astro + TypeScript + Tailwind v4. Static export. Deploys to Cloudflare Pages.

## Local dev

```sh
npm install
npm run dev   # http://localhost:4321
npm run build # static output in ./dist
```

## Pages

| Route | Source |
|---|---|
| `/` | `src/pages/index.astro` — hero, features grid, "built on Arnis" |
| `/features` | `src/pages/features.astro` — full feature list |
| `/download` | `src/pages/download.astro` — pre-built binaries (pending) and build-from-source |
| `/faq` | `src/pages/faq.astro` |
| `/about` | `src/pages/about.astro` — fork rationale and attribution |

Layout in `src/layouts/BaseLayout.astro`; header/footer in `src/components/`; theme tokens in `src/styles/global.css`.

## License

Apache 2.0. The site copy and code in this repo are written for Atlasmc; it incorporates attribution to upstream Arnis where relevant. See the [Atlasmc NOTICE](https://github.com/kodekaze1/atlasmc/blob/main/NOTICE) for the full attribution stack of the underlying desktop app.
