/*
 * @Author: yhf 
 * @Date: 2021-11-Th 10:21:19 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 10:21:19 
 */


/**
 * 最长回文串
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const length = s.length;
    if (length == 0) {
        return 0;
    }
    let map = new Map();
    for (let i = 0; i < length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let count = 0;
    for (const value of map.values()) {
        if (value % 2 == 0) {
            count += value;
        } else {
            count += value - 1;
        }
    }
    if (count < length) {
        return count + 1;
    }
    return count;

};

var longestPalindrome = function (s) {
    const length = s.length;
    if (length == 0) {
        return 0;
    }
    let map = new Map();
    for (let i = 0; i < length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let count = 0;
    for (const value of map.values()) {
        count += ((value / 2) >> 0) * 2;
        if (value % 2 == 1 && count % 2 == 0) {
            count++;
        }
    }
    return count;

};

//如果没有奇数，数量等于字符串长度，如果有 减去奇数数量，然后加1
var longestPalindrome = function (s) {
    const length = s.length;
    if (length == 0) {
        return 0;
    }
    let map = new Map();
    for (let i = 0; i < length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let count = 0;
    for (const value of map.values()) {
        count += value % 2;
    }
    return count == 0 ? length : (length - count + 1);
};

var longestPalindrome = function (s) {
    const length = s.length;
    if (length == 0) {
        return 0;
    }
    let map = new Array(128).fill(0);
    const base='A'.charCodeAt();
    for (let i = 0; i < length; i++) {
        map[s.charCodeAt[i]-base]++;
    }
    let count = 0;
    for (const value of map.values()) {
        count += value % 2;
    }
    return count == 0 ? length : (length - count + 1);
};