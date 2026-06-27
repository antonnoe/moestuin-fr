import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Communities Abroad huisstijl
        bordeaux: {
          DEFAULT: '#800000',
          50: 'rgba(128,0,0,0.04)',
          100: 'rgba(128,0,0,0.08)',
          200: 'rgba(128,0,0,0.16)',
          300: 'rgba(128,0,0,0.32)',
          400: 'rgba(128,0,0,0.48)',
          500: 'rgba(128,0,0,0.64)',
          600: 'rgba(128,0,0,0.80)',
        },
        cream: '#FBF8F3',
        ink: '#1A1A1A',
        forest: '#2D4A1F',
        sage: '#8FA386',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      lineHeight: {
        relaxed: '1.8',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};

export default config;
