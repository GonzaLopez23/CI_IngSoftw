module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'operator-linebreak': ['error', 'before'],
    'max-len': ['error', { 'code': 120 }],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-unused-vars': 'error',
    'no-console': 'error',
  },
};
