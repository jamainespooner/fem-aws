const path = require('path')
const webpackConfig = require('./webpack.common')

webpackConfig.entry = './redux-ssr/app/client/' 
module.exports = webpackConfig