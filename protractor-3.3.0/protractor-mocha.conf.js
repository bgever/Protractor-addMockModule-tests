exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec-mocha.js'],
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    enableTimeouts: false
  },
}