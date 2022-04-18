/*
 * @Author: yhf 
 * @Date: 2021-10-Sa 10:47:21 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Sa 10:47:21 
 */
//every
if (!Array.prototype.every) {
    Array.prototype.every = function(callbackfn, thisArg) {
      'use strict';
      var T, k;
  
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }
  
      // 1. Let O be the result of calling ToObject passing the this
      //    value as the argument.
      var O = Object(this);
  
      // 2. Let lenValue be the result of calling the Get internal method
      //    of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;
  
      // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
      if (typeof callbackfn !== 'function') {
        throw new TypeError();
      }
  
      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }
  
      // 6. Let k be 0.
      k = 0;
  
      // 7. Repeat, while k < len
      while (k < len) {
  
        var kValue;
  
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
  
          // i. Let kValue be the result of calling the Get internal method
          //    of O with argument Pk.
          kValue = O[k];
  
          // ii. Let testResult be the result of calling the Call internal method
          //     of callbackfn with T as the this value and argument list
          //     containing kValue, k, and O.
          var testResult = callbackfn.call(T, kValue, k, O);
  
          // iii. If ToBoolean(testResult) is false, return false.
          if (!testResult) {
            return false;
          }
        }
        k++;
      }
      return true;
    };
  }

  //下例使用 filter() 根据搜索条件来过滤数组内容。

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

/**
 * Array filters items based on search criteria (query)
 */
//  const filterItems = (query) => {
//     return fruits.filter((el) =>
//       el.toLowerCase().indexOf(query.toLowerCase()) > -1
//     );
//   }

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

//用对象的属性查找数组里的对象
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }

//数组去重
// ES6
function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
// or
function unique (arr) {
  return Array.from(new Set(arr))
}
[...(new Set(arr))]
//JavaScript JS生成一个随机且不重复的数组


function selectRandom (num, from, to) {
    
  let arr = [];
  let json = {
};
  let needNum;

  if (from - to >= 0) {

    console.log(111)
    return '起始值要小于末尾值'
  }

  if (to - from == to) {

    needNum = parseInt(to) + 1;
  } else {

    needNum = to - from;
  }
  if (num > needNum) {

    return
  } else {

    while (arr.length < num) {

    //  let ranNum = Math.ceil(Math.random() * needNum);
let ranNum = Math.floor(Math.random() * (to- from + 1)) + from;
      if (!json[ranNum]) {

        json[ranNum] = 1;
        arr.push(ranNum)
      }
    }
    return arr;
  }
}

//console.log(selectRandom(99, 1, 100))
const arr=selectRandom(99, 1, 100);
console.log(arr);
//找出缺失的数字
let set=new Set(arr);
for (let i = 1; i <=100; i++) {
 if (!set.has(i)) {
   console.log(i);
 }
  
}