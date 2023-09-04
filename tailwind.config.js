/* eslint-env node */

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',
        text: colors.black,
        textSecondary: 'rgba(28, 28, 28, 0.50)',
        inputBackground: '#F8F8F8',
      },
    },
    fontFamily: {
      text: ['Open Sans', 'sans-serif'],
      title: ['Libre Baskerville', 'serif'],
    },
  },
  plugins: [],
};
