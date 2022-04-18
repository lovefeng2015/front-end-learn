//引入fs
const fs=require('fs');

//调用方法读取文件
// fs.readFile('./resource/learn.md',(err,data)=>{
//     if (err) {//如果失败
//         throw err;
//     }
//     //如果成功
//     console.log(data.toString());
// })
const p=new Promise(function (resovle,reject) {
    fs.readFile('./resource/learn.md',(err,data)=>{
        if (err) {//如果失败
           reject(err)
        }
        //如果成功
     resovle(data);
    })
})
p.then(function (value) {
    console.log(value.toString());
},function (err) {
    console.log('读取失败');
})