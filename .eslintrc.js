module.exports = {
  extends: ['standard'],
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-irregular-whitespace': 'off',
    'no-console': 'error',
    'no-var': 'error',
    'prefer-const': 'error'
  }
}
