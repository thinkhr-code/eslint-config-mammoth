/* eslint-env node */

module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  extends: [
    'plugin:ember/recommended'
  ],

  env: {
    browser: true,
  },

  rules: {
    /*
      Ember-ESlint Rules
    **/
    'ember/no-empty-attrs': 2,
    'ember/use-ember-get-and-set': 2, // Has --fix !
    'ember/new-module-imports': 2,
    'ember/no-old-shims': 2, // Has --fix !
    'ember/avoid-using-needs-in-controllers': 2,
    'ember/no-on-calls-in-components': 2,
    'ember/no-restricted-resolver-tests': 2,
    'ember/no-attrs-in-components': 2,
    'ember/no-attrs-snapshot': 2,
    'ember/no-capital-letters-in-routes': 2,
    'ember/no-deeply-nested-dependent-keys-with-each': 2,
    'ember/no-ember-super-in-es-classes': 2,
    'ember/no-ember-testing-in-module-scope': 2,
    'ember/no-invalid-debug-function-arguments': 2,
    'ember/require-super-in-init': 2,
    'ember/avoid-leaking-state-in-ember-objects': 2,
    'ember/no-test-and-then': 2,
    'ember/no-test-import-export': 2,

    'ember/no-observers': 1,
    'ember/closure-actions': 1,
    'ember/no-get-properties': 1,
    'ember/no-get': 1,
    'ember/no-unnecessary-index-route': 1,
    'ember/no-unnecessary-route-path-option': 1,
    'ember/no-unnecessary-service-injection-argument': 1,
    'ember/no-duplicate-dependent-keys': 1,
    'ember/no-side-effects': 1,

    'ember/no-global-jquery': 1,
    'ember/no-jquery': 1,
    'ember/no-new-mixins': 1,
    'ember/no-new-mixins': 1,

    // Eventually
    'ember/order-in-components': 0, // Has --fix !
    'ember/order-in-models': 0, // Has --fix !
    'ember/order-in-routes': 0, // Has --fix !
    'ember/order-in-controllers': 0, // Has --fix !

    // /*
    //   ESLint Rules
    // **/
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'eqeqeq': 2,
    'no-lone-blocks': 2,
    'no-undefined': 2,
    'semi': 2,
    'no-shadow': 2,
    'no-use-before-define': 2,
    'prefer-template': 2,
    'no-unneeded-ternary': 2,
    'space-infix-ops': 2,

    'spaced-comment': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    'operator-linebreak': [1, 'after'],
    'no-spaced-func': 1,
    'comma-style': [1, 'last'],
    'brace-style': 1,
    'object-shorthand': 1,
    'prefer-const': 1,
    'eol-last': 1,
    'key-spacing': [1, { 'beforeColon': false, 'afterColon': true, 'mode': 'minimum' }],
    'no-trailing-spaces': 1,
    'keyword-spacing': 1,
    'arrow-spacing': 1,
    'no-extra-parens': 1,
    'newline-after-var': 1,
    'no-var': 1,
    'quotes': [1, 'single', 'avoid-escape'],
    'no-unused-vars': 1,

    // // TODO
    // 'curly': 0,

    // 'strict': 0,
    // 'no-else-return': 0,
    // 'no-ternary': 0,
    // 'comma-dangle': 0,
    // 'no-underscore-dangle': 0,

    // // Possibly consider
    // 'no-magic-numbers': 0,
    // 'consistent-return': 0,
    // 'prefer-arrow-callback': 0,
    // 'valid-jsdoc': 0,
    // 'no-console': 0
  }
};
