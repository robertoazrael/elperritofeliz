import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: '#F3E8D2',
        caramel: '#D49B72',
        cocoa: '#2D1B0D',
        tawny: '#A66C42',
        cream: '#FFF8EF',
        forest: '#23403A',
        blush: '#F7B89C',
        sky: '#FCE2C4',
      },
      boxShadow: {
        card: '0 10px 35px -15px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        pill: '999px',
      },
    },
  },
  plugins: [],
};

export default config;
