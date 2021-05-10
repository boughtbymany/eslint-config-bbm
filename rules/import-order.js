module.exports = {
  'newlines-between': 'always',
  alphabetize: { order: 'asc', caseInsensitive: true },
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
  pathGroups: [
    {
      pattern: '~/**',
      group: 'external',
      position: 'after',
    },
    {
      pattern: '@/**',
      group: 'internal',
      position: 'after',
    },
  ],
  pathGroupsExcludedImportTypes: ['builtin'],
}
