/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 11:33:35 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 11:33:35 
 */


/**
 * 实现 strStr()
 * 
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */



var strStr = function (haystack, needle) {
    const hayLength = haystack.length;
    const needleLength = needle.length;
    if (needleLength == 0) {
        return 0;
    }
    if (hayLength < needleLength) {
        return -1;
    }
    let left = 0;
    const startChar = needle.charAt(0);
    while (left < hayLength) {
        if (haystack.charAt(left) == startChar) {
            if (haystack.substring(left, (left + needleLength)) == needle) {
                return left;
            }
        }
        left++;
        if ((hayLength - left) < needleLength) {
            return -1;
        }
    }
    return -1;
};

var strStr = function (haystack, needle) {
    const hayLength = haystack.length;
    const needleLength = needle.length;
    if (needleLength == 0) {
        return 0;
    }
    if (hayLength < needleLength) {
        return -1;
    }
    for (let i = 0; i + needleLength <= hayLength; i++) {
        let flag = true;
        for (let j = 0; j < needleLength; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};
var strStr = function (haystack, needle) {
    const hayLength = haystack.length;
    const needleLength = needle.length;
    if (needleLength == 0) {
        return 0;
    }
    if (hayLength < needleLength) {
        return -1;
    }
    return haystack.indexOf(needle);
};
//官方Kmp
var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        if (needle[i] == needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1];
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
};
//[帮你把KMP算法学个通透！（求next数组代码篇）](https://www.bilibili.com/video/BV1M5411j7Xx/?spm_id_from=333.788.recommend_more_video.-1)
//[如何更好地理解和掌握 KMP 算法?](https://www.zhihu.com/question/21923021)
//[实现strStr](https://www.programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)
var strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;

    const getNext = (needle) => {
        let next = [];
        let j = 0;
        next.push(j);

        for (let i = 1; i < needle.length; ++i) {
            while (j > 0 && needle[i] !== needle[j])
                j = next[j - 1];
            if (needle[i] === needle[j])
                j++;
            next.push(j);
        }

        return next;
    }

    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; ++i) {
        while (j > 0 && haystack[i] !== needle[j])
            j = next[j - 1];
        if (haystack[i] === needle[j])
            j++;
        if (j === needle.length)
            return (i - needle.length + 1);
    }

    return -1;
};

