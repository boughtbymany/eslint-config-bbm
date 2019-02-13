module.exports = {
  plugins: ["vue"],
  extends: [
    "@boughtbymany/bbm",
    "plugin:vue/recommended",
    "@vue/prettier",
  ],
  rules: {
    "vue/v-bind-style": ["error", "longform"],
    "vue/v-on-style": ["error", "longform"],
    "vue/name-property-casing": ["error", "kebab-case"]
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
