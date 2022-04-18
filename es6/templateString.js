/*
 * @Author: yhf 
 * @Date: 2021-10-Su 10:30:43 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Su 10:30:43 
 */
//模板字符串支持换行
 const person={
     name:"yhf",
     age:39,
     homeTown:"guangxi",
     hobby:"game"
 }

 const info2=`大家好，我叫${person.name},今年${person.age}岁,来自${person.homeTown}，我的爱好是${person.hobby}，明年${person.age+1}岁了`;
 console.log(info2);
 console.log("第一行"+
 "第二行");
 console.log("第一行\n第二行");
 console.log(
 `第一行
第二行`);

function calt(x) {
    return `你输入的参数是${x}，它的两倍是${2*x}，它的平方是${x*x}`;
}
console.log(calt(5));