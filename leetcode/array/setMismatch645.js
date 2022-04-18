/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 12:35:49 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 12:35:49 
 */
/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 12:01:18 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 12:01:18 
 */

/**
 * 错误的集合
 * 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，
 * 导致集合 丢失了一个数字 并且 有一个数字重复 。请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const res = [];
    nums.sort((a, b) => a - b);
    const set = new Set(nums);
    let start = 1;
    for (let i = 1; i < length; i++) {
        if (nums[i] == nums[i - 1]) {
            res.push(nums[i - 1]);
            break;
        }

    }
    while (start <= length) {
        if (!set.has(start)) {
            res.push(start);
            break;
        }
        start++;
    }
    return res;
};

var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const res = [];
    nums.sort((a, b) => a - b);
    const set = new Set(nums);
    let error = -1,
        lost = -1;
    for (let i = 0; i < length; i++) {
        if (i > 0 && (nums[i] == nums[i - 1])) {
            error = nums[i - 1];
        }
        if (!set.has(i + 1)) {
            lost = i + 1;
        }
    }
    if (error != -1) {
        return [error, lost];
    }
    return res;
};

// 将数组排序之后，比较每对相邻的元素，即可找到错误的集合。

// 寻找重复的数字较为简单，如果相邻的两个元素相等，则该元素为重复的数字。

// 寻找丢失的数字相对复杂，可能有以下两种情况：

// 如果丢失的数字大于 1 且小于 n，则一定存在相邻的两个元素的差等于 2，这两个元素之间的值即为丢失的数字；

// 如果丢失的数字是 1 或 n，则需要另外判断。

// 为了寻找丢失的数字，需要在遍历已排序数组的同时记录上一个元素，然后计算当前元素与上一个元素的差。考虑到丢失的数字可能是 1，因此需要将上一个元素初始化为 0。

// 当丢失的数字小于n时，通过计算当前元素与上一个元素的差，即可得到丢失的数字；

// 如果nums[n-1]/n，则丢失的数字是 n。


var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const errorArray = new Array(2).fill(0);
    nums.sort((a, b) => a - b);
    let prv = 0;
    for (let i = 0; i < length; i++) {
        const cur = nums[i];
        if (cur == prv) {
            errorArray[0] = prv;
        } else if (cur - prv > 1) {
            errorArray[1] = prv + 1;
        }
        prv = cur;
    }
    if (nums[length - 1] != length) {
        errorArray[1] = length;
    }
    return errorArray;
};
// 哈希表
// 重复的数字在数组中出现 2 次，丢失的数字在数组中出现 0 次，其余的每个数字在数组中出现 1 次。因此可以使用哈希表记录每个元素在数组中出现的次数，然后遍历从 1 到 n 的每个数字，分别找到出现 2 次和出现 0 次的数字，即为重复的数字和丢失的数字。


var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const map = new Map();
    const errorArray = new Array(2).fill(0);
    let start = 1;
    for (let i = 0; i < length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if (map.get(nums[i]) == 2) {
            errorArray[0] = nums[i];
        }
    }
    while (start <= length) {
        if (!map.has(start)) {
            errorArray[1] = start;
            break;
        }
        start++;
    }
    return errorArray;
};
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const map = new Map();
    const errorArray = new Array(2).fill(0);
    let start = 1;
    for (let i = 0; i < length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    }
    while (start <= length) {
        const count = map.get(start) || 0;
        if (count == 2) {
            errorArray[0] = start;
        }
        if (count == 0) {
            errorArray[1] = start;
        }
        start++;
    }
    return errorArray;
};
//我们需要对数组进行排序
// 重复的数字就是nums[i + 1] == nums[i]
// 丢失的数字呢需要分情况考虑
// 当nums[0] ！= 1，丢失的数字是1
// 当nums[-1] != len(nums),丢失的数字是len(nums)
// 排除上面两种场景，那么当nums[i + 1] - nums[i] = 2时， 丢失的数字为nums[i] + 1
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    nums.sort((a, b) => a - b);
    let error = -1,
        lost = -1;
    if (nums[0] != 1) {
        lost = 1;
    }
    if (nums[length - 1] != length) {
        lost = length;
    }
    for (let i = 1; i < length; i++) {
        if (nums[i] == nums[i - 1]) {
            error = nums[i - 1];
        }
        if (nums[i] - nums[i - 1] == 2) {
            lost = nums[i] - 1;
        }
    }
    return [error, lost];
};

//原地标记。利用数值转化为下标，把访问过的位置重写为负数。
// 如果访问到是负数的位置，这个负数位置+1即为重复的数字
// 经历了第一次循环后，除了重复数字指向的位置，剩下一个为正数的位置即可获得丢失数字
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    let repeate = -1,
        lost = -1;

    for (let i = 0; i < length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            repeate = index + 1;
        }
        nums[index] = -nums[index];
    }
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0 && i + 1 != repeate) {
            lost = i + 1;
            break;
        }

    }
    return [repeate, lost];
};

// 第一个元素：重复元素 = 当前数组和 - 去重后的数组和
// 第二个元素：缺失元素 = 数学1~n求和 - 去重后的数组和
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const noRepeat = Array.from(new Set(nums));
    let orginSum = nums.reduce((acc, cur) => acc + cur);
    let noRepeatSum = noRepeat.reduce((acc, cur) => acc + cur);
    let sum = 0;
    for (let i = 1; i <= length; i++) {
        sum += i;
    }
    let repeate = orginSum - noRepeatSum;
    let lost = sum - noRepeatSum;
    return [repeate, lost];
};
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const noRepeat = Array.from(new Set(nums));
    let orginSum = nums.reduce((acc, cur) => acc + cur);
    let noRepeatSum = noRepeat.reduce((acc, cur) => acc + cur);
    let sum = (length * (length + 1) / 2) >> 0; //数学方法替代循环求和

    let repeate = orginSum - noRepeatSum;
    let lost = sum - noRepeatSum;
    return [repeate, lost];
};
//数组做哈希表
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const map = new Array(length + 1).fill(0);
    for (let i = 0; i < length; i++) {
        map[nums[i]]++;
    }
    let repeate = -1,
        lost = -1;
    for (let j = 1; j < map.length; j++) {
        if (map[j] == 1) {
            continue;
        }
        if (map[j] == 2) {
            repeate = j;
        }
        if (map[j] == 0) {
            lost = j;
        }

    }
    return [repeate, lost];
};
//数组做哈希表，知道重复数据，使用数学求另一个数据
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    let repeate = -1,
        lost = -1;
    const map = new Array(length + 1).fill(0);
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += nums[i];
        if (map[nums[i]] == 0) { //如果map的长度为length，这里改为map[nums[i]-1]
            map[nums[i]]++;
        } else {
            repeate = nums[i];
        }
    }
    lost = repeate + ((length * (length + 1) / 2) >> 0) - sum;
    return [repeate, lost];
};

var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    const map = new Array(length + 1).fill(0);
    for (let i = 0; i < length; i++) {
        map[nums[i]]++;
    }
    let repeate = -1,
        lost = -1;
    for (let j = 1; j < map.length; j++) {
        if (map[j] == 1) {
            continue;
        }
        if (map[j] == 2) {
            repeate = j;
        }
        if (map[j] == 0) {
            lost = j;
        }

    }
    return [repeate, lost];
};
  // 通过判断nums[i]!=i+1；来判断是否在正确的位置，如果不是，交换值,如果该位置上的数是正确的，那么 nums[i] 就是重复的数
var findErrorNums = function (nums) {
    const length = nums.length;
    if (length == 1) {
        return [nums[0], 1];
    }
    let repeate = -1,
        lost = -1;
    for (let i = 0; i < length; i++) {
        // 不在正确的位置上
        while (nums[i] != i + 1) {
            // 找到 nums[i] 应该出现的位置：idx = nums[i] - 1
            // 如果该位置上的数是正确的，那么 nums[i] 就是重复的数
            let idx = nums[i] - 1;
            if (nums[idx] == nums[i]) {
                repeate = nums[idx];
                break;
            }
            swap(nums, i, idx); //交换，把nums[index]放到正确的位置
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            lost = i + 1;
            break;
        }
    }
    return [repeate, lost];
};

function swap(nums, i, j) {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}