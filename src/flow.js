module.exports = {
  globals: {
    grail: true,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["plugin:flowtype/recommended", "prettier/flowtype"],
  plugins: ["flowtype"],
  rules: {
    "flowtype/require-valid-file-annotation": [
      0,
      "always",
      {
        annotationStyle: "line",
      },
    ],
  },
};
