/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 04:39:53 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 04:39:53 
 */


/**
 *  反转字符串
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    s.reverse();
};

var reverseString = function (s) {
    const length = s.length;
    const swapCount = length >> 1;
    for (let i = 0; i < swapCount; i++) {
        swap(s, s[i], s[length - 1 - i])
    }
};

var reverseString = function (s) {
    const length = s.length;
    let left=0,right=length-1;
    while (left<right) {
        swap(s, left, right);
        left++;
        right--;
    }
}

var swap = function (nums, n1, n2) {
    let temp = nums[n1];
    nums[n1] = nums[n2];
    nums[n2] = temp;
}
//解构赋值
var reverseString = function (s) {
    const n = s.length;
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
        [s[left], s[right]] = [s[right], s[left]];
    }
}