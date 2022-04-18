/*
 * @Author: yhf 
 * @Date: 2021-11-We 10:10:20 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 10:10:20 
 */

/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）
来源：力扣（LeetCode）
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 方法一：排序 + 双指针
// 思路与算法

// 最朴素的方法是使用四重循环枚举所有的四元组，然后使用哈希表进行去重操作，得到不包含重复四元组的最终答案。假设数组的长度是 nn，则该方法中，枚举的时间复杂度为 O(n^4)O(n 
// 4
//  )，去重操作的时间复杂度和空间复杂度也很高，因此需要换一种思路。

// 为了避免枚举到重复四元组，则需要保证每一重循环枚举到的元素不小于其上一重循环枚举到的元素，且在同一重循环中不能多次枚举到相同的元素。

// 为了实现上述要求，可以对数组进行排序，并且在循环过程中遵循以下两点：

// 每一种循环枚举到的下标必须大于上一重循环枚举到的下标；

// 同一重循环中，如果当前元素与上一个元素相同，则跳过当前元素。

// 使用上述方法，可以避免枚举到重复四元组，但是由于仍使用四重循环，时间复杂度仍是 O(n^4)O(n 
// 4
//  )。注意到数组已经被排序，因此可以使用双指针的方法去掉一重循环。

// 使用两重循环分别枚举前两个数，然后在两重循环枚举到的数之后使用双指针枚举剩下的两个数。假设两重循环枚举到的前两个数分别位于下标 ii和 jj，其中 i<j。初始时，左右指针分别指向下标 j+1 和下标 n-1n−1。每次计算四个数的和，并进行如下操作：

// 如果和等于 target，则将枚举到的四个数加到答案中，然后将左指针右移直到遇到不同的数，将右指针左移直到遇到不同的数；

// 如果和小于target，则将左指针右移一位；

// 如果和大于 target，则将右指针左移一位。

// 使用双指针枚举剩下的两个数的时间复杂度是O(n)，因此总时间复杂度是 O(n^3)O(n3)，低于 O(n^4)O(n4)。

// 具体实现时，还可以进行一些剪枝操作：

// 在确定第一个数之后，如果 {nums}[i]+{nums}[i+1]+{nums}[i+2]+{nums}[i+3]>target，说明此时剩下的三个数无论取什么值，四数之和一定大于 target，因此退出第一重循环；
// 在确定第一个数之后，如果 {nums}[i]+{nums}[n-3]+{nums}[n-2]+{nums}[n-1]<target，说明此时剩下的三个数无论取什么值，四数之和一定小于 target，因此第一重循环直接进入下一轮，枚举 nums[i+1]；
// 在确定前两个数之后，如果 {nums}[i]+{nums}[j]+{nums}[j+1]+{nums}[j+2]>target，说明此时剩下的两个数无论取什么值，四数之和一定大于 target，因此退出第二重循环；
// 在确定前两个数之后，如果 {nums}[i]+{nums}[j]+{nums}[n-2]+{nums}[n-1]<target，说明此时剩下的两个数无论取什么值，四数之和一定小于 target，因此第二重循环直接进入下一轮，枚举 nums[j+1]

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/4sum/solution/si-shu-zhi-he-by-leetcode-solution/


var fourSum = function (nums, target) {
    const length = nums.length;
    if (length < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const result = [];
    for (let first = 0; first < length-3; first++) {
        if (first > 0 && nums[first] == nums[first - 1]) {// 去重
            continue;
        }
        if (nums[first] + nums[first + 1] + nums[first + 2] + nums[first + 3] > target) {// 剪枝
            break;
        }
        if (nums[first] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {// 剪枝
            continue;
        }
        for (let second = first + 1; second < length-2; second++) {
            if (second > (first + 1) && nums[second] == nums[second - 1]) {// 去重
                continue;
            }
            if (nums[first] + nums[second] + nums[second + 1] + nums[second + 2] > target) {// 剪枝
                break;
            }
            if (nums[first] + nums[second] + nums[length - 2] + nums[length - 1] < target) {// 剪枝
                continue;
            }
            let targetNum = target - nums[first] - nums[second]; //固定第一个数，转化为求两数之和
            let left = second + 1; // 双指针在nums[i]后面的区间中寻找和为0-nums[i]的另外两个数
            let right = length - 1;
            while (left < right) {
                if (nums[left] + nums[right] > targetNum) { // 两数之和太大，右指针左移
                    right--;
                } else if (nums[left] + nums[right] < targetNum) { // 两数之和太小，左指针右移
                    left++;
                } else {
                    result.push(Array.of(nums[first], nums[second], nums[left], nums[right])); // 找到一个和为零的三元组，添加到结果中，左右指针内缩，继续寻找
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


    }
    return result;
};