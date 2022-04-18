//[How to convert a string to an integer in JavaScript?](https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript/1133814#1133814)
x*1//转换为数字
+x//转换为数字
x-0//转换为数字
Number(x)//如果参数无法被转换为数字，则返回NaN,注意`null`或者`空字符串`转化为0
parseInt(x,10)//转换为整数

function dec2bin(dec){//把十进制转换为二进制
    return (dec >>> 0).toString(2);
}

function bin2dec(bin){//把二进制转换为十进制
    return parseInt(bin, 2).toString(10);
}
//JavaScript的位运算以32二进制执行
// 进行位运算时，先将数值转换成32位有符号整数（重点：整数），既然取整了，自然就去除了小数部分了
x>>0//取整
~~(x)//取整
(x)|0//取整
Math.floor(x)//正数取整 向下取整，得到小于或等于该数字的最大整数
Math.ceil(x)//负数取整 取向上最接近的整数
Math.round(number) //四舍五入 

//使用~, >>, <<, >>>, |来取整

console.log(~~ 6.83)    // 6
console.log(6.83 >> 0)  // 6
console.log(6.83 << 0)  // 6
console.log(6.83 | 0)   // 6
//number^0 number<<0 number|0  、~~number 一个特别要注意的地方，处理比较大的数字时（当数字范围超出 ±2^31?1 即：2147483647），会有一些异常情况


// >>>不可对负数取整
console.log(6.83 >>> 0)   // 6
//~~取整时直接抹去了小数点后的有效数，所以当n>=0时,是向下取整，当n<0时，是向上取整。
function foo(n){
    if(n>=0){
        return Math.floor(n);
    }else{
        return Math.ceil(n);
    }
}
console.log(foo(3.9)==~~3.9);
//true
console.log(foo(-3.8)==~~-3.8);
//tru

// 链接：https://juejin.cn/post/6844904153496420365


// 链接：https://juejin.cn/post/6844903568906911752


// function getDigitNumber(startNumber, endNumber) {
//     var reg = /^[1-9]\d*$/;
//     if (startNumber < endNumber && reg.test(startNumber) && reg.test(endNumber)) {
//         for (var i = startNumber; i < endNumber; i++) {
//             var numberLength = 0; // 得到这个数字是几位数
//             var num = i;
//             while (num >= 1) {
//                 num = num / 10;
//                 numberLength++;
//             }
//             // console.log(numberLength)
//             var numArr = []; // 得到的每个数字的各个位数都是几，123则改成[1,2,3],3845则改成[3,8,4,5]
//             for (var j = 0; j < numberLength; j++) {
//                 let k = numberLength - j;
//                 if (j == 0) { // 这里的逻辑请看下图，这也是为什么第一位需要添加一个判断
//                     numArr.push(Math.floor(i / Math.pow(10, k - 1)));
//                 } else {
//                     numArr.push(Math.floor(i % Math.pow(10, k) / Math.pow(10, k - 1)));
//                 }
//             }
//             console.log(i)
//             console.log(numArr)
//         }

//     }else{
//         console.warn("请输入正整数，且结束的数字大于等于开始数字")
//     }
// }
function getDigitNumber(num) {
    var reg = /^[1-9]\d*$/;
    if (reg.test(num) && reg.test(num)) {
            var numberLength = 0; // 得到这个数字是几位数
            let originNum=num;
            //var num = i;
            while (num >= 1) {
                num = num / 10;
                numberLength++;
            }
            console.log(numberLength)
            // console.log(numberLength)
            var numArr = []; // 得到的每个数字的各个位数都是几，123则改成[1,2,3],3845则改成[3,8,4,5]
            for (var j = 0; j < numberLength; j++) {
                let k = numberLength - j;
                if (j == 0) { // 这里的逻辑请看下图，这也是为什么第一位需要添加一个判断
                    numArr.push(Math.floor(originNum / Math.pow(10, k - 1)));
                } else {
                    numArr.push(Math.floor(originNum % Math.pow(10, k) / Math.pow(10, k - 1)));
                }
            }
            //console.log(i)
            //console.log(numArr)
            return      numArr;
      
    }else{
        console.warn("请输入正整数")
    }
}
/**
 * @param {number} n
 * @return {boolean}
 * getNext获取所有位数
 */
 function getNext(n) {
    let numArr = [];
    while (n > 0) {
        let result = n % 10;
        numArr.push(result);
        n = (n / 10) >> 0;//取整
    }
    numArr.reverse();
    return numArr;
}