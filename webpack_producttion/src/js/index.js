import '../css/a.css';
import '../css/b.css';
import {multy} from './test'
// import "@babel/polyfill";

function add(x, y) {
  return x + y;
}
const mult=(a,b)=>a*b;
const promise=new Promise((resolve)=>{
      setTimeout(() => {
        console.log('定时器执行完了~');
        resolve();
      }, 1000);
})

// 下一行eslint所有规则都失效(下一行不进行eslint检查)
// eslint-disable-next-line
console.log(add(2, 3));
console.log(mult(2,3));

function sum(...arg) {
  return arg.reduce((acc,cur)=>acc+cur,0);
}
console.log(sum(1,2,3,4,5));
console.log(multy(3,4));