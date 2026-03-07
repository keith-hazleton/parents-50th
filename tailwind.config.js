/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ef',
          100: '#f9f0d4',
          200: '#f2dfa5',
          300: '#e9c96d',
          400: '#e2b43e',
          500: '#d4982a',
          600: '#b87720',
          700: '#99581d',
          800: '#7d471f',
          900: '#683b1d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf3e2',
          300: '#f5e8cc',
        },
        charcoal: {
          700: '#3d3935',
          800: '#2d2926',
          900: '#1e1b18',
        },
        burgundy: {
          600: '#7b2d3b',
          700: '#6b2533',
        },
        sage: {
          400: '#8faa8c',
          500: '#6d8e6a',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
