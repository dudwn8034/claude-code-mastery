/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#1F2937',
      },
    },
  },
  safelist: [
    'visible',
    'active',
  ],
  plugins: [],
  darkMode: 'class',
}
