#!/usr/bin/env node

'use strict';

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

if (process.env.RUNNER === 'CI') {
  var jasmineJUnitReporter = require('intel-jasmine-junit-reporter');

  var junitReporter = jasmineJUnitReporter({
    specTimer: new jasmine.jasmine.Timer(),
    JUnitReportSavePath: process.env.SAVE_PATH || './',
    JUnitReportFilePrefix: process.env.FILE_PREFIX || 'math-results-' +  process.version,
    JUnitReportSuiteName: 'Math Reports',
    JUnitReportPackageName: 'Math Reports'
  });

  jasmine.jasmine.getEnv().addReporter(junitReporter);
}

require('babel-register');

jasmine.loadConfig({
  spec_dir: 'test',
  spec_files: [
    '**/*.js'
  ],
  random: true
});

jasmine.execute();



