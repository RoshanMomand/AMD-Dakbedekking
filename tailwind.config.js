/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2e35',
          50: '#f0f4f5',
          100: '#d9e3e6',
          200: '#b3c7cd',
          300: '#8daab4',
          400: '#678e9b',
          500: '#417282',
          600: '#345b68',
          700: '#27444e',
          800: '#1a2e35',
          900: '#0d171a',
        },
        accent: {
          DEFAULT: '#e6a526',
          50: '#fef8ed',
          100: '#fcefd0',
          200: '#f9dfa1',
          300: '#f7cf72',
          400: '#f4bf43',
          500: '#e6a526',
          600: '#c68a1e',
          700: '#a57017',
          800: '#84570f',
          900: '#633d08',
        },
      },
    },
  },
  plugins: [],
};
