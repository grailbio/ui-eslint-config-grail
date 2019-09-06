## Contents

The `@grailbio/eslint-config-grail` package contains ESLint rules for GRAIL UI code.

## Contributing

This is an open source package. Initial approval by SMEs in https://phabricator.grailbio.com/T26323

This is an open source package, reviewed by SMEs in https://phabricator.grailbio.com/T26323

All content must be non-proprietary. For example:

- Do not include GRAIL assets, like GRAIL Logo, or commercially sourced images.
- Do not include content that has trade secrets or anything that should remain internal to GRAIL.

Also, all content must be compatible with the contents of the Apache 2.0 license, as defined in `LICENSE` file.

For common private GRAIL code, use `@grail/common-private` or other internal locations.

Modify CHANGELOG.md to reflect contributions to this code.

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

- Bump the package version following semantic versioning guidelines (https://semver.org/)
- For non-patch release, update `CHANGELOG.md` version.
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
