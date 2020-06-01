module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    './rules/common.js',
    './rules/react.js',
    './rules/typescript.js'
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true
  }
}
