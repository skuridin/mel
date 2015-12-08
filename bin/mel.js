#!/usr/bin/env node

var path = require('path');
var glob = require('glob');
var argv = require('minimist')(process.argv.slice(2));

var babelConfig = Object.keys(argv).reduce(function(state, key) {
  if (key === '_') return state;

  if (argv[key].indexOf(',') === -1) state[key] = argv[key];
  else state[key] = argv[key].split(',');
  
  return state;
}, {});

require('babel-register')(babelConfig);

argv._.forEach(function(globPath) {
  glob(globPath, function(err, files) {
    if (err !== null) throw err;

    files.forEach(function(file) {
      require(path.resolve(file));
    });
  });
});
