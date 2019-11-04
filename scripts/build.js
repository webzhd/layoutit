const webpack = require('webpack')
const path = require('path')
const config = require('../config/webpack.base.config')
const otherConfig = require('../config/production.config')
const webpackPlugins = require('../config/plugin')
const webpackLoader = require('../config/loader')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const resolve = (dir) => path.join(__dirname, '../', dir)

const mode = 'production'
config.mode = mode
process.env.NODE_ENV = mode

const prodConfig = {
    plugins: [
        ...webpackPlugins(mode),
        new ProgressBarPlugin(),
        // new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            ...webpackLoader(mode)
        ]
    }
}


const compiler = webpack(Object.assign(config, prodConfig, otherConfig))

compiler.run((err, stats) => {
    console.log('error:', err)
})