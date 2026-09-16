/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0c0d0f',
          subtle: '#121417',
          surface: '#16191e',
          border: '#232730',
        },
        ivory: {
          50: '#fdfcfb',
          100: '#f8f6f0',
          200: '#ede8dc',
          300: '#ded7c4',
          400: '#b8b09d',
        },
        accent: {
          gold: '#c5a059',
          champagne: '#d6b26d',
          terracotta: '#c97750',
          bronze: '#9e783c',
          warm: '#dfb978',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
