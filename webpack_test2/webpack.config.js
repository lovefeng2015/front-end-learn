/* 
webpack.config.js webpack的配置文件
作用：指示webpack 干哪些活（当你运行webpack指令时，会加载里面的配置）
所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
loader:1.下载 2.使用(配置loader)
plugins：1.下载 2.引入 3.使用
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //模式
    mode: 'development',
    //入口起点
    entry: './src/js/index.js',
    //输出
    output: {
        //输出文件名
        filename: 'js/built.js',
        //输出路径
        //__dirname nodejs的变量，代表当前文件的目录绝对路径
        path: path.resolve(__dirname, 'build')
        //assetModuleFilename: 'images/[hash][ext][query]'
        //assetModuleFilename: 'iconfont/[hash][ext][query]'

    },
    //loader的配置
    //不同文件必须配置不同的loader
    module: {
        rules: [{
                //正则表达式,匹配哪些文件
                test: /\.css$/i,
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到到左，从下到上
                    //创建style标签，将js中的样式资源插入其中，添加到head标签中生效
                    "style-loader",
                    //将css文件变成commonjs模块加载js中，里面内容时样式字符串
                    "css-loader"
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
            

        ]
    },
    //插件的配置
    plugins: [
        //html-webpack-plugin
        //功能：默认创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
        //需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            //赋值'/src/index.html'文件，并自动引入打包输出的所有资源（JS/CSS）
            template: './src/index.html'
        })
    ],
    //开发服务器devSever：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    //特点：只会在内存中编译打包，不会有任何输出
    //启动devServer指令为：npx webpack serve
    devServer: {
        static: './build',
        open: true,
        watchFiles: ['src/index.html'],
        //开启HMR服务
        //当修改了webpack配置，新配置要想生效，必须重启webpack
        hot:true
    },

}