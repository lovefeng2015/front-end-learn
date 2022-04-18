/*
 * @Author: yhf 
 * @Date: 2021-11-Su 11:34:57 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 11:34:57 
 */


/**
 * 最多能完成排序的块
 * 数组arr是[0, 1, ..., arr.length - 1]的一种排列，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块？


 * @param {number[]} arr
 * @return {number}
 */

//一个区间内最大的数字，不应该大于这个区间最右边的index。因此我们从左向右遍历，如果已经观测到的最大值小于等于这个区间的index，则可以划分区间
 var maxChunksToSorted = function(arr) {
     let ans=0,max=0;
     for (let i = 0; i < arr.length; i++) {
         max=Math.max(max,arr[i]);
         if(max==i){
             ans++;
         }
         
     }
     return ans;

};