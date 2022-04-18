/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-10-23 16:23:13 
 * @Last Modified by: yhf
 * @Last Modified time: 2021-11-Mo 02:15:17
 */
// 思路及算法

// 注意到方法一的时间复杂度较高的原因是寻找 target - x 的时间复杂度过高。因此，我们需要一种更优秀的方法，能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。

// 使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N)O(N) 降低到 O(1)O(1)。

// 这样我们创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-solution/
// 这道题最优的做法时间复杂度是 O(n)。
// 顺序扫描数组，对每一个元素，在 map 中找能组合给定值的另一半数字，如果找到了，直接返回 2 个数字的下标即可。如果找不到，就把这个数字存入 map 中，等待扫到“另一半”数字的时候，再取出来返回结果

//使用场景 总结一下，当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法
//技术点，使用Map构造函数来做哈希表，因为要对比值，所以要把元素值放在key（唯一值）上，把index放在value上，才能取回
//使用对象的key不相同来实现也是可以

/**
 * @name: "两数之和"
 * @description:"给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标" 
 * @msg: "暴力解法"
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var numsLength = nums.length;
    for (let i = 0; i < numsLength - 1; i++) {
        for (let j = i + 1; j < numsLength; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
}

function twoSum(nums, target) {
    const hasTable = new Map();
    const numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
        const complement = target - nums[i];
        if (hasTable.has(complement)) {
            return [hasTable.get(complement), i];
        }
        hasTable.set(nums[i], i);
    }
    return [];
}

function twoSum(nums, target) {
    const hasTable = {};
    const numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
        const complement = target - nums[i];
        if (hasTable[complement] !== undefined) { //if(complement in hasTable)
            return [hasTable[complement], i];
        }
        hasTable[nums[i]] = i;
    }
    return [];
}
//数组双指针
function twoSum(nums, target) {
    const numsLength = nums.length;
    const orign = [...nums];
    if (numsLength < 2) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let left = 0,
        right = numsLength - 1;
    let result = [];
    while (left < right) {
        if (nums[left] + nums[right] == target) {
            result.push(nums[left]);
            result.push(nums[right]);
            break;
        } else if (nums[left] + nums[right] > target) {
            right--;
        } else {
            left++;
        }

    }
    if (result.length > 0) {
        if (result[0] != result[1]) {
            return [orign.indexOf(result[0]), orign.indexOf(result[1])];
        }
        var index = orign.indexOf(result[0]);
        return [index, orign.indexOf(result[0], index + 1)];
    }
    return [];
}

function twoSum(nums, target) {
    const hasTable = new Map();
    const numsLength = nums.length;
    let left = 0,
        right = numsLength - 1;
    while (left <= right) {
        const leftNum = target - nums[left];
        if (hasTable.has(leftNum)) {
            return [hasTable.get(leftNum), left];
        }
        hasTable.set(nums[left], left);
        const rightNum = target - nums[right];
        if (hasTable.has(rightNum)) {
            return [hasTable.get(rightNum), right];
        }
        hasTable.set(nums[right], right);
        left++;
        right--;
    }
    return [];
}