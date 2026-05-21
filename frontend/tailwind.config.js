/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Dark Blue
          light: '#3b82f6',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#f97316', // Orange
          light: '#fb923c',
          dark: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
