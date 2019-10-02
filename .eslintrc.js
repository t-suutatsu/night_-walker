module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
  },
  "extends": [
    "eslint:recommended",
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": ["typescript", "prettier","react"],
  "rules": {
    "comma-dangle": ["error", "always"],
    "no-var": 2,
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-duplicate-imports": "error",
  }
}
