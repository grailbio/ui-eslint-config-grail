// @flow
module.exports = {
  globals: {
    grail: true,
  },
  env: {
    browser: true,
    "cypress/globals": true,
    es6: true,
  },
  plugins: ["cypress"],
  rules: {
    "import/no-unresolved": [0, { ignore: ["~/"] }],
  },
};
