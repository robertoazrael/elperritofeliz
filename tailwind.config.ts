import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: '#F6F9FF',
        caramel: '#FF4FA3',
        cocoa: '#0F172A',
        tawny: '#FFB300',
        cream: '#FFFDF9',
        forest: '#24D6C8',
        blush: '#FFD8EC',
        sky: '#C8F1FF',
      },
      boxShadow: {
        card: '0 12px 40px -18px rgba(15, 23, 42, 0.25)',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};

export default config;
