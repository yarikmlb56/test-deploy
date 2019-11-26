// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-verbose-reporter'),
      'karma-coverage-istanbul-reporter'
    ],
    reporters: ['coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ]
      }
    },
    browsers: ['ChromeHeadless'],
    thresholds: {
      emitWarning: false,
      global: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100
      },
      each: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100,
        overrides: {
          'baz/component/**/*.js': {
            statements: 98
          }
        }
      }
    },
  });
};
