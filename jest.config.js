module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    collectCoverageFrom: [
      'lib/1.simple/*',
      'lib/2.intermediate/*',
      'lib/3.complex/*',
      '!lib/.extras'
    ],
    reporters: [
      '<rootDir>/CoverageReporter.js'
    ]
};