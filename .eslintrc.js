module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-template': 0,
    'react/no-children-prop': [0],
    'linebreak-style': 0,
    "no-trailing-spaces": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-console": "off",
    "no-multiple-empty-lines": "off"
  },
};
