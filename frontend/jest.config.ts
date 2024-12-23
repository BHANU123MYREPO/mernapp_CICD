module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'html', 'lcov', 'junit'],  // Add 'junit' for Jenkins reports
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-reports', outputName: 'test-report.xml' }],
  ],
};
