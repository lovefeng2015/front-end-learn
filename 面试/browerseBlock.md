## 探究网页资源究竟是如何阻塞浏览器加载的
[探究网页资源究竟是如何阻塞浏览器加载的](https://juejin.cn/post/6914479519394955271#heading-9)

### 视频、字体和图片其实是一样的，也不会阻塞 DOM 的加载和渲染。

### CSS 不会阻塞 DOM 的解析 CSS会阻塞 DOM 的渲染,CSS 阻塞 DOM 的渲染只阻塞定义在 CSS 后面的 DOM,CSS 会阻塞定义在其之后 JS 的执行.
1. 页面渲染的流程:浏览器首先解析 HTML 生成 DOM 树，解析 CSS 生成 CSSOM 树，然后 DOM 树和 CSSOM 树进行合成生成渲染树，通过渲染树进行布局并且计算每个节点信息，绘制页面
2. 解析 DOM 和 解析 CSS 其实是并列进行的，既然是并列进行的，那 CSS 和 DOM 就不会互相影响了，这和结论一相符；另外渲染页面一定是在得到CSSOM 树之后进行的
3. 二次渲染会对用户造成不好的体验且加重了浏览器的负担，所以这也就是为什么需要把外链样式提前到 <head> 里加载的原因

### JS 会阻塞定义在其之后的 DOM 的加载
1. 应该将外部 JS 放到 <body> 的最尾部去加载，减少页面加载白屏时间
2. defer 或者 async 方式加载 JS 的时候，它是不会阻塞 DOM 加载
3. 动态插入的脚本不会阻塞页面解析，动态插入的脚本在加载完成后会立即执行，这和 async 一致

defer 特点

-  defer 的 script，浏览器会继续解析 html，且同时并行下载脚本，等 DOM 构建完成后，才会开始执行脚本，所以它不会造成阻塞；
- defer 脚本下载完成后，执行时间一定是 DOMContentLoaded 事件触发之前执行；
- 多个 defer 的脚本执行顺序严格按照定义顺序进行，而不是先下载好的先执行；

async 特点

- 对于 async 的 script，浏览器会继续解析 html，且同时并行下载脚本，一旦脚本下载完成会立刻执行；和 defer 一样，它在下载的时候也不会造成阻塞，但是如果它下载完成后 DOM 还没解析完成，则执行脚本的时候是会阻塞解析的；
- async 脚本的执行 和 DOMContentLoaded 的触发顺序无法明确谁先谁后，因为脚本可能在 DOM 构建完成时还没下载完，也可能早就下载好了；
- 多个 async，按照谁先下载完成谁先执行的原则进行，所以当它们之间有顺序依赖的时候特别容易出错

#### 正常外链
1. 暂停解析 DOM；
2. 执行 script 里的脚本，如果该 script 是外链，则会先下载它，下载完成后立刻执行；
3. 执行完成后继续解析剩余 DOM


### DOMContentLoaded 和 onload
在浏览器中加载资源涉及到 2 个事件，分别是 DOMContentLoaded 和 onload，那么它们之间有什么区别呢？

- onload：当页面所有资源（包括 CSS、JS、图片、字体、视频等）都加载完成才触发，而且它是绑定到 window 对象上；
- DOMContentLoaded：当 HTML 已经完成解析，并且构建出了 DOM，但此时外部资源比如样式和脚本可能还没加载完成，DOMContentLoaded 必须等待脚本执行结束后才触发，并且该事件需要绑定到 document 对象上；
### DOMContentLoaded 遇到样式
- CSS 是不会阻塞 DOM 的解析的，所以理论上 DOMContentLoaded 应该不会等到外部样式的加载完成后才触发
- 当外部样式后面有脚本（async 脚本和动态脚本除外）的时候，外部样式就会阻塞 DOMContentLoaded 的触发

# $(function (){})  $().ready(function(){}) $(document).ready(function(){})
- ready事件的发生在dom元素加载完毕（即文档解析完成）后，不包含外部文件的加载，如图片
```JS
  document.addEventListener('DOMContentLoaded', () => {
                console.log('DOMContentLoaded')
            })
            window.onload = function() {
                console.log('onload')
            }
            window.addEventListener("load",()=>{},false);


```
