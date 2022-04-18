/*
 * @Author: yhf 
 * @Date: 2021-11-We 06:59:44 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 06:59:44 
 */


/**
 * 338. 比特位计数
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 * 
 * @param {number} n
 * @return {number[]}
 */
//i & (i - 1)可以去掉i最右边的一个1（如果有），因此 i & (i - 1）是比 i 小的，而且i & (i - 1)的1的个数已经在前面算过了，所以i的1的个数就是 i & (i - 1)的1的个数加上1
 var countBits = function(n) {
     const arr=new Array(n+1).fill(0);
     for (let  i = 1;  i <=n;  i++) {
         arr[i]=arr[i&(i-1)]+1
     }
     return arr;
};

var countBits = function(n) {
    const arr=new Array(n+1).fill(0);
    for (let  i = 1;  i <=n;  i++) {
        arr[i]=countOnes(i)
    }
    return arr;
};

function countOnes(n) {
    let ones=0;
    while (n>0) {
        n=n&(n-1);
        ones++;
    }
    return ones;
}
//动态规划，暂时不理解
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    let highBit = 0;
    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        bits[i] = bits[i - highBit] + 1;
    }
    return bits;
};
//bits[x] 的值等于bits[x/2]的值加上 x 除以 2 的余数。
//x/2==x>>1,x%2==x&1
// 方法二：i >> 1会把最低位去掉，因此i >> 1 也是比i小的，同样也是在前面的数组里算过。当 i 的最低位是0，则 i 中1的个数和i >> 1中1的个数相同；当i的最低位是1，i 中1的个数是 i >> 1中1的个数再加1
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }
    return bits;
};
//i & (i - 1)可以去掉i最右边的一个1（如果有），因此 i & (i - 1）是比 i 小的，而且i & (i - 1)的1的个数已经在前面算过了，所以i的1的个数就是 i & (i - 1)的1的个数加上1

// 方法一：i & (i - 1)可以去掉i最右边的一个1（如果有），因此 i & (i - 1）是比 i 小的，而且i & (i - 1)的1的个数已经在前面算过了，所以i的1的个数就是 i & (i - 1)的1的个数加上1
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i & (i - 1)] + 1;
    }
    return bits;
};

