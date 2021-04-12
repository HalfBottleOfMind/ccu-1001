const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.vue',
      './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        300: '300px',
      },
      borderWidth: {
        1: '1px',
      },
      inset: {
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
      }
    },
    colors: {
      main: colors.yellow['300'],
      gray: {
        dark: colors.coolGray['700'],
        DEFAULT: colors.coolGray['600'],
        light: colors.coolGray['500'],
      },
      white: colors.white,
      black: colors.black,
      bars: {
        heat: {
          cold: colors.blue['300'],
          middle: colors.green['400'],
          hot: colors.red['500'],
        }
      }
    },
  },
  plugins: [],
}
