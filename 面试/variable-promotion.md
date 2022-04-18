<!--
 * @Author: your name
 * @Date: 2021-11-22 22:11:14
 * @LastEditTime: 2021-11-23 10:26:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \workspaces\plugins\面试\variable-promotion.md
-->

### js解析 变量提升
[js 的解析机制](https://blog.csdn.net/weixin_43043994/article/details/82021960)
[https://www.cnblogs.com/Leophen/p/11395026.html](https://www.cnblogs.com/Leophen/p/11395026.html)

[JavaScript variable promotion](https://developpaper.com/javascript-variable-promotion/)

### 作用域

- 全局作用域：整个script标签，或者是一个js文件

- 局部作用域：在`函数内部`就是函数作用域，只在函数内部起作用（如果函数中还有函数，那么在这个作用域中又可以诞生一个作用域）






### 全局变量

1. 在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。
2. 在函数内部，没有声明直接赋值的变量也属于全局变量
3. 全局变量只有浏览器关闭的时候才会被销毁，比较占内存资源；


全局变量是全局对象的属性。在网页中，（译注：缺省的）全局对象是 window ，所以你可以用形如 window.variable 的语法来设置和访问全局变量。

因此，你可以通过指定 window 或 frame 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，在文档里声明一个叫 phoneNumber 的变量，那么你就可以在子框架里使用 parent.phoneNumber 的方式来引用它。

### 局部变量

1. 在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。
2. 函数的形参
3. 局部变量当函数执行完毕就会被销毁，比较节约内存资源

`作用域链`：根据在内部函数可以访问外部函数变量这种机制，用链式查找决定哪些数据能被内部函数访问，就称为作用域链


### 变量提升

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

### 预解析

　　javascript代码是由浏览器中的javascript解析器来执行的。javascript解析器在运行javascript代码的时候分为两步：预解析和代码执行

　　在预解析过程中，js引擎会把js文件中所有的var和function提升到当前作用域的最前面，然后代码会按照顺序执行.`函数优先，虽然函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量`,变量提升后，会给变量设置默认值，这个默认值就是我们熟悉的undefined


实际上变量和函数声明在代码里的位置不会改变，而是在编译阶段被JavaScript引擎放入内存中，一段JavaScript代码在执行之前需要被JavaScript引擎编译，编译完成之后，才会进入执行阶段

遇到 script 标签的话 js 就进行预解析，将变量 var 和 function 声明提升，但不会执行 function
然后就进入上下文执行，上下文执行还是执行预解析同样操作，直到没有 var 和 function，就开始执行上下文。
需要注意都是函数声明提升直接把整个函数提到执行环境的最顶端。
使用匿名函数的方式不存在函数提升，因为函数名称使用变量表示的，只存在变量提升

　　预解析分为变量预解析(变量提升)和函数预解析(函数提升)

　　变量提升就是把所有的变量声明提升到当前作用域的最前面，而不提升赋值操作

　　函数提升就是把所有的函数声明提升到当前作用域的最前面，而不调用函数

　　函数表达式(匿名函数)的调用必须写在函数表达式的下面(因为函数表达式不会被提升)
```js
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
- 初始化代码有两种情况: 一种是将var变量(本机类型、对象类型)初始化为undefined；
-  第二个是函数的初始化， 直接指向堆空间中函数的内存
- 当函数名与变量名冲突时，函数的优先级更高；
- 当全局变量的命名与局部变量的命名冲突时，局部变量在局部范围内的优先级更高；
- 参数的优先级高于变量提升的优先级。
- `函数大于参数大于var变量提升`

```JS
function fn() {
    console.log(a)//undefined
  var a;
 console.log(a)//undefined
}
fn()
```
```JS
function fn(a) {
    console.log(a)//1
  var a;
 console.log(a)//1
}
fn(1)
```

- 当我们通常调用函数时，如果此时有形式参数，则执行函数形式参数的编译和执行过程
- 然后输入函数体来编译和执行函数体
```JS
function fn(a) {
    console.log(a)
    var a = 2
    function a() {}
    console.log(a)
}
fn(1)
```
- 正如您所看到的，我们在这里提到，当函数中有形式参数时，形式参数的编译和执行将首先执行。
首先，有函数参数，因此函数参数的编译和执行如下:
```JS
var a = undefined
a = 1
```
然后，函数体将被编译和执行
```JS
//Compile
A = function a () {} // key point!!!
//Implementation
console.log(a)
a = 2
console.log(a)
```
可以看出，如果函数体中的变量名和形式参数的变量名是重复的，那么普通变量的编译和赋值就不会是一个变化的过程。
但是，如果变量是一个函数，那么函数变量将被编译和赋值，也就是说，直接指向堆空间中函数的地址。

### 函数中的变量提升
- 和全局作用域一样，变量升级也会发生在函数内部，也就是说，不管 VAR 命令声明的变量在哪里，变量声明都会升级到函数主体的头部。
- 可以看出，如果函数体中的变量名和形式参数的变量名是重复的，那么普通变量的编译和赋值就不会是一个变化的过程。
但是，如果变量是一个函数，那么函数变量将被编译和赋值，也就是说，直接指向堆空间中函数的地址。
- 基本数据类型(数值、字符串、布尔值)的内容传输方法是值传输(按值传递)
- `函数名相同的参数`-如果函数具有具有相同名称的参数，则在调用时将使用最后一个参数值。一个例子如下
- 如果在调用函数时没有提供最后一个参数，则函数的值将显示为undefined
- 原则上，尽量不要使用相同的名称来写参数，并且在定义函数时设置了几个参数。调用时，尽量确保它们与定义一致
- 允许函数有不定数量的参数，而arguments对象可以读取函数体内的所有参数,
- arguments对象包含函数运行时全部参数
- arguments[0]表示函数的第一个参数，arguments[1]表示第二个参数，依此类推
- 此外，除了读取参数之外，arguments对象还可以向参数赋值，这些参数优先于调用函数的实际参数
```JS
arguments [0] = 10
```
- 此外，您可以通过 arguments 对象的 length 属性判断在函数调用期间采用了多少参数
- 参数的数据类型属于 Object，而不是数组！

### 函数 eval ()计算字符串并执行其中的 JavaScript 代码
- 此方法只接受原始字符串作为参数，如果字符串参数不是原始字符串，则该方法将返回，不做任何更改
- 因此，不必担心 Eval ()函数传递 String 对象作为参数
- 如果在使用期间非法调用 eval ()函数或传递参数错误，则将引发异常
```JS
var str='var eva="car"';
    eval(str);
    console.log(eva);  // When eval() function is not used, the error variable has no exception defined!
```
```JS
function foo(){

  console.log(b); // undefined 这里没有提升，因为在块级作用域中声明函数，相当于函数表达式，但是var变量会提升
  b(); //TypeError: b is not a function

  var a = true;

  if(a){
    function b(){
      console.log(2)
    }
    //The following code is the same as the result above
    // var b = function(){
 //      console.log(2)
 //    }
  }
  //B ()! -- is executed here

}

foo()
```
```JS
function foo(){

  console.log(b); // undefined 这里没有提升，因为在块级作用域中声明函数，相当于函数表达式，但是var变量会提升


  var a = true;

  if(a){
  console.log(b); //ƒ b(){}
    function b(){
      console.log(2)
    }
    //The following code is the same as the result above
    // var b = function(){
 //      console.log(2)
 //    }
  }
  //B ()! -- is executed here

}

foo()
```
### 块级作用域
```JS
// undefined
console.log('a1', a)
{
  // function a
  console.log('a2', a)
  a = 100
  // 100
  console.log('a3', a)
  function a() {}
  // 100
  console.log('a4', a)
}
// 100
console.log('a5', a)
```
- 允许在块级作用域内声明函数。
- 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
- 同时，函数声明还会提升到所在的块级作用域的头部。
```JS
//A function 'compat' is declared in a block level scope within a function`
function enclosing(…) {
  …
  {
    …
    function compat(…) { … }
    …
  }
  …
}
//The process of ascension is as follows:

function enclosing(…) {
  var compat₀ = undefined; // function-scoped
  …
  {
    let compat₁ = function compat(…) { … }; // block-scoped
    …
    compat₀ = compat₁;
    …
  }
  …
}

```
在块级作用域之外，var 声明的变量，值为 undefined，类似于块级作用域 var 声明的变量；
在块作用域词法分析阶段，使用let声明一个同名的变量，并赋值给这个函数。注意内层不仅提升了，还赋值了。
在原函数声明的那一行，使用内层let声明变量的值赋给块级作用域外层同名的var声明变量。 此时分配外部变量。

在指定范围内创建随机整数
```JS
function getRandomNumber(min,max) {
        return Math.floor(Math.random()*(max-min)+min);
    }
    console.log(getRandomNumber(10,100));
```
### let const 提升
- 所有语句(function，var，let，const and class)都将被提升，var声明将被初始化undefined，但是 let 和const 仍然未初始化
- let 和const只有在它实际执行了声明语句之后，JavaScript 才会被初始化。引擎做了一些限制。你不能在初始化它们之前使用它们。这就是我们所说的暂时死亡地带。
- 如果 JavaScript 引擎仍然找不到声明let或者const 的行，那么这一行将被赋值给undefined，或者返回 error 如果是const
- 因为const声明的变量是不可变的，所以如果在声明期间没有赋值，那么将直接报告一个错误
- let和const如果我们在声明变量之前尝试访问它，JavaScript 引擎将尝试从词法环境中获取变量的值，引用错误将被引发，因为变量没有初始化
- 只要在声明变量之前不执行代码，我们甚至可以在声明 let和const之前在代码中引用它(例如，函数体)。
例如，此代码完全有效。
```JS
function foo () {
  console.log(a);
}
let a = 20;
foo();  // This is perfectly valid
```
但是下面的代码将报告一个错误。
```JS
function foo() {
 console.log(a); // ReferenceError: a is not defined
}
foo(); // This is not valid
let a = 20;
```
- 原因在于当函数在执行之后在作用域链中被发现，如果先执行然后赋值，那么人工智能就没有初始化
### class 是 ES6 中的关键字，它也会提升，并且和let const 一致，也会产生一个临时死区，在执行赋值之前初始未初始化
```JS
// Uncaught ReferenceError: Cannot access 'Person' before initialization
let peter = new Person('Peter', 25);                     
console.log(peter);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
所以 访问class，你必须先声明它们。例如:
```JS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let peter = new Person('Peter', 25); 
console.log(peter);
// Person { name: 'Peter', age: 25 }
```
与函数表达式一样，类表达式也不提升。例如，此代码将不工作。
```JS
// VM266:1 Uncaught ReferenceError: Cannot access 'Person' before initialization
let peter = new Person('Peter', 25); 
console.log(peter);
let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
正确的做法是:
```JS
let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let peter = new Person('Peter', 25); 
console.log(peter);
// Person { name: 'Peter', age: 25 }
```
### 结论
现在我们知道 JavaScript 引擎在推广过程中不会移动代码。对提升机制的正确理解将帮助你避免在未来提升中可能出现的任何错误和困惑。为了避免未定义的变量或引用错误(ReferenceError)对于提升的副作用，始终尝试在各自作用域的顶部声明变量，并且在声明变量时始终尝试初始化变量。

```JS
    var num=20;
    function consulate(x) {
        x*=3;
        console.log(x);
        return x/2;
    }
    var res=consulate(num);//60
    console.log(res);//30
    console.log(num);//20
```
```JS
var num1=20;
    var num2=30;
    function consulate(x,x) {
        x*=3;
        console.log(x);
        return x/2;
    }
    var res=consulate(num1, num2);
    console.log(res);

//The operation results are: 90 and 45
```

```JS
func (num){//先编译形参，此时num=undefined;
num=num || 1;   //  It can be understood as a three item conditional expression: judgment condition? true：false；
　　　　　　return num;
　　　　　}

func();   //  The return value is 1

```
#### 值传递和地址传递
- 基本数据类型(数值、字符串、布尔值)的内容传输方法是值传输(按值传递)
- 复合数据类型（数组、对象、其他函数）的内容传递方式为地址传引用）
```JS



    var num=20;
    function consulate(x) {
        x*=3;
        console.log(x);
        return x/2;
    }
    var res=consulate(num);
    console.log(res);// 90 45
    console.log(num);//20
```


```js
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
### js代码执行的流程
>JavaScript 的执行机制：先编译，再执行
1. 一段 JavaScript 代码在执行之前需要被 JavaScript 引擎编译，编译完成之后，才会进入执行阶段，实际上变量和函数声明在代码里的位置是不会改变的，而且是在`编译阶段`被 JavaScript `引擎`放入内存中

2. 输入一段代码，经过编译后，会生成两部分内容：`执行上下文`（Execution context）和`可执行代码`，`执行上下文`是 JavaScript 执行一段代码时的运行环境，比如调用一个函数，就会进入这个函数的执行上下文，确定该函数在执行期间用到的诸如 this、`变量`、对象以及`函数`等

3. 在执行上下文中存在一个`变量环境的对象`（Viriable Environment），该对象中保存了变量提升的内容,比如变量和函数

4. 经过`var`声明的变量，JavaScript 引擎将在环境对象中`创建`一个名为该变量名的`属性`，并使用 undefined 对其初始化

5. JavaScript 引擎发现了一个通过 `function` 定义的函数，所以它将函数定义`存储`到堆 (HEAP）中，并在环境对象中`创建`一个该函数名的属性，然后将该属性值指向堆中函数的位置
6. 这样就生成了`变量环境对象`。接下来 JavaScript`引擎`会把声明以外的代码编译为字节码
7. 现在有了`执行上下文`和`可执行代码`了，那么接下来就到了执行阶段了
8. 当执行到函数时，JavaScript 引擎便开始在`变量环境对象`中`查找该函数`，由于变量环境对象中存在该函数的引用，所以 JavaScript 引擎便开始执行该函数，并输出函数被执行结果
9. 接下来打印(console.log)变量信息，JavaScript 引擎继续在变量`环境对象中查找该变量`，由于变量环境存在该变量，并且其值为 undefined，所以这时候就输出 undefined。
10. 接下来执行赋值，把值赋给变量，赋值后变量环境中的变量 属性值改变为赋值的值
11. 再碰到类似变量取值赋值或者函数执行，再从`第8个步骤循环`上面的步骤

### 代码中出现相同的变量或者函数怎么办？

>一段代码如果定义了两个相同名字的函数，那么最终生效的是最后一个函数
>2:如果变量和函数同名，那么在编译阶段，变量的声明会被忽略。

### ES规定函数只不能在块级作用域中声明
```JS
function foo(){
    if(true){
        console.log(&#39;hello world&#39;);
        function g(){ return true; }
    }
}
```
也就是说，上面这行代码执行会报错，但是个大浏览器都没有遵守这个标准。

接下来到了ES6了，ES6明确支持块级作用域，ES6规定块级作用域内部声明的函数，和通过let声明变量的行为类似。

规定的是理想的，但是还要照顾实现，要是完全按照let的方式来修订，会影响到以前老的代码，所以为了向下兼容，个大浏览器基本是按照下面的方式来实现的：
```JS
function foo(){
    if(true){
        console.log(&#39;hello world&#39;);
        var g = function(){return true;}
    }
}
```
这就解释了你的疑问，不过还是不建议在块级作用域中定义函数，很多时候，简单的才是最好的。

### 上下文
1. 当 JavaScript 执行全局代码的时候，会编译全局代码并创建全局执行上下文，而且在整个页面的生存周期内，全局执行上下文只有一份。
2. 当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行结束之后，创建的函数执行上下文会被销毁。

- 每调用一个函数，JavaScript 引擎会为其创建执行上下文，并把该执行上下文压入调用栈，然后 JavaScript 引擎开始执行函数代码。
- 如果在一个函数 A 中调用了另外一个函数 B，那么 JavaScript 引擎会为 B 函数创建执行上下文，并将 B 函数的执行上下文压入栈顶。
- 当前函数执行完毕后，JavaScript 引擎会将该函数的执行上下文弹出栈。
- 当分配的调用栈空间被占满时，会引发“堆栈溢出”问题。

### 作用域

作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。通俗地理解，作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期

- 全局作用域中的对象在代码中的任何地方都能访问，其生命周期伴随着页面的生命周期。
- 函数作用域就是在函数内部定义的变量或者函数，并且定义的变量或者函数只能在函数内部被访问。函数执行结束之后，函数内部定义的变量会被销毁。
### 块级作用域
块级作用域就是使用`一对大括号包裹的一段代码`，比如函数、判断语句、循环语句，甚至单独的一个{}都可以被看作是一个块级作用域

```JS

//if块
if(1){}

//while块
while(1){}

//函数块
function foo(){}
 
//for循环块
for(let i = 0; i<100; i++){}

//单独一个块
{}
```
#### let const的好处
作用域块内声明的变量不影响块外面的变量。
### 变量提升所带来的问题

1. 变量容易在不被察觉的情况下被覆盖掉
2. 本应销毁的变量没有被销毁


- 函数内部通过 var 声明的变量，在编译阶段全都被存放到变量环境里面了。
- 通过 let 声明的变量，在编译阶段会被存放到词法环境（Lexical Environment）中。
- 在块级作用域内部，通过 let 声明的变量并没有被存放到词法环境中。

通过 let 或者 const 声明的变量，在词法环境内部，维护了一个小型栈结构，栈底是函数最外层的变量，进入一个作用域块后，就会把该作用域块内部的变量压到栈顶；当作用域执行完成之后，该作用域的信息就会从栈顶弹出，这就是词法环境的结构

再接下来，当执行到作用域块中的console.log(a)这行代码时，就需要在词法环境和变量环境中查找变量 a 的值了，具体查找方式是：沿着词法环境的栈顶向下查询，如果在词法环境中的某个块中查找到了，就直接返回给 JavaScript 引擎，如果没有查找到，那么继续在变量环境中查找。



块级作用域就是通过`词法环境的栈`结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript 引擎也就同时支持了变量提升和块级作用域了。
### 作用域链
其实在每个执行上下文的变量环境中，都包含了一个外部引用，用来指向外部的执行上下文，我们把这个外部引用称为 outer。

### 词法作用域
- 词法作用域就是指作用域是由代码中函数声明的位置来决定的，所以词法作用域是静态的作用域，通过它就能够预测代码在执行过程中如何查找标识符。
- 词法作用域是代码编译阶段就决定好的，和函数是怎么调用的没有关系。

### 闭包

根据词法作用域的规则，内部函数总是可以访问它们的外部函数

在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。比如外部函数是 foo，那么这些变量的集合就称为 foo 函数的闭包

- 当函数嵌套时，内层函数引用了外层函数作用域下的变量，并且内层函数在全局作用域下可访问时，就形成了闭包

关于闭包的概念：
- 老师提出的概念：内部函数引用外部函数的变量的集合。
- 高级程序设计中的概念：闭包是指有权访问另一个函数作用域中的变量的函数。
- MDN上的概念：闭包是函数和声明该函数的词法环境的组合

### 闭包回收

- 通常，如果引用闭包的函数是一个全局变量，那么闭包会一直存在直到页面关闭；但如果这个闭包以后不再使用的话，就会造成内存泄漏。
- 如果引用闭包的函数是个局部变量，等函数销毁后，在下次 JavaScript 引擎执行垃圾回收时，判断闭包这块内容如果已经不再被使用了，那么 JavaScript 引擎的垃圾回收器就会回收这块内存。
- 所以在使用闭包的时候，你要尽量注意一个原则：如果该闭包会一直使用，那么它可以作为全局变量而存在；但如果使用频率不高，而且占用内存又比较大的话，那就尽量让它成为一个局部变量。

### this
- 全局执行上下文中的 this 是指向 window 对象的
- 通过函数的 call(apply,bind) 方法来设置函数执行上下文的 this 指向
- 在全局环境中调用一个函数，函数内部的 this 指向的是全局变量 window
- 通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身
- 通过 new 关键字构建好了一个新对象，并且构造函数中的 this 其实就是新对象本身
- 当函数被正常调用时，在严格模式下，this 值是 undefined，非严格模式下 this 指向的是全局对象 window
- 如果被setTimeout推迟执行的回调函数是某个对象的方法，那么该方法中的this关键字将指向全局环境，而不是定义时所在的那个对象,如果是严格模式，那么this会被设置为undefined
- 如果要让函数执行上下文中的 this 指向某个对象，最好的方式是通过 call 方法来显示调用

- ES6 中的箭头函数并不会创建其自身的执行上下文
- this 没有作用域的限制，这点和变量不一样，所以嵌套函数不会从调用它的函数中继承 this
- 嵌套函数中的 this 不会继承外层函数的 this 值
#### 解决办法
- 第一种是把 this 保存为一个 self 变量，再利用变量的作用域机制传递给嵌套函数
- 第二种是继续使用 this，但是要把嵌套函数改为箭头函数，因为箭头函数没有自己的执行上下文，所以它会继承调用函数中的 this

### 典型的闭包
[匿名自执行函数与闭包的联系](https://juejin.cn/post/6844904101520605192)
```JS
function box(){
  var a = 10;
  function inner(){
    return a;
  }
  return inner;
}
var outer = box();
console.log(outer());//10
```
复制代码这个案例中用到的闭包其实是inner和inner被定义时的词法环境，这个闭包被return出来后被外部的outer引用，因此可以在box外部执行这个inner，inner能够读取到box内部的变量a。

### 经典题
```JS
for(var i = 0;i<5;i++){
  setTimeout(function(){
    console.log(i);
  },100*i);
}//输出5个5

```
原因：这个for循环其实是在执行定时器的回调函数时才真正的产生了闭包，这些回调函数的执行环境是window，因为在闭包的词法环境和变量环境中找不到i，所以通过作用域链找到全文上下文环境的i，此时i是5

### 解决办法

```JS
for(var i = 0;i<5;i++){
  (function(i){
    setTimeout(function(){
      console.log(i);
    },100*i);
  })(i);
}

```
- 自执行的匿名函数的作用也很简单：就是每一次循环创建一个私有词法环境，执行时把当前的循环的i传入，保存在这个词法环境中,相当于上面的a
- 函数在被执行前都只是保存对变量的引用，自执行的匿名函数正是因为执行了，所以能够获取当前的变量i的值。因此定时器的回调函数在执行时引用的i就已经确定了具体的值
- js中函数在执行前都只对变量保持引用，并不会真正获取和保存变量的值

### 修复this不继承
```JS

let userInfo = {
  name:"jack.ma",
  age:13,
  sex:male,
  updateInfo:function(){
    //模拟xmlhttprequest请求延时
    setTimeout(function(){
      this.name = "pony.ma"
      this.age = 39
      this.sex = female
    },100)
  }
}

userInfo.updateInfo()

```
方法1//箭头函数
```js
let userInfo = {
  name:"jack.ma",
  age:13,
  sex:'male',
  updateInfo:function(){
    // 模拟 xmlhttprequest 请求延时
    setTimeout(() => {
      this.name = "pony.ma"
      this.age = 39
      this.sex = 'female'
    },100)
  }
}

userInfo.updateInfo()
setTimeout(() => {
  console.log(userInfo)
},200)

```
方法2 //self缓存外部的this
```JS
let userInfo = {
  name:"jack.ma",
  age:13,
  sex:'male',
  updateInfo:function(){
    let me = this;
    // 模拟 xmlhttprequest 请求延时
    setTimeout(function() {
      me.name = "pony.ma"
      me.age = 39
      me.sex = 'female'
    },100)
  }
}

userInfo.updateInfo()
setTimeout(() => {
  console.log(userInfo);
},200)

```
方法3 //自执行函数缓存外部的this,把this加到闭包的词法环境

```JS
let userInfo = {
  name:"jack.ma",
  age:13,
  sex:'male',
  updateInfo:function(){
    // 模拟 xmlhttprequest 请求延时
    void function(me) {
      setTimeout(function() {
        me.name = "pony.ma"
        me.age = 39
        me.sex = 'female'
      },100)
    }(this);
  }
}

userInfo.updateInfo()
setTimeout(() => {
  console.log(userInfo)
},200)

```
方法4//利用call或apply修改函数被调用时的this值

```js
let update = function() {
  this.name = "pony.ma"
  this.age = 39
  this.sex = 'female'
}

let userInfo = {
  name:"jack.ma",
  age:13,
  sex:'male',
  updateInfo:function(){
    // 模拟 xmlhttprequest 请求延时
    setTimeout(function() {
      update.call(userInfo);
      // update.apply(userInfo)
    }, 100)
  }
}

userInfo.updateInfo()
setTimeout(() => {
  console.log(userInfo)
},200)


```
方法5 //利用bind返回一个新函数，新函数被调用时的this指定为userInfo

```js
let userInfo = {
  name:"jack.ma",
  age:13,
  sex:'male',
  update: function() {
    this.name = "pony.ma"
    this.age = 39
    this.sex = 'female'
  },
  updateInfo:function(){
    // 模拟 xmlhttprequest 请求延时
    setTimeout(this.update.bind(this), 100)
  }
}

```

```JS

let userInfo = {
  name:"jack.ma",
  age:13,
  sex:male,
  updateInfo:function(){
    //模拟xmlhttprequest请求延时
    setTimeout(function(_this){
      _this.name = "pony.ma"
      _this.age = 39
      _this.sex = female
    },100,this)
  }
}

userInfo.updateInfo()
```

```JS

let userInfo = {
  name:"jack.ma",
  age:13,
  sex:male,
  updateInfo:function(){
    //模拟xmlhttprequest请求延时
    setTimeout(function(){
      this.name = "pony.ma"
      this.age = 39
      this.sex = female
    }.bind(this),100)
  }
}

userInfo.updateInfo()
```
### 栈空间和堆空间
- 原始类型的数据值都是直接保存在“栈”中的，引用类型的值是存放在“堆”中的。
- 原始类型的赋值会完整复制变量值，而引用类型的赋值是复制引用地址
- JavaScript 中将一个原始类型的变量 a 赋值给 b，那么 a 和 b 会相互独立、互不影响；但是将引用类型的变量 a 赋值给变量 b，那会导致 a、b 两个变量都同时指向了堆中的同一块数据

### 闭包回收

```JS
function fn(){

var a =10

function f1(){

console.log(a)

};


};

fn();

```
- 当执行fn函数时，会预扫描f1，会产生闭包，只不过当fn执行结束之后，闭包的内容没有外部引用，那么下次垃圾回收直接把比闭包的内容回收掉
- 从另一个角度上来说，函数f1并不是一个闭包。《你不知道的JavaScript》对闭包的定义是：能记住自身定义时所在的作用域的函数，即时它在这个作用域以外调用。f1仅仅是定义了，并没有调用，外界也没有变量区引用f1。虽然引擎会发现f1内部要访问外面的变量a，但是引擎也不知道这个f1到底会不会调用，所以保险起见引擎还是产生了一个clourse，只不过后面外部函数执行结束后，这个f1会立即被回收，那它对应的clourse也立即被回收了。所以楼主才会觉得“现在执行fn函数时不产生Closure”。但其实是产生的，只是很快就被回收了。没有注释之前，断点打到f2上，之所以可以观察到闭包被回收之前的场景，是因为那时执行流还没有退出外部函数。这个问题的本质就是，如果一个闭包被回收了，那引擎为它预留的clourse也会被回收。这也是解决闭包内存泄漏的一个方法，即在外部把引用闭包的变量赋值为null

### 闭包
使外部访问函数的内部变量成为可能；
局部变量驻留在内存中；
可以避免使用全局变量，
防止全局变量污染；
会造成内存泄漏
（一块内存空间被占用很久没有被释放）

由两部分组成：函数和创建它的环境。环境由创建闭包时作用域中的任何局部变量组成。

### 内存泄漏
闭包将引用包含该函数的整个变量对象。如果一个 HTML 元素保存在闭包的作用域链中，则意味着该元素不能被销毁。我们有必要在操作后主动销毁这个元素。
```JS
function da() {
 var element = document.getElementById('nameDa');
 var id = element.id;
 element.onclick = function() {
  console.log(id);
 };
 element = null;
}
```
定时器内部函数

当函数内部的定时器引用外部函数的变量对象时，变量对象不会被销毁。
```JS
(function() { 
 var da = 0;
 setInterval(function() {
  console.log(da++);
 },1000);
})();
```

### 值传递和引用传递
借助下面的例子，我们先来看一看什么是值`传递`，什么是引用`传递`：
```JS
let name = 'ConardLi';
function changeValue(name){
  name = 'code秘密花园';
}
changeValue(name);//当函数中有形式参数时，形式参数的编译和执行将首先执行 var name(参数)=name(传进来的) 相当于复制基本数据
console.log(name);
```
复制代码执行上面的代码，如果最终打印出来的name是'ConardLi'，没有改变，说明函数参数传递的是变量的值，即值传递。如果最终打印的是'code秘密花园'，函数内部的操作可以改变传入的变量，那么说明函数参数传递的是引用，即引用传递。
很明显，上面的执行结果是'ConardLi'，即函数参数仅仅是被传入变量复制给了的一个局部变量，改变这个局部变量不会对外部变量产生影响。
```JS
let obj = {name:'ConardLi'};
function changeValue(obj){
  obj.name = 'code秘密花园';
}
changeValue(obj);//当函数中有形式参数时，形式参数的编译和执行将首先执行 var obj(参数)=obj(传进来的) 相当于复制引用类型
console.log(obj.name); // code秘密花园
```
复制代码上面的代码可能让你产生疑惑，是不是参数是引用类型就是引用传递呢？
`首先明确一点，ECMAScript中所有的函数的参数都是按值传递的`。
同样的，当函数参数是引用类型时，我们同样将参数复制了一个副本到局部变量，只不过复制的这个副本是指向堆内存中的地址而已，我们在函数内部对对象的属性进行操作，实际上和外部变量指向堆内存中的值相同，但是这并不代表着引用传递，下面我们再按一个例子：
```JS
let obj = {};
function changeValue(obj){//当函数中有形式参数时，形式参数的编译和执行将首先执行 var obj(参数)=obj(传进来的) 相当于复制引用类型
  obj.name = 'ConardLi';
  obj = {name:'code秘密花园'};//地址改变，内部变量改变了指向新对象的地址，对外部obj没影响
}
changeValue(obj);
console.log(obj.name); // ConardLi
```
复制代码可见，函数参数传递的并不是变量的引用，而是变量拷贝的副本，当变量是原始类型时，这个副本就是值本身，当变量是引用类型时，这个副本是指向堆内存的地址。所以，再次记住：

ECMAScript中所有的函数的参数都是按值传递的。
作者：ConardLi
链接：https://juejin.cn/post/6844903854882947080
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。