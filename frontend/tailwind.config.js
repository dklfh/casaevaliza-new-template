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
        'bintang': '#e4a853',
        'text': '#222222',
        'footer': '#333333',
        'text2': '#666666',
      },
      letterSpacing: {
        custom: '0.375em'
      },
      height: {
        '900': '56.25rem',
      },
      padding: {
        '100': '100px',
        '130': '130px'
      },
      fontSize: {
        '15': ['15px', {
          lineHeight: '1.75em'
        }],
        '45': ['45px', {
          lineHeight: '1.25em'
        }],
        '40': '40px'
      },
      maxWidth: {
        '1140': '71.25rem',
        '960': '60rem'
      },
      backgroundAttachment: {
        'fixed': 'fixed',
      },
    },
  },
  plugins: [],
}