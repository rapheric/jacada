/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this is correct to include all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

