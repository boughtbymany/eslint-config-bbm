/*
 * Rules for Vue can be found at https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
 */
module.exports = {
  plugins: ["vue"],
  extends: [
    "@boughtbymany/bbm",
    "plugin:vue/recommended",
    "@vue/prettier",
  ],
  rules: {
    // Priority B: Strongly Recommended (Improving Readability)
    "vue/singleline-html-element-content-newline": "off", // override for headers with dots
    "vue/attribute-hyphenation": "off",
    "vue/name-property-casing": "off", // override for Mutt widgets
    "vue/require-default-prop": "off",
    "vue/v-bind-style": ["error", "longform"], // override fdefault
    "vue/v-on-style": ["error", "longform"], // override default

    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    "vue/no-v-html": "off", // override for translation
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
