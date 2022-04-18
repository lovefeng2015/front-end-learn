/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 07:38:27 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 07:38:27 
 */


/**
 * 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let negative = false;
    if (x < 0) {
        negative = true;
    }
    let original = Math.abs(x);
    let str = '' + original;
    let strArray=[...str].reverse().join('');
    let result = parseInt(strArray, 10);
    if(result>Math.pow(2,31)-1){
        return 0;
    }
    if (negative) {
        return '-' + result;
    }
    return result;

};

var reverse = function (x) {
    let negative = false;
    if (x < 0) {
        negative = true;
    }
    let original = Math.abs(x);
    let reverseNumber=0;
    while (original!=0) {
        reverseNumber=reverseNumber*10+original%10;
        original=(original/10)>>0;
    }
    if(reverseNumber>Math.pow(2,31)-1){
        return 0;
    }
    if (negative) {
        return '-' + reverseNumber;
    }
    return reverseNumber;

};

var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};




