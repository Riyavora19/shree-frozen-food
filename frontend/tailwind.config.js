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
          DEFAULT: '#ff8c42', // Brighter Orange for frozen pulps
          light: '#ffb07c',
          dark: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 1px 1px 0 rgba(0, 0, 0, 0.02)',
        'glow-primary': '0 0 20px rgba(30, 58, 138, 0.15)',
        'glow-secondary': '0 0 20px rgba(255, 140, 66, 0.25)',
      }
    },
  },
  plugins: [],
}

