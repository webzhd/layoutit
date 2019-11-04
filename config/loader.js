const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function getLoader(mode = "development") {
    const all_loader = [
        {
            mode: 'all',
            name: 'vue-loader',
            loader: {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            desc: ""
        },
        {
            mode: 'all',
            name: 'babel-loader',
            loader: {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            desc: ''
        },
        {
            mode: 'all',
            name: 'scss-loader',
            loader: {
                test: /\.scss$/,
                loaders: [
                   {
                        loader: 'style-loader',
                       
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    'sass-loader'
                ]
            }
        },
        {
            mode: 'all',
            name: 'css-loader',
            loader: {
                test: /\.css$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    }
                    
                ]
            }

        },
        {
            mode: 'all',
            name: 'less-loader',
            loader: {
                test: /\.less$/,
                loaders: [
                    {
                        loader: 'style-loader',
                        
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader', 
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }

        },
        {
            mode: 'all',
            name: 'url-loader',
            loader: {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/images/[name].[contenthash:8].[ext]'
                        }
                    }
                ]
            }
        },
        {
            mode: 'all',
            name: 'svg-loader',
            loader: {
                test: /\.svg/,
                use: [
                    {
                        loader: 'svg-inline-loader'
                    }
                ]
            }
        }
    ]

    const loader = all_loader.filter(l => l.mode === mode || l.mode === 'all').map(l => l.loader)

    return loader
}

module.exports = getLoader