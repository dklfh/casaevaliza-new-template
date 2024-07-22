/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilda: ['Gilda Display', 'serif'],
        barlowcondensed: ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        island: ['Island Moments', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'coklat': '#aa8453',
        'bintang': '#e4a853'
      },
      letterSpacing: {
        custom: '0.375em'
      },
      height: {
        '900': '56.25rem',
      }
    },
  },
  plugins: [],
}