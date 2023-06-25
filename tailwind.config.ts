import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        // shadow style guide
        1: '0 2px 5px 2px rgba(0, 0, 0, 0.1)',
        2: '5px 10px 30px 0 rgba(0, 0, 0, 0.15)',
        3: '10px 25px 60px 0 rgba(0, 0, 0, 0.3)',

        '0-layer': '0 0 0 0 rgba(0, 0, 0, 0)',
        '1-layer': '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
        '2-layer': '5px 10px 30px 0 rgba(0, 0, 0, 0.15)',
        '3-layer': '5px 35px 60px 0 rgba(0, 0, 0, 0.3)',

        // white variant for editor
        w2: '5px 10px 30px 0 rgba(255, 255, 255, 0.30)',
      },
      colors: {
        primary: colors.gray,
      },
    },
  },
}
