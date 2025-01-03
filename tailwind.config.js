/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#BFCFBB',
        mint: '#506e4e',
        tea: '#738A6E',
        darkGreen: '#41503d',
        whitelight: ' #F7F7F7',
      },
      backgroundImage: {
        greengradient: 'linear-gradient(to bottom, #BFCFBB, #506e4e)',
        whitelight: ' #F7F7F7',
      },
      fontFamily: {
        ysabeau: ['Ysabeau SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
