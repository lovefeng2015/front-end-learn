/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 11:25:34 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 11:25:34 
 */

/**
 * 342. 4的幂
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。
 * @param {number} n
 * @return {boolean}
 */
//判断位数的位置是否为奇数
var isPowerOfFour = function (n) {
    let count = 0;
    if (!(n > 0 && ((n & (-n)) == n))) {
        return false;
    }
    while (n != 0) {
        n >>= 1;
        count++;
    }
    if (count % 2 == 1) {
        return true;
    }
    return false;
};
//这种数在二进制表示中有且只有一个奇数位为 1
var isPowerOfFour = function (n) {
    const M1 = 0x55555555;
    return n > 0 && ((n & (-n)) == n) && ((n & M1) != 0);
}

var isPowerOfFour = function (n) {
    const M1 = 0x55555555;
    return n > 0 && ((n & (n-1)) == 0) && ((n & M1) != 0);
}
var isPowerOfFour = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
};
var isPowerOfFour = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) === n;
};