module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  testEnvironment: 'jsdom',
  testRegex: '/*.test.js$',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/components/**/*.js',
    'src/modals/**/*.js',
    'src/screens/**/*.js',
  ],
};
