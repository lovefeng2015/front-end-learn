### 什么是事件代理（事件委托） 有什么好处
事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。
#### 优点：

> - dom 操作，提高性能 在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作 dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少 dom 操作的原因。每一个事件处理函数，都是一个对象，多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到 js 程序里面，只对它的父级进行操作，与 dom 的操作就只需要交互一次，这样就能大大的减少与 dom 的交互次数，提高性能；
 > - 动态绑定事件 因为事件绑定在父级元素 所以新增的元素也能触发同样的事件


### addEventListener 默认是捕获还是冒泡
默认是冒泡
addEventListener第三个参数默认为 false 代表执行事件冒泡行为。
当为 true 时执行事件捕获行为。

### webpack Plugin 和 Loader 的区别

- Loader： 用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，并且在 buld 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。
- Plugin 目的在于解决 loader 无法实现的其他事,它直接作用于 webpack，扩展了它的功能。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

>webpack 相关知识可以看鲨鱼哥这篇文章 前端进阶高薪必看-Webpack 篇 说的很通俗易懂 基本应对简单的面试足够了

### apply call bind 区别

- 三者都可以改变函数的 this 对象指向。
- 三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
- 三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
- bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。
- bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例

>注意！很多同学可能会忽略 bind 绑定的函数作为构造函数进行 new 实例化的情况

### Promise 新建后就会立即执行。
[ECMAScript 6 入门 阮一峰](https://es6.ruanyifeng.com/#docs/promise)
```
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
```
上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
```
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```
上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，最好在它们前面加上return语句，这样就不会有意外。
```
new Promise((resolve, reject) => {
  return resolve(1);
  // 后面的语句不会执行
  console.log(2);
})
```
### Event Loop（事件循环）机制

不同的异步任务被分为：宏任务和微任务
宏任务：

- script(整体代码)
- setTimeout()
- setInterval()
- postMessage
- I/O
- UI交互事件

微任务:

- new Promise().then(回调)
- MutationObserver(html5 新特性)

运行机制
异步任务的返回结果会被放到一个任务队列中，根据异步事件的类型，这个事件实际上会被放到对应的宏任务和微任务队列中去。
```
在当前执行栈为空时，主线程会查看微任务队列是否有事件存在

存在，依次执行队列中的事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的事件，把当前的回调加到当前指向栈。
如果不存在，那么再去宏任务队列中取出一个事件并把对应的回到加入当前执行栈；
当前执行栈执行完毕后时会立刻处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。
```
在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：
```
执行一个宏任务（栈中没有就从事件队列中获取）
执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）
简单总结一下执行的顺序：
执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。
```
[JavaScript中的Event Loop（事件循环）机制](https://segmentfault.com/a/1190000022805523)

[js事件循环机制event-loop](https://segmentfault.com/a/1190000038928521)

[深入理解js事件循环机制（浏览器篇](http://lynnelv.github.io/js-event-loop-browser)

[loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

[js 循环机制 settimeout](https://www.google.com/search?q=js+%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6+settimeout&source=hp&ei=aNhNYcezI4Pc-gTKiZWACw&iflsig=ALs-wAMAAAAAYU3meNpY2oxbaFospO_qAYA0iRILaXFZ&oq=js+%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6+settimeout&gs_lcp=Cgdnd3Mtd2l6EAM6DgguEIAEELEDEIMBEJMCOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwE6CAgAEIAEELEDOgUIABCABDoICAAQsQMQgwE6BggAEBYQHjoICAAQFhAKEB46BwghEAoQoAE6BQghEKsCOgcIABCABBAMOgYIABAEEB46BAgAEB5Q0F9Y6LQCYPy2AmgBcAB4AIAB3iuIAZ1nkgEOMi0xOC40LjMuMS45LTGYAQCgAQE&sclient=gws-wiz&ved=0ahUKEwjHh4eb4ZfzAhUDrp4KHcpEBbAQ4dUDCAc&uact=5)


### js var let

[前端面试题：JS中的let和var的区别](https://www.cnblogs.com/fly_dragon/p/8669057.html)

[深入浅出 ES6（十四）：let 和 const](https://www.infoq.cn/article/es6-in-depth-let-and-const/)

[JavaScript中var、let、const区别？](https://www.zhihu.com/question/52662013)

[我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450)

[What's the difference between using "let" and "var"?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)

[阮一峰 ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/let)

[语法和数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)

`var`的常见变量提升
```
var a = 99;            // 全局变量a
f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
console.log(a);        // a=>99,  此时是全局变量的a
function f() {
  console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
  var a = 10;
  console.log(a);      // a => 10
}

// 输出结果：
undefined
10
99

```
#### ES6可以用let定义块级作用域变量
在ES6之前，我们都是用var来声明变量，而且JS只有函数作用域和全局作用域，没有块级作用域，所以{}限定不了var声明变量的访问范围。
例如：
```
{ 
  var i = 9;
} 
console.log(i);  // 9
```
#### ES6新增的`let`，可以声明块级作用域的变量。
```
{ 
  let i = 9;     // i变量只在 花括号内有效！！！
} 
console.log(i);  // Uncaught ReferenceError: i is not defined
```
#### let 配合for循环的独特应用
let非常适合用于 for循环内部的块级作用域。JS中的for循环体比较特殊，每次执行都是一个全新的独立的块作用域，用let声明的变量传入到 for循环体的作用域后，不会发生改变，不受外界的影响。看一个常见的面试题目：
```
for (var i = 0; i <10; i++) {  
  setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
    console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
  }, 0);
}
// 输出结果
10   共10个
// 这里面的知识点： JS的事件循环机制，setTimeout的机制等
```
如果把 var改成 let声明：
```
// i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
for (let i = 0; i < 10; i++) { 
  setTimeout(function() {
    console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
  }, 0);
}
// 输出结果：
0  1  2  3  4  5  6  7  8 9
```
#### let没有变量提升与暂时性死区

用let声明的变量，不存在变量提升。而且要求必须 等let声明语句执行完之后，变量才能使用，不然会报Uncaught ReferenceError错误。
例如：
```
console.log(aicoder);    // 错误：Uncaught ReferenceError ...
let aicoder = 'aicoder.com';
// 这里就可以安全使用aicoder
```
>ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

#### let变量不能重复声明
let不允许在相同作用域内，重复声明同一个变量。否则报错：Uncaught SyntaxError: Identifier 'XXX' has already been declared

例如：
```
let a = 0;
let a = 'sss';
// Uncaught SyntaxError: Identifier 'a' has already been declared
```
- 使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象；
- 使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升；
- 使用const声明的是常量，在后面出现的代码中不能再修改该常量的值。
>const可以对数组下的某个元素或者对象下的某个属性赋值或者修改

```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // 同样的变量!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // 不同的变量
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

```
简单来说是： let是修复了var的作用域的一些bug，变的更加好用。let是更好的var。var的作用于是函数作用于，而let是块级别（大括号括起来的内容）
const声明的变量只可以在声明时赋值，不可随意修改，这是最大的特点。

使用 var 在全局级别（在函数外部）进行声明都会自动成为 window 对象上的一个属性：
```
var name = 'Johnson';
window.name === name // true
```
但是，如果你使用 let 或者 const 在函数外部声明一个变量，它不会被添加到 window 对象中：
```
let job = 'frontend';
window.job === job // false

```

- var：变量提升（无论声明在何处，都会被提至其所在作用于的顶部）
- let：无变量提升（未到let声明时，是无法访问该变量的）
- const：无变量提升，声明一个基本类型的时候为常量，不可修改；声明对象可以修改


const有let的所有特性；
然后const不一定是常量
```
const obj = {a:1}
obj.a=2
obj.b=2
```
是可行的，
```
const obj = {a:1}
obj = {a:2}
```
不可行，
就是不能直接修改const的量。

1. const定义的变量不可以修改，而且必须初始化。
2. var定义的变量可以修改，如果不初始化会输出undefined，不会报错。

3. let是块级作用域，函数内部使用let定义后，对函数外部无影响。

4. 同一个作用域中相同名字的变量只能用let 、const 声明一次，var 不受限制

5. var 具有作用域提升的特性，意味着可以在函数体内先使用变量，然后再声明变量，并不错报错，而let 不行，let 必须是先声明再使用

6. var 的作用域是函数级别的，也就是说，只要在函数体任意位置声明，都能在函数体内被访问到，而let 是块作用域，离开了块，变量就无法被访问到
7. var在函数体外声明时，会变成一个全局变量啊，并且作为全局对象的属性，而let 和const 并不会

var和let都是ECMAScript中声明变量的关键字，区别在于其作用域。

- var变量的作用域是函数作用域，let变量的作用域是块作用域（就是｛｝之内的都是）。
- 同时var关键字有提升效果，即在其作用域内声明变量之前使用该变量是可行的，而let拥有暂时性死区。
- const关键字和let关键字相似，只不过一旦赋值变量就无法更改啦╮(￣▽￣"")╭。

- let 的「创建」过程被提升了，但是初始化没有提升。
- var 的「创建」和「初始化」都被提升了。
- function 的「创建」「初始化」和「赋值」都被提升了

接下来我考考你：
>var foo 和 function foo 同时存在会怎样
代码1：
```
var foo
function foo(){}
console.log(foo)
```
代码2：
```
function foo(){}
var foo
console.log(foo)
```
请问代码1 和 代码2 的输出分别是什么？

答案：由于 function 比 var 多一个「赋值」过程，所以两个代码的输出都是函数。你也可以记住结论：function 比 var 牛逼。

那如果 function foo 和 let foo 同时出现呢？不会有这种情况的，因为 let 发现重名就会报错，叫你滚去改代码

最后看 const，其实 const 和 let 只有一个区别，那就是 const 只有「创建」和「初始化」，没有「赋值」过程。

for循环的小括号是一个作用域，而花括号又是一个作用域，而小括号的作用域是包裹住了大括号作用域的

另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
```
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```
上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域（同一个作用域不可使用 let 重复声明同一个变量）。

变量的作用域
在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。

ECMAScript 6 之前的 JavaScript 没有 语句块 作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。例如，如下的代码将在控制台输出 5，因为 x 的作用域是声明了 x 的那个函数（或全局范围），而不是 if 语句块。
```
if (true) {
  var x = 5;
}
console.log(x); // 5
Copy to Clipboard
如果使用 ECMAScript 6 中的 let 声明，上述行为将发生变化。

if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y 没有被声明
```
常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值。

常量的作用域规则与 let 块级作用域变量相同。若省略const关键字，则该标识符将被视为变量。

在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。
```
// 这会造成错误
function f() {};
const f = 5;

// 这也会造成错误
function f() {
  const g = 5;
  var g;

  //语句
}
Copy to Clipboard
```
然而，对象属性被赋值为常量是不受保护的，所以下面的语句执行时不会产生错误。
```
const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue";
Copy to Clipboard
```
同样的，数组的被定义为常量也是不受保护的，所以下面的语句执行时也不会产生错误。
```
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
```

### addEventListener中事件函数的this指向
[addEventListener中事件函数的this指向](https://segmentfault.com/a/1190000003952832)

[函数的 this 关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#DOM%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84_this)


addEventListener的中的事件函数默认是作为调用addEventListener对象的方法，如果需要设置this的指向（比如上面的栗子中就使用bind设置this的指向为外包函数的上下文），则可以使用bind()。

这种情况和内联函数中的this指向类似，当this被内联函数调用时，它的this默认指向监听器所在的DOM元素。这里直接用MDN文档中的栗子：
```
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button> //输出button
```

 ### 举出闭包实际场景运用的例子
 [A brief introduction to closures 闭包简要介绍](http://skilldrick.co.uk/2010/11/a-brief-introduction-to-closures/)



是什么？
> 闭包是一个可以访问其包含范围内的变量的函数
>
> 闭包就是能够读取其他函数内部变量的函数
>
>由于在javascript中，只有函数内部的子函数才能读取局部变量，所以说，闭包可以简单理解成“定义在一个函数内部的函数“。

技术点的应用

>它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中，不会在函数调用后被自动清除
>
 >jQuery本身就是一个闭包，它本身这个库就是一个大闭包，平常封装的各种组件和插件也是闭包的一个引用

优缺点
>（1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
>
>（2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

下面是一种提供 JavaScript 对象私有变量的方法：
```
function CatMaker(name) {
    var age = 10;

    //construct an object on the fly with three methods.
    //All methods have access to age, but age cannot be
    //directly accessed outside of this function.
    return { 
        "sayHello": function () { //first method
            alert("Miaow");
        },
        "getAge": function (inCatYears) { //second method
            if (inCatYears) {
                return age * 7;
            }
            else {
                return age;
            }
        },
        "makeOlder": function () { //third method
            age++;
        }
    };
}

var mycat = CatMaker('Snuffles');
mycat.getAge(true); //returns 70
mycat.makeOlder();
mycat.getAge(true); //returns 77
```
```
//闭包共享同一个上下文环境
function attachListeners() {
    for (var i = 0; i < 10; i++) {
        $('#id-' + i).click(function () {
            alert("I am element number " + i);
        });
    }
}
//每次调用时都会产生新的闭包，并且每个闭包都有不同
function addOneListener(i) { //Each time i is bound to a different value
    $('#id-' + i).click(function () {
        alert("I am element number " + i);
    });
}

function addEventListeners() {
    for (var i = 0; i < 10; i++) {
        addOneListener(i); 
    }
}

var divs = document.getElementsByTagName('div');
//
for(var i = 0; i < divs.length; i++){
     var ele = divs[i];
  
    /**wrong
    ele.onclick = function(){
        alert(i);
    }
    */
    
    /**right**/
    ele.onclick = (function(index){
        return function(){
            alert(i +' '+ index);
        }
    })(i);
}
//5 0
//5 1
//5 2
//5 3
//5 4

```


比如常见的防抖节流
```
// 防抖
function debounce(fn, delay = 300) {
  let timer; //闭包引用的外界变量
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```
复制代码
使用闭包可以在 JavaScript 中模拟块级作用域
```
function outputNumbers(count) {
  (function () {
    for (var i = 0; i < count; i++) {
      alert(i);
    }
  })();
  alert(i); //导致一个错误！
}

```
复制代码
闭包可以用于在对象中创建私有变量
```
var aaa = (function () {
  var a = 1;
  function bbb() {
    a++;
    console.log(a);
  }
  function ccc() {
    a++;
    console.log(a);
  }
  return {
    b: bbb, //json结构
    c: ccc,
  };
})();
console.log(aaa.a); //undefined
aaa.b(); //2
aaa.c(); //3
```
### css 优先级是怎么计算的

第一优先级：!important 会覆盖页面内任何位置的元素样式
1. 内联样式，如 style="color: green"，权值为 1000
2. ID 选择器，如#app，权值为 0100
3. 类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010
4. 标签、伪元素选择器，如 div::first-line，权值为 0001
5. 通配符、子类选择器、兄弟选择器，如*, >, +，权值为 0000
6. 继承的样式没有权值

### js解析 变量提升
[js 的解析机制](https://blog.csdn.net/weixin_43043994/article/details/82021960)

[JavaScript variable promotion](https://developpaper.com/javascript-variable-promotion/)

在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。

全局变量是全局对象的属性。在网页中，（译注：缺省的）全局对象是 window ，所以你可以用形如 window.variable 的语法来设置和访问全局变量。

因此，你可以通过指定 window 或 frame 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，在文档里声明一个叫 phoneNumber 的变量，那么你就可以在子框架里使用 parent.phoneNumber 的方式来引用它。

JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。
```
/**
 * 例子1
 */
console.log(x === undefined); // true
var x = 3;


/**
 * 例子2
 */
// will return a value of undefined
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```
上面的例子，也可写作：
```
/**
 * 例子1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * 例子2
 */
var myvar = "my value";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```

在 ECMAScript 6 中，let（const）同样会被提升变量到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。
```
console.log(x); // ReferenceError
let x = 3;
```

预解析

　　javascript代码是由浏览器中的javascript解析器来执行的。javascript解析器在运行javascript代码的时候分为两步：预解析和代码执行

　　在预解析过程中，js引擎会把js文件中所有的var和function提升到当前作用域的最前面，然后代码会按照顺序执行.函数优先，虽然函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量,变量提升后，会给变量设置默认值，这个默认值就是我们熟悉的undefined


实际上变量和函数声明在代码里的位置不会改变，而是在编译阶段被JavaScript引擎放入内存中，一段JavaScript代码在执行之前需要被JavaScript引擎编译，编译完成之后，才会进入执行阶段

遇到 script 标签的话 js 就进行预解析，将变量 var 和 function 声明提升，但不会执行 function
然后就进入上下文执行，上下文执行还是执行预解析同样操作，直到没有 var 和 function，就开始执行上下文。
需要注意都是函数声明提升直接把整个函数提到执行环境的最顶端。
使用匿名函数的方式不存在函数提升，因为函数名称使用变量表示的，只存在变量提升

　　预解析分为变量预解析(变量提升)和函数预解析(函数提升)

　　变量提升就是把所有的变量声明提升到当前作用域的最前面，而不提升赋值操作

　　函数提升就是把所有的函数声明提升到当前作用域的最前面，而不调用函数

　　函数表达式(匿名函数)的调用必须写在函数表达式的下面(因为函数表达式不会被提升)
```
/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* 函数表达式 */

baz(); // 类型错误：baz 不是一个函数

var baz = function() {
  console.log("bar2");
};
```

当函数名与变量名冲突时，函数的优先级更高；
当全局变量的命名与局部变量的命名冲突时，局部变量在局部范围内的优先级更高；
参数的优先级高于变量提升的优先级。
```
var f;
function f(){
  console.log("xx");
}
console.log(f);//function f(){}
f();//xx

var f=5;//这里f 是一个变量，因此这个变量的声明也将提升到顶部，而变量的赋值依然保留在原来的位
function f(){
  console.log("xx");
}
console.log(f);//5

function test(x){
console.log(a);
var a=1;
console.log(a);

}
test(2);//undefined,1

function test(a){
console.log(a);
var a=1;
console.log(a);

}
test(2);//2,1 参数的优先级高于变量提升的优先级

function test(a){
var a=1;
console.log(a);

}
test(2);//1

```

### js中表达式(无符号) >>>0 (有符号)>>0浅析
    由于位运算要求的操作数是整数，这是整数表示为32位整型，所以位运算先将操作数转化为数字，并将数字强制转化为32位有符号整型，并忽略原格式中的小数和任何超过32位中的二进制数。

- 因此，执行没有实际效果的按位运算（例如右移 0 位 >> 0）是一种快速忽略小数并确保其在 32 位 int 范围内的方法。 
- 此外，三重 >>> 运算符在执行其无符号运算后，将其计算结果转换数字 作为无符号整数，而不是其他运算符所做的有符号整数，因此它可用于将负数转换为 32 位 -二进制补码版本为大数。使用 >>>0 确保您有一个介于 0 和 0xFFFFFFFF 之间的整数。

### Uint32类型是如何转换的
1 . 如果不能转换为Number，那就为0
2 . 如果为非整数，先转换为整数，参考公式sign(n) ⋅ floor(abs(n))
```js
function ToInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}
```
3 . 如果是正数，返回正数，如果是负数，如果是`>>0`，则返回不超过32位进制的负数，如果是`>>>0`则返回负数 + 2的32次方

```js
function modulo(a, b) {
    return a - Math.floor(a/b)*b;
}
function ToUint32(x) {
    return modulo(ToInteger(x), Math.pow(2, 32));
}

```
## 总结
`x >>> 0`本质上就是保证x有意义（为数字类型），且为正整数，在有效的数组范围内（0 ～ 0xFFFFFFFF），且在无意义的情况下缺省值为0。

[JS移位运算符](https://www.cnblogs.com/eastsae/p/14883663.html)

[js中 >>> 0 理解](https://zhuanlan.zhihu.com/p/97121092)

[js中表达式 >>> 0 浅析](https://segmentfault.com/a/1190000014613703?utm_source=tag-newest)

[What is the JavaScript >>> operator and how do you use it?](https://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it)

[Integers and shift operators in JavaScript](https://2ality.com/2012/02/js-integers.html)

[https://github.com/lodash/lodash/blob/master/slice.js](https://github.com/lodash/lodash/blob/master/slice.js)

```
length = start > end ? 0 : ((end - start) >>> 0)//保证length和start是数字，且是正整数
  start >>>= 0

```