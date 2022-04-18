/*
 * @Author: yhf 
 * @Date: 2021-11-Su 08:11:32 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 08:11:32 
 */


/**
 * 84. 柱状图中最大的矩形
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = [];
    stack.push(0);
    heights = [0, ...heights, 0];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > heights[stack[stack.length - 1]]) {
            stack.push(i);
        }
        if (heights[i] == heights[stack[stack.length - 1]]) {
            stack.pop();
            stack.push(i);
        } else {
            while (heights[i] < heights[stack[stack.length - 1]]) {
                let stackTopIndex = stack.pop();
                let w = i - stack[stack.length - 1] - 1;
                let h = heights[stackTopIndex];
                maxArea = Math.max(maxArea, w * h);
            }
            stack.push(i);

        }

    }
    return maxArea;
};

var largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = [];
    stack.push(0);
    heights = [0, ...heights, 0];
    for (let i = 1; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            let stackTopIndex = stack.pop();
            let w = i - stack[stack.length - 1] - 1;
            let h = heights[stackTopIndex];
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i);
    }
    return maxArea;
};

//动态规划 js中运行速度最快 暂时不理解
var largestRectangleArea = function(heights) {
    const len = heights.length;
    const minLeftIndex = new Array(len);
    const maxRigthIndex = new Array(len);
    // 记录每个柱子 左边第一个小于该柱子的下标
    minLeftIndex[0] = -1; // 注意这里初始化，防止下面while死循环
    for(let i = 1; i < len; i++) {
        let t = i - 1;
        // 这里不是用if，而是不断向左寻找的过程
        while(t >= 0 && heights[t] >= heights[i]) t = minLeftIndex[t];
        minLeftIndex[i] = t;
    }
    // 记录每个柱子 右边第一个小于该柱子的下标
    maxRigthIndex[len - 1] = len; // 注意这里初始化，防止下面while死循环
    for(let i = len - 2; i >= 0; i--){
        let t = i + 1;
        // 这里不是用if，而是不断向右寻找的过程
        while(t < len && heights[t] >= heights[i]) t = maxRigthIndex[t];
        maxRigthIndex[i] = t;
    }
    // 求和
    let maxArea = 0;
    for(let i = 0; i < len; i++){
        let sum = heights[i] * (maxRigthIndex[i] - minLeftIndex[i] - 1);
        maxArea = Math.max(maxArea , sum);
    }
    return maxArea;
};