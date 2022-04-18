/*
 * @Author: yhf 
 * @Date: 2021-11-We 10:10:21 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 10:10:21 
 */



/**
 * 最长和谐子序列
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。
现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。
数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到

 * 
 * @param {number[]} nums
 * @return {number}
 */

// 方法一：枚举
// 我们可以枚举数组中的每一个元素，对于当前枚举的元素 x，它可以和 x + 1 组成和谐子序列。我们再遍历一遍整个数组，找出等于 x 或 x + 1 的元素个数，就可以得到以 x 为最小值的和谐子序列的长度。

// 链接：https://leetcode-cn.com/problems/longest-harmonious-subsequence/solution/zui-chang-he-xie-zi-xu-lie-by-leetcode/

var findLHS = function (nums) {
    const length = nums.length;
    let res = 0;
    for (let i = 0; i < length; i++) {
        let count = 0,
            has = false; //判断是否有差1的元素
        for (let j = 0; j < length; j++) {
            if (nums[j] == nums[i]) {
                count++;
            } else if (nums[j] + 1 == nums[i]) {
                count++;
                has = true;
            }
        }
        if (has) { //判断是否有差1的元素，如果有，把这轮子序列长度保存起来，然后跟上一轮对比取大
            res = Math.max(count, res);
        }
    }
    return res;
};
// 用一个哈希映射（HashMap）来存储每个数出现的次数，这样就能在 O(1) 的时间内得到 x 和 x + 1 出现的次数。

// 我们首先遍历一遍数组，得到哈希映射。随后遍历哈希映射，设当前遍历到的键值对为 (x, value)，那么我们就查询 x + 1 在哈希映射中对应的值，就得到了 x 和 x + 1 出现的次数。

var findLHS = function (nums) {
    let res = 0;
    let map = new Map();
    for (const i of nums) {
        map.set(i, (map.get(i) || 0) + 1); //判断每个元素出现的次数
    }
    for (const key of map.keys()) {
        if (map.has(key + 1)) { //如果有和当前元素差1的元素，把两者数量相加，保存到一个中间变量，每次循环时跟上一次对比，取最大
            res = Math.max(map.get(key + 1) + map.get(key), res);
        }
    }
    return res;
};

// 哈希映射 + 单次扫描
// 在方法二中，我们需要对数组进行一次扫描，再对哈希映射进行一次扫描。事实上，我们也可以设计出只进行一次扫描的算法。

// 我们扫描一次数组，当扫描到元素 x 时，我们首先将 x 加入哈希映射，随后获取哈希映射中 x - 1, x, x + 1 三者出现的次数 u, v, w，那么 u + v 即为 x - 1, x 组成的和谐子序列的长度，v + w 即为 x, x + 1 组成的和谐子序列的长度。假设数组中最长的和谐子序列的最后一个元素在数组中的位置为 i，那么在扫描到 nums[i] 时，u + v 和 v + w 中一定有一个就是答案。因此这种方法可以找到最长的和谐子序列的长度。


var findLHS = function (nums) {
    let res = 0;
    let map = new Map();
    for (const i of nums) {
        map.set(i, (map.get(i) || 0) + 1);
        if (map.has(i + 1)) {
            res = Math.max(map.get(i + 1) + map.get(i), res);
        }
        if (map.has(i - 1)) {
            res = Math.max(map.get(i - 1) + map.get(i), res);
        }
    }
    return res;
};

var findLHS = function (nums) {
    const length = nums.length;
    nums.sort((a,b)=>a-b);
    let res = 0;
    let begin = 0;
    for (let i = 0; i < length; i++) {
        while(nums[i] - nums[begin] > 1){//跳到上一组重复元素的开头
            begin++;
        }
                
        if (nums[i] - nums[begin] == 1) {
            res = Math.max(i - begin + 1, res);
        }

    }
    return res;
};