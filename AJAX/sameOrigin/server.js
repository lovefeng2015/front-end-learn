const express=require('express');
const app=new express();

app.get('/home',(request,response)=>{
    //
    response.sendFile(__dirname+'/index.html');

})
app.get('/data',(request,response)=>{
    //响应一个页面
    response.send('用户数据');

})

app.listen(9000,()=>{
    console.log('9000服务已经启动');
})