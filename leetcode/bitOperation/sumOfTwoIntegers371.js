/*
 * @Author: yhf 
 * @Date: 2021-11-We 02:48:32 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 02:48:32 
 */

/**
 * 371. 两整数之和
 * 给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    return b == 0 ? a : getSum(a ^ b, (a & b) << 1);
};
//在不考虑进位的情况下，其无进位加法结果为a⊕b。

// 而所有需要进位的位为a & b，进位后的进位结果为 (a & b) << 1。

var getSum = function (a, b) {
    while (b != 0) {
        let carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
};
//获取最大公约数
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}

var gdc=function(a, b) {
    while (b!=0) {
        let carry=a%b;
        a=b;
        b=carry; 
    }
    return a;
}
//最小公倍数为两数的乘积除以最大公约数。
function lcm( a,  b) {
    return a * b / gcd(a, b);
}