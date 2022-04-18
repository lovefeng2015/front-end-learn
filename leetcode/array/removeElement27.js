/*
 * @Author: yhf 
 * @Date: 2021-11-Th 03:40:33 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 03:40:33 
 */


/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  由于题目要求删除数组中等于 val 的元素，因此输出数组的长度一定小于等于输入数组的长度，我们可以把输出的数组直接写在输入数组上。可以使用双指针：右指针right 指向当前将要处理的元素，左指针 left 指向下一个将要赋值的位置。

//  如果右指针指向的元素不等于 val，它一定是输出数组的一个元素，我们就将右指针指向的元素复制到左指针位置，然后将左右指针同时右移；
 
//  如果右指针指向的元素等于 val，它不能在输出数组里，此时左指针不动，右指针右移一位。
 
//  整个过程保持不变的性质是：区间 [0,left) 中的元素都不等于 val。当左右指针遍历完输入数组以后，left 的值就是输出数组的长度。
 
//  这样的算法在最坏情况下（输入数组中没有元素等于 val），左右指针各遍历了数组一次
 
//  链接：https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode-solution-svxi/

var removeElement = function (nums, val) {
    let length = nums.length;
    let slow = 0;
    for (let fast = 0; fast < length; fast++) {//循环，把不符合条件放进slow指针的数组里
        if (nums[fast] !== val) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
}

// 双指针优化
// 思路

// 如果要移除的元素恰好在数组的开头，例如序列 [1,2,3,4,5][1,2,3,4,5]，当 val 为 11 时，我们需要把每一个元素都左移一位。注意到题目中说：「元素的顺序可以改变」。实际上我们可以直接将最后一个元素 55 移动到序列开头，取代元素 11，得到序列 [5,2,3,4][5,2,3,4]，同样满足题目要求。这个优化在序列中 val 元素的数量较少时非常有效。

// 实现方面，我们依然使用双指针，两个指针初始时分别位于数组的首尾，向中间移动遍历该序列。

// 算法

// 如果左指针 left 指向的元素等于 val，此时将右指针 right 指向的元素复制到左指针 left 的位置，然后右指针right 左移一位。如果赋值过来的元素恰好也等于 val，可以继续把右指针 right 指向的元素的值赋值过来（左指针left 指向的等于 val 的元素的位置继续被覆盖），直到左指针指向的元素的值不等于 val 为止。

// 当左指针 left 和右指针 right 重合的时候，左右指针遍历完数组中所有的元素。

// 这样的方法两个指针在最坏的情况下合起来只遍历了数组一次。与方法一不同的是，方法二避免了需要保留的元素的重复赋值操作。


var removeElement = function (nums, val) {
    let left = 0,
        right = nums.length;
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};

var removeElement = function (nums, val) {
    let length = nums.length;
    if (length == 0) {
        return 0;
    }
    let count = 0;
    for (let i = length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            count++;
        }

    }
    return length - count;
};
var removeElement = function (nums, val) {
    let length = nums.length;
    if (length == 0) {
        return 0;
    }
    let count = 0;
    let left = 0,
        right = length - 1;
    while (left <= right) {
        let hasLeft = false,
            hasRight = false;
        if (nums[left] === val) {
            count++;
            nums.splice(left, 1);
            right--;
            hasLeft = true;
        }
        if (nums[right] === val) {
            count++;
            nums.splice(right, 1);
            right--;
            hasRight = true;
        }
        if (!hasLeft) {
            left++;
        }
        if (!(hasLeft || hasRight)) {
            right--;
        }


    }

    return length - count;
};