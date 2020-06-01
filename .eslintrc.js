const core = require('./index')

module.exports = {
  ...core,
  root: true,
  parserOptions: { ...core.parserOptions, sourceType: 'script' },
  env: { ...core.env, node: true }
}
