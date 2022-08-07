/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#171821",
        secondary: "#9FA2BC",
        shadow: "#1C1D26",
        hover: "#AF7CD5",
        code: "#1E1F2B",
      },
    },
  },
  plugins: [],
};
