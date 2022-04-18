/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 09:05:32 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 09:05:32 
 */


/**
 * 461. 汉明距离
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 * 
 * 
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//对两个数进行异或操作，位级表示不同的那一位为 1，统计有多少个 1 即可。
// 具体地，记 s=x⊕y，我们可以不断地检查 s 的最低位，如果最低位为 1，
// 那么令计数器加一，然后我们令 s 整体右移一位，这样 s 的最低位将被舍去，原本的次低位就变成了新的最低位。我们重复这个过程直到 s=0 为止。这样计数器中就累计了 s 的二进制表示中 1 的数量

var hammingDistance = function (x, y) {
    let z = x ^ y;
    let count = 0;
    while (z != 0) {
        if ((z & 1) == 1) {//count += z & 1;
            count++;
        }
        z = z >> 1;
    }
    return count;
};
//使用 z&(z-1) 去除 z 位级表示最低的那一位。
// 使用Brian Kernighan 算法进行优化，具体地，该算法可以被描述为这样一个结论：记 f(x) 表示 x 和 x−1 进行与运算所得的结果（即 f(x)=x & (x−1)），那么 f(x) 恰为 x 删去其二进制表示中最右侧的 1 的结果。
// 基于该算法，当我们计算出 s=x⊕y，只需要不断让s=f(s)，直到s=0 即可。这样每循环一次，s 都会删去其二进制表示中最右侧的 1，最终循环的次数即为 s 的二进制表示中 1 的数量

var hammingDistance = function (x, y) {
    let z = x ^ y;
    let count = 0;
    while (z != 0) {
       z=z&(z-1);
       count++;
    }
    return count;
};