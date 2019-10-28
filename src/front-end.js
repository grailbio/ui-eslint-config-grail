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
  extends: [
    "eslint-config-airbnb",
    "@grailbio/eslint-config-grail/src/base.js",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["sort-imports-es6-autofix", "react", "react-hooks", "filenames"],
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // REACT
    "react/display-name": "off",
    "react/jsx-no-bind": [0],
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".spec.js", ".jsx", ".tsx"],
      },
    ],
    "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
    "react/jsx-fragments": "off",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
