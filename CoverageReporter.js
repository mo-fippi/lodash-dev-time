const { join } = require('path');

const jsonSummary = join(__dirname, 'coverage', 'coverage-summary.json');
const coverage = require(jsonSummary);
const totalSum = ['lines', 'statements', 'functions', 'branches']
  .map(i => coverage.total[i].pct)
  .reduce((a, b) => a + b, 0);
const avgCoverage = totalSum / 4;

console.debug(`🐸  Total Coverage: ${avgCoverage.toFixed(2)}%  🐸`);
