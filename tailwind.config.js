/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Juurava — deep navy/purple base
        ink: '#06081F',          // near-black blue
        deep: '#0B0E2E',         // hero background
        midnight: '#121645',     // section blocks
        slate: '#1A1F55',        // card surface
        graphite: '#252B6E',     // borders
        steel: '#3E4694',        // muted text
        mist: '#D8DCF0',         // body text
        bone: '#F3F4FB',         // headings

        // Magenta/pink — primary accent (was 'ember')
        magenta: '#FF3DA8',      // hot magenta
        pink: '#E83BB8',
        rose: '#C73DC9',
        plum: '#8B3CD5',

        // Cyan/electric blue — secondary accent (was 'signal')
        cyan: '#3DE3FF',         // electric cyan
        sky: '#3D9CFF',          // electric blue
        violet: '#7B5CFF',       // bridge between magenta and cyan
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: { widest: '0.22em', ultra: '0.32em' },
      animation: {
        rise: 'rise 0.8s ease-out forwards',
        slowPulse: 'slowPulse 4s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite',
        scan: 'scan 3s linear infinite',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slowPulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
