/*
 * Rules for Vue can be found at https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
 */
module.exports = {
  plugins: ['vue', 'vuejs-accessibility'],
  extends: [
    './index.js',
    'plugin:vue/recommended',
    '@vue/prettier',
    'plugin:vuejs-accessibility/recommended',
  ],
  rules: {
    // Priority B: Strongly Recommended (Improving Readability)
    'vue/singleline-html-element-content-newline': 'off', // override for headers with dots
    'vue/name-property-casing': 'off', // override for Mutt widgets

    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'vue/no-v-html': 'off', // override for translation
    'vuejs-accessibility/label-has-for': [
      2,
      {
        required: {
          // Only require one of nesting _or_ id.
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
