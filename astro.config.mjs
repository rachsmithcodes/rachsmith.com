import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://rachsmith.com',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'material-theme-lighter',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
