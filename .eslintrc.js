module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
      },
    ],
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
}
