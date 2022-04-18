/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 04:04:50 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 04:04:50 
 */


/**
 *有序矩阵中第 K 小的元素 
 * 给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (matrix, k) {
   let flatArray = matrix.flat();
   flatArray.sort((a, b) => a - b);
   return flatArray[k + 1];
};

var kthSmallest = function (matrix, k) {
   let n = matrix.length;
   let left = matrix[0][0];
   let right = matrix[n - 1][n - 1];
   while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (check(matrix, mid, k, n)) {
         right = mid;
      } else {
         left = mid + 1;
      }
   }
   return left;
};

function check(matrix, mid, k, n) {
   let i = n - 1;
   let j = 0;
   let num = 0;
   while (i >= 0 && j < n) {
      let temp = matrix[i][j];
      if (temp<= mid) {
         num += i + 1;
         j++;
      } else {
         i--;
      }
   }
   return num >= k;
}

// 关于二分查找返回的left一定在矩阵中这个问题, 写一点个人的理解.
// 可以参考34. 在排序数组中查找元素的第一个和最后一个位置.

// 我们先看check函数.check函数的目的是统计矩阵里小等于mid的元素数目count. 再判断count和k的关系.因为mid = (l + r) / 2这种划分方法是把矩阵划分成了[left , mid] 与[mid + 1, right]两部分. 当 count < k 时, 说明mid太小了, 我们应该在[mid + 1, right] 这个范围里查找. 否则在[left, mid]范围里查找.
// 如果存在一个不在矩阵中的数a满足条件, 因为a不在矩阵中,那count统计的元素肯定都是小于a的, 那一定存在一个比a小且在矩阵中的数b满足条件,即从小于a的数变成了小于等于b的数 .等用题目中的例子,x = 13 和x = 14 都满足小于等于x的元素数目等于8, 对14来说统计的都是小于它的数, 而对13来说统计的都是小于等于它的数. 问题来了, 那为何取到的不是14而是13呢?

// 因为我们取mid的取法是 mid = (left + right) / 2, 当left < right时, mid 永远 取不到right, 想要mid取到right ,只有left == right. 但循环条件是 while(left < right),当 left == right时循环已经终止. 所以我们得到会是一个左边界. 还是用题目中的例子, 假设left = 13, right = 14 则 mid = (13 + 14) / 2 = 13

// 个人理解 其实靠两个边界来确保找到元素一定在数组中，第一个点check 函数 只有在count>=k的时候 更换范围 ，注意>=的条件。 这时候确保了最后一次左边界元素一定在集合中，然后通过不断收缩右边界的值 取mid的方式保证了 最后得到的值一定是在数组中有相等元素的左边界的值。 有错误请指正

// 还不明白的看这里：矩阵中一定存在一个数是第k小的数，我们来看left和right怎么逼近这个第k小的数

// 如果某个时候left就是第k小的数，因为mid大于left，所以check()函数一直返回true，即right向左移动直到left==right，退出while循坏。此时left是矩阵中的元素。 同理如果某个时候right就是这个第k小的数，则check()函数返回false，left会向右移动直到left==right，同上。

// 如果某个时候，left<第k小数<right，则根据check()函数，left，right一定会慢慢收缩，如果二分mid恰好等于第k小数，则check返回true，此时right==mid，对应第一种情况。如果不等于，以left为例，如果left+1==第k小数，如果二分mid小于第k小数，则mid==left(因为left+1正好等于第k小数)，此时check返回false，更新left=mid+1即得到了第k小数，left在矩阵中；如果mid大于第k小数，则收缩right，回到开始讨论的情况。