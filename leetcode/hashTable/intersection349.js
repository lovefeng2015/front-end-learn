/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 09:58:59 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 09:58:59 
 */
/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//循环nums1，判断元素是否在nums2里面，如果在把它放在新数组，因为结果不能重复，所以可以用set来建立哈希表
var intersection = function (nums1, nums2) {
    const judge = nums1.length > nums2.length;
    const shortArray = judge ? nums2 : nums1;
    const longArray = judge ? nums1 : nums2;
    const set = new Set();
    for (const key of shortArray) {
        if (longArray.includes(key)) {
            set.add(key);
        }
    }
    return [...set];
};
var intersection = function (nums1, nums2) {
    const judge = nums1.length > nums2.length;
    const shortArray = judge ? nums2 : nums1;
    const longArray = judge ? nums1 : nums2;
    const set = new Set();
    for (const key of shortArray) {
        if (longArray.indexOf(key) != -1) {
            set.add(key);
        }
    }
    return [...set];
};

var intersection = function (nums1, nums2) {
    const judge = nums1.length > nums2.length;
    const shortArray = judge ? nums2 : nums1;
    const longArray = judge ? nums1 : nums2;
    const set1 = new Set(shortArray);
    const set2 = new Set();
    for (const key of longArray) {
        if (set1.has(key)) {
            set2.add(key);
        }
    }
    return [...set2];
};
// 计算两个数组的交集，直观的方法是遍历数组 nums1，对于其中的每个元素，遍历数组 nums2 判断该元素是否在数组 nums2 中，如果存在，则将该元素添加到返回值。假设数组 nums1 和 nums2 的长度分别是 mm 和 nn，则遍历数组 nums1 需要 O(m)O(m) 的时间，判断 nums1 中的每个元素是否在数组 nums2 中需要 O(n)O(n) 的时间，因此总时间复杂度是 O(mn)O(mn)。

// 如果使用哈希集合存储元素，则可以在 O(1)O(1) 的时间内判断一个元素是否在集合中，从而降低时间复杂度。

// 首先使用两个集合分别存储两个数组中的元素，然后遍历较小的集合，判断其中的每个元素是否在另一个集合中，如果元素也在另一个集合中，则将该元素添加到返回值。该方法的时间复杂度可以降低到 O(m+n)O(m+n)

// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/liang-ge-shu-zu-de-jiao-ji-by-leetcode-solution/

var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const judge = set1.size > set2.size;
    const shortSet = judge ? set2 : set1;
    const longSet = judge ? set1 : set2;
    const result = new Set();
    for (const key of shortSet) {
        if (longSet.has(key)) {
            result.add(key);
        }
    }
    return [...result];
};
var intersection = function(nums1, nums2) {
    // 根据数组大小交换操作的数组
    if(nums1.length < nums2.length) {
        const _ = nums1;
        nums1 = nums2;
        nums2 = _;
    }
    const nums1Set = new Set(nums1);
    const resSet = new Set();
    // for(const n of nums2) {
    //     nums1Set.has(n) && resSet.add(n);
    // }
    // 循环 比 迭代器快
    for(let i = nums2.length - 1; i >= 0; i--) {
        nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
    }
    return Array.from(resSet);
};
// 方法二：排序 + 双指针
// 如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。

// 首先对两个数组进行排序，然后使用两个指针遍历两个数组。可以预见的是加入答案的数组的元素一定是递增的，为了保证加入元素的唯一性，我们需要额外记录变量 \textit{pre}pre 表示上一次加入答案数组的元素。

// 初始时，两个指针分别指向两个数组的头部。每次比较两个指针指向的两个数组中的数字，如果两个数字不相等，则将指向较小数字的指针右移一位，如果两个数字相等，且该数字不等于 \textit{pre}pre ，将该数字添加到答案并更新 \textit{pre}pre 变量，同时将两个指针都右移一位。当至少有一个指针超出数组范围时，遍历结束

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/liang-ge-shu-zu-de-jiao-ji-by-leetcode-solution/

var intersection = function (nums1, nums2) {
    const arr1 = [...new Set(nums1)].sort((a, b) => a - b);
    const arr2 = [...new Set(nums2)].sort((a, b) => a - b);
    const length1 = arr1.length;
    const length2 = arr2.length;
    var index1 = 0,
        index2 = 0;
    var set = new Set();
    while (index1 < length1 && index2 < length2) {
        const num1 = arr1[index1];
        const num2 = arr2[index2];
        if (num1 == num2) {
            set.add(num1);
            index1++;
            index2++;
        } else if (num1 > num2) {
            index2++;
        } else {
            index1++;
        }
    }
    return [...set];
};