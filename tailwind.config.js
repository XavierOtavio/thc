/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        thc1: "#9e915e",
        thc2: "#d9c59c",
        thc3: "#0f172a",
        thc4: "#d6d3d1",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      animation: {
        spinTo45: "spin45 500ms ease-in-out forwards",
        spinTo0: "spin0 500ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
