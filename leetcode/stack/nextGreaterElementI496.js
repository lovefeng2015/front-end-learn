/*
 * @Author: yhf 
 * @Date: 2021-11-Su 01:38:53 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 01:38:53 
 */


/**
 * 496. 下一个更大元素 I
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const length = nums2.length;
    const map = new Map();
    const stack2 = new Array(nums1.length).fill(-1);
    for (let j = 0; j < nums1.length; j++) {
        map.set(nums1[j], j);
    }
    const stack = [];
    stack.push(0);
    for (let i = 1; i < length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            let top = stack.pop();
            if (map.has(nums2[top])) {
                stack2[map.get(nums2[top])] = nums2[i];
            }
        }
        stack.push(i)
    }
    return stack2;
};

var nextGreaterElement = function (nums1, nums2) {
    const length = nums2.length;
    const map = new Map();
    const stack = [];
    stack.push(0);
    for (let i = 1; i < length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            let top = stack.pop();
            map.set(nums2[top], nums2[i])
        }
        stack.push(i)
    }
    const res = [];
    for (let j = 0; j < nums1.length; j++) {
        res[j] = map.get(nums1[j]) || -1;
    }
    return res;
};