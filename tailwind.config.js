const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.[vue,js]'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        300: '300px',
      },
      borderWidth: {
        1: '1px',
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
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [],
}
