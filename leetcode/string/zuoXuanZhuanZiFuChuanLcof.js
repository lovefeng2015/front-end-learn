/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 10:42:20 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 10:42:20 
 */


/**
 * 剑指 Offer 58 - II. 左旋转字符串
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    const str = Array.from(s);
    const length = str.length;
    const newStr = new Array(length);
    let start = 0;
    for (let i = n; i < length; i++) {
        newStr[start++] = str[i];
    }
    for (let i = 0; i < n; i++) {
        newStr[start++] = str[i];
    }
    return newStr.join('');
};

var reverseLeftWords = function (s, n) {
    return s.substring(n) + s.substring(0, n);
};

var reverseLeftWords = function (s, n) {
   
    const length = s.length;
    const newStr = new Array(length);
    let start = 0;
    for (let i = n; i < length; i++) {
        newStr[start++] = s.charAt(i);
    }
    for (let i = 0; i < n; i++) {
        newStr[start++] = s.charAt(i);
    }
    return newStr;
};

//求余等到正确的下标
var reverseLeftWords = function (s, n) {
   
    const length = s.length;
    const newStr = new Array(length);
    let start = 0;
    for (let i = n; i < (length+n); i++) {
        newStr[start++] = s.charAt(i%length);
    }
  
    return newStr.join('');
};
//使用+来替代数组
var reverseLeftWords = function (s, n) {
   
    const length = s.length;
    let newStr = '';
    for (let i = n; i < (length+n); i++) {
        newStr+= s.charAt(i%length);
    }
  
    return newStr;
};