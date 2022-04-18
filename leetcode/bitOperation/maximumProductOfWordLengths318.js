/*
 * @Author: yhf 
 * @Date: 2021-11-We 05:02:19 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 05:02:19 
 */

/**
 * 最大单词长度乘积
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0
 * 
 * @param {string[]} words
 * @return {number}
 */
//用一个 32 位的整数来存储每个字符是否出现过
var maxProduct = function (words) {
    const length = words.length;
    const arr = new Array(length).fill(0);
    const base = 'a'.charCodeAt();
    for (let i = 0; i < length; i++) {
        for (const x of words[i]) {
            arr[i] |= 1 << (x.charCodeAt() - base);
        }
    }
    let max = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if ((arr[i] & arr[j]) == 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }

        }

    }
    return max;
};

var maxProduct = function(words) {
    const map = new Map();
    const length = words.length;
    const base = 'a'.charCodeAt();
    for (let i = 0; i < length; i++) {
        let mask = 0;
        const word = words[i];
        const wordLength = word.length;
        for (const x of words[i]) {
            mask|= 1 << (x.charCodeAt() - base);
        }
        if (wordLength > (map.get(mask) || 0)) {
            map.set(mask, wordLength);
        }
    }
    let maxProd = 0;
    const maskSet = Array.from(map.keys());
    for (const mask1 of maskSet) {
        const wordLength1 = map.get(mask1);
        for (const mask2 of maskSet) {
            if ((mask1 & mask2) === 0) {
                const wordLength2 = map.get(mask2);
                maxProd = Math.max(maxProd, wordLength1 * wordLength2);
            }
        }
    }
    return maxProd;
};

