/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 02:17:03 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 02:17:03 
 */


/**
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// 思路与算法

// 我们可以将四个数组分成两部分，A 和 B 为一组，C 和 D 为另外一组。

// 对于 A 和 B，我们使用二重循环对它们进行遍历，得到所有 A[i]+B[j]的值并存入哈希映射中。对于哈希映射中的每个键值对，每个键表示一种 A[i]+B[j]，对应的值为 A[i]+B[j] 出现的次数。

// 对于 C 和 D，我们同样使用二重循环对它们进行遍历。当遍历到 C[k]+D[l] 时，如果 -(C[k]+D[l]) 出现在哈希映射中，那么将 -(C[k]+D[l])对应的值累加进答案中。

// 最终即可得到满足 A[i]+B[j]+C[k]+D[l]=0的四元组数目

//总结，看到形如：A+B....+N=0的式子，要转换为(A+...T)=-((T+1)...+N)再计算，这个T的分割点一般是一半，特殊情况下需要自行判断。定T是解题的关键

// 链接：https://leetcode-cn.com/problems/4sum-ii/solution/si-shu-xiang-jia-ii-by-leetcode-solution/

// 首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。
// 遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
// 定义int变量count，用来统计a+b+c+d = 0 出现的次数。
// 在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。
// 最后返回统计值 count 就可以了

var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map();
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const sum = n1 + n2;
            // const value = map.has(sum) ? (map.get(sum) + 1) : 1;
            // map.set(sum, value);
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    let ans = 0;
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const sum = -(n3 + n4);
            // if (map.has(sum)) {
            //     ans += map.get(sum);
            // }
            ans += (map.get(sum) || 0)
        }
    }
    return ans;
};
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const countAB = new Map();
    nums1.forEach(u => nums2.forEach(v => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)));
    let ans = 0;
    for (let u of nums3) {
        for (let v of nums4) {
            if (countAB.has(-u - v)) {
                ans += countAB.get(-u - v);
            }
        }
    }
    return ans;
};