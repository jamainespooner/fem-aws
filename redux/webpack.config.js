const webpackConfig = require('../webpack.config')

webpackConfig.entry = './app/Root.jsx'
webpackConfig.devtool = 'inline-source-map'
webpackConfig.devServer = {
  contentBase: './dist',
  // port: 8080, default is 8080
}

module.exports = webpackConfig