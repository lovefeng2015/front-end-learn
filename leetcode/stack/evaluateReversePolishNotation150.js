/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 07:47:21 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 07:47:21 
 */

/**
 * 150. 逆波兰表达式求值
 * 根据 逆波兰表示法，求表达式的值。
 * 
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const map = new Map([
        ['+', (a, b) => a * 1 + b * 1], //先转化为数字
        ['-', (a, b) => b - a],
        ['*', (a, b) => a * b],
        ['/', (a, b) => (b / a) | 0] //取整新方法
    ])
    const stack = [];
    for (const x of tokens) {
        if (!map.has(x)) {
            stack.push(x);

        } else {
            stack.push(map.get(x)(stack.pop(), stack.pop()))
        }

    }
    return stack.pop();
};
//双指针 原地等待
var evalRPN = function (tokens) {
    const n = tokens.length;
    const stack = new Array(~~((n + 1) / 2)).fill(0);
    let index = -1;
    for (const x of tokens) {
        if (x == '+') {
            index--;
            stack[index] = stack[index] * 1 + stack[index + 1] * 1
        } else if (x == '-') {
            index--;
            stack[index] = stack[index] - stack[index + 1];
        } else if (x == '*') {
            index--;
            stack[index] = stack[index] * stack[index + 1];
        } else if (x == '/') {
            index--;
            stack[index] = (stack[index] / stack[index + 1]) | 0;
        } else {
            index++;
            stack[index] = x;
        }
   
    }
    return stack[index];

};