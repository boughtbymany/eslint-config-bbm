const importOrderRuleConfig = require('./rules/import-order.js')

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'jsdoc', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // Import order config is a little long-winded so it is extracted.
    'import/order': ['error', importOrderRuleConfig],
  },
}
