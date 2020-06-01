module.exports = {
  extends: ['standard'],
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
