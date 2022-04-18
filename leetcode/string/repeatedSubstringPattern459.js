/*
 * @Author: yhf 
 * @Date: 2021-11-Th 07:18:21 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 07:18:21 
 */


/**
 * 重复的子字符串
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const length = s.length;
    if (length == 0) {
        return false;
    }
    const getNext = function (s) {
        let j = 0;
        let next = [];
        next[0] = j;
        for (let i = 1; i < s.length; i++) {
            while (j > 0 && s[i] != s[j]) {
                j = next[j - 1];
            }
            if (s[i] == s[j]) {
                j++;
            }
            next[i] = j;
        }
        return next;
    };
    let next = getNext(s);
    if (next[length - 1] != 0 && length % (length - next[length - 1]) === 0) {
        return true;
    }
    return false;
};

var repeatedSubstringPattern = function (s) {
    const length = s.length;
    if (length == 0) {
        return false;
    }
    const getNext = function (s) {
        let j = -1;
        let next = [];
        next[0] = j;
        for (let i = 1; i < s.length; i++) {
            while (j >= 0 && s[i] != s[j + 1]) {
                j = next[j];
            }
            if (s[i] == s[j + 1]) {
                j++;
            }
            next[i] = j;
        }
        return next;
    };
    let next = getNext(s);
    if (next[length - 1] != -1 && length % (length - (next[length - 1] + 1)) === 0) {
        return true;
    }
    return false;
};

var repeatedSubstringPattern = function (s) {
    const length = s.length;
    if (length == 0) {
        return false;
    }
    return (s + s).indexOf(s, 1) !== length;

};

// 假设给定字符串s可由一个子串x重复n次构成，即s=nx。 现构造新字符串t=2s，即两个s相加，由于s=nx，则t=2nx。 去掉t的开头与结尾两位，则这两处的子串被破坏掉，此时t中包含2n-2个子串。 由于t中包含2n-2个子串，s中包含n个子串，若t中包含s，则有2n-2>=n，可得n>=2，由此我们可知字符串s可由一个子串x重复至少2次构成，判定为true；反之，若t中不包含s，则有2n-2<n，可得n<2，n只能为1，由此我们可知字符串s=x，假定的子串就为s本身，判定为false
var repeatedSubstringPattern = function (s) {
    const length = s.length;
    if (length == 0) {
        return false;
    }
    let str=s+s;
    str=str.substring(1,length*2-1);
    return str.indexOf(s) !==-1;

};