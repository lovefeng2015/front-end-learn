/*
 * @Author: yhf 
 * @Date: 2021-11-Th 04:54:12 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 04:54:12 
 */


/**
 * 680. 验证回文字符串 Ⅱ
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return isPalindrome(s, left, right - 1) || isPalindrome(s, left + 1, right);
        }
        left++;
        right--;
    }

};

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}