# Hero slideshow images

Drop your Minecraft-render screenshots into this folder as:

- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`

The slideshow component (`src/components/HeroSlideshow.astro`) cycles
through all `slide-N.jpg` files and fades between them with a 7-second
hold per slide. Missing files are hidden gracefully — you can ship the
site with zero, one, two, or three images and the layout won't break.

## Specs

- **Aspect ratio**: 16:9 (the same Minecraft window or any wide screenshot works).
- **Resolution**: at least 1920 × 1080. Higher is fine; the browser scales down.
- **Format**: JPEG (best size/quality), PNG, or WebP.
- **File size**: keep each slide under ~400 KB if you can — these are above-the-fold,
  so size hits Largest Contentful Paint. Run them through `squoosh.app` if needed.

## How to capture them

1. Build and run Atlasmc: `cargo run` from the desktop app repo.
2. Generate a world for an interesting bbox (your hometown, NYC, Tokyo, etc.).
3. Open the world in Minecraft, fly around in spectator mode (`/gamemode spectator`),
   find a cinematic angle, F1 to hide HUD, F2 to screenshot.
4. Crop to 16:9, export as JPEG, drop the file in this folder.

## Adding more slides

Edit `src/components/HeroSlideshow.astro` and append to the `defaultSlides`
array. Animation timing auto-staggers based on the slide count.
