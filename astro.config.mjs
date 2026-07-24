import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: "https://zervladpy.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "ru", "pt", "it"]
  },
  vite: {
    plugins: [tailwind()]
  }
});