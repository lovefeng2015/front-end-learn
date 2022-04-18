const path = require('path');//node内置的模块用来设置路径的
module.exports = {
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
   // entry: "./app/entry", // string | object | array
   entry:'./src/js/entry.js',//入口文件的配置
    // 默认为 ./src
    // 这里应用程序开始执行
    // webpack 开始打包
    output: {//出口/输出文件的配置
      // webpack 如何输出结果的相关选项
      path:path.resolve(__dirname, "dist"), // string (default)
      // 所有输出文件的目标路径
      // 必须是绝对路径（使用 Node.js 的 path 模块）
      filename: "[name].js", // string (default)
      
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
        ]
      }
      
}