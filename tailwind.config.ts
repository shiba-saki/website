import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

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
      textShadow: {
        none: 'none',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        border: '0 0 3px var(--tw-shadow-color), 0 0 5px var(--tw-shadow-color), 0 0 10px var(--tw-shadow-color)',
      },
      colors: {
        primary: colors.gray,
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
