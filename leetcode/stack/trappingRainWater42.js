/*
 * @Author: yhf 
 * @Date: 2021-11-Su 06:16:12 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 06:16:12 
 */


/**
 * 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * @param {number[]} height
 * @return {number}
 */
//双指针
var trap = function (height) {
    const length = height.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        if (i == 0 || i == length - 1) {
            continue;
        }
        let rHeight = height[i];
        let lHeight = height[i];
        for (let right = i + 1; right < length; right++) {
            if (height[right] > rHeight) {
                rHeight = height[right];
            }
        }
        for (let left = i - 1; left >= 0; left--) {
            if (height[left] > lHeight) {
                lHeight = height[left];
            }
        }
        let h = Math.min(lHeight, rHeight) - height[i];
        if (h > 0) {
            sum += h;
        }

    }
    return sum;
};

var trap = function (height) {
    const length = height.length;
    if (length <= 2) {
        return 0;
    }
    let sum = 0;
    let stack = [];
    stack.push(0);
    for (let i = 1; i < length; i++) {
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i);
        }
        if (height[i] == height[stack[stack.length - 1]]) {
            stack.pop();
            stack.push(i);
        } else {
            while (stack.length && height[i] > height[stack[stack.length - 1]]) {
                let mid = stack[stack.length - 1];
                stack.pop();
                if (stack.length) {
                    let h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
                    let w = i - stack[stack.length - 1] - 1;
                    sum += h * w;
                }

            }
            stack.push(i);
        }
    }
    return sum;
};

var trap = function (height) {
    const length = height.length;
    if (length <= 2) {
        return 0;
    }
    let sum = 0;
    let stack = [];
    stack.push(0);
    for (let i = 1; i < length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let mid = stack[stack.length - 1];
            stack.pop();
            if (stack.length) {
                let h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid];
                let w = i - stack[stack.length - 1] - 1;
                sum += h * w;
            }

        }
        stack.push(i);
    }
    return sum;
};

//动态规划 暂时看不懂
var trap = function(height) {
    const len = height.length;
    if(len <= 2) return 0;
    const maxLeft = new Array(len).fill(0);
    const maxRight = new Array(len).fill(0);
    // 记录每个柱子左边柱子最大高度
    maxLeft[0] = height[0];
    for(let i = 1; i < len; i++){
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    // 记录每个柱子右边柱子最大高度
    maxRight[len - 1] = height[len - 1];
    for(let i = len - 2; i >= 0; i--){
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    // 求和
    let sum = 0;
    for(let i = 0; i < len; i++){
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if(count > 0) sum += count;
    }
    return sum;
};