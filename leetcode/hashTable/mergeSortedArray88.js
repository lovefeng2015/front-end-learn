/*
 * @Author: yhf 
 * @Date: 2021-11-Th 05:30:32 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 05:30:32 
 */

/**
 * 88. 合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index1 = m - 1,
        index2 = n - 1,
        indexMerge = m + n - 1;
    while (index2 >= 0) {
        if (index1 < 0) {
            nums1[indexMerge--] = nums2[index2--];
        } else if (index2 < 0) {
            nums1[indexMerge--] = nums1[index1--];
        } else if (nums2[index2] > nums1[index1]) {
            nums1[indexMerge--] = nums2[index2--];
        } else {
            nums1[indexMerge--] = nums1[index1--];
        }
    }
};

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
};
//双指针+新数组
var merge = function (nums1, m, nums2, n) {
    let p1 = 0,
        p2 = 0;
    let sorted = new Array(m + n).fill(0);
    let cur;
    while (p1 < m || p2 < n) {
        if (p1 == m) {
            cur = nums2[p2++];
        } else if (p2 == n) {
            cur = nums1[p1++];
        } else if (nums1[p1] <= nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = sorted[i];
    }
};
//逆双指针
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1;
    let tail = m + n - 1;
    let cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 == -1) {
            cur = nums2[p2--];
        } else if (p2 == -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
};


var merge = function (nums1, m, nums2, n) {
    while (n > 0) { //因为是排序的，如果nums2插入完了就结束了
        nums1[m + n - 1] = (m < 1 || nums2[n - 1] > nums1[m - 1]) ? nums2[--n] : nums1[--m]; //m<1,就意味着nums1已经插完了，把num2剩下的插进去
    }
};

var merge = function (nums1, m, nums2, n) {
    let p = m-- + n-- - 1;
    while (m >= 0 && n >= 0) {
        nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    }

    while (n >= 0) { //加入nums2没有插完，就意味着nums1已经插完了，把num2剩下的插进去
        nums1[p--] = nums2[n--];
    }
};

var merge = function (nums1, m, nums2, n) {
    let last = m + n - 1;
    while (n) {
        if (m == 0 || nums1[m - 1] <= nums2[n - 1]) {
            nums1[last--] = nums2[--n];
        } else {
            nums1[last--] = nums1[--m];
        }
    }
};