/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 11:53:15 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 11:53:15 
 */

/**
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const length = nums.length;
    let least = Number.MAX_VALUE;
    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = i; j < length; j++) {
            sum += nums[j];
            if ((j - i + 1) == length && sum < target) {
                break;
            }
            if (sum >= target) {
                least = Math.min(least, j - i + 1);
                break;
            }
        }

    }
    return least == Number.MAX_VALUE ? 0 : least;
};

function search(nums, target) { //寻找大于等于target的坐标
    let left = 0;
    let right = nums.length;
    let mid;
    while (left < right) {
        mid = Math.floor(left + (right - left) / 2); //可以防止left+right溢出（超出整数范围）。
        //mid=left+((right-left)>>1);//有符号右移1相当于除于2，并去掉小数得到整数
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return (nums[left] >= target) ? left : -1;
}

var minSubArrayLen = function (target, nums) {
    const length = nums.length;
    if (length == 0) {
        return 0;
    }
    let least = Number.MAX_VALUE;
    table = new Array(length + 1).fill(0);
    for (let i = 1; i <= length; i++) {
        table[i] = table[i - 1] + nums[i - 1]
    }
    for (let j = 1; j < length; j++) {
        let targetSum = target + table[j - 1];
        let bound = search(table, targetSum);
        if (bound < 0) {
            bound = -bound - 1;
        }
        if (bound < length) {
            least = Math.min(least, bound - (j - 1));
        }

    }
    return least == Number.MAX_VALUE ? 0 : least;
};
// 定义两个指针 \textit{start}start 和 \textit{end}end 分别表示子数组（滑动窗口窗口）的开始位置和结束位置，维护变量 \textit{sum}sum 存储子数组中的元素和（即从 \text{nums}[\textit{start}]nums[start] 到 \text{nums}[\textit{end}]nums[end] 的元素和）。

// 初始状态下，\textit{start}start 和 \textit{end}end 都指向下标 00，\textit{sum}sum 的值为 00。

// 每一轮迭代，将 \text{nums}[end]nums[end] 加到 \textit{sum}sum，如果 \textit{sum} \ge ssum≥s，则更新子数组的最小长度（此时子数组的长度是 \textit{end}-\textit{start}+1end−start+1），然后将 \text{nums}[start]nums[start] 从 \textit{sum}sum 中减去并将 \textit{start}start 右移，直到 \textit{sum} < ssum<s，在此过程中同样更新子数组的最小长度。在每一轮迭代的最后，将 \textit{end}end 右移

var minSubArrayLen = function (target, nums) {
    const length = nums.length;
    if (length == 0) {
        return 0;
    }
    let least = Number.MAX_VALUE;
    let start=0,end=0,sum=0;
    while (end<length) {
        sum+=nums[end];
        while(sum>=target){
            least=Math.min(least,end-start+1);// result = result < subLength ? result : subLength;
            sum=sum-nums[start];
            start++;
        }
        end++;
    }
    return least == Number.MAX_VALUE ? 0 : least;
};
var minSubArrayLen = function (target, nums) {
    const length = nums.length;
    if (length == 0) {
        return 0;
    }
    let sum=0,left=0,right=0;
    while (sum<target) {
        if(right==length){
            return 0;
        }
        sum+=nums[right];
        right++;
    }
    while (right<length) {
        if(sum<target){
            sum+=nums[right];
            right++;
        }
        sum=sum-nums[left];
        left++;
    }
    while (sum>=target) {
        sum=sum-nums[left];
        left++;  
    }
    return right-left+1;
};