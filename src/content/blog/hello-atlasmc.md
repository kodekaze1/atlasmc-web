---
title: 'Hello, Atlasmc'
description: "Why we forked Arnis, what's different, and what we're building from here."
pubDate: 2026-04-27
tags: [project, launch]
---

Atlasmc is a fork of [Arnis](https://github.com/louis-e/arnis) by Louis Erbkamm. Arnis is an open-source Rust + Tauri desktop app that turns OpenStreetMap data and global elevation tiles into playable Minecraft worlds. It's a beautiful piece of software, well-tested, well-loved by the Minecraft modding community.

So why fork it?

The short version: we want to build a community-funded extended version of the same idea — hosted browser generation, plugin ecosystem, biome packs, integrations — and that requires sustained development funding that exceeds what donations to the upstream project realistically provide. A community token, structured carefully, is one way to do that. The desktop app stays free and open source forever; the token funds the bigger bets.

The longer version is on the [About page](/about) and the full [Roadmap](/roadmap).

## What's different in v2.7.2

The first Atlasmc release ships:

- **A visual refresh.** Green Minecraft-y accent, Pixelify Sans wordmark logo, dark theme that matches this site.
- **`.schem` schematic export.** `--schem` produces a Sponge Schematic v2 file that drops into WorldEdit, FastAsyncWorldEdit, and Litematica. Useful when you want to paste a generated city block into an existing build.
- **Multiplayer server bundle.** `--server-bundle` packages the generated world plus a starter `server.properties`, `eula.txt`, and README. Drop next to a Paper jar and run.
- **Pluggable Overpass mirrors.** `--overpass-url` points the generator at a self-hosted or paid Overpass mirror instead of the public ones. Useful if you're generating large areas at scale.

The desktop app's core engine is unchanged from upstream Arnis v2.7.0 — the new features are additive. A full list of fork-specific changes is in the bundled [NOTICE](https://github.com/kodekaze1/atlasmc/blob/main/NOTICE).

## What's next

Next features on deck (see [Roadmap](/roadmap) for the full picture):

- Block-state preservation in `.schem` (stair facing, slab type, fence connections).
- Real Authenticode certificate so Windows binaries are signed.
- Public testnet of the token contract once tokenomics and audit are finalized.
- Hosted browser generator after the token launch settles.

Sign up on the [Token page](/token) to be notified when the token goes live. No marketing email — just the launch and major releases.

— kodekaze1
