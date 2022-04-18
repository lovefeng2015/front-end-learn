/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 11:28:55 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 11:28:55 
 */


/**
 * 最大连续 1 的个数
 * 给定一个二进制数组， 计算其中最大连续 1 的个数
 * @param {number[]} nums
 * @return {number}
 */



var findMaxConsecutiveOnes = function (nums) {
    let length = nums.length;
    let res = 0;
    let count = 0;
    for (let end = 0; end < length; end++) {
        if (nums[end] !== 0) {
            count++;
        } else {
            res = Math.max(res, count);
            count = 0;
        }
    }
    return Math.max(res, count);
};