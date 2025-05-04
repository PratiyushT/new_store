/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E5',
          100: '#FFF0C2',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#FFBF00', // Main gold color
          600: '#CC9900',
          700: '#997300',
          800: '#664D00',
          900: '#332600',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Big Shoulders Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
