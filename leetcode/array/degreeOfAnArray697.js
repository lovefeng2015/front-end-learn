/*
 * @Author: yhf 
 * @Date: 2021-11-Su 04:53:17 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 04:53:17 
 */

/**
 * 数组的度
 * 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。
你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度

 * 要找出数组的众数，并且还有找出众数在数组中第一次出现和最后一次出现的位置，两个位置组成区间长度就是答案, 如果众数不止一个，那么要取区间长度最短那个
 * @param {number[]} nums
 * @return {number}
 */
//哈希
var findShortestSubArray = function (nums) {
    const length = nums.length;
    let map = new Map();
    let count = 1;
    for (let i = 0; i < length; i++) {
        if (map.has(nums[i])) {
            let vuale = map.get(nums[i]) + 1;
            map.set(nums[i], vuale);
            count = Math.max(count, vuale);
            continue;
        }
        map.set(nums[i], 1);
    }
    let frequency = [];
    for (const [key, vuale] of map) {
        if (vuale == count) {
            frequency.push(key)
        }
    }
    let start = 0;
    let end = 0;
    let frequencyNum = 0;
    let ans = Number.MAX_VALUE;
    for (let key of frequency) {
        for (let j = 0; j < length; j++) {
            if (key == nums[j]) {
                if (frequencyNum == 0) {
                    start = j;
                }
                frequencyNum++;
                if (frequencyNum == count) {
                    frequencyNum = 0;
                    end = j;
                    ans = Math.min(ans, end - start + 1)
                    break;
                }
            }

        }

    }
    return ans == Number.MAX_VALUE ? 1 : ans;
};
//使用对象做哈希，使用keys或者values等方法可以循环对象
var findShortestSubArray = function (nums) {
    const length = nums.length;
    let map = {};
    let maxCount = 1;
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < length; i++) {
        if (map[nums[i]] != undefined) {
            map[nums[i]][0]++;
            map[nums[i]][2] = i;
            maxCount = Math.max(maxCount, map[nums[i]][0]);
            continue;
        }
        map[nums[i]] = [1, i, i];
    }
    for (const [count, start, end] of Object.values(map)) {
        if (count == maxCount) {
            ans = Math.min(ans, end - start + 1);
        }
    }
    return ans == Number.MAX_VALUE ? 1 : ans;
};

//使用对象做哈希，使用keys或者values等方法可以循环对象,对象做哈希表，可以用属性保存数组或者对象
var findShortestSubArray = function (nums) {
    const length = nums.length;
    let map = {};
    for (let i = 0; i < length; i++) {
        if (map[nums[i]] != undefined) {
            map[nums[i]][0]++;
            map[nums[i]][2] = i;
            continue;
        }
        map[nums[i]] = [1, i, i];
    }
    let max = 0,
        minLen = 0;
    for (const [count, start, end] of Object.values(map)) {
        if (max < count) {
            max = count;
            minLen = end - start + 1;
        } else if (max == count) {
            if (minLen > (end - start + 1)) {
                minLen = end - start + 1;
            }
        }
    }
    return minLen;
};

//使用对象做哈希，使用keys或者values等方法可以循环对象,对象做哈希表，可以用属性保存数组或者对象
var findShortestSubArray = function (nums) {
    const length = nums.length;
    let map = {};
    for (let i = 0; i < length; i++) {
        if (map[nums[i]] != undefined) {
            map[nums[i]][0]++;
            map[nums[i]][2] = i;
            continue;
        }
        map[nums[i]] = [1, i, i];
    }
    let max = 0,
        minLen = 1;
    for (const [count, start, end] of Object.values(map)) {
        if (count == max) {
            minLen = Math.min(minLen, end - start + 1);
        } else if (count > max) {
            max = count;
            minLen = end - start + 1;
        }
    }
    return minLen;
};
//数组做哈希，滑动窗口，再次用数组做哈希，找出重复数的最后坐标后，再次循环到重复数的第一个坐标，把数量减一，跳出循环
var findShortestSubArray = function (nums) {
    const length = nums.length;
    let freq = new Array(50000).fill(0);
    let freqCount = 1;
    for (let i = 0; i < length; i++) {
        freqCount = Math.max(++freq[nums[i]], freqCount);
    }
    freq = freq.fill(0);
    let left = 0,
        right = 0,
        minlen = Number.MAX_VALUE;
    while (right < length) {
        freq[nums[right]]++;
        while (left <= right && freqCount == (freq[nums[right]])) {
            minlen = Math.min(right - left + 1, minlen);
            freq[nums[left++]]--; //找出重复数的最后坐标后，再次循环到重复数的第一个坐标，把数量减一，跳出循环
        }
        right++;
    }
    return minlen;
}

//对象做哈希，通过把坐标放进数组，然后判断数组长度来确定频数
var findShortestSubArray = function (nums) {
    const length = nums.length;
    let map = {};
    let maxCount = 1;
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < length; i++) {
        if (map[nums[i]] != undefined) {
            map[nums[i]].push(i);
            maxCount = Math.max(maxCount, map[nums[i]].length);
            continue;
        }
        map[nums[i]] = [i];
    }
    for (const value of Object.values(map)) {
        if (value.length == maxCount) {
            ans = Math.min(ans, value[maxCount-1] - value[0] + 1);
        }
    }
    return ans == Number.MAX_VALUE ? 1 : ans;
};