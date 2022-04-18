//1.引入express
const express=require('express');


//2.创建应用对象
const app=express();


//3.创建路由规则
//request 请求报文的封装
// response 响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应体
    response.send('hello ajax');

});
app.get('/ie',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应体
    response.send('hello ie');

});

app.get('/delay',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延时异常');
    }, 3000);
    //设置响应体
    //response.send('延时异常');

});


app.all('/jquery-server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置允许请求头加参数
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        name:'yhf'
    }
    response.send(JSON.stringify(data));
    //response.send('hell jquery get');

});

app.all('/axios-server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置允许请求头加参数
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={
        name:'yhf'
    }
    response.send(JSON.stringify(data));
    //response.send('hell jquery get');

});
app.all('/fetch-server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置允许请求头加参数
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={
        name:'yhf'
    }
    response.send(JSON.stringify(data));
    //response.send('hell jquery get');

});
app.all('/jsonp-server',(request,response)=>{
    response.send('hell jquery get');

});
app.all('/check-username',(request,response)=>{
    const data={
        isExit:1,
        msg:"用户名已经存在"
    }
    let str=JSON.stringify(data);
    response.end(`handle(${str})`);

});
app.all('/login',(request,response)=>{
    const data={
        isExit:2,
        msg:"用户名已经存在"
    }
    let str=JSON.stringify(data);
    //接收callback参数
    let cb=request.query.callback;
    response.send(`${cb}(${str})`);

});
app.all('/jquery-jsonp-server',(request,response)=>{
    const data={
        name:'yhf',
        cities:['北京','上海','深圳']
    }
    let str=JSON.stringify(data);
    //接收callback参数
    let cb=request.query.callback;
    response.end(`${cb}(${str})`);

});

app.all('/cors-server',(request,response)=>{
       //设置响应头，设置允许跨域
       response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello cors');

});

app.post('/server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应体
    response.send('hello ajax post');

});
app.all('/json-server',(request,response)=>{
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    //设置响应体
    //response.send('hello ajax json');
    const data={
        name:'yhf'
    }

    let str=JSON.stringify(data);
    response.send(str);

});

//监听端口起动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中...');
})