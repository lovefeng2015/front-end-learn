/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 05:26:37 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 05:26:37 
 */



/**
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ransom-note
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 赎金长度 小于 杂志 长度
// 赎金中同一个字符的数量小于等于杂志中同个字符的长度
// 根据字母字典 把字符序号放在索引，把数量放在值上
// 循环杂志，如果碰到同个字符就减一，循环全部后，如果发现某个元素还是大于0，证明不符合条件



var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    const base = 'a'.charCodeAt();
    for (const i of ransomNote) {
        table[i.charCodeAt() - base]++;
    }
    for (const i of magazine) {
        table[i.charCodeAt() - base]--;
    }
    return table.every(value => value <= 0)
};
// 因为题目所只有小写字母，那可以采用空间换取时间的哈希策略， 用一个长度为26的数组还记录magazine里字母出现的次数。

// 然后再用ransomNote去验证这个数组是否包含了ransomNote所需要的所有字母。

// 依然是数组在哈希法中的应

var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const strArr = new Array(26).fill(0),
        base = "a".charCodeAt();
    for (const s of magazine) {
        strArr[s.charCodeAt() - base]++;
    }
    for (const s of ransomNote) {
        const index = s.charCodeAt() - base;
        if (!strArr[index]) return false;
        strArr[index]--;
    }
    return true;
};