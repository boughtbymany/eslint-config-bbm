module.exports = {
    plugins: [
        'preset-lint-consistent',
        'preset-lint-recommended',
        'preset-lint-markdown-style-guide',
        [ 'remark-lint-no-file-name-mixed-case', false ],
        [ 'remark-lint-no-consecutive-blank-lines', false ],
        [ 'remark-lint-list-item-spacing', false ],
        [ 'remark-lint-list-item-bullet-indent', false ],
        [ 'remark-lint-fenced-code-flag', false ],
    ],
}
