/*
 * @Author: yhf 
 * @Date: 2021-11-Th 09:19:55 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 09:19:55 
 */


/**
 * 524. 通过删除字母匹配到字典里最长单词
 * 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
 * 
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    let max = 0;
    let map = new Map();
    for (let i = 0; i < dictionary.length; i++) {
        let str = dictionary[i];
        if (isInCludes(s, str)) {
            map.set(str, str.length);
            max = Math.max(max, str.length);
        }

    }

    if (max > 0) {
        let arr = [];
        for (const [key, value] of map.entries()) {
            if (value == max) {
                arr.push(key);
            }

        }
        arr.sort();
        return arr[0];
    }
    return '';
};
//单独函数 双指针判断是否包含特定字符串
function isInCludes(s, str) {
    if (str.length > s.length) {
        return false;
    }
    let index = 0;
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == str[index]) {
            arr[index] = str[index];
            index++;
        }
        if (index == str.length) {
            return true;
        }
    }
}

var findLongestWord = function (s, dictionary) {
    let longestWord="";
    for (const target of dictionary) {
        let l1=longestWord.length,l2=target.length;
        if(l1>l2||(l1==l2&&longestWord.charCodeAt()<target.charCodeAt())){
            continue;
        }
        if(isSubstr(s,target)){
            longestWord=target;
        }
        
    }
    return longestWord;
};

function isSubstr(s, target) {
    let i = 0,
        j = 0;
    while (i < s.length && j < target.length) {
        if (s[i] == target[j]) {
            j++;
        }
        i++;
    }
    return j==target.length;
}
var findLongestWord = function(s, dictionary) {
    let res = "";
    for (const t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            if (t.length > res.length || (t.length === res.length && t < res)) {
                res = t;
            }
        }
    }
    return res;
};
//先将 dictionary 依据字符串长度的降序和字典序的升序进行排序，然后从前向后找到第一个符合条件的字符串直接返回即可
var findLongestWord = function(s, dictionary) {
    dictionary.sort((word1, word2) => {
        if (word1.length !== word2.length) {
            return word2.length - word1.length;
        } else {
            return word1.localeCompare(word2);
        }
    });
    for (const t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            return t;
        }
    }
    return "";
};
//动态规划，暂时看不懂
var findLongestWord = function(s, dictionary) {
    const m = s.length;
    const f = new Array(m + 1).fill(0).map(() => new Array(26).fill(m));

    for (let i = m - 1; i >= 0; --i) {
        for (let j = 0; j < 26; ++j) {
            if (s[i] === String.fromCharCode('a'.charCodeAt() + j)) {
                f[i][j] = i;
            } else {
                f[i][j] = f[i + 1][j];
            }
        }
    }
    let res = "";
    for (const t of dictionary) {
        let match = true;
        let j = 0;
        for (let i = 0; i < t.length; ++i) {
            if (f[j][t[i].charCodeAt() - 'a'.charCodeAt()] === m) {
                match = false;
                break;
            }
            j = f[j][t[i].charCodeAt() - 'a'.charCodeAt()] + 1;
        }
        if (match) {
            if (t.length > res.length ||  (t.length === res.length && t.localeCompare(res) < 0)) {
                res = t;
            }
        }
    }
    return res;
};
