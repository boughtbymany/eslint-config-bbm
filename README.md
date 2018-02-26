# Bought By Many ESLint Config


## Goals

- Catch mistakes as they are made.
- Flag areas where code can be improved.
- Promote consistency in code style & structure.


## Installation

```Shell
$ yarn add --dev @boughtbymany/eslint-config-bbm
```


## Configuration

To use the standard configuration, create an `.eslintrc.js` file with the
following contents:

```JavaScript
module.exports = {
    extends: [
        'bbm',
    ],
}
```

You can also set up an `.eslintignore` file to ignore any files that shouldn't
be linted:

```
/dist/
```

The `node_modules` directory is always ignored.

## How to use

### Command line

Add a `package.json` script:

```json
{
    "scripts": {
        "lint:js": "eslint --ext .js,.vue src"
    }
}
```

You will then be able to lint your codebase by running the command
`yarn lint:js` and fix many issues with `yarn lint:js --fix`.


### Atom

```Shell
$ apm install linter-eslint
```

Go to *Settings > Packages > linter-eslint > Settings* and set the list of
scopes to:

```
source.js, source.babel, source.vue, text.html.vue, text.html.basic
```


### Visual Studio Code

```Shell
$ code --install-extension dbaeumer.vscode-eslint
```


## Tips


### Migrating old codebases


Run `yarn lint --fix` to clean up everything that can be cleaned up
automatically and then commit those changes by themselves.  If there are a lot
of additional warnings that you'd rather not deal with straight away, then
override them in the `.eslintrc.js` file as follows:

```JavaScript
module.exports = {
    extends: [
        'bbm',
    ],
    rules: {
        // FIXME: Temporarily disabled – please clean up.
        'some-inconvenient-rule': 'off',
    }
}
```

Clean up these warnings as and when it's convenient.


### Version control

Don't mix logical changes with lint changes in the same commit – if you are
implementing a feature in an older codebase that doesn't already follow these
lint rules, then commit any lint cleanups first, then implement the feature, or
vice-versa.

If your editor has the feature *Fix errors on save* or similar, disable this.
Otherwise it's likely you will mix logical and lint changes accidentally.


### Excluding code from linting

If there's an exceptional situation where a rule that should normally be
followed should be ignored in that specific case, disable that rule for that
specific section of code.

Try to limit the size and scope of the exclusion as much as possible.


#### Disabling rules for a single line

```JavaScript
// eslint-disable-next-line no-new
new Foo() // This code would normally generate a warning.
```

…or:

```JavaScript
new Foo() // eslint-disable-line no-new
```


#### Disabling rules for larger sections

```JavaScript
/* eslint-disable no-new */

new Foo() // This code would normally generate a warning.

/* eslint-enable no-new */
```

If you disable a rule for an entire file, ensure you re-enable it at the end of
the file to make sure that you aren't inadvertently disabling the rule for any
code that ends up concatenated with it.

See: [ESLint Documentation § Disabling Rules with Inline Comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

If you have to disable a rule in more than a couple of cases, it may be the case
that the rule is too noisy, or you may be doing something incorrectly.  Consider
whether the rule should be removed from this configuration, or if there's a
better way of writing the code in question.


### Adding new rules

New rules should be added when they stand a chance of catching a mistake, push
developers to write better code, or if they make the code more consistently
styled.  Avoid rules that force developers to jump through hoops just to keep
the linter happy.

Sometimes new rules get added to this package's dependencies.  It's worth
reviewing the changes when updating these dependencies to see if there are any
useful additions we can enable.


### Removing rules

If there's a rule that is generating too much noise in code that is otherwise
perfectly fine, consider removing it from this configuration.  Before doing so,
take the time to understand why the rule exists and whether there's a better way
of writing the code in question.


## More information

- [ESLint](https://eslint.org/)
- [ESLint § Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
