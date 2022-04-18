/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 11:00:33 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 11:00:33 
 */

/**
 * 739. 每日温度
 * 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const length = temperatures.length;
    const stack = [];
    for (let i = 0; i < length; i++) {
        if (i == length - 1) {
            stack.push(0);
            break;
        }
        for (let j = i + 1; j < length; j++) {
            if (temperatures[j] > temperatures[i]) {
                stack.push(j - i);
                break;
            }
            if (j == length - 1) {
                stack.push(0);
            }

        }

    }
    return stack;
};
//一个单调增栈来保存坐标，另一个数组来保存距离
var dailyTemperatures = function (temperatures) {
    const length = temperatures.length;
    const stack = [];
    const res = new Array(length).fill(0);
    stack.push(0);
    for (let i = 1; i < length; i++) {
        let top = stack[stack.length - 1];
        if (temperatures[i] < temperatures[top]) {
            stack.push(i)
        } else if (temperatures[i] == temperatures[top]) {
            stack.push(i)
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i)
        }

    }
    return res;
};
// 维护递减栈，后入栈的元素总比栈顶元素小。

// 比对当前元素与栈顶元素的大小
// 若当前元素 < 栈顶元素：入栈
// 若当前元素 > 栈顶元素：弹出栈顶元素，记录两者下标差值即为所求天数
// 这里用栈记录的是 T 的下标
var dailyTemperatures = function (temperatures) {
    const length = temperatures.length;
    const stack = [];
    const res = new Array(length).fill(0);
    stack.push(0);
    for (let i = 1; i < length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i)
    }
    return res;
};