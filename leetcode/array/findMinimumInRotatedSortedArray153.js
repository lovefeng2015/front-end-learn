/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 06:08:14 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 06:08:14 
 */

/**
 * 153. 寻找旋转排序数组中的最小值
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] <= nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];

};