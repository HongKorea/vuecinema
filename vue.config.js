const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
  outputDir: path.resolve(__dirname, 'dist'),
  // ...
}

