import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: 'https://olek.works',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'material-lighter',
    },
  },
});
