const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const{ CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const resolve = (dir) => path.join(__dirname, '../', dir)

function getPlugins(mode = 'development') {
    const all_plugins = [
        // {
        //     mode: "all",
        //     name: "VueLoaderPlugin",
        //     plugin: new VueLoaderPlugin(),
        //     desc: "vue loader plugin"
        // },
        {
            mode: "production",
            name: 'MiniCssExtractPlugin',
            plugin: new MiniCssExtractPlugin({
                filename: 'static/css/[name].[contenthash:8].css'
            }),
            desc: ""
        },
        {
            mode: "production",
            name: 'CompressionPlugin',
            plugin: new CompressionPlugin({ 
                filename: '[path].gz[query]',
                algorithm: "gzip",
                test: /\.js|\.css$/,
                threshold: 10240,
                minRatio: 0.8,
            }),
            desc: ""
        },
        {
            mode: "production",
            name: 'OptimizeCSSAssetsPlugin',
            plugin: new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
                cssProcessorOptions: { 
                    discardComments: { removeAll: true } ,
                    safe: true,
                    autoprefixer: false
                },
                canPrint: true //是否将插件信息打印到控制台
            }),
            desc: ''
        },
        {
            mode: "production",
            name: 'CleanWebpackPlugin',
            plugin: new CleanWebpackPlugin(
                // {
                //      cleanOnceBeforeBuildPatterns: ['static/**/*', '!vendor/**/*']
                // }
            ),
            desc: ''
        },
        {
            mode: 'development',
            name: 'HotModuleReplacementPlugin',
            plugin: new webpack.HotModuleReplacementPlugin(),
            desc: ''
        },
        // {
        //     mode: 'development',
        //     name: 'DllReferencePlugin',
        //     plugin: new webpack.DllReferencePlugin({
        //         name: 'vendor',
        //         context:  resolve('vendor'),
        //         manifest:  resolve('vendor/manifest.json')
        //     }),
        //     desc: '创建一个只有 dll 的 bundle'
        // },
        // {
        //     mode: 'development',
        //     name: 'DllReferencePlugin',
        //     plugin: new webpack.DllReferencePlugin({
        //         name: 'vendor',
        //         context:  resolve('vendor'),
        //         manifest:  resolve('vendor/manifest.json')
        //     }),
        //     desc: '引入 dll 的 bundle'
        // },
        {
            mode: 'all',
            name: 'HtmlWebpackPlugin',
            plugin: new HtmlWebpackPlugin({
                template: mode === 'development' ? resolve('public/index.development.html') : resolve('public/index.html'),
            }),
            desc: ''
        }
    ]

    return all_plugins.filter(p => p.mode === 'all' || p.mode === mode).map(p => p.plugin)

}

module.exports = getPlugins