/*
 * Rules for Vue can be found at https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
 */
module.exports = {
  plugins: ['vue', 'vuejs-accessibility'],
  extends: ['./index.js', 'plugin:vue/recommended', '@vue/prettier'],
  rules: {
    // Priority B: Strongly Recommended (Improving Readability)
    'vue/singleline-html-element-content-newline': 'off', // override for headers with dots
    'vue/name-property-casing': 'off', // override for Mutt widgets

    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'vue/no-v-html': 'off', // override for translation
    // A11y rules taken from https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/blob/master/src/index.js
    // But switched to warn
    'vuejs-accessibility/accessible-emoji': 'warn',
    'vuejs-accessibility/alt-text': 'warn',
    'vuejs-accessibility/anchor-has-content': 'warn',
    'vuejs-accessibility/aria-props': 'warn',
    'vuejs-accessibility/aria-role': [
      'warn',
      {
        ignoreNonDOM: true,
      },
    ],
    'vuejs-accessibility/aria-unsupported-elements': 'warn',
    'vuejs-accessibility/click-events-have-key-events': 'warn',
    'vuejs-accessibility/form-control-has-label': 'warn',
    'vuejs-accessibility/heading-has-content': 'warn',
    'vuejs-accessibility/iframe-has-title': 'warn',
    'vuejs-accessibility/interactive-supports-focus': [
      'warn',
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'searchbox',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],
    'vuejs-accessibility/label-has-for': [
      2,
      {
        required: {
          // Only require one of nesting _or_ id.
          some: ['nesting', 'id'],
        },
      },
    ],
    'vuejs-accessibility/media-has-caption': 'warn',
    'vuejs-accessibility/mouse-events-have-key-events': 'warn',
    'vuejs-accessibility/no-access-key': 'warn',
    'vuejs-accessibility/no-autofocus': [
      'warn',
      {
        ignoreNonDOM: true,
      },
    ],
    'vuejs-accessibility/no-distracting-elements': 'warn',
    'vuejs-accessibility/no-onchange': 'warn',
    'vuejs-accessibility/no-redundant-roles': 'warn',
    'vuejs-accessibility/role-has-required-aria-props': 'warn',
    'vuejs-accessibility/tabindex-no-positive': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
