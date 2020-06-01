const {ERROR, WARNING} = require('./constants.js')

module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    /*FYI: https://eslint.org/docs/rules/#possible-errors */
    'no-await-in-loop': ERROR,
    'no-console': WARNING,
    'no-extra-parens': ERROR,
    'require-atomic-updates': ERROR,

    /*FYI: https://eslint.org/docs/rules/#best-practices */
    'array-callback-return': ERROR,
    'consistent-return': ERROR,
    'default-param-last': ERROR,
    'default-case': ERROR,
    'eqeqeq': ERROR,
    'no-lone-blocks': ERROR,
    'no-magic-numbers': WARNING,
    'require-await': ERROR,
    'yoda': ERROR,

    /** https://eslint.org/docs/rules/#stylistic-issues */
    'no-shadow-restricted-names': ERROR,


    'no-useless-computed-key': ERROR,
    'no-duplicate-imports': ERROR,
  }
}
