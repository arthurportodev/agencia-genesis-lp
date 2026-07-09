import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Substitua PUBLIC_SITE_URL pelo domínio real antes da publicação.
const site = process.env.PUBLIC_SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
