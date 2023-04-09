module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@containers': './src/containers',
          '@components': './src/components',
          '@minecraft-components': './src/components/minecraft-components',
          '@theme': './src/theme',
          '@assets': './assets',
        },
      },
    ],
  ],
};
