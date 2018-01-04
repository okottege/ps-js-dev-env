/*
 * This file is not transpiled, so must must CommonJS and ES5.
 */
// Register babel to transpile before our tests are run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
