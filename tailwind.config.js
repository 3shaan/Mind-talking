/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      color: {
        primary:"#1c293d"
      }
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};
