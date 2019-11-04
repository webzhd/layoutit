const path = require('path')
const resolve = (dir) => path.join(__dirname, '../', dir)

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/',
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[name].[hash].js',
        path: resolve('dist')
    },
}