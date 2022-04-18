/*
 * @Author: yhf 
 * @Date: 2021-11-Th 09:52:37 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 09:52:37 
 */


/**
 * 有序数组的平方
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let map = nums.map(value => value * value);
    return map.sort((a, b) => a - b);
};

// 方法三：双指针
// 思路与算法

// 同样地，我们可以使用两个指针分别指向位置 00 和 n-1n−1，每次比较两个指针对应的数，选择较大的那个逆序放入答案并移动指针。这种方法无需处理某一指针移动至边界的情况，读者可以仔细思考其精髓所在。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array/solution/you-xu-shu-zu-de-ping-fang-by-leetcode-solution/

var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let slow = [];
    let length = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            slow[length--] = Math.pow(nums[right], 2);
            right--;
        } else {
            slow[length--] = Math.pow(nums[left], 2);
            left++;
        }

    }
    return slow;
};

// 双指针
// 思路与算法

// 方法一没有利用「数组 \textit{nums}nums 已经按照升序排序」这个条件。显然，如果数组 \textit{nums}nums 中的所有数都是非负数，那么将每个数平方后，数组仍然保持升序；如果数组 \textit{nums}nums 中的所有数都是负数，那么将每个数平方后，数组会保持降序。

// 这样一来，如果我们能够找到数组 \textit{nums}nums 中负数与非负数的分界线，那么就可以用类似「归并排序」的方法了。具体地，我们设 \textit{neg}neg 为数组 \textit{nums}nums 中负数与非负数的分界线，也就是说，\textit{nums}[0]nums[0] 到 \textit{nums}[\textit{neg}]nums[neg] 均为负数，而 \textit{nums}[\textit{neg}+1]nums[neg+1] 到 \textit{nums}[n-1]nums[n−1] 均为非负数。当我们将数组 \textit{nums}nums 中的数平方后，那么 \textit{nums}[0]nums[0] 到 \textit{nums}[\textit{neg}]nums[neg] 单调递减，\textit{nums}[\textit{neg}+1]nums[neg+1] 到 \textit{nums}[n-1]nums[n−1] 单调递增。

// 由于我们得到了两个已经有序的子数组，因此就可以使用归并的方法进行排序了。具体地，使用两个指针分别指向位置 \textit{neg}neg 和 \textit{neg}+1neg+1，每次比较两个指针对应的数，选择较小的那个放入答案并移动指针。当某一指针移至边界时，将另一指针还未遍历到的数依次放入答案。

var sortedSquares = function (nums) {
    let length = nums.length;
    let negative = -1;
    for (let i = 0; i < length; i++) {
        if (nums[i] < 0) {
            negative = i;
        }
    }
    let slow = [];
    let index = 0;
    let left = negative,
        right = negative + 1;
    while (left >= 0 || right < length) {
        if (left < 0) {
            slow[index] = Math.pow(nums[right], 2);
            right++;
        } else if (right == length) {
            slow[index] = Math.pow(nums[left], 2);
            left--;
        } else if (Math.abs(nums[right]) < Math.abs(nums[left])) {
            slow[index] = Math.pow(nums[right], 2);
            right++;
        } else {
            slow[index] = Math.pow(nums[left], 2);
            left--;
        }
        index++;
    }
    return slow;
};