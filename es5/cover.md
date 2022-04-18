### 怎么转数字为字符串

[What's the best way to convert a number to a string in JavaScript](https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E4%BD%8D%E8%BF%90%E7%AE%97.md#5-%E7%BF%BB%E8%BD%AC%E4%B8%80%E4%B8%AA%E6%95%B0%E7%9A%84%E6%AF%94%E7%89%B9%E4%BD%8D)



这些方法按性能递减顺序排列。

var num = 1
方法1：
```
num = `${num}`//没有其他问题
```
方法2：
```
num = num + ''//调用valueof，Symbols会报错
```
方法3：
```
num = String(num)//在无原型的对象（如） 上仍然会失败 Object.create(null)
```
方法4：
```
num = num.toString()//null 和undefined会报错
```

测试方法
```
[undefined,null,NaN,true,false,"2","",3].forEach(elem=>{
  console.log(`${elem}`, typeof(`${elem}`))
})
```
```
const testCases = [
  ["${n}", (n) => `${n}`], // 👈
  ['----', undefined],

  [`"" + n`, (n) => "" + n],
  [`'' + n`, (n) => '' + n],
  [`\`\` + n`, (n) => `` + n],
  [`n + ''`, (n) => n + ''],
  ['----', undefined],

  [`String(n)`, (n) =>  String(n)],
  ["${n}", (n) => `${n}`], // 👈

  ['----', undefined],
  [`(n).toString()`, (n) => (n).toString()],
  [`n.toString()`, (n) => n.toString()],

]

for (const [name, testFunc] of testCases) {
  if (testFunc === undefined) {
    console.log(name)
    continue
  }
  console.time(name)
  for (const n of [...Array(1000000).keys()]) {
    testFunc(n)
  }
  console.timeEnd(name)
}
```

```
let i=0;
    console.time("test1")
    for(;i<10000000;i=i+1){
    	const string = "" + 1234;
    }
    console.timeEnd("test1")
    
    i=0;
    console.time("test1.1")
    for(;i<10000000;i=i+1){
    	const string = '' + 1234;
    }
    console.timeEnd("test1.1")
    
    i=0;
    console.time("test1.2")
    for(;i<10000000;i=i+1){
    	const string = `` + 1234;
    }
    console.timeEnd("test1.2")
    
    i=0;
    console.time("test1.3")
    for(;i<10000000;i=i+1){
    	const string = 1234 +  '';
    }
    console.timeEnd("test1.3")
    
    
    i=0;
    console.time("test2")
    for(;i<10000000;i=i+1){
    	const string = (1234).toString();
    }
    console.timeEnd("test2")
    
    
    i=0;
    console.time("test3")
    for(;i<10000000;i=i+1){
    	const string = String(1234);
    }
    console.timeEnd("test3")
    
    
    i=0;
    console.time("test4")
    for(;i<10000000;i=i+1){
    	const string = `${1234}`;
    }
    console.timeEnd("test4")
    
    i=0;
    console.time("test5")
    for(;i<10000000;i=i+1){
    	const string = 1234..toString();
    }
    console.timeEnd("test5")
    
    i=0;
    console.time("test6")
    for(;i<10000000;i=i+1){
    	const string = 1234 .toString();
    }
    console.timeEnd("test6")

```