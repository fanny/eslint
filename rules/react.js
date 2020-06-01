const {ERROR, WARNING} = require('./constants.js')

module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/boolean-prop-naming': ERROR,
    'react/no-typos': ERROR,
    'react/no-deprecated': ERROR,


    'react/jsx-boolean-value': ERROR,
    'react/jsx-sort-props': ERROR,
    'react/jsx-no-useless-fragment': ERROR,
    'react/jsx-key': ERROR,
    'react/jsx-fragments': ERROR,

    "react-hooks/rules-of-hooks": ERROR, // Checks rules of Hooks
    "react-hooks/exhaustive-deps": WARNING // Checks effect dependencies
  }
}
