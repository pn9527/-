module.exports = {
  extends: [
    'stylelint-config-standard',
    // 'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-less',
  ],
  rules: {
    indentation: 2,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'function-comma-newline-after': null,
    'function-name-case': ['lower', { ignoreFunctions: ['/colorPalette/'] }],
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null, // iconfont
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-type-no-unknown': null,
    'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
  },
  ignorePath: '.stylelintignore',
};
