# Security policy

This is the marketing website for Atlasmc. The desktop application has
its own [SECURITY.md](https://github.com/kodekaze1/atlasmc/blob/main/SECURITY.md)
covering the actual binary.

## Reporting a vulnerability

Open a private [Security Advisory](https://github.com/kodekaze1/atlasmc-web/security/advisories/new)
on this repository. Backup channel: email **kodekaze1@gmail.com** with
subject prefix `[atlasmc-web-security]`.

Please don't open public issues for security findings.

## In scope

- Source for the static site (`src/**`, `astro.config.mjs`,
  `public/**`).
- Build pipeline / Vercel deploy configuration.
- Dependencies pulled in by `package.json`.

## Out of scope

- Anything that requires the user to disable browser security features
  (e.g., self-XSS by pasting JS into the dev console).
- Vulnerabilities in upstream Astro / Tailwind / npm dependencies —
  please report those to the respective maintainers; we track via
  Dependabot and pull fixes as upstream patches land.
- Issues affecting the desktop application — file those at
  [kodekaze1/atlasmc](https://github.com/kodekaze1/atlasmc/security/advisories/new).
- DoS via traffic flooding.

## Response targets

- **Acknowledgement**: within 7 days.
- **Initial assessment**: within 14 days.
- **Fix or formal mitigation guidance**: depends on severity, but ≤ 90
  days from acknowledgement for confirmed high-severity issues.

## Privacy note

The site has no analytics, no tracking pixels, no third-party scripts
beyond Google Fonts (for serving the `Pixelify Sans` and `Inter`
typefaces; these load font files but do not set cookies). If you find
any other third-party request being made, that's report-worthy.
