module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],

  parserOptions: {
    sourceType: "module",
  },

  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "es5",
        singleQuote: true
      },
    ],
    "require-jsdoc": [
      "warn",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: true,
        },
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-var": "error",
  },
}
