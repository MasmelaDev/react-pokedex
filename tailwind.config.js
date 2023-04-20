/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pokeRed :"#ED5451",
        darkbg: "#323E44"
      }
    },
  },
  plugins: [],
}

