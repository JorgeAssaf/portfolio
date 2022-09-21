/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '250px',
      'md': '700px',
      'lg': '1000px',
      'ult': '3440px',
    },
    extend: {},
  },
  plugins: [],
}