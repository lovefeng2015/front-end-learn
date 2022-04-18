/*
 * @Author: yhf 
 * @Date: 2021-10-Mo 01:31:54 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Mo 01:31:54 
 */
//对象
const person={
    name:"yhf",
    age:39,
    holly:"game"
}
const {name,age,holly}=person;
console.log(name,age,holly);

const person2={
    name2:"yhf",
    age:39,
    holly:"game",
    social:{
        bilili:"12234",
        youtube:"yhf286"
    }
}
const {name2,social:{bilili}}=person2;
console.log(name2,bilili);

const {name2:personName,social:{bilili:bili}}=person2;
console.log(personName,bili);

const {city="nanning"}=person2;
console.log(city);

//数组
const info=["yhf",39,"game"];
const [name3,age2,holly2]=info;
console.log(name3,age2,holly2);

//互换值
let a=1;
let b=-1;
[a,b]=[b,a];
console.log(a,b);

