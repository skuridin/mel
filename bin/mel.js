#!/usr/bin/env node

var path = require('path');
var glob = require('glob');
var argv = require('minimist')(process.argv.slice(2));
var babelConfig = {};

Object.keys(argv).forEach(function(key) {
  if (key !== '_') babelConfig[key] = argv[key];
});

require('babel-register')(babelConfig);

argv._.forEach(function(globPath) {
  glob(globPath, function(err, files) {
    if (err !== null) throw err;

    files.forEach(function(file) {
      require(path.resolve(file));
    });
  });
});
