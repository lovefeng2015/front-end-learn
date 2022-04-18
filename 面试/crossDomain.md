# 前端跨域解决方案
## 巨人的肩膀
[9种常见的前端跨域解决方案](https://juejin.cn/post/6844903882083024910)
[前端跨域解决方案归纳整理](https://juejin.cn/post/6861553339994374157)
[前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
[10 种跨域解决方案（附终极方案）](https://segmentfault.com/a/1190000022398875)
[浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy#%E8%B7%A8%E6%BA%90%E7%BD%91%E7%BB%9C%E8%AE%BF%E9%97%AE)
[跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

## 什么是同源策略
1. 同源策略是浏览器的安全策略
2. 协议（protocol）、域名（host）、端口（port）必须完全相同，即便两个不同的域名指向同一个ip地址，也非同源
3. 同源策略限制以下几种行为：
>Cookie、LocalStorage 和 IndexDB 无法读取  
DOM和JS对象无法获得  
AJAX 请求不能发送
## 什么是跨域CORS
1. 允许 Web 应用服务器进行跨源（非同源）访问控制，从而使跨源数据传输得以安全进行
## 1、JSONP跨域

### 具有天生跨域能力的标签
1. script img link iframe
2. 利用这些标签没有跨域限制，通过标签`src`属性，发送带有`callback`参数的GET请求，服务端将接口返回数据拼凑到`callback`函数中，返回给浏览器，浏览器解析执行，从而前端拿到`callback`函数返回的数据
3. 只支持get请求
### 原生js
前端
```JS
    var script = document.createElement('script');

    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script);

    // 回调执行函数
    function handleCallback(data) {
       console.log(data)
    }
 ```
服务端返回如下（返回时即执行全局函数）：
```JS
handleCallback({"success": true, "user": "admin"})
```
如果后端使用nodejs，并且使用express应用程序框架，先取得callback表示的回调函数，并且把返回数据放在回调函数的参数中返回
```JS
 const express=require('express');
//2.创建应用对象
const app=express();
app.all('/login',(request,response)=>{
    const data={
        isExit:1,
        msg:"用户名已经存在"
    }
    let str=JSON.stringify(data);
    //接收callback参数
    let cb=request.query.callback;
    response.send(`${cb}(${str})`);
});
```
### jQuery AJAX实现
```JS
$.ajax({
    url: 'http://127.0.0.1:8000/login',
    type: 'get',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "handleCallback",  // 自定义回调函数名
    data: {}
});
  function handleCallback(data) {
            console.log(data)
        }
$.getJSON('http://127.0.0.1:8000/login?callback=?',function (data) {
                console.log(data);
            })
            
```
### Vue axios实现(待验证)
```JS
this.$http = axios;
this.$http.jsonp('http://127.0.0.1:8000/login', {
    params: {},
    jsonp: 'handleCallback'
}).then((data) => {
    console.log(data); 
})

```

## 跨域资源共享（CORS）
1. 跨源资源共享 (CORS) （或通俗地译为跨域资源共享）是一种基于HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它origin（域，协议和端口），这样浏览器可以访问加载这些资源
2. 出于安全性，浏览器限制脚本内发起的跨源HTTP请求
3. 跨源域资源共享（ CORS ）机制允许 Web 应用服务器进行跨源访问控制，从而使跨源数据传输得以安全进行(发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制)
4. 所有浏览器都支持该功能，IE浏览器不能低于IE10
5. 跨源资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资
6. 浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨源请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。

### 简单请求
只要同时满足一下两个条件，就属于简单请求

1. 使用下列方法之一：
- head
- get
- post
2. 请求的Heder是

- Accept
- Accept-Language
- Content-Language
- Content-Type: 只限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain

不同时满足上面的两个条件，就属于非简单请求。浏览器对这两种的处理，是不一样的
1. 对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。
2. Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求

#### CORS请求设置的响应头字段，都以 Access-Control-开头:
1. Access-Control-Allow-Origin：必选
服务端设置`Access-Control-Allow-Origin: *` 表明，该资源可以被任意外域访问。如果服务端仅允许来自 http://foo.example 的访问，该首部字段的内容如下：
```JS
Access-Control-Allow-Origin: http://foo.example
```
nodejs
```JS
  response.setHeader('Access-Control-Allow-Origin','*')
```
2. Access-Control-Allow-Credentials：可选
  它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可
```JS
xhr.withCredentials = true;
```
nodejs
```JS
 response.setHeader('Access-Control-Allow-Credentials',true)
```
- 对于附带身份凭证的请求，服务器不得设置 Access-Control-Allow-Origin 的值为“*”。
- 这是因为请求的首部中携带了 Cookie 信息，如果 Access-Control-Allow-Origin 的值为“*”，请求将会失败。而将 Access-Control-Allow-Origin 的值设置为 http://foo.example，则请求将成功执行
3. Access-Control-Expose-Headers
在跨源访问时，XMLHttpRequest对象的getResponseHeader()方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头
- Access-Control-Expose-Headers 头让服务器把允许浏览器访问的头放入白名单，例如：
```JS
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```
```JS
  response.setHeader('Access-Control-Allow-Headers','*')//所有头部都能取到
```
这样浏览器就能够通过getResponseHeader访问X-My-Custom-Header和 X-Another-Custom-Header 响应头了。

### 非简单请求
-   非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。
- 非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

####  预检请求
  预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。请求头信息里面，关键字段是Origin，表示请求来自哪个源。除了Origin字段，"预检"请求的头信息包括两个特殊字段

1. Access-Control-Request-Method：必选
  用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。
2. Access-Control-Request-Headers：可选
  该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是X-Custom-Header。
#### 预检请求的回应
  服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
  HTTP回应中，除了关键的是Access-Control-Allow-Origin字段，其他CORS相关字段如下：
1. Access-Control-Allow-Methods：必选
  它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。
2. Access-Control-Allow-Headers
  如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
3. Access-Control-Allow-Credentials：可选
  该字段与简单请求时的含义相同。
4. Access-Control-Max-Age：可选
  用来指定本次预检请求的有效期，单位为秒。


