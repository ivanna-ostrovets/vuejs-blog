/* eslint-env node */

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#1C1C1C',
      text: colors.black,
      textSecondary: 'rgba(28, 28, 28, 0.50)',
    },
  },
  plugins: [],
};
