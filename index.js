
/* eslint-disable no-magic-numbers */

module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:vue/recommended',
        'plugin:node/recommended',
        'plugin:promise/recommended',
    ],
    plugins: [
        'html',
        'vue',
        'promise',
    ],
    settings: {
        /*
         * Override the default extensions for the HTML plugin so that it
         * doesn't try to handle Vue files – this is handled by the Vue plugin.
         */
        'html/html-extensions': [ '.html' ],
    },
    env: {
        es6: true,
        browser: true,
        commonjs: true,
        node: true,
        jest: true,
    },
    rules: {
        /*
         * Standard ESLint rules.
         *
         * https://eslint.org/docs/rules/
         */

        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [ 'error', 4 ],
        'space-before-function-paren': [ 'error', 'never' ],
        'object-shorthand': [ 'error', 'methods' ],
        'no-magic-numbers': [
            'error', {
                'ignore': [
                    -1, // Often used for comparison functions.
                    0, // Often used to get the first item in a list and comparison functions.
                    1, // Often used for comparison functions.
                    2, // Often used to modulate between odd and even and to format currency.
                    10, // Common exponent.
                    100, // Often used for currency calculations.
                    200, // HTTP status: OK.
                    401, // HTTP status: Unauthorized.
                    403, // HTTP status: Forbidden.
                    1000, // Milliseconds in a second.
                    1024, // Often used in data size conversions.
                ],
                'ignoreArrayIndexes': true,
                'enforceConst': true,
            },
        ],
        'no-invalid-this': 'error',
        'newline-per-chained-call': 'error',
        'no-warning-comments': 'warn',
        'no-implicit-coercion': [
            'error', {
                'allow': [ '!!' ],
            },
        ],
        'no-var': 'error',
        'comma-dangle': [ 'error', 'always-multiline' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'strict': 'error',
        'padded-blocks': [
            'error', {
                'blocks': 'never',
                'classes': 'always',
                'switches': 'never',
            },
        ],
        'max-len': [ 'error', 120 ],
        'max-statements': [
            'error', {
                'max': 30,
            },
        ],
        'max-lines': [ 'error', 300 ],
        'prefer-template': [ 'error' ],
        'max-params': [ 'error', 10 ],
        'function-paren-newline': [ 'error', 'consistent' ],
        'no-param-reassign': [ 'error' ],
        'guard-for-in': [ 'error' ],
        'new-parens': [ 'error' ],
        'callback-return': [ 'error' ],
        'require-jsdoc': [
            'error', {
                'require': {
                    'FunctionDeclaration': true,
                    'MethodDefinition': true,
                    'ClassDeclaration': true,
                    'ArrowFunctionExpression': false,
                    'FunctionExpression': false,
                },
            },
        ],
        'prefer-const': [ 'error' ],
        'no-process-exit': 'off',

        /*
         * Vue-specific lint rules.
         *
         * https://github.com/vuejs/eslint-plugin-vue
         */
        'vue/html-indent': [ 'error', 4 ],
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/require-default-prop': 'off',
        'vue/prop-name-casing': [ 'error' ],

        /*
         * Node-specific lint rules.
         *
         * https://github.com/mysticatea/eslint-plugin-node
         */
        'node/no-unsupported-features': 'off',
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': 'off',

        /*
         * Best practices for JavaScript promises.
         *
         * https://github.com/xjamundx/eslint-plugin-promise
         */
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',

        /*
         * These two are debatable.  Failing to return a promise correctly or
         * catch an error are easy mistakes to make, however switching these
         * warnings on also generates a lot of false positives where you have to
         * do things that don't really make much sense to keep the linter happy.
         */
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',
    },
}

/* eslint-enable no-magic-numbers */
