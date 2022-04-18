/*
 * @Author: yhf 
 * @Date: 2021-10-Su 11:17:43 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Su 11:17:43 
 */
//set 成员不能重复
const numberSet=new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.has(2);//true
numberSet.has(5);//false
numberSet.delete(2)//true;
numberSet.delete(7)//false;
numberSet.size;//长度
numberSet.forEach(number=>console.log(number));
numberSet.clear();//清空

const person=new Map();
person.Set("name","yhf");
person.Set("age",39);
person.Set("hobby","game");
person.get("name");//yhf
person.has("name")//true;
person.size;
person.delete("name");
person.clear();
person.forEach(value=>console.log(value));