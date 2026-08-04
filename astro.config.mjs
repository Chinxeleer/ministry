// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the real deployed URL for canonical/OG tags
  site: 'https://blessingkodze.pages.dev',

  output: 'static',

  // Responsive images by default for every <Image> / <Picture>
  image: {
    layout: 'constrained',
    objectFit: 'cover',
    objectPosition: 'center',
    responsiveStyles: true,
  },

  // Montserrat for every heading, Inter for all other text.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [500, 600, 700, 800],
      styles: ['normal'],
      optimizedFallbacks: true,
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      optimizedFallbacks: true,
      fallbacks: ['Helvetica Neue', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
