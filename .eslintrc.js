module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'react/self-closing-comp': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'es5',
        printWidth: 80,
        singleQuote: true,
        jsxSingleQuote: true,
      },
    ],
    'react/react-in-jsx-scope': 'error',
    'jsx-a11y/no-onchange': 'off',
  },
};
