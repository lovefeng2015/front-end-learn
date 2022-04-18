/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 10:01:10 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 10:01:10 
 */

/**
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 必须在原数组上操作，不能拷贝额外的数组。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//快慢指针
var moveZeroes = function (nums) {
    const length = nums.length;
    let start = 0;
    for (let end = 0; end < length; end++) {
        if (nums[end] !== 0) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
        }

    }
};

var moveZeroes = function (nums) {
    const length = nums.length;
    let start = 0;
    let end = 0;
    while (end < length) {
        if (nums[end] !== 0) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
        }
        end++;
    }
}
var moveZeroes = function (nums) {
    const length = nums.length;
    let start = 0;
    let end = 0;
    while (end < length) {
        if (nums[end] !== 0) {
            nums[start++] = nums[end];
        }
        end++;
    }
    while (start < length) {
        nums[start++] = 0;
    }
}