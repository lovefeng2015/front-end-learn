/* 
index.js:webpack 入口起点文件
1. 运行指令
开发环境：webpack ./src/index.js -o ./build/built.js --mode=development//webpack4
webpack ./src/index.js -o ./build --mode=development//webpack5
webpack回忆./src/index.js为入口文件开始打包，打包后输出到./build/built.js
生成环境：webpack ./src/index.js -o ./build/built.js --mode=production//webpack4
webpack ./src/index.js -o ./build --mode=production//webpack5
2.结论：
1.webpack能处理js/json资源，不能处理css/img等其他资源
2.生产环境和开发环境将es6模块化编译成浏览器能识别的模块化
3.生产环境比开发环境多一个压缩js代码

*/
import data from './data.json'
  import '../css/basic.css'
 import '../css/index.less'
 import '../iconfont/iconfont.css'

console.log(JSON.stringify(data));
function add(x,y) {
    return x+y;
}
//console.log(add(4,2));
// if (module.hot) {
//   //一旦module.hot为true，说明开启了HMR功能。-->让HMR功能生效
//   module.hot.accept('./print.js',function () {
//     //方法会监听print.js文件的变化，一旦发生变化，其他模块不会重新打包构建
//     //会执行后面的回调函数
//     //print();
//   })
  
// }