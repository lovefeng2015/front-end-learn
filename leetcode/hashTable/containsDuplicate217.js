/*
 * @Author: yhf 
 * @Date: 2021-11-We 01:19:25 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 01:19:25 
 */

/**
 * 给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const length = nums.length;
    if (length < 2) {
        return false;
    }
    const set = new Set();
    for (const i of nums) {
        if (set.has(i)) {
            return true;
        }
        set.add(i);
    }
    return false;
};
//去重后的长度是否和原来的长度一样
var containsDuplicate = function (nums) {
    const length = nums.length;
    if (length < 2) {
        return false;
    }
   return (new Set(nums)).size<length;
};