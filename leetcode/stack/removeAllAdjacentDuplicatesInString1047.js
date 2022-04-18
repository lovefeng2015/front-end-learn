/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 04:51:37 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 04:51:37 
 */


/**
 * 1047. 删除字符串中的所有相邻重复项
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
在 S 上反复执行重复项删除操作，直到无法继续删除。
在完成所有重复项删除操作后返回最终的字符串。答案保证唯一
 * @param {string} s
 * @return {string}
 */

//建立新数组栈，发现相同的字符串就删除最后一项，没有就添加
var removeDuplicates = function (s) {
    let length = s.length;
    if (length < 2) {
        return s;
    }
    let str = [];
    for (let i = 0; i < length; i++) {
        let c = s[i];
        if (str.length > 0 && c == str[str.length - 1]) {
            str.pop();
        } else {
            str.push(c);
        }
    }
    return str.join('');
};

var removeDuplicates = function (s) {
    let length = s.length;
    if (length < 2) {
        return s;
    }
    let stack = [];
    for (const x of s) {
        let c = null;
        if (stack.length > 0 && x == (c = stack.pop())) {
            stack.pop();
            continue;
        }
        c && stack.push(c);
        stack.push(x);
    }
    return stack.join('');
};

var removeDuplicates = function (s) {
    let length = s.length;
    if (length < 2) {
        return s;
    }
    let stack = [];
    for (const x of s) {
        let n = stack.length;
        if (n > 0 && x === stack[n - 1]) {
            stack.pop();
            continue;
        }
        stack.push(x);
    }
    return stack.join('');
};
//双指针 原地算法
var removeDuplicates = function (s) {
    let length = s.length;
    if (length < 2) {
        return s;
    }
    let stack = [...s];
    let top = -1;
    for (const x of s) {
        if (top ==-1 || stack[top] != x) {
            stack[++top] = x;
            continue;
        }
        top--;
    }
    return stack.join('').substring(0,top+1);
};