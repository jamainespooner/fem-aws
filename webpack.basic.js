const path = require('path')
const webpackConfig = require('./webpack.common')

webpackConfig.entry = './basic-react/app/Root'
webpackConfig.devtool = 'inline-source-map'
webpackConfig.devServer = {
  contentBase: './dist',
  port: 7200,
  publicPath: '/static/',
}

module.exports = webpackConfig
