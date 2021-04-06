const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        300: '300px',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
