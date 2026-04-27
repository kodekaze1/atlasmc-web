# Hero video

The hero background plays a looping flythrough video — same effect as
arnismc.com. Drop your files here:

- `flythrough.webm` — primary, modern browsers (Chrome, Firefox, Edge).
- `flythrough.mp4` — Safari + universal fallback.
- `poster.jpg` — single still shown while the video downloads, and as a
  fallback if both sources fail. Also used by users who have
  `prefers-reduced-motion` enabled.

The video element is in `src/components/HeroVideo.astro`.

## Capturing the footage

The standard tool in the Minecraft community is
**[ReplayMod](https://www.replaymod.com/)** — a Forge/Fabric mod that records
your gameplay, lets you set up smooth Bezier camera paths after the fact,
and exports clean MP4. It's how most "Minecraft cinematic" YouTube videos
are made. Alternatives:

- **OBS Studio** + spectator mode (`/gamemode spectator`) — record while
  you fly. Less smooth than ReplayMod, easier to set up.
- **Cinematic Camera** mod or `/camera` plugin — manual camera paths.

Workflow:

1. Generate a world with Atlasmc for an interesting bbox.
2. Open it in Minecraft, pick scenic spots, set up a camera path with
   ReplayMod (or fly manually in spectator mode).
3. Render to MP4 at 1080p, 30 or 60 fps, ~30 seconds per city.
4. Repeat for 2-3 different cities.
5. Stitch them together in any video editor (DaVinci Resolve is free) with
   1-2 second cross-fades between cuts. Export as one continuous loop —
   the last frame should match the first so the loop is seamless.

## Specs

- **Aspect ratio**: 16:9.
- **Resolution**: 1920×1080 is plenty. 4K is wasted for a background that
  gets a dark overlay on top.
- **Duration**: 20-60 seconds total. Longer = larger file, more bandwidth.
- **Frame rate**: 30 fps is fine; 60 fps if you want very smooth pans.
- **Codec**:
  - WebM: VP9, CRF ~32, 2-4 Mbps target. Smaller file, modern browsers only.
  - MP4: H.264 main/high, CRF ~23, 4-8 Mbps target. Universal compat.
- **Audio**: strip it (`-an` in ffmpeg). The video is muted via the
  `muted` attribute anyway, and audio bytes waste bandwidth.

## Encoding via ffmpeg

```sh
# Make WebM
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 -an flythrough.webm

# Make MP4 (H.264)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -an -movflags +faststart flythrough.mp4

# Pull a poster from second 5
ffmpeg -i input.mp4 -ss 5 -frames:v 1 -q:v 2 poster.jpg
```

`-movflags +faststart` on the MP4 puts the index at the front of the
file so the browser can start playing before the full file downloads.

## File size guidance

Aim for both video files under 15 MB each. Above ~25 MB, consider hosting
on Cloudflare Stream or YouTube and embedding via iframe instead — the
free tier of Cloudflare Pages and Vercel both serve 25 MB files fine, but
mobile users on cellular will thank you for keeping it small.
