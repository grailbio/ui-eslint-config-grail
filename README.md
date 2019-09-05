## Contents

The `@grailbio/eslint-config-grail` package contains ESLint rules for GRAIL UI code.

## Contributing

**ALL CHANGES MUST BE REVIEWED BY UI LEADS IN LIMS and EDC. ALSO CONSIDER ADDING OTHER TEAMS**

### Distributing to GitHub

URL: https://github.com/grailbio/ui-eslint-config-grail

Once code is merged into GRAIL repo - `master` branch, replicate the commit to github.

TODO: Document how to use `grit`, or refer to how it automatically pushes to github using
`$GRAIL/phabricator/shipit/sync.bash`

### Publishing to NPM

URL: https://www.npmjs.com/package/@grailbio/eslint-config-grail

You will need to be a member:
https://www.npmjs.com/settings/grailbio/members

Recommend turning on 2FA.

To publish:

- You may need to bump the package version. (Also update `CHANGELOG.md`)
- `npm publish --access public`
- Optionally, you can pass in 2FA code using `--otp ######`

## Basic Setup

```
yarn add -D @grailbio/eslint-config-grail babel-eslint eslint lint-staged
curl https://raw.githubusercontent.com/grailbio/ui-eslint-config-grail/master/.eslintrc-example.js > .eslintrc.js
```

### Project Usage

Configure eslint to process your code, as appropriate.

An example of linting a single file `src/your-code.js`

```
node_modules/.bin/eslint src/your-code.js
```
