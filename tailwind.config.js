/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
      serif: ["DM Sans", "serif"],
    },
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#e5e7eb",
        tertiary: "#616161",
        quaternary: "#757575",
      },
    },
  },
  plugins: [],
};
