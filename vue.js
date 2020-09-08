/*
 * Rules for Vue can be found at https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
 */
module.exports = {
  plugins: ['vue', 'vue-a11y'],
  extends: [
    './index.js',
    'plugin:vue/recommended',
    '@vue/prettier',
    'plugin:vue-a11y/base',
  ],
  rules: {
    // Priority B: Strongly Recommended (Improving Readability)
    'vue/singleline-html-element-content-newline': 'off', // override for headers with dots
    'vue/name-property-casing': 'off', // override for Mutt widgets

    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'vue/no-v-html': 'off', // override for translation
    'vue-a11y/label-has-for': [
      2,
      {
        required: {
          // Only require one of nesting _or_ id.
          some: ['nesting', 'id'],
        },
      },
    ],
    'vue-a11y/click-events-have-key-events': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
