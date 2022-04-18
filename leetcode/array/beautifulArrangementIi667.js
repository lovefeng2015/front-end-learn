/*
 * @Author: yhf 
 * @Date: 2021-11-Su 03:25:26 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Su 03:25:26 
 */

/**
 * 优美的排列 II
 * 给你两个整数 n 和 k ，请你构造一个答案列表 answer ，该列表应当包含从 1 到 n 的 n 个不同正整数，并同时满足下述条件：
假设该列表是 answer = [a1, a2, a3, ... , an] ，那么列表 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数。
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

// 顺序数组或者逆序数组：[1, 2, 3, ..., n][1,2,3,...,n] ，呈等差数列形式，此时公差为 11，即 k = 1k=1；
// 最大值和最小值交错出现： [1, n, 2, n-1, 3, n-2, ....][1,n,2,n−1,3,n−2,....]，此时相邻的两个数的差的绝对值不会出现重复，kk 达到最大，k = n - 1k=n−1。大家可以用一个具体的例子验证一下

//思想：顺序排n个数则k为1，插排n个数即[1,n,2,n-1...]则k为n-1，且最后一对的差值为1。 则可以利用这个性质先顺排再插排来构造，其中插排需要的元素个数为k+1即可构造k，其余的n-(k+1)的数顺排

// 链接：https://leetcode-cn.com/problems/beautiful-arrangement-ii/solution/you-mei-de-pai-lie-ii-by-leetcode/


var constructArray = function (n, k) {
    const res = [];
    // 第 1 步：构造等差数列，把 1 到 n - k - 1 赋值结果数组的前面
    for (let i = 0; i < n - k - 1; i++) {
        res[i] = i + 1;
    }

    let j = 0;     // 控制交错的变量
    // 第 2 步：构造交错数列，下标从 n - k - 1 开始，数值从 n - k 开始
    let left = n - k;
    let right = n;

    for (let i = n - k - 1; i <n; i++) {
        if (j % 2 == 0) {
            res[i++] = left;
            left++;
        } else {
            res[i] = right;
            right--;
        }
        j++;
    }
    return res;
};