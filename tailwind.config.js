/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cw-purple-300": "#E2BDFF",
        "cw-purple-400": "#AF66E8",
        "cw-purple-500": "#9341D4",
        "cw-purple-600": "#691DA4",
        "cw-light-red": "#E18780 ",
        "cw-grey-950": "#141414",
        "cw-grey-900": "#151416",
        "cw-grey-850": "#1A191B",
        "cw-grey-800": "#222222",
        "cw-grey-700": "#383838",
        "cw-grey-400": "#737373",
        "cw-grey-600": "#8E8E8E",
        "cw-grey-100": "#D2D2D2",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
