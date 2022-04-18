### 深拷贝和浅拷贝
[javascript中的深拷贝和浅拷贝](https://www.zhihu.com/question/23031215/answer/326129003)
[浅拷贝与深拷贝](https://segmentfault.com/a/1190000017489663?utm_source=sf-similar-article)
[如何写出一个惊艳面试官的深拷贝?](https://segmentfault.com/a/1190000020255831)
[JavaScript深拷贝看这篇就行了！（实现完美的ES6+版本）](https://blog.csdn.net/cc18868876837/article/details/114918262)
### js数据类型
- 原始类型：undefined 、 null、number、string、boolean、symbol
- 引用类型：object对象类型(Object 、Array 、Function 、Data,RegExp,基本包装对象（Boolean类型，Number类型，String类型），单体内置对象（Global对象，Math对象）)

1. 基础类型是按照值进行访问的，可以操作保存在变量中的实际的值。对于引用类型，javascript是不允许直接访问值的，不能直接操作对象的内存空间，在操作对象时候，实际操作是引用，而不是实际的引用。

2. 原始类型的数据值都是直接保存在“栈”中的，引用类型的值是存放在“堆”中的
3. 地址传递：引用类型则是地址传递，将存放在栈内存中的地址赋值给接收的变量。

假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是`浅拷贝`，拿人手短，如果B没变，那就是`深拷贝`，自食其力

- 浅拷贝（shallowClone）是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
- 深拷贝（deepClone）是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

- 当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
- 浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。
- 深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。

### 浅拷贝
### 对象浅拷贝
浅拷贝： 创建一个新的对象，来接受你要重新复制或引用的对象值。如果对象属性是基本的数据类型，复制的就是基本类型的值给新对象；但如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址所指向的对象，肯定会影响到另一个对象。
```JS
function shallowClone(target) {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {};
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop];
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}
```
### 函数库lodash的_.clone方法
```JS
$.extend( object1, object2 );  // 浅拷贝
```
```JS
var obj = {
  name: 'FungLeo',
  sex: 'man',
  old: '18'
}
var obj2 = copyObj(obj)
function copyObj(obj) {
  let res = {}
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
    res[key] = obj[key]
      }

  }
  return res
}
```
### 展开运算符...
```JS
var obj = {
  name: 'FungLeo',
  sex: 'man',
  old: '18'
}
var { ...obj2 } = obj//var obj2={...obj}
obj.old = '22'
console.log(obj)
console.log(obj2)

```
 ### 数组浅拷贝
```JS
var arr = ['old', 1, true, null, undefined];
var new_arr = arr.concat(); // 或者var new_arr = arr.slice()也是一样的效果;
new_arr[0] = 'new';
console.log(arr); // ["old", 1, true, null, undefined]
console.log(new_arr); // ["new", 1, true, null, undefined]
```
### 展开运算符...
```js
var newArr=[...arr];
```
### Object.assign()
```JS
const obj = { a: 1 };//只能拷贝可枚举的属性，且同时拷贝时无法拷贝属性的特性们，而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型
const copy = Object.assign({}, obj);
```
```JS
function simpleCopy(obj1) {
   var obj2 = Array.isArray(obj1) ? [] : {};
   for (let i in obj1) {
   obj2[i] = obj1[i];
  }
   return obj2;
}
```
```JS
 //浅拷贝，可解决上面的问题
  Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
```
### 深拷贝
深拷贝：创建一个新的对象，将一个对象从内存中完整地拷贝出来一份给该新对象，并从堆内存中开辟一个全新的空间存放新对象，且新对象的修改并不会改变原对象，二者实现真正的分离。
```JS
function deepClone(target) {
    // WeakMap作为记录对象Hash表（用于防止循环引用）
    const map = new WeakMap()

    // 判断是否为object类型的辅助函数，减少重复代码
    function isObject(target) {
        return (typeof target === 'object' && target ) || typeof target === 'function'
    }

    function clone(data) {

        // 基础类型直接返回值
        if (!isObject(data)) {
            return data
        }

        // 日期或者正则对象则直接构造一个新的对象返回
        if ([Date, RegExp].includes(data.constructor)) {
            return new data.constructor(data)
        }

        // 处理函数对象
        if (typeof data === 'function') {
            return new Function('return ' + data.toString())()
        }

        // 如果该对象已存在，则直接返回该对象
        const exist = map.get(data)
        if (exist) {
            return exist
        }

        // 处理Map对象
        if (data instanceof Map) {
            const result = new Map()
            map.set(data, result)
            data.forEach((val, key) => {
                // 注意：map中的值为object的话也得深拷贝
                if (isObject(val)) {
                    result.set(key, clone(val))
                } else {
                    result.set(key, val)
                }
            })
            return result
        }

        // 处理Set对象
        if (data instanceof Set) {
            const result = new Set()
            map.set(data, result)
            data.forEach(val => {
                // 注意：set中的值为object的话也得深拷贝
                if (isObject(val)) {
                    result.add(clone(val))
                } else {
                    result.add(val)
                }
            })
            return result
        }

        // 收集键名（考虑了以Symbol作为key以及不可枚举的属性）
        const keys = Reflect.ownKeys(data)
        // 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性以及对应的属性描述
        const allDesc = Object.getOwnPropertyDescriptors(data)
        // 结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链， 这里得到的result是对data的浅拷贝
        const result = Object.create(Object.getPrototypeOf(data), allDesc)

        // 新对象加入到map中，进行记录
        map.set(data, result)

        // Object.create()是浅拷贝，所以要判断并递归执行深拷贝
        keys.forEach(key => {
            const val = data[key]
            if (isObject(val)) {
                // 属性值为 对象类型 或 函数对象 的话也需要进行深拷贝
                result[key] = clone(val)
            } else {
                result[key] = val
            }
        })
        return result
    }

    return clone(target)
}

```
### 利用lodash库的cloneDeep方法
```js
var obj={};
var deepCopy=JSON.parse(JSON.stringify(obj))
```
### jQuery.extend()方法
jquery 有提供一個$.extend可以用来做 Deep Copy
```JS
$.extend(deepCopy, target, object1, [objectN])//第一个参数为true,就是深拷贝
```
```JS
//深拷贝
 function deepCopy(dest){
  if(typeof dest === 'object'){
    if(!dest) return dest; // null
    var obj = dest.constructor(); // Object/Array
    //var obj= Array.isArray(dest) ? [] : {};
    for(var key in dest){
           var prop = dest[key]; // 避免相互引用造成死循环，如obj1.a=obj
          if (prop == dest) {
            continue;
          } if (Object.prototype.hasOwnProperty.call(dest, key)) {
      obj[key] = deepCopy(dest[key])
      }
    }
    return obj;
  } else {
    return dest;
  }
}

```
```JS
// 这是个深拷贝的方法
function deepClone(obj) {
    if (obj === null) return obj; 
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneObj = new obj.constructor();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepClone(obj[key]);
      }
    }
    return cloneObj;
}
```

```js
function deepClone(obj) {
    let newObj = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
            }
        }
    } 
    return newObj
}
const newObj = deepClone(oldObj));
```

```JS

/**
 * 判断是否是基本数据类型
 * @param value 
 */
function isPrimitive(value){
  return (typeof value === 'string' || 
  typeof value === 'number' || 
  typeof value === 'symbol' ||
  typeof value === 'boolean')
}

/**
 * 判断是否是一个js对象
 * @param value 
 */
function isObject(value){
  return Object.prototype.toString.call(value) === "[object Object]"
}

/**
 * 深拷贝一个值
 * @param value 
 */
function cloneDeep(value){

  // 记录被拷贝的值，避免循环引用的出现
  let memo = {};

  function baseClone(value){
    let res;
    // 如果是基本数据类型，则直接返回
    if(isPrimitive(value)){
      return value;
    // 如果是引用数据类型，我们浅拷贝一个新值来代替原来的值
    }else if(Array.isArray(value)){
      res = [...value];
    }else if(isObject(value)){
      res = {...value};
    }

    // 检测我们浅拷贝的这个对象的属性值有没有是引用数据类型。如果是，则递归拷贝
    Reflect.ownKeys(res).forEach(key=>{
      if(typeof res[key] === "object" && res[key]!== null){
        //此处我们用memo来记录已经被拷贝过的引用地址。以此来解决循环引用的问题
        if(memo[res[key]]){
          res[key] = memo[res[key]];
        }else{
          memo[res[key]] = res[key];
          res[key] = baseClone(res[key])
        }
      }
    })
    return res;  
  }

  return baseClone(value)
}

```
```JS
function deepClone(obj, hash = new WeakMap()) {//没有判断函数
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // cyclic reference
    const result = obj instanceof Set ? new Set(obj) // See note about this!
                 : obj instanceof Map ? new Map(Array.from(obj, ([key, val]) => 
                                        [key, deepClone(val, hash)])) 
                 : obj instanceof Date ? new Date(obj)
                 : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
                 // ... add here any specific treatment for other classes ...
                 // and finally a catch-all:
                 : obj.constructor ? new obj.constructor() 
                 : Object.create(null);
    hash.set(obj, result);
    return Object.assign(result, ...Object.keys(obj).map(
        key => ({ [key]: deepClone(obj[key], hash) }) ));
}

```