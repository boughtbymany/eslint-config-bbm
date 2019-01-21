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
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
