/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        readMore: 'readMore 1s infinite'
      },
      keyframes: {
        readMore: {
          '0%': {
            transform: 'translateY(0)'
          },
          '50%':{
            transform: 'translateY(-5px)'
          },
          '100%':{
            transform: 'translateY(0px)'
          },
        }
      },
      colors:{
        'card-color': '#1c1c1c'
      }
    },
  },
  plugins: [],
}

