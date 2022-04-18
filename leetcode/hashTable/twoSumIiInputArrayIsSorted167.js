/*
 * @Author: yhf 
 * @Date: 2021-11-We 09:43:32 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 09:43:32 
 */

/**
 * 167. 两数之和 II - 输入有序数组
 * 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const length = numbers.length;
    const map = new Map();
    for (let i = 0; i < length; i++) {
        let num = numbers[i];
        if (map.has(num)) {
            continue;
        }
        map.set(num, i + 1);
    }
    for (let j = 0; j < length; j++) {
        let num = numbers[j];
        if (map.has(target - num)) {
            let right = map.get(target - num);
            if (right > (j + 1)) {
                return [j + 1, right]
            } else if (right < (j + 1)) {
                return [right, j + 1]
            } else {
                return [j + 1, j + 2]
            }

        }

    }
    return [-1, -1]
};

var twoSum = function (numbers, target) {
    const length = numbers.length;
    const map = new Map();
    for (let i = 0; i < length; i++) {
        let num = numbers[i];
        if (map.has(target - num)) {
            let right = map.get(target - num);
            if (right > (i + 1)) {
                return [i + 1, right]
            } else if (right < (i + 1)) {
                return [right, i + 1]
            } else {
                return [i + 1, i + 2]
            }
        }
        map.set(num, i + 1);
    }
    return [-1, -1]
};
var twoSum = function (numbers, target) {
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        let left = i + 1,
            right = length - 1;
        let targetNum = target - numbers[i];
        while (left <= right) {
            let mid = left + (right - left) >> 1;
            if (numbers[mid] == targetNum) {
                return [i, mid];
            } else if (numbers[mid] > targetNum) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return [-1, -1]
};

var twoSum = function (numbers, target) {
    const length = numbers.length;
    let left = 0,
        right = length - 1;
    while (left < right) {
        let targetNum = target - numbers[left];
        if (numbers[right] == targetNum) {
            return [left + 1, right + 1];
        } else if (numbers[right] > targetNum) {
            right--
        } else {
            left++;
        }
    }
    return [-1, -1]
};

var twoSum = function (numbers, target) {
    const length = numbers.length;
    let left = 0,
        right = length - 1;
    while (left < right) {
        let sum = numbers[right] + numbers[left];
        if (sum == target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--
        } else {
            left++;
        }
    }
    return [-1, -1]
};


var twoSum = function (numbers, target) {
    const length = numbers.length;
    let left = 0,
        right = length - 1;
    while (left < right) {
        let m = left + ((right - left) >> 1);
        if (numbers[left] + numbers[m] > target) {
            right = m - 1;
        } else if (numbers[m] + numbers[right] < target) {
            left = m + 1;
        } else if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
    return [-1, -1]
};