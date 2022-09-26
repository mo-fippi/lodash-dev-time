module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    collectCoverageFrom: [
      'lib/*.js',
      '!no-test/*'
    ]
};