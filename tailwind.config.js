/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chain: {
          200: "var(--chain-color-200)",
          400: "var(--chain-color-400)",
          600: "var(--chain-color-600)",
          800: "var(--chain-color-800)",
        },
        "cw-purple-300": "#E2BDFF",
        "cw-purple-400": "#AF66E8",
        "cw-purple-500": "#9341D4",
        "cw-purple-600": "#691DA4",
        "cw-purple-450": "#B65BFF",
        "cw-light-red": "#E18780 ",
        "cw-grey-950": "#141414",
        "cw-grey-900": "#151416",
        "cw-grey-850": "#1A191B",
        "cw-grey-800": "#222222",
        "cw-grey-750": "#292929",
        "cw-grey-700": "#383838",
        "cw-grey-600": "#424242",
        "cw-grey-500": "#505050",
        "cw-grey-400": "#737373",
        "cw-grey-300": "#8E8E8E",
        "cw-grey-200": "#C5C5C5",
        "cw-grey-100": "#D2D2D2",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
