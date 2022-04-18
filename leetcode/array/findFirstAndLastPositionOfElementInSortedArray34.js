/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 11:39:25 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 11:39:25 
 */


/**
 *  在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。


 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const length = nums.length;
    let map = {};
    for (let i = 0; i < length; i++) {
        if (nums[i] == target) {
            if (map[target] != undefined) {
                map[target][1] = i;
                continue;
            }
            map[target] = [i, i];
        }
    }
    if (map[target]) {
        return map[target];
    }
    return [-1, -1];
};

var searchRange = function (nums, target) {
    const length = nums.length;
    let visited = false;
    let start = -1,
        end = -1;
    for (let i = 0; i < length; i++) {
        if (nums[i] == target) {
            if (!visited) {
                start = i;
                visited = true;
            }
            end = i;
        }
    }
    if (visited) {
        return [start, end];
    }
    return [-1, -1];
};

var searchRange = function (nums, target) {
    const length = nums.length;
    let visited = false;
    let start = -1,
        end = -1;
    for (let i = 0; i < length; i++) {
        let temp = nums[i];
        if (visited && temp != target) {
            break;
        }
        if (temp == target) {
            if (!visited) {
                start = i;
                visited = true;
            }
            end = i;
        }
    }
    return [start, end];
};
//二分查找
var searchRange = function (nums, target) {
    const length = nums.length;
    let start = -1,
        end = -1;
    let left = 0;
    let right = length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] == target) {
            let middleToEnd = mid;
            while (middleToEnd <= right && (nums[middleToEnd] == target)) {
                end = middleToEnd++;
            }
            let middleToStart = mid;
            while (middleToStart >= left && (nums[middleToStart] == target)) {
                start = middleToStart--;
            }
            return [start, end];
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return [start, end];
};
//查找大于等于target的坐标
var binarySearch = (nums, target, lower) => {
    let left = 0,
        right = nums.length - 1,
        ans = -1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if ((lower && nums[mid] >= target) || (nums[mid] > target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

var searchRange = function (nums, target) {
    const length = nums.length;
    let start = -1,
        end = -1;
    let leftIndex = binarySearch(nums, target, true);
    let rightIndex = binarySearch(nums, target, false);
    if (nums[leftIndex] == target) {
        if (rightIndex < 0) {
            end = length - 1;
        } else {
            end = rightIndex - 1;
        }
        return [leftIndex, end];
    }
    return [start, end];
};

//查找大于等于target的坐标
var binarySearch = (nums, target) => {
    let left = 0,
        right = nums.length - 1,
        ans = -1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] >= target) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

var searchRange = function (nums, target) {
    const length = nums.length;
    let start = -1,
        end = -1;
    let leftIndex = binarySearch(nums, target);
    let rightIndex = binarySearch(nums, target + 1);
    if (nums[leftIndex] == target) {
        if (rightIndex < 0) {
            end = length - 1;
        } else {
            end = rightIndex - 1;
        }
        return [leftIndex, end];
    }
    return [start, end];
};