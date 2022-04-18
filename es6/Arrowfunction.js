/*
 * @Author: yhf 
 * @Date: 2021-10-Su 09:40:54 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Su 09:40:54 
 */

const doubleValue = value => {
    return value * 2;
}
console.log(doubleValue(3));

const greeting = () => {
    console.log("hello world");
}

greeting();
const printName = name => "hello " + name; //只有一个参数，语句只有一行

console.log(printName("mikey"));

const addNumbers = (a, b) => a + b; //语句只有一行

console.log(addNumbers(1, 2));

const companies = ["google", "micrsoft", "apple"];
const result = companies.map(company => company + "is a company");
console.log(result);

const ages = [14, 19, 21];
const result2 = ages.filter(age => age > 18);
console.log(result2);

var button = document.getElementById("the-button");
button.addEventListener("click", function () {
    this.classList.add("bigger");//普通函数时this为事件对象，箭头函数时this为windows
    // var that=this;
    // setTimeout(function () {
    //     that.innerHTML="clicked";
    // },1000)
    setTimeout(() => this.innerHTML = "clicked", 1000) //普通函数时this为windows，箭头函数不改变this
})

const toArray=function (arrLike) {
    // if (Array.from) {
    //    return Array.from(arrLike); 
    // }
    // return [].slice.call(arrLike);
    return Array.from?Array.from(arrLike):[].slice.call(arrLike);
    }
    
const toArray2=arrLike=>Array.from?Array.from(arrLike):[].slice.call(arrLike);
const toArray3 = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();

const toArray4 =Array.from ? Array.from : obj => [].slice.call(obj);

if(!Array.from){
    // Array.prototype.from=function(arrLike){
    //     return [].slice.call(arrLike);
    // }
    Array.prototype.from=arrLike=> [].slice.call(arrLike);
   
}
// 箭头函数和自执行函数
// 总结：

// 最大的区别就是：

// 自执行函数在定义的时候就会执行一次
// 自执行函数定义的时候，必须传入参数，用于立即执行
// 箭头函数只是一个匿名函数，是不会自己执行的。
