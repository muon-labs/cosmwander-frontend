module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#691DA4',
        secondary: '#AF66E8',
        border: '#383838'
      },
      bgColor: {
        primary: '#1A191B',
        secondary: '#FFFFFF',
      },
      textColor: {
        primary: '#D2D2D2',
        secondary: '#737373'
      }
    }
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require('tw-elements/dist/plugin')]
};
