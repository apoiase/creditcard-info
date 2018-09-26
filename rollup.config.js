var uglify = require('rollup-plugin-uglify').uglify;
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: './index.js',
  output: {
    file: 'dist/creditcard-warder.min.js',
    format: 'umd',
    name: 'CreditcardWarder'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      exclude: ['node_modules/']
    }),
    uglify()
  ]
};
