import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2E8',
        charcoal: '#201A1A',
        olive: '#5A6344',
        terracotta: '#A76345',
        wine: '#5F2338',
        gold: '#B99A62',
        mist: '#E8DED1',
      },
      backgroundImage: {
        'grain-texture': "radial-gradient(circle at 20% 20%, rgba(185,154,98,0.18), transparent 0 24%), radial-gradient(circle at 80% 0%, rgba(95,35,56,0.12), transparent 0 28%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
      },
      boxShadow: {
        soft: '0 20px 60px rgba(32, 26, 26, 0.12)',
        card: '0 16px 40px rgba(32, 26, 26, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
