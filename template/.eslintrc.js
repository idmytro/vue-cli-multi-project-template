module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['semistandard', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-new': 'off',

    'vue/name-property-casing': 'off',
    'vue/attribute-hyphenation': 'off',
    "vue/max-attributes-per-line": [2, {
      "singleline": 3,
      "multiline": {
        "max": 3,
        "allowFirstLine": true
      }
    }],
  },
};
