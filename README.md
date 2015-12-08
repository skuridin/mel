[![Build Status](https://travis-ci.org/skuridin/mel.svg?branch=master)](https://travis-ci.org/skuridin/mel)
[![npm](https://img.shields.io/npm/l/mel.svg)](https://raw.githubusercontent.com/skuridin/mel/master/LICENSE)
[![npm](https://img.shields.io/npm/v/mel.svg)](http://npmjs.com/package/mel)
[![npm](https://img.shields.io/npm/dt/mel.svg)](http://npmjs.com/package/mel)

Run Tape tests with Babel 6

## Install
`npm i -g mel`

## Usage
You can pass babel options to CLI or use .babelrc file

`mel ./src/**/__tests__/*-test.js --presets=es2015`

`mel ./tests/*.js ./tests2/*.js --presets=es2015,react`

## Licence
MIT
