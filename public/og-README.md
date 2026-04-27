# Open Graph image

Drop a 1200×630 PNG at `public/og.png` to power social previews on
Discord, Twitter/X, iMessage, Slack, LinkedIn, Facebook, and most other
link-unfurling platforms.

## Specs

- **Dimensions**: 1200 × 630 pixels (the OG/Twitter standard).
- **Format**: PNG. JPEG works too but PNG handles flat colors and text
  better.
- **File size**: target ≤ 250 KB so unfurlers (especially Discord) don't
  time out. Squoosh.app or `pngquant` are fine for compression.
- **Safe area**: keep critical text in the centered 900×500 area —
  some platforms crop the edges (especially mobile previews).

## Suggested content

- **Atlasmc** wordmark in the Pixelify Sans font (or your future custom
  logo) — top center or top-left.
- A clean Minecraft cityscape (one of your hero video frames works).
- Tagline: *"Bring the Real World into Minecraft"* (or similar).
- Avoid clutter and small text; OG images get displayed as small as
  120×63 thumbnails on mobile lockscreens.

## Generating one without a designer

If you have your hero video poster (`public/hero/poster.jpg`), you can
crop and overlay text in any image editor (Photoshop, GIMP, Figma,
Canva, Photopea — Photopea is free and runs in browser). Or use:

```sh
# Crop the hero poster to 1200x630, overlay text via ffmpeg
ffmpeg -i public/hero/poster.jpg \
  -vf "crop=in_w:in_w*630/1200,scale=1200:630,drawtext=text='ATLASMC':fontfile=/path/to/PixelifySans-Bold.ttf:fontsize=120:fontcolor=#a3e44a:x=(w-text_w)/2:y=80,drawtext=text='Bring the Real World into Minecraft':fontfile=/path/to/Inter-Regular.ttf:fontsize=40:fontcolor=#ffffff:x=(w-text_w)/2:y=h-120" \
  -frames:v 1 -q:v 2 public/og.png
```

(Adjust font paths.)

## Per-page overrides

Pages can override the default OG image by passing `ogImage` to the
layout. Useful for the gallery, blog posts, etc.:

```astro
<BaseLayout title="..." ogImage="/og/gallery.png">
  …
</BaseLayout>
```

## Until you ship one

`public/og.png` is currently missing. Until you add it, social previews
will render with no image — title and description still work. The site
won't break.
