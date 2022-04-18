/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 10:19:56 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 10:19:56 
 */


/**
 *  计数二进制子串
 * 给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let counts = [];
    let left = 0,
        length = s.length;
    while (left < length) {
        const c = s[left];
        let count = 0;
        while (left < length && s[left] == c) {
            left++;
            count++;
        }
        counts.push(count);
    }
    let ans = 0;
    for (let i = 1; i < counts.length; i++) {
        ans += Math.min(counts[i], counts[i - 1])
    }
    return ans;

};

var countBinarySubstrings = function (s) {
     // pre 前一个数字连续出现的次数，cur 当前数字连续出现的次数，result 结果子串个数
    let ans = 0;
    let prv = 0,
        cur = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) { // 判断当前数字是否与后一个数字相同
            cur++;// 相同，则当前数字出现的次数cur加1
        } else {// 不同，则当前数字事实上变成了前一个数字，当前数字的次数重置为1
            prv = cur;
            cur = 1;
        }
        if (prv >= cur) {// 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
            ans++;
        }
    }
    return ans;
};