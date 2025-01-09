/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}", // Ensure this is correct to include all React components
  // ],

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-slick/**/*.{js,ts}"],

  theme: {
    extend: {},
  },
  plugins: [],
}

