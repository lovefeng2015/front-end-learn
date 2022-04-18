/*
 * @Author: yhf 
 * @Date: 2021-11-Su 10:44:57 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 10:44:57 
 */



/**
 * 239. 滑动窗口最大值
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回滑动窗口中的最大值
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // 队列数组（存放的是元素下标，为了取值方便）
  const q = [];
  // 结果数组
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    // 若队列不为空，且当前元素大于等于队尾所存下标的元素，则弹出队尾
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    // 入队当前元素下标
    q.push(i);
    // 判断当前最大值（即队首元素）是否在窗口中，若不在便将其出队
    while (q[0] <= i - k) {//i-k 滑窗前面的元素下标
      q.shift();
    }
    // 当达到窗口大小时便开始向结果中添加数据
    if (i >= k - 1) ans.push(nums[q[0]]);
  }
  return ans;
};