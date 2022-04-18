/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 09:11:50 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 09:11:50 
 */


/**
 * 326. 3的幂
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
 * @param {number} n
 * @return {boolean}
 */
//判断是否为最大 33 的幂的约数
 var isPowerOfThree = function(n) {
    return n > 0 && (1162261467 % n == 0);
};
//试除法
var isPowerOfThree = function(n) {
    while (n !== 0 && n % 3 === 0) {
        n = (n / 3)>>0;
    }
    return n === 1;
};

