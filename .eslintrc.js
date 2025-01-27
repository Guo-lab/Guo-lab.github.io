module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'prefer-template': 0,
        'react/no-children-prop': [0],
        'linebreak-style': 0,
        'no-trailing-spaces': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-console': 'off',
        'no-multiple-empty-lines': 'off',
        indent: 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'object-curly-newline': 'off',
        'comma-dangle': 'off',
        'operator-linebreak': 'off',
        'max-len': ['error', { code: 120 }],
        'no-confusing-arrow': 'off',
        'implicit-arrow-linebreak': 'off',
        'function-paren-newline': 'off',
        'no-return-assign': 'off',
        'arrow-body-style': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'react/jsx-curly-newline': 'off',
    },
};
