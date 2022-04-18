/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 11:24:56 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 11:24:56 
 */


/**
 * 268. 丢失的数字
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * 
 * @param {number[]} nums
 * @return {number}
 */
//数学
var missingNumber = function (nums) {
    const length = nums.length;
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const noLost = ~~(length * (length + 1) / 2);
    return noLost - sum;

};
//位运算
var missingNumber = function (nums) {
    const length = nums.length;
    let sum = 0;
    for (let i = 0; i <= length; i++) {
        sum ^= i;
    }

    for (let j = 0; j < length; j++) {
        sum ^= nums[j];
    }
    return sum;

};
//位运算
var missingNumber = function (nums) {
    const length = nums.length;
    let sum = 0;
    for (let j = 0; j < length; j++) {
        sum=sum ^j^nums[j];
    }
    return sum^length;

};
//排序
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return n;
};
//哈希
var missingNumber = function(nums) {
    const set = new Set();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
    }
    let missing = -1;
    for (let i = 0; i <= n; i++) {
        if (!set.has(i)) {
            missing = i;
            break;
        }
    }
    return missing;
};
//一次遍历，将所有下标和累加，减去存在的元素，剩下的就是不存在的元素
var missingNumber = function (nums) {
    let res = nums.length
    for (let i = 0; i < nums.length; i++) {
        res += i - nums[i]
    }
    return res;
}
//数学
var missingNumber = function(nums) {
    const n = nums.length;
    let total = Math.floor(n * (n + 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
};
//交换正确位置
var missingNumber = function(nums) {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        // 不在正确的位置上
        while (nums[i]<length&&nums[i] != i) {
           // swap(nums, i, nums[i]); //交换，把nums[index]放到正确的位置
           let temp = nums[nums[i]];
			nums[nums[i]] = nums[i];
			nums[i] = temp;
        }
    }
    for (let i = 0; i < length; i++) {
        if (nums[i] != i) {
           return i;
        }
    }
    return length;
};


function swap(nums, i, j) {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}