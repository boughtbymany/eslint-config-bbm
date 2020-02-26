module.exports = {
  plugins: ['cucumber'],
  extends: ['./index.js', 'plugin:cucumber/recommended'],
  rules: {
    'cucumber/async-then': ['error', { all: true }],
    'cucumber/expression-type': 2,
    'cucumber/no-restricted-tags': [2, 'wip', 'broken', 'ignore'],
    'cucumber/no-arrow-functions': 2,
  },
}
