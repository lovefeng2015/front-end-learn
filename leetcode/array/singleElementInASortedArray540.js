/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 01:29:26 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 01:29:26 
 */

/**
 * 540. 有序数组中的单一元素
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let ret = 0;
    for (const x of nums) {
        ret ^= x;
    }
    return ret;
};
var singleNonDuplicate = function (nums) {
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
        ret ^= nums[i];
        if (i > 0 && (i % 2 == 1) && (ret != 0)) {
            ret = ret ^ nums[i + 1];
            return ret;
        }
    }
    return ret;
};
var singleNonDuplicate = function (nums) {
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
        ret ^= nums[i];
        if (i > 0 && (i % 2 == 1) && (ret != 0)) {
            return nums[i - 1];
        }
    }
    return ret;
};
var singleNonDuplicate = function (nums) {
    let ret = 0;
    let i = 0;
    const length = nums.length;
    while (i < length) {
        if (i == length - 1) {
            return nums[i];
        }
        if (nums[i] == nums[i + 1]) {
            ++i;
        } else {
            return nums[i];
        }
        i++;
    }
    return ret;
};

var singleNonDuplicate = function (nums) {
    for (let i = 0; i < nums.length - 1; i+=2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};
//栈
var singleNonDuplicate = function (nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        if (stack.length && stack[stack.length - 1] == nums[i]) {
            stack.pop();
        } else {
            stack.push(nums[i]);
        }

        if (i > 0 && (i % 2 == 1) && (stack.length != 0)) {
            return nums[i - 1];
        }
    }
    return stack[0];
};
//数学
var singleNonDuplicate = function (nums) {
    let noRepeatArr = [...new Set(nums)];
    let sum = nums.reduce((acc, arr) => acc + arr, 0)
    return noRepeatArr.reduce((acc, arr) => acc + arr, 0) * 2 - sum;

};
//二分查找
var singleNonDuplicate = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if ((mid & 1) == 1) {
            mid--;
        }
        if (nums[mid] == nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }

    }
    return nums[left];

};
//官方二分查找
var singleNonDuplicate = function (nums) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let mid = lo + (hi - lo) / 2;
        let halvesAreEven = (hi - mid) % 2 == 0;
        if (nums[mid + 1] == nums[mid]) {
            if (halvesAreEven) {
                lo = mid + 2;
            } else {
                hi = mid - 1;
            }
        } else if (nums[mid - 1] == nums[mid]) {
            if (halvesAreEven) {
                hi = mid - 2;
            } else {
                lo = mid + 1;
            }
        } else {
            return nums[mid];
        }
    }
    return nums[lo];

};