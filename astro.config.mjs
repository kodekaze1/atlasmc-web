// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this once Vercel gives the production URL.
  // Used by the sitemap integration to build absolute URLs.
  site: 'https://atlasmc-web.vercel.app',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
