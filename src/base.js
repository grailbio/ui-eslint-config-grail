// @flow
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
  plugins: ["filenames", "sort-imports-es6-autofix"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: "module",
  },
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "filenames/match-regex": [2, "^[0-9a-z-]{2,}(.spec|.config)?$", true],
    // disable airbnb `import/order` default, which conflicts with `sort-imports-es6-autofix`.
    "import/order": 0,
    "import/prefer-default-export": 0,
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "no-alert": "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "debug", "info"],
      },
    ],
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    "no-param-reassign": 0,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-return-assign": 0,
    "no-shadow": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    "no-unused-vars": [2, { varsIgnorePattern: "^__" }],
    "no-useless-call": "error",
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "single", "all", "multiple"],
      },
    ],
  },
};
