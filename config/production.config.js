const path = require('path')
const resolve = (dir) => path.join(__dirname, '../', dir)


module.exports = {
    devtool: 'cheap-module-source-map',
    output: {
        publicPath: '/',
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].js',
        path: resolve('dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'async', 
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              },
              styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
                priority: 20, 
              }
            }
        },
        runtimeChunk: true
    }
}