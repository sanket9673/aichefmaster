/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        montecarlo: ['MonteCarlo', 'cursive'],  // Added custom font
        pompiere: ['"Pompiere"', 'serif'],  // Add Pompiere font
      },
      fontSize: {
        '10xl': '10rem', // 10xl font size
        '11xl': '12rem', // 11xl font size
        '12xl': '14rem', // 12xl font size
      },
    },
  },
  plugins: [],
};
