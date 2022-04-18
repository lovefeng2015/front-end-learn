/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 04:40:47 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 04:40:47 
 */

/**
 * 136. 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素
 * @param {number[]} nums
 * @return {number}
 */

//位运算^ 利用 x ^ x = 0  x ^ 0s = x 
 var singleNumber = function(nums) {
     let res=0;
     for (const x of nums) {
         res=res^x;
     }
     return res;
};