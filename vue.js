/*
 * Rules for Vue can be found at https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
 */
module.exports = {
  plugins: ['vue', 'vue-a11y'],
  extends: ['./index.js', 'plugin:vue/recommended', '@vue/prettier'],
  rules: {
    // Priority B: Strongly Recommended (Improving Readability)
    'vue/singleline-html-element-content-newline': 'off', // override for headers with dots
    'vue/name-property-casing': 'off', // override for Mutt widgets
    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'vue/no-v-html': 'off', // override for translation
    // Override self-closing settings by eslint-config-prettier
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    // A11y rules taken from https://github.com/maranran/eslint-plugin-vue-a11y/blob/master/lib/configs/recommended.js
    // But switched to warn
    'vue-a11y/accessible-emoji': 'warn',
    'vue-a11y/alt-text': 'warn',
    'vue-a11y/anchor-has-content': 'warn',
    'vue-a11y/mouse-events-have-key-events': 'warn',
    'vue-a11y/click-events-have-key-events': 'off', // This rule has a bug https://github.com/maranran/eslint-plugin-vue-a11y/issues/28
    'vue-a11y/label-has-for': [
      2,
      {
        required: {
          // Only require one of nesting _or_ id.
          some: ['nesting', 'id'],
        },
      },
    ],
    'vue-a11y/form-has-label': 'warn',
    'vue-a11y/no-autofocus': 'warn',
    'vue-a11y/no-onchange': 'warn',
    'vue-a11y/tabindex-no-positive': 'warn',
    'vue-a11y/heading-has-content': 'warn',
    'vue-a11y/no-distracting-elements': 'warn',
    'vue-a11y/media-has-caption': 'warn',
    'vue-a11y/no-access-key': 'warn',
    'vue-a11y/iframe-has-title': 'warn',
    'vue-a11y/interactive-supports-focus': 'warn',
    'vue-a11y/aria-role': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'vue-a11y/aria-props': 'warn',
    'vue-a11y/aria-unsupported-elements': 'warn',
    'vue-a11y/no-redundant-roles': 'warn',
    'vue-a11y/role-has-required-aria-props': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
