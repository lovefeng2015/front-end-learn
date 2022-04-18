
| 方法 | 描述 | 知识点 |
 | --------   | :-----  | :---- |
| concat(数组和/或值) | 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组 | 如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝, |
| entries | 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对 | 知识点 |
| every() | 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值 | callback 在被调用时可传入三个参数：元素值，元素的索引，原数组 |
| filter() | 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素 | callback 在被调用时可传入三个参数：元素值，元素的索引，原数组 |
| find(callback[, thisArg]) | 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined | 如果你需要找到一个元素的位置或者一个元素是否存在于数组中，使用Array.prototype.indexOf() 或 Array.prototype.includes() |
| findIndex(callback[, thisArg]) | 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1 | 知识点 |
| forEach | 对数组的每个元素执行一次给定的函数 | 与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用 |
| Array.from(伪数组对象或可迭代对象) | 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例 | Array.from(arrayLike[, mapFn[, thisArg]]) |
| includes() | 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false | 知识点 |
| indexOf() | 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1 | 知识点 |
| join() | 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。 | 如果缺省该值，数组元素用逗号（,）， |
| keys() | 返回一个包含数组中每个索引键的Array Iterator对象 | 索引迭代器会包含那些没有对应元素的索引 |
| lastIndexOf() | 返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始 | 知识点 |
| values() | 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值 | 知识点 |
| map | 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值 | 因为map生成一个新数组，当你不打算使用返回的新数组却使用map是违背设计初衷的，请用forEach或者for-of替代。你不该使用map: A)你不打算使用返回的新数组，或/且 B) 你没有从回调函数中返回值。 |
| map() | 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值 | var new_array = arr.map(function callback(currentValue[, index[, array]]) { // Return element for new_array }[, thisArg]) |
| Array.of() | 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型 | Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组） |
| pop() | 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度 | 如果你在一个空数组上调用 pop()，它返回  undefined。 |
| push() | 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度 | arr.push(element1, ..., elementN) push 方法具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的 |
| reduce() | 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值 | 知识点 |
| reduceRight() | 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。 | 知识点 |
| reverse() | 将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组 | 知识点 |
| shift() | 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度 | 知识点 |
| unshift() | 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组) | 知识点 |
| some() | 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。 | 知识点 |
| sort | 用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的 | 知识点 |
| slice() | 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变 | 知识点 |
| splice() | 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组 | array.splice(start[, deleteCount[, item1[, item2[, ...]]]])，由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组 |
| fill() | arr.fill(value[, start[, end]]),用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引 | fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的, 其默认值分别为 0 和 this 对象的 length 属性值 |
| 方法 | 描述 | 知识点 |
| 方法 | 描述 | 知识点 |








`concat`方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中，如下所示：

- 对象引用（而不是实际对象）：concat将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
- 数据类型如字符串，数字和布尔（不是String，Number 和 Boolean 对象）：concat将字符串和数字的值复制到新数组中。

- 对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然


 ## 复制数组元素

 ES5 只能用变通方法来复制数组。
```
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]
```
上面代码中，a1会返回原数组的克隆，再修改a2就不会对a1产生影响。

扩展运算符提供了复制数组的简便写法。
```
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```
```
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
let shallowCopy = vegetables.slice() ;
console.log(shallowCopy);
```

### 使用for…of 循环
```
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}


// [0, "a"]
// [1, "b"]
// [2, "c"]

for (let [key,value] of iterator) {
    console.log(key);
    console.log(value);
}
for (let e of arr) {
    console.log(e);
}
```
### arr.every(callback(element[, index[, array]])[, thisArg])
callback
用来测试每个元素的函数，它可以接收三个参数：

element
用于测试的当前值。

index可选
用于测试的当前值的索引。

array可选
调用 every 的当前数组。

thisArg
执行 callback 时使用的 this 值

    如果为 every 提供一个 thisArg 参数，则该参数为调用 callback 时的 this 值。如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。


 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。

若你需要提前终止循环，你可以使用：

- 一个简单的 for 循环
- for...of / for...in 循环
- Array.prototype.every()
- Array.prototype.some()
- Array.prototype.find()
- Array.prototype.findIndex()
这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：

- every()
- some()
- find()
- findIndex()

译者注：只要条件允许，也可以使用 filter() 提前过滤出需要遍历的部分，再用 forEach() 处理。

//扁平化数组
```
/**
 * Flattens passed array in one dimensional array
 *
 * @params {array} arr
 * @returns {array}
 */
function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i))
      result.push(...flatten(i));
    else
      result.push(i);
  })

  return result;
}

// Usage
const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(problem); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Array.from() 可以通过以下方式来创建数组对象：

- 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
- 可迭代对象（可以获取对象中的元素,如String Map和 Set，arguments 等）

### 数组去重合并
```
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]
```

找出指定元素出现的所有位置
```
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

该示例使用 apply() 添加第二个数组的所有元素。

注意当第二个数组(如示例中的moreVegs)太大时不要使用这个方法来合并数组，因为事实上一个函数能够接受的参数个数是有限制的。具体可以参考 apply() 。
```
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

### 语法

        arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
###参数
callback

执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
accumulator

累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

currentValue

数组中正在处理的元素。

index 可选

数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。

array可选

调用reduce()的数组

initialValue可选

作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。



回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：

- 如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；
- 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。

        注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。

### 数组去重
注意： 如果你正在使用一个可以兼容Set 和 Array.from() 的环境， 你可以使用let orderedArray = Array.from(new Set(myArray)); 来获得一个相同元素被移除的数组。
```
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)
```

### slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

- 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
- 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
如果向两个数组任一中添加了新元素，则另一个不会受到影响

### fill
```
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```
### 改变原数组 //改变原数组的方法:push(),pop(),unshift(),shift(),reverse(),sort(),splice() fill copyWithin
`push()`：将参数添加到数组尾部

返回添加后的数组的长度
`pop()` ： 将参数从数组尾部删除

返回删除的元素值,如果数组的长度为0，则返回undefined
`unshift()` ： 将参数添加到数组头部

返回添加后数组的长度
`shift()` ： 将参数从数组头部删除

返回删除的元素值,如果数组的长度为0，则返回undefined
`reverse()` ： 数组倒序

返回倒序后的数组，并不会创建新数组
`sort()` : 数组排序

- 返回排序后的数组,但是范围只满足0-9的元素，超过这个值就得调用他的回调函数
- 用法如下: a - b , 正序, b - a, 倒序, a - b = 0,返回0
链接：https://www.jianshu.com/p/56e91f7e0b14
```JS
var arr = [2,1,3,4, 15, 11, 14, 12]
arr.sort((a, b) => a - b) //[1, 2, 3, 4, 11, 12, 14, 15]
arr.sort((a, b) => b - a) // [15, 14, 12, 11, 4, 3, 2, 1]
// 错误的使用,因为元素已经大于9了
 arr.sort() // [1, 11, 12, 14, 15, 2, 3, 4]
```
`splice(start, deleteCount, item1, item2,...)`: 插入或移除或替换元素

如果是移除或替换，则返回数组中被移除的元素所组成的新数组，如果不是删除，则返回空数组
参数:
start: 起点索引
deleteCount: 需要移除的元素个数
item1,item2...: 需要插入的参数

`fill()`
填充数组fill(value,start,end)
value(必选) 为要填充的元素
start(可选) 填充开始的位置
end(可选) 填充结束的位置，默认为 this.length

`copyWithin()`
将指定位置的元素复制到其他位置，不改变原数组的长度copyWithin(target,start,end)
target(必选) 复制后的目标在这个位置开始替换初始的元素，若复制了一个元素则从这开始往后替换一个，复制了两个则替换两个，以此类推，若值为代表倒数从后开始替换
start(可选) 开始复制的位置包括复制时包括此元素，默认为 0
end(可选) 复制结束的位置，复制时不包括此位置，默认为 this.length

### 不改变原数组 //concat(),join(),slice() filter reduce some,every find findIndex(map,forEach有不同的情况)

`concat()`: 用于合并两个或多个数组
```JS
返回合并的一个数组的副本
[1,2].concat([3,4])  // [1,2,3,4]
```

`join()` : 返回一个字符串
```JS
[1,2].join() // '1,2'
```
`slice(start, end)`: 剪切从索引start，到索引end数组

开闭区间: [start,end)返回一个新的数组

`filter()` 方法创建一个新的数组，新数组中的元素是通过指定数组中符合的条件筛选出来的。filter() 不会对空数组进行检测。 filter() 不会改变原始数组。

`reduce()` 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

`find`：find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
`findIndex`: findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
### 循环数组
```JS
 
     //循环数组   
     let arr = [1,2,3,4,5,6]; //数组的内容为基本类型
     arr.forEach(item => {
         item = 99;
     })
     console.log(arr); //[1,2,3,4,5,6] 无法改变原数组的值

     arr.forEach((item,index) => {
         arr[index] = 99;
     })
     console.log(arr); //[99,99,99,99,99,99] 可以用下标改变原数组的值
     // ------------------------------------------------------------------------
     let arr2 = [{name:'张三',age:18},{name:'李四',age:19},{name:'王五',age:20}]; //数组的内容为引用类型

     arr2.forEach(item=>{//item 都是原数组所对应的对象的地址值
         item = 465;//此时修改的只是引用类型的地址,而未修改其值,原数组的值并不会改变
     })
     console.log(arr2)//[{name:'张三',age:18},{name:'李四',age:19},{name:'王五',age:20}] 

     arr2.forEach(item=>{//item 都是原数组所对应的对象的地址值
         item.age++;//此时修改的其地址所对应堆的值,会改变其原数组的值
     })
     console.log(arr2)//[{name:'张三',age:19},{name:'李四',age:20},{name:'王五',age:21}]
    //  /*
    //     总结:其实 forEach 和 map 的最大共同点就是都是函数, item 就相当于是形参, 形参可能会改变实参, 类比上面结论可以得知(创建一个新的数组，同时对原数组有以下影响):

    //     如果实参是基本类型, 那确实改变不了实参;

    //     如果实参是引用类型:

    //     函数修改了形参的地址值或将其修改为基本类型, 改变不了实参

    //     函数没有修改形参的地址值, 只是修改形参内部的某些属性, 会改变实参
    //  */
 ```

 

### 得到一个两数之间的随机整数
这个例子返回了一个在指定值之间的随机整数。这个值不小于 min （如果 min 不是整数，则不小于 min 的向上取整数），且小于（不等于）max。

```JS
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
```
### 得到一个两数之间的随机整数，包括两个数在内
上一个例子提到的函数 getRandomInt() 结果范围包含了最小值，但不含最大值。如果你的随机结果需要同时包含最小值和最大值，怎么办呢?  getRandomIntInclusive() 函数可以实现。
```JS
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
```