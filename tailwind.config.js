/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#252d3b",
        secondary: "rgb(226, 232, 240)",
        tertiary: "#000000",
      },
    },
  },
  plugins: [],
};
