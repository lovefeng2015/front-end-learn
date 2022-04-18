/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 06:43:13 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 06:43:13 
 */


/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const length = nums.length;
    if (length < 3) { //特判
        return [];
    }
    nums.sort((a, b) => a - b); //排序
    const result = [];
    for (let first = 0; first < length-2; first++) {
        if (nums[first] > 0) break; // 第一个数大于 0，后面的数都比它大，肯定不成立了
        if (first > 0 && nums[first] == nums[first - 1]) { // 去重：如果此数已经选取过，跳过
            continue;
        }
        if (nums[first] + nums[first + 1] + nums[first + 2] > 0) {// 剪枝
            break;
        }
        if (nums[first] + nums[length - 2] + nums[length - 1] < 0) {// 剪枝
            continue;
        }
        let third = length - 1;
        let target = -nums[first]; //固定第一个数，转化为求两数之和
        for (let second = first + 1; second < length-1; second++) {
            if (second > (first + 1) && nums[second] == nums[second - 1]) {
                continue;
            }
            while (second < third && nums[second] + nums[third] > target) {
                third--;
            }
            if (second == third) {
                break;
            }
            if (nums[second] + nums[third] == target) {
                result.push(Array.of(nums[first], nums[second], nums[third]));
            }
        }
    }
    return result;
};

var threeSum = function (nums) {
    const length = nums.length;
    if (length < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const result = [];
    for (let first = 0; first < length-2; first++) {
        if (nums[first] > 0) break; // 第一个数大于 0，后面的数都比它大，肯定不成立了
        if (first > 0 && nums[first] == nums[first - 1]) {
            continue;
        }
        if (nums[first] + nums[first + 1] + nums[first + 2] > 0) {// 剪枝
            break;
        }
        if (nums[first] + nums[length - 2] + nums[length - 1] < 0) {// 剪枝
            continue;
        }
        let target = -nums[first]; //固定第一个数，转化为求两数之和

        let left = first + 1; // 双指针在nums[i]后面的区间中寻找和为0-nums[i]的另外两个数
        let right = length - 1;
        while (left < right) {
            if (nums[left] + nums[right] > target) { // 两数之和太大，右指针左移
                right--;
            } else if (nums[left] + nums[right] < target) { // 两数之和太大，左指针右移
                left++;
            } else {
                result.push(Array.of(nums[first], nums[left], nums[right])); // 找到一个和为零的三元组，添加到结果中，左右指针内缩，继续寻找
                left++;
                right--;
                // 去重：第二个数和第三个数也不重复选取
                // 例如：[-4,1,1,1,2,3,3,3], i=0, left=1, right=5
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right + 1]) {
                    right--;
                }

            }

        }

    }
    return result;
};