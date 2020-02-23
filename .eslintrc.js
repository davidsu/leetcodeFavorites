module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'indent': ['error',4],
    'no-irregular-whitespace': 'off',
    'no-console': 'error',
    'no-var': 'error',
    'prefer-const': 'error'

  }
}
