module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          test: './test',
        },
      },
    ],
  ],
};
