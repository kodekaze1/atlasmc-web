---
title: 'Atlasmc v2.7.2 — Schematic export, server bundles, and a visual refresh'
description: 'Release notes for Atlasmc v2.7.2, the first proper release under the Atlasmc brand.'
pubDate: 2026-04-28
tags: [release]
---

Atlasmc v2.7.2 is live on [GitHub Releases](https://github.com/kodekaze1/atlasmc/releases/tag/v2.7.2). This is the first proper release under the Atlasmc brand, building on Arnis v2.7.0.

## Highlights

### Sponge `.schem` schematic export

Generate a Minecraft area into a portable `.schem` file instead of writing a full world directory.

```sh
atlasmc --bbox "47.6062,-122.3321,47.6262,-122.3121" --schem --output-dir seattle.schem
```

The output works with WorldEdit (`//schem load seattle`), FastAsyncWorldEdit, and Litematica's importer. v2.7.2 writes blocks-only — block-state properties (stair facing, slab top/bottom) and block entity contents (sign text, banner patterns, chest contents) are not preserved yet. That's coming in a follow-up.

### Multiplayer server bundle

Generate a Java world and have it pre-packaged for Paper/Spigot/vanilla:

```sh
atlasmc --bbox "..." --output-dir "Atlasmc World 1" --server-bundle
```

Produces an `Atlasmc World 1_server.zip` next to the world directory. Inside:

- `world/` — the generated Minecraft world
- `server.properties` — sensible defaults (port 25565, creative, online-mode off for LAN)
- `eula.txt` — defaults to `eula=false`; the user opts in
- `README.md` — instructions for downloading Paper and running the server

### Visual refresh

The desktop GUI now matches this site visually — green accent, Pixelify Sans wordmark, dark blue-grey theme. All existing JS class hooks, Leaflet integration, settings flow, and language selector are unchanged.

### Pluggable Overpass mirrors

The default public mirror list can be replaced via the new `--overpass-url` flag (repeatable):

```sh
atlasmc --bbox "..." \
        --overpass-url https://my-mirror.example/api/interpreter
```

Useful for self-hosted Overpass instances or paid proxies. The fallback mirror list still kicks in if every supplied URL fails.

## Project hygiene

`CONTRIBUTING.md`, `SECURITY.md`, and `CHANGELOG.md` are now in place. The previous self-signed Windows code-signing pipeline was removed (self-signed binaries get the same SmartScreen warning as unsigned, so it added complexity for no benefit). Real Authenticode signing will land when we have a cert.

## Get it

- **Pre-built binaries**: [github.com/kodekaze1/atlasmc/releases/tag/v2.7.2](https://github.com/kodekaze1/atlasmc/releases/tag/v2.7.2). Windows, macOS Universal (Intel + Apple Silicon), Linux x64.
- **Source**: `git clone https://github.com/kodekaze1/atlasmc.git && cargo run`. See [CONTRIBUTING.md](https://github.com/kodekaze1/atlasmc/blob/main/CONTRIBUTING.md) for prerequisites.

## Verification

- Forked from [louis-e/arnis@2d0a0aa](https://github.com/louis-e/arnis/commit/2d0a0aa) (Arnis v2.7.0 prep).
- All fork modifications listed in the bundled [NOTICE](https://github.com/kodekaze1/atlasmc/blob/main/NOTICE) per Apache 2.0 §4(b).
- CI builds cross-platform binaries on every tag push; signed binaries pending a real cert.

— kodekaze1
