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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(31, 31, 31, 0.5), rgb(31, 31, 31))',
      },
      fontFamily: {
        big: ["Big Shoulders Display", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      borderImage: () => ({
        'gradient-border': 'linear-gradient(to right, #ffffff 27%, #ffffff 9%)',
      }),
    },
  },
  plugins: [],
}

