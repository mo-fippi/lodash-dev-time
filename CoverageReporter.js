const { join } = require('path');

// A custom reporter to output the compiled "total" coverage
// Thanks to https://stackoverflow.com/a/63934556 :)
module.exports = class CoverageReporter {
  constructor(globalConfig) {
    this.globalConfig = globalConfig;
    this.jsonSummary = join(this.globalConfig.coverageDirectory, 'coverage-summary.json');
  }
  async onRunComplete() {
    const coverage = require(this.jsonSummary);
    const totalSum = ['lines', 'statements', 'functions', 'branches']
      .map(i => coverage.total[i].pct)
      .reduce((a, b) => a + b, 0)
    const avgCoverage = totalSum / 4
    console.debug('========= Total Coverage ============')
    console.debug(`Total Coverage: ${avgCoverage.toFixed(2)}% ✨`)
    console.debug('=======================================')
  }
}