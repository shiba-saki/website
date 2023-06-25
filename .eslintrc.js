module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['@antfu/vue', '@vue/prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'testing-library', 'tailwindcss'],
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/vue'],
      rules: {
        'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
  rules: {
    'antfu/if-newline': 'off',
    'vue/component-tags-order': 'off',
    'vue/component-name-in-template-casing': 'off',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        whitelist: [
          'layer-0',
          'layer-1',
          'layer-2',
          'text-display-x-large',
          'text-display-large',
          'text-display-medium',
          'text-pageheading',
          'text-display-small',
          'text-heading',
          'text-subheading',
          'text-inputs',
          'text-button',
          'text-body',
          'text-style-2',
          'text-style-3',
          'text-caption',
          'text-style',
          'icon-.*',
          '.+-primary-.+',
        ],
      },
    ],
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
