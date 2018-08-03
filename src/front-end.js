// @flow
module.exports = {
  globals: {
    grail: true,
  },
  env: {
    browser: true,
    "cypress/globals": true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["@grail/eslint-config-grail/src/base.js"],
  plugins: ["sort-imports-es6-autofix", "react", "filenames"],
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    // REACT
    "react/display-name": "off",
    "react/jsx-max-props-per-line": [1, { maximum: 1, when: "always" }],
    "react/jsx-no-bind": [0],
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".spec.js", ".jsx"],
      },
    ],
    "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
  },
};
