<!--
 * @Author: your name
 * @Date: 2021-09-21 22:01:23
 * @LastEditTime: 2021-12-07 19:05:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE``
 * @FilePath: \workspaces\plugins\面试\html.md
-->
### 1.  从输入一个 URL 地址到浏览器完成渲染的整个过程
#### 文献

[从输入url到页面展现发生了什么](https://segmentfault.com/a/1190000013522717)

[从URL输入到页面展现到底发生什么？](https://juejin.cn/post/6844903784229896199)

[经典面试题：从 URL 输入到页面展现到底发生什么？](https://blog.fundebug.com/2019/02/28/what-happens-from-url-to-webpage/)

[从URL输入到页面展现到底发生什么？](https://segmentfault.com/a/1190000017184701)

[深入浅出经典面试题：从浏览器中输入URL到页面加载发生了什么](https://www.cnblogs.com/confach/p/10050013.html)

[从输入 URL 到页面展示到底发生了什么？看完吊打面试官](https://zhuanlan.zhihu.com/p/133906695)

[前端工匠博客](https://github.com/ljianshu/Blog)
>注意！ 面试官可以基于这道题进行前端很多知识点的考察 从 http 网络知识到浏览器原理再到前端性能优化 这个题目都可以作为引子开始

```
1. 浏览器地址栏输入 URL 并回车
2. 浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期
3. DNS 解析 URL 对应的 IP
4. 根据 IP 建立 TCP 连接（三次握手）
5. 发送 http 请求
6. 服务器处理请求，浏览器接受 HTTP 响应
7. 浏览器解析并渲染页面
8. 关闭 TCP 连接（四次握手）
```

### 目录（相对路径）
- `.\`表示当前目录
- `..\`表示上级目录
