/*
 * @Author: yhf 
 * @Date: 2021-11-We 09:59:43 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 09:59:43 
 */

/**
 * 693. 交替位二进制数
 * 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 * 
 * @param {number} n
 * @return {boolean}
 */
//对于 1010 这种位级表示的数，把它向右移动 1 位得到 101，这两个数每个位都不同，因此异或得到的结果为 1111
var hasAlternatingBits = function (n) {
    let a = (n >> 1) ^ n;
    return (a & (a + 1)) == 0;
};
//转化为二进制的字符串
var hasAlternatingBits = function (n) {
    let str = (n).toString(2);
    for (let i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1]) {
            return false;
        }
    }
    return true;
};
//通过不断求余数
var hasAlternatingBits = function (n) {
    while (n != 0) {
        let pop = n % 2;
        n >>= 1;
        if (pop == (n % 2)) {
            return false;
        }
    }
    return true;
};

var hasAlternatingBits = function (n) {
    while (n != 0) {
        let pop = n&1;
        n >>= 1;
        if (pop == ( n&1)) {
            return false;
        }
    }
    return true;
};