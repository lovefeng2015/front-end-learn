const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    //模式
    //mode: 'development',
    //生产环境下自动压缩js
    mode:'production',
    entry: './src/js/index.js',
    output: {
        filename: 'js/bulit.[contenthash:10].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                //正则表达式,匹配哪些文件
                test: /\.css$/i,
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到到左，从下到上
                    //创建style标签，将js中的样式资源插入其中，添加到head标签中生效
                    //"style-loader",
                    //取代style-loader,作用:提取js中的css成为单独文件
                    MiniCssExtractPlugin.loader,
                    //将css文件变成commonjs模块加载js中，里面内容时样式字符串
                    "css-loader",
                    //css 兼容性处理
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 选项
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                //正则表达式,匹配哪些文件
                test: /\.less$/i,
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到到左，从下到上
                    //创建style标签，将js中的样式资源插入其中，添加到head标签中生效
                    "style-loader",
                    //将css文件变成commonjs模块加载js中，里面内容时样式字符串
                    "css-loader",
                    //将less编译为css
                    "less-loader"
                ],
            },
            //处理html中的img
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            //   {
            //     test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            //     // 更多信息请点击这里 https://webpack.js.org/guides/asset-modules/
            //     type: "asset",
            //   },
            //自定义输出文件名的方式是，将某些资源发送到指定目录
            {
                test: /\.(png|jpe?g|gif)$/,
                // type: 'asset/resource',
                type: "asset",
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/i,
                // type: 'asset/resource',
                type: "asset/resource",
                generator: {
                    filename: 'iconfont/[hash][ext][query]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    //按需加载
                                    useBuiltIns: 'usage',
                                    //指定core-js版本
                                    corejs: {
                                        version: 3
                                    },
                                    //指定兼容性做到哪个版本浏览器
                                    targets: {
                                        chrome: '60',
                                        firefox: '60',
                                        ie: '9',
                                        safari: '10',
                                        edge: '17'
                                    }
                                }
                            ]
                        ],
                         cacheDirectory:true
                    }
                }
            }
        ]

    },
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            // `...`,
            new CssMinimizerPlugin(),
        ],
        //默认生产环境，要在开发环境必须设置为true
        minimize: true,
        // minimizer: [new TerserPlugin()],
    },
    //插件的配置
    plugins: [
        //html-webpack-plugin
        //功能：默认创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        //需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            //赋值'/src/index.html'文件，并自动引入打包输出的所有资源（JS/CSS）
            template: './src/index.html',
            // minify:{
            //     //移除空格
            //     collapseWhitespace: true,
            //     //移除注释
            //     removeComments: true,
            // }
        }),
        //将 CSS 提取到单独的文件中
        new MiniCssExtractPlugin({
            filename: 'css/bulit.[contenthash:10].css'
        }),
        //eslint语法检测
        // new ESLintPlugin({
        //     //exclude: ['node_modules', 'webpack.config.js'],
        //     fix:true
        // })
    ],
    devtool:'source-map'


}