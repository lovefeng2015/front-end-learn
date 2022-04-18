/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 03:42:55 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 03:42:55 
 */


/**
 * 回文数
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const str = x.toString(); //""+x
    const length = str.length;
    let left = 0,
        right = length - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;

    }
    return true;

};
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const str = x.toString(); //""+x
    const length = str.length;
    let left = 0,
        right = length - 1;
    let strArr = Array.from(str);
    swap(strArr, left, right);
    if (strArr.join('') == str) {
        return true;
    }
    return false;
};
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    const str = x.toString(); //""+x
    let strArr = numberToArr(x);
    if (strArr.join('') == str) {
        return true;
    }
    return false;
};
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    let strArr = numberToArr(x);
    if (parseInt(strArr.join('')) == x) {
        return true;
    }
    return false;
};

var isPalindrome = function (x) {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = (x / 10) >> 0;
    }
    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x == revertedNumber || x == ((revertedNumber / 10) >> 0);
};
//整个反转
var isPalindrome = function (x) {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revertedNumber = 0;
    let orignNum=x;
    while (orignNum != 0) {
        revertedNumber = revertedNumber * 10 + orignNum % 10;
        orignNum = (orignNum / 10) >> 0;
    }
    if (x == revertedNumber) {
        return true;
    }
    return false;
};
//reverse
var isPalindrome = function (x) {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let str=""+x;
    let strArr=[...str].reverse();
    if(strArr.join('')===str){
        return true;
    }
    return false;
};

function numberToArr(num) {
    let arr = [];
    let index = 0;
    while (num > 0) {
        let n = num % 10;
        arr[index++] = n;
        num = (num / 10) >> 0;
    }
    return arr;
}

function swap(strArr, start, end) {
    let left = start,
        right = end;
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }

}