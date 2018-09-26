var uglify = require('rollup-plugin-uglify').uglify;

module.exports = {
  input: './index.js',
  output: {
    file: 'dist/creditcard-warder.min.js',
    format: 'umd',
    name: 'CreditcardWarder'
  },
  plugins: [
    uglify()
  ]
};
