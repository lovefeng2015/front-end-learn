/*
 * @Author: yhf 
 * @Date: 2021-10-Su 09:04:27 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Su 09:04:27 
 */
/**
 * @name: 二分查找
 * @description: 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
//在升序数组 \textit{nums}nums 中寻找目标值 \textit{target}target，对于特定下标 ii，比较 \textit{nums}[i]nums[i] 和 \textit{target}target 的大小：

// 如果 \textit{nums}[i] = \textit{target}nums[i]=target，则下标 ii 即为要寻找的下标；

// 如果 \textit{nums}[i] > \textit{target}nums[i]>target，则 \textit{target}target 只可能在下标 ii 的左侧；

// 如果 \textit{nums}[i] < \textit{target}nums[i]<target，则 \textit{target}target 只可能在下标 ii 的右侧。

// 基于上述事实，可以在有序数组中使用二分查找寻找目标值。

// 二分查找的做法是，定义查找的范围 [\textit{left}, \textit{right}][left,right]，初始查找范围是整个数组。每次取查找范围的中点 \textit{mid}mid，比较 \textit{nums}[\textit{mid}]nums[mid] 和 \textit{target}target 的大小，如果相等则 \textit{mid}mid 即为要寻找的下标，如果不相等则根据 \textit{nums}[\textit{mid}]nums[mid] 和 \textit{target}target 的大小关系将查找范围缩小一半。

// 由于每次查找都会将查找范围缩小一半，因此二分查找的时间复杂度是 O(\log n)O(logn)，其中 nn 是数组的长度。

// 二分查找的条件是查找范围不为空，即 \textit{left} \le \textit{right}left≤right。如果 \textit{target}target 在数组中，二分查找可以保证找到 \textit{target}target，返回 \textit{target}target 在数组中的下标。如果 \textit{target}target 不在数组中，则当 \textit{left} > \textit{right}left>right 时结束查找，返回 -1−1。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-search/solution/er-fen-cha-zhao-by-leetcode-solution-f0xw/
//这道题目的前提是数组为有序数组，同时题目还强调数组中无重复元素，因为一旦有重复元素，使用二分查找法返回的元素下标可能不是唯一的
//https://leetcode-cn.com/problems/binary-search/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-fe-ajox/

 var search=function (nums,target) {
    let left=0;
    let right=nums.length-1;// 定义target在左闭右开的区间里，即：[left, right]
    let mid;
    while (left<=right) {
        mid=Math.floor(left+(right-left)/2);//可以防止left+right溢出（超出整数范围）。
        //mid=left+((right-left)>>1);//有符号右移1相当于除于2，并去掉小数得到整数
        if (nums[mid]==target) {
            return mid;
        } else if(nums[mid]<target) {
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
}
var search=function (nums,target) {
    let left=0;
    let right=nums.length;// 定义target在左闭右开的区间里，即：[left, right)
    let mid;
    while (left<right) {
        mid=Math.floor(left+(right-left)/2);//可以防止left+right溢出（超出整数范围）。
        //mid=left+((right-left)>>1);//有符号右移1相当于除于2，并去掉小数得到整数
        if (nums[mid]==target) {
            return mid;
        } else if(nums[mid]<target) {
            left=mid+1;
        }else{
            right=mid;
        }
    }
    return -1;
}
