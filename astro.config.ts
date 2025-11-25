import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  srcDir: './src',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@styles': path.resolve('./src/styles'),
        '@lib': path.resolve('./src/lib'),
      },
    },
  },
});
