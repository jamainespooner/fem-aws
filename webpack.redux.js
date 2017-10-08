const path = require('path')
const webpackConfig = require('./webpack.common')

webpackConfig.entry = './redux/app/Root'
webpackConfig.devtool = 'inline-source-map'
webpackConfig.devServer = {
  contentBase: './dist',
  port: 7200,
  publicPath: '/static/',
  hot: false,
  inline: false,
}

module.exports = webpackConfig