//暴露一个函数
module.exports=function () {
    console.log('module2');
}
console.log(arguments.callee+"");