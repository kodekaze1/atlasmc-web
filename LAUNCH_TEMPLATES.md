# Launch announcement templates

Drop-in templates for launch-day announcements across each major channel.
Edit the bracketed placeholders before posting. None of these is published
or scheduled — they're drafts.

> **Compliance reminder**: don't promise returns, don't use words like
> "investment opportunity" or "guaranteed", don't link to "presale" pages
> outside the official launch flow. The /token page's "what it is not"
> list is the source of truth for messaging boundaries.

---

## Twitter / X — launch thread

**Tweet 1 (hook)**
```
Atlasmc — generate any city on Earth as a playable Minecraft world,
free and open source.

Today we're going live with the community token that funds continued
development. Thread on what we're building 🧵
```

**Tweet 2 (product proof)**
```
The desktop app already ships:

→ Java + Bedrock world export
→ Sponge .schem schematic export
→ Multiplayer server bundle (drop next to paper.jar)
→ 18 languages
→ Apache-2.0, Rust + Tauri

Real product, today: https://github.com/kodekaze1/atlasmc/releases
```

**Tweet 3 (token utility)**
```
The token funds the bigger bets:

→ Hosted browser generator (free quota for holders)
→ Plugin ecosystem with token-funded grants
→ Shared infrastructure (Overpass, tiles, CDN)
→ Treasury for ongoing dev

Utility-first. Not an investment. The desktop app stays free forever.
```

**Tweet 4 (guarantees)**
```
Pre-launch commitments we're holding ourselves to:

✓ Smart-contract audit by [FIRM]
✓ Liquidity locked 4+ years (third-party locker)
✓ Multisig treasury, quarterly transparency reports
✓ 30+ day public testnet
✓ 90+ day bug bounty

Details: https://atlasmc-web.vercel.app/token
```

**Tweet 5 (CTA)**
```
Live now:

→ Whitepaper: [LINK]
→ Audit report: [LINK]
→ Contract: [ADDRESS]
→ Buy on [DEX]: [LINK]
→ Discord: [LINK]

Or just download Atlasmc free and generate your hometown:
https://atlasmc-web.vercel.app/download
```

---

## Discord — launch announcement

**Channel**: `#announcements` (or `#launch` for a dedicated room)

```
@everyone

Atlasmc Token is live.

Atlasmc is the open-source Minecraft world generator we've been building
on top of Arnis. Today the community token launches to fund the next
chapter — hosted generator, plugin ecosystem, infra, grants.

Quick links:
• Token page: https://atlasmc-web.vercel.app/token
• Roadmap: https://atlasmc-web.vercel.app/roadmap
• Whitepaper: [LINK]
• Audit report: [LINK]
• Contract: [ADDRESS] on [CHAIN]
• Buy on [DEX]: [LINK]
• Download Atlasmc (free, always): https://atlasmc-web.vercel.app/download

Reminders:
✓ The desktop app is and stays free, open source, Apache-2.0.
✓ The token is utility-first, not an investment.
✓ Treasury is multisig, audit is published, liquidity is locked 4+ years.
✓ Ignore anyone DMing you a "presale" link — there's no presale, only
  the on-chain launch you can verify yourself.

AMA in #questions for the next 24 hours.
```

---

## GitHub Discussion — launch post

**Repo**: `kodekaze1/atlasmc` Discussions, "Announcements" category.

**Title**: `Atlasmc Token launch — what's live, what it changes, FAQ`

**Body**:

```markdown
# Atlasmc Token is live

We've launched the community token that funds Atlasmc's continued
development. Quick summary, plus how this changes (and doesn't change)
the project for contributors and users.

## The headlines

- **Atlasmc the desktop app stays free, open-source, Apache-2.0.** The
  token never gates core features. You don't need a wallet to use it.
- **The token funds bigger bets** — hosted browser generator, plugin
  ecosystem, shared infrastructure, community grants.
- **Audit, locked liquidity, multisig treasury** are all in place.
  Verifiable links below.

## Verifiable details

- Whitepaper / tokenomics: [LINK]
- Audit report: [LINK] (auditor: [FIRM])
- Contract: [ADDRESS] on [CHAIN]
- Liquidity locker: [LINK] (4+ year lock)
- Treasury multisig: [ADDRESS], signers: [LIST]
- Quarterly transparency reports will be posted in this Discussions
  section under the "Treasury" category.

## What changes for contributors

Nothing immediately. The CONTRIBUTING.md flow is unchanged. PRs are
welcome on the same terms — Apache-2.0 inbound = outbound, no CLA.

When the plugin marketplace ships (Phase 6 on the
[roadmap](https://atlasmc-web.vercel.app/roadmap)), plugin authors will
have a path to monetize via the marketplace if they want to. Core
contributions to the desktop app remain volunteer-funded by donations,
sponsors, and treasury grants.

## What changes for users

Also nothing immediately. The desktop app continues to work as it does
today. When the hosted browser generator ships, token holders will get
free or discounted quota — the local desktop app remains free for
everyone regardless.

## What it is not

- Not an offering of securities. Holders should not expect profit
  derived from the efforts of others.
- Not a replacement for donations to the upstream Arnis project. If
  you've supported louis-e's work, please keep doing so directly:
  https://buymeacoffee.com/louisdev .
- Not endorsed by, affiliated with, or representative of upstream
  Arnis or Louis Erbkamm.

## Questions

Drop questions in this thread. We'll convert common ones into
permanent FAQ entries on /faq.
```

---

## Reddit (r/Minecraft, r/Tauri, r/rust)

**Caveat**: each subreddit has its own rules; r/Minecraft in particular
generally moderates token/crypto promotion heavily. **Promote the desktop
app, not the token, on Minecraft-focused subs.** Post the token launch
elsewhere.

### r/Minecraft (app-focused, no token mention)

**Title**: `[Tool] Atlasmc — generate any city on Earth as a Minecraft world (Java + Bedrock, free, open source)`

```
Hi r/Minecraft,

Atlasmc is an open-source desktop app that turns OpenStreetMap data and
real-world elevation into playable Minecraft worlds. Java and Bedrock
both supported. It's a fork of Arnis by louis-e, with the same
generation engine plus a few additions:

• .schem schematic export (drops into WorldEdit / FAWE / Litematica)
• Multiplayer server bundle (a zip with the world + server.properties
  + eula.txt + README, ready to drop next to a Paper jar)
• 18 languages
• Apache-2.0, Rust + Tauri

Free download: https://atlasmc-web.vercel.app/download

Source: https://github.com/kodekaze1/atlasmc

Credit to louis-e and the Arnis contributors for the original work —
Atlasmc is a rebranded fork that keeps the engine intact and adds the
features above. NOTICE file in the repo lists every fork-specific
modification.

Happy to answer questions / take feature requests.
```

### r/Tauri or r/rust (technical, can mention token framing briefly)

**Title**: `Shipped a Tauri 2 + Rust desktop app: generate any real-world location as a Minecraft world`

```
Stack:
• Rust + Tauri 2 desktop app
• fastanvil + fastnbt for Java Anvil region writing
• bedrockrs + nbtx + LevelDB for Bedrock .mcworld export
• Leaflet (in a Tauri webview iframe) for the map picker
• Plain HTML/JS/CSS for the rest of the GUI (no framework, ~3k LOC)
• Forked from Arnis by louis-e (Apache 2.0)

Notes from the build:
• Tauri 2's webview2-com integration on Windows is solid; build matrix
  cross-compiles to Win/Mac-universal/Linux on free GitHub runners.
• Sponge .schem export: VarInt-encoded palette indices in NBT, then
  gzipped. ~270 lines including tests.
• Server bundle export: post-process the Java world dir into a zip
  with eula.txt + server.properties stubs.

Source + binaries: https://github.com/kodekaze1/atlasmc

Funding model is community-driven via a token (utility, not security)
that the desktop app doesn't touch — desktop app stays free and
Apache-2.0 forever. Details if interested:
https://atlasmc-web.vercel.app/token .

Happy to dig into any specific part of the build.
```

---

## Email / newsletter — launch message

**Subject**: `Atlasmc Token is live`

```
The Atlasmc Token launched today.

What's live:
• Whitepaper: [LINK]
• Audit report by [FIRM]: [LINK]
• Contract on [CHAIN]: [ADDRESS]
• Buy on [DEX]: [LINK]
• Discord: [LINK]

What it funds:
The Atlasmc desktop app stays free, open source, and Apache-2.0
forever. The token funds the next chapter — a hosted browser-based
generator, a plugin ecosystem with token-funded grants, and the shared
infrastructure that makes both possible.

What it doesn't do:
It doesn't gate any feature of the desktop app. It isn't an
investment. It isn't a precondition for using or contributing to the
project.

Pre-launch commitments we're holding ourselves to:
✓ Smart-contract audit (report linked above)
✓ Liquidity locked 4+ years
✓ Multisig treasury with quarterly transparency reports
✓ 30+ day public testnet (completed)
✓ 90+ day bug bounty (active now)

If you came here from a previous Atlasmc release: thank you. If you're
new: download the desktop app for free at
https://atlasmc-web.vercel.app/download and generate your hometown.

— kodekaze1
```

---

## Press outreach (one-line ask)

For journalists / podcasters / content creators:

```
Subject: Atlasmc — open-source Minecraft world generator + community
token launch

Hi [NAME],

Quick heads-up that Atlasmc launches its community token today. It's an
open-source desktop app that turns real-world locations into playable
Minecraft worlds, forked from Arnis by louis-e. The token funds a
hosted browser version and a plugin ecosystem; the desktop app stays
free and open-source.

Press kit (logos, screenshots, boilerplate):
https://atlasmc-web.vercel.app/press

Token details:
https://atlasmc-web.vercel.app/token

Happy to answer questions, send embargoed early access, or arrange a
demo.

— kodekaze1
kodekaze1@gmail.com
```
