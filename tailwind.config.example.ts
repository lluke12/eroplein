import type { Config } from 'tailwindcss';

/**
 * Margret Tailwind Configuration
 *
 * Design tokens extracted from the existing index.html prototype.
 * Preserves the dark theme with fuchsia/pink/rose accent palette.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Custom "blush" palette from the existing design
        blush: {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa2cb',
          400: '#fd68a6',
          500: '#f83c83',
          600: '#e81a5d',
          700: '#ca0c44',
          800: '#a70d39',
          900: '#8b1033',
        },
        // Site background
        surface: {
          DEFAULT: '#050505',
          raised: '#0a0a0a',
          overlay: '#131313',
        },
      },
      animation: {
        'float-slow': 'float-slow 20s infinite ease-in-out',
        'float-medium': 'float-medium 15s infinite ease-in-out',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scroll-bounce': 'scroll-bounce 2s infinite ease-in-out',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05) rotate(2deg)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95) rotate(-1deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-40px, 30px) scale(1.1)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(248, 60, 131, 0.15)',
        'glow-md': '0 0 30px -5px rgba(248, 60, 131, 0.2)',
        'glow-lg': '0 20px 60px -15px rgba(248, 60, 131, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
