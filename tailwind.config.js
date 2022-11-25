/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /(bg|text|border|shadow|fill|from)-chain-(juno|osmosis|stargaze)-(200|400|600|800)/, variants: ["hover", "focus", "sm", "md", "lg", "placeholder"] },
  ],
  theme: {
    extend: {
      colors: {
        "cw-purple-300": "#E2BDFF",
        "cw-purple-400": "#AF66E8",
        "cw-purple-500": "#9341D4",
        "cw-purple-600": "#691DA4",
        "cw-purple-450":"#B65BFF",
        "cw-light-red": "#E18780 ",
        "cw-grey-950": "#141414",
        "cw-grey-900": "#151416",
        "cw-grey-850": "#1A191B",
        "cw-grey-800": "#222222",
        'cw-grey-750':'#292929',
        "cw-grey-700": "#383838",
        'cw-grey-600':"#424242",
        "cw-grey-500":"#505050",
        "cw-grey-400": "#737373",
        "cw-grey-300": "#8E8E8E",
        "cw-grey-200":"#C5C5C5",
        "cw-grey-100": "#D2D2D2",
        'chain-osmosis-800':'#A242C3',
        'chain-osmosis-600':'#C651EE',
        'chain-osmosis-400':'#D463FB',
        'chain-osmosis-200':'#EBB1FF',
        'chain-juno-800':'#B94E49',
        'chain-juno-600':'#F0827D',
        'chain-juno-400':'#E76A64',
        'chain-juno-200':'#FFC9C7',
        'chain-stargaze-800':'#23ACA9',
        'chain-stargaze-600':'#CFF3B4',
        'chain-stargaze-400':'#46C7C9',
        'chain-stargaze-200':'#F6F4A2',
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
