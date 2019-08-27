// @flow
module.exports = {
  extends: [
    "@grailbio/eslint-config-grail/src/front-end.js",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
  },
};
