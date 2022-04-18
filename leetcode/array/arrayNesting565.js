/*
 * @Author: yhf 
 * @Date: 2021-11-Su 10:05:35 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 10:05:35 
 */


/**
 * 数组嵌套
 * 索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。

假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素

 * 
 * @param {number[]} nums
 * @return {number}
 */

var arrayNesting = function (nums) {
    const length = nums.length;
    let reslen = 0;
    for (let i = 0; i < length; i++) {
        let start = nums[i];
        let count = 0;
        do {
            start = nums[start];
            count++;
        } while (start != nums[i]);
        reslen = Math.max(reslen, count)
    }
    return reslen;
};
//数组做bool哈希表
var arrayNesting = function (nums) {
    const length = nums.length;
    const visitArray = new Array(length).fill(0);
    let reslen = 0;
    for (let i = 0; i < length; i++) {
        if (!visitArray[i]) {
            let start = nums[i];
            let count = 0;
            do {
                start = nums[start];
                count++;
                visitArray[start] = 1;
            } while (start != nums[i]);
            reslen = Math.max(reslen, count)
        }

    }
    return reslen;
};

//原数组使用Number.MAX_VALUE来替代visit
var arrayNesting = function (nums) {
    const length = nums.length;
    let reslen = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] != Number.MAX_VALUE) {
            let start = nums[i];
            let count = 0;
            while (nums[start] != Number.MAX_VALUE) {
                let temp = start;
                start = nums[start];
                count++;
                nums[temp] = Number.MAX_VALUE;
            }
            reslen = Math.max(reslen, count)
        }

    }
    return reslen;
};

//原数组使用-1标记访问过的
var arrayNesting = function (nums) {
    const length = nums.length;
    let reslen = 0;
    for (let i = 0; i < length; i++) {
            if(nums[i]<0){
                continue;
            }
            let start = nums[i];
            let count = 0;
            while (nums[start] >=0) {
                let temp = start;
                start = nums[start];
                count++;
                nums[temp] = -1;
            }
            reslen = Math.max(reslen, count)
      
    }
    return reslen;
};