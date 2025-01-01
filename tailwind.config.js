/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        100: '#d3f485',
        200: '#bde39e',
        300: '#aae3c1',
        400: '#98f8dd'
      },
      backgroundColor: {
        light: '#f5f5f5',
        dark: '#121212',
      },
      textColor: {
        light: '#f5f5f5',
        primary: '#333333',
        secondary: '#5c5c5c'
      },
      maxWidth: {
        1200: '1200px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'pattern': `linear-gradient(#aae3c1 1px, transparent 1px), linear-gradient(to right, #aae3c1 1px, #f5f5f5 1px)`,
      },
      backgroundSize: {
        'pattern-size': '30px 30px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}