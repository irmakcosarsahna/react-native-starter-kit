module.exports = {
  env: {es6: true},
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
    FormData: true,
    window: true,
    fetch: true,
    alert: true,
  },
  parser: 'babel-eslint',
  parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 2018, sourceType: 'module' },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    // Custom
    camelcase: 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
};
