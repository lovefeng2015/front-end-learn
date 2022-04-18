const express=require('express');
const app=new express();
app.use(express.static('build',{maxAge:1000*3600}));

//监听端口起动服务
app.listen(3000,()=>{
    console.log('服务已经启动，3000端口监听中...');
})