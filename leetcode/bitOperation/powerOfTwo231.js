/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 10:30:08 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 10:30:08 
 */


/**
 * 231. 2 的幂
 * 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 
 * @param {number} n
 * @return {boolean}
 */
//利用z&z-1消去最右一位1
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) == 0;
};

var isPowerOfTwo = function (n) {
    let count = 0;
    while (n != 0) {
        if ((n & 1) == 1) {
            count++;
        }
        if (count > 1) {
            return false;
        }
        n >>= 1;
    }
    return count==1;

};
//n&(-n)) 直接获取 n 二进制表示的最低位的 1
var isPowerOfTwo = function (n) {
  return n>0&&((n&(-n))==n);
};
//判断是否约数
var isPowerOfTwo = function (n) {
    let big=1<<30;
    return n>0&&(big%n==0);
  };