/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 03:26:12 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 03:26:12 
 */
//https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-leetcode-solution/
//t 是 ss 的异位词等价于「两个字符串排序后相等」。因此我们可以对字符串 s 和 tt分别排序，看排序后的字符串是否相等即可判断。此外，如果 s 和 t 的长度不同，t 必然不是 s 的异位词。
//使用场景，字符串的排序，字符串转换为数组，数组转换为字符串
//利用[...str]来结构字符串为数组，再用sort来排序
//利用join来把数组转换为字符串


/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
    注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // if (s.length != t.length) {
    //     return false;
    // }
    // let str1 = [...s];
    // let str2 = [...t];
    // str1.sort();
    // str2.sort();
    // str1 = str1.join("");
    // str2 = str2.join("");
    // if (str1 !== str2) {
    //     return false;
    // }
    // return true;
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};

// 方法二：哈希表
// 从另一个角度考虑，t 是 ss的异位词等价于「两个字符串中字符出现的种类和次数均相等」。
//由于字符串只包含 26 个小写字母，因此我们可以维护一个长度为 26 的频次数组table，先遍历记录字符串 s 中字符出现的频次，然后遍历字符串 t，减去 table 中对应的频次，如果出现 table[i]<0，则说明 t包含一个不在 s 中的额外字符，返回 false 即可。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-leetcode-solution/

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const base = "a".charCodeAt();
        const index = s.charCodeAt(i) - base;
        table[index]++;
    }
    for (let i = 0; i < t.length; i++) {
        const base = "a".charCodeAt();
        const index = t.charCodeAt(i) - base;
        table[index]--;
        if (table[index] < 0) {
            return false
        }
    }
    return true;
};
//先用扩展解构成数组
// 定义一个数组叫做record用来上记录字符串s里字符出现的次数。

// 需要把字符映射到数组也就是哈希表的索引下表上，因为字符a到字符z的ASCII是26个连续的数值，所以字符a映射为下表0，相应的字符z映射为下表25。

// 再遍历 字符串s的时候，只需要将 s[i] - ‘a’ 所在的元素做+1 操作即可，并不需要记住字符a的ASCII，只要求出一个相对数值就可以了。 这样就将字符串s中字符出现的次数，统计出来了。

// 那看一下如何检查字符串t中是否出现了这些字符，同样在遍历字符串t的时候，对t中出现的字符映射哈希表索引上的数值再做-1的操作。

// 那么最后检查一下，record数组如果有的元素不为零0，说明字符串s和t一定是谁多了字符或者谁少了字符，return false。

// 最后如果record数组所有元素都为零0，说明字符串s和t是字母异位词，return true。
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    let str1 = [...s];
    let str2 = [...t];
    const base = "a".charCodeAt();
    const table = new Array(26).fill(0);
    str1.forEach(value => table[value.charCodeAt() - base]++);
    str2.forEach(value => table[value.charCodeAt() - base]--);
    return table.every(value => value == 0);
};
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const resSet = new Array(26).fill(0);
    const base = "a".charCodeAt();
    for (const i of s) {
        resSet[i.charCodeAt() - base]++;
    }
    for (const i of t) {
        if (!resSet[i.charCodeAt() - base]) return false;
        resSet[i.charCodeAt() - base]--;
    }
    return true;
};
//遍历s，如果map中没有对应的字符，则把这个字符存在map，并把value设置为1，如果再次找到，则把对应的字符重新设置为value+1;然后遍历t，如果在Map中第一次没有找到对应的字符则返回false，如果找到，
//则把对应的字符重新设置为value-1，当再次循环到此字符时，如果对应的value<=0,那证明此字符的数量不一样，返回false
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const value = map.has(char) ? map.get(char) + 1 : 1;
        map.set(char, value);
    }
    for (let i = 0; i < t.length; i++) {
        const char = t.charAt(i);
        if (map.get(char) > 0) {
            const value = map.get(char) - 1;
            map.set(char, value);
        } else {
            return false;
        }
    }
    return true;
};