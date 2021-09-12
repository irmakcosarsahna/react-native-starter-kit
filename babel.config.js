module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@assets": "./app/assets/",
          "@components": "./app/components/",
          "@config": "./app/config/",
          "@hocs": "./app/hocs/",
          "@router": "./app/router/",
          "@state": "./app/state/",
          "@utils": "./app/utils/",
          "@views": "./app/views/",
          "@services": "./app/services/",
          "@icons": "./app/assets/svg/",
          "@theme": "./app/theme/",
          "@screens": "./app/screens/",
          "@constants": "./app/constants/",
          "@navigators": "./app/navigators/",
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};
