/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        blackk: '#101114',
        durazno: '#ff9264',
        rhino: {
          50: '#f1f7fd',
          100: '#e0eef9',
          200: '#c9e1f4',
          300: '#a3cfed',
          400: '#78b3e2',
          500: '#5898d9',
          600: '#437ecd',
          700: '#3a6bbb',
          800: '#345899',
          900: '#2b4570',
          950: '#202f4b',
        },
        customgray: '#676B5F',
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      animation: {
        slidein: 'slidein 1s ease var(--slidein-delay, 0) forwards',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },

  },
  plugins: [],
}
