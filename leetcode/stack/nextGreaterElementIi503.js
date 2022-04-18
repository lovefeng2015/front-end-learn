/*
 * @Author: yhf 
 * @Date: 2021-11-Su 02:56:40 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 02:56:40 
 */



/**
 * 503. 下一个更大元素 II
 * 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let concatArray = [...nums, ...nums];
    let stack = [];
    stack.push(0);
    let res = new Array(concatArray.length).fill(-1);
    for (let i = 1; i < concatArray.length; i++) {
        while (stack.length && concatArray[i] > concatArray[stack[stack.length - 1]]) {
            let top = stack.pop();
            res[top] = concatArray[i];
        }
        stack.push(i);
    }
    return res;
};
//单调栈，通过%模拟数组循环
var nextGreaterElements = function (nums) {
    const length=nums.length;
    let stack = [];
    stack.push(0);
    let res = new Array(length).fill(-1);
    for (let i = 1; i < 2*length; i++) {
        while (stack.length && nums[i%length] > nums[stack[stack.length - 1]]) {
            let top = stack.pop();
            res[top] = nums[i%length];
        }
        stack.push(i%length);
    }
    return res;
};