/*
 * @Author: yhf 
 * @Date: 2021-11-Th 11:30:22 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 11:30:22 
 */


/**
 * 同构字符串
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const m = s.length;
    const n = t.length;
    if (m != n) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < m; i++) {
        map.set(s[i], -1)
    }
    let set = new Set();
    for (let j = 0; j < n; j++) {
        if (map.get(s[j]) == -1) {
            if (set.has(t[j])) {
                return false;
            }
            map.set(s[j], t[j]);
            set.add(t[j]);
            continue;
        }
        if (map.get(s[j]) != t[j]) {
            return false;
        }

    }
    return true;

};

var isIsomorphic = function (s, t) {
    const m = s.length;
    const n = t.length;
    if (m != n) {
        return false;
    }
    let s2t = new Map();
    let t2s = new Map();
    for (let i = 0; i < m; i++) {
        let x = s[i],
            y = t[i];
        if ((s2t.has(x) && s2t.get(x) != y) || (t2s.has(y) && t2s.get(y) != x)) {
            return false;
        }
        s2t.set(x, y);
        t2s.set(y, x);
    }
    return true;
};
//记录一个字符上次出现的位置，如果两个字符串中的字符上次出现的位置一样，那么就属于同构。
var isIsomorphic = function (s, t) {
    const m = s.length;
    const n = t.length;
    if (m != n) {
        return false;
    }
    for (let i = 0; i < m; i++) {
        if (s.indexOf(s[i]) != t.indexOf(t[i])) {
            return false;
        }
    }
    return true;
};
//记录一个字符上次出现的位置，如果两个字符串中的字符上次出现的位置一样，那么就属于同构。
var isIsomorphic = function (s, t) {
    const m = s.length;
    const n = t.length;
    if (m != n) {
        return false;
    }
    let s2t = new Array(128).fill(0);
    let t2s = new Array(128).fill(0);
    for (let i = 0; i < m; i++) {
    
        if (s2t[s.charCodeAt(i)] != t2s[t.charCodeAt(i)]) {
            return false;
        }
        s2t[s.charCodeAt(i)] = i + 1;
        t2s[t.charCodeAt(i)] = i + 1;
    }
    return true;
};