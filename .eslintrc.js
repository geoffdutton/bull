module.exports = {
  rules: {
    //  'keyword-spacing': [2, 'never'],
    indent: [2, 2, {"SwitchCase": 1}],
    'valid-jsdoc': 0,
    'func-style': 0,
    'no-use-before-define': 0,
    camelcase: 1,
    'no-unused-vars': 1,
    'no-alert': 1,
    'no-console': 1,
    'quotes': [2, "single"],
    'no-underscore-dangle': 0
  },
  globals: {
    'define': true,
    'describe': true,
    'it': true,
    'setTimeout': true,
    'after': true,
    'afterEach': true,
    'beforeEach': true,
    'before': true
  }
};
