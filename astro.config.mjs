// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://edenilson-molina.github.io',
  base: '/portafolio-personal/',
  vite: {
    plugins: [tailwindcss()]
  }
});