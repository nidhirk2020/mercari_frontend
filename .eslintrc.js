module.exports = {
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'react-app',  // Use the Create React App ESLint settings as a base
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Add any custom rules here
    },
  };
  