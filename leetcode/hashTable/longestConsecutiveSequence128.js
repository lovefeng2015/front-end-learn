/*
 * @Author: yhf 
 * @Date: 2021-11-Th 09:33:52 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 09:33:52 
 */


/**
 * 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 先排序，把数组转化为set，数组去重，循环新数组，用set判断是否连续，如果连续则用中间变量保存，如果没有则重新记数
 * @param {number[]} nums
 * @return {number}
 */



var longestConsecutive = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let set = new Set(nums);
    let orign = [...set];
    let count = 0;
    let res = 0;
    for (const i of orign) {
        if (set.has(i + 1)) {
            count++;
        } else {
            res = Math.max(count, res);
            count = 0;
        }

    }
    return res + 1;
};

// 思路和算法

// 我们考虑枚举数组中的每个数 xx，考虑以其为起点，不断尝试匹配 x+1, x+2, \cdotsx+1,x+2,⋯ 是否存在，假设最长匹配到了 x+yx+y，那么以 xx 为起点的最长连续序列即为 x, x+1, x+2, \cdots, x+yx,x+1,x+2,⋯,x+y，其长度为 y+1y+1，我们不断枚举并更新答案即可。

// 对于匹配的过程，暴力的方法是 O(n)O(n) 遍历数组去看是否存在这个数，但其实更高效的方法是用一个哈希表存储数组中的数，这样查看一个数是否存在即能优化至 O(1)O(1) 的时间复杂度。

// 仅仅是这样我们的算法时间复杂度最坏情况下还是会达到 O(n^2)O(n 
// 2
//  )（即外层需要枚举 O(n)O(n) 个数，内层需要暴力匹配 O(n)O(n) 次），无法满足题目的要求。但仔细分析这个过程，我们会发现其中执行了很多不必要的枚举，如果已知有一个 x, x+1, x+2, \cdots, x+yx,x+1,x+2,⋯,x+y 的连续序列，而我们却重新从 x+1x+1，x+2x+2 或者是 x+yx+y 处开始尝试匹配，那么得到的结果肯定不会优于枚举 xx 为起点的答案，因此我们在外层循环的时候碰到这种情况跳过即可。

// 那么怎么判断是否跳过呢？由于我们要枚举的数 xx 一定是在数组中不存在前驱数 x-1x−1 的，不然按照上面的分析我们会从 x-1x−1 开始尝试匹配，因此我们每次在哈希表中检查是否存在 x-1x−1 即能判断是否需要跳过了。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/zui-chang-lian-xu-xu-lie-by-leetcode-solution/

var longestConsecutive = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    let set = new Set(nums);
    let res = 0;
    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let longest = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                longest++;
            }
            res = Math.max(longest, res);
        }

    }
    return res;
};
// 题目要求 O(n) 复杂度。

// 用哈希表存储每个端点值对应连续区间的长度
// 若数已在哈希表中：跳过不做处理
// 若是新数加入：
// 取出其左右相邻数已有的连续区间长度 left 和 right
// 计算当前数的区间长度为：cur_length = left + right + 1
// 根据 cur_length 更新最大长度 max_length 的值
// 更新区间两端点的长度值
var longestConsecutive = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    let map = new Map();
    let res = 0;
    for (const num of nums) {
        if (map.has(num)) {
            continue;
        }
        let left = map.get(num - 1) || 0;
        let right = map.get(num + 1) || 0;
        let longest = left + right + 1;
        res = Math.max(longest, res);
        map.set(num, longest);
        map.set(num - left, longest);
        map.set(num + right, longest);
    }
    return res;
};