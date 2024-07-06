/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: 'rgb(90, 13, 255)',
        customColor2: 'rgb(255, 41, 184)',
        customColor3: 'rgb(255, 88, 28)',
      },
      fontFamily: {
        big: ["Big Shoulders Display", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}

