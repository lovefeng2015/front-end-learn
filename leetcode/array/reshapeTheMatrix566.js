/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 08:56:27 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 08:56:27 
 */

/**
 * 重塑矩阵
 * 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

 * 
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

//暴力解法
var matrixReshape = function (mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n != r * c) {
        return mat;
    }
    let result = new Array(r).fill(0).map(() => new Array(c).fill(0));
    let row = 0,
        column = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (column >= c) {
                row++;
                column = 0;
            }
            result[row][column] = mat[i][j];
            column++;

        }
    }
    return result;
};

// 设nums 本身为 m 行 n列，如果mn不等于rc，那么二者包含的元素个数不相同，因此无法进行重塑；

// 否则，对于 x∈[0,mn)，第 x 个元素在nums 中对应的下标为(x / n,x % n)，而在新的重塑矩阵中对应的下标为(x / c,x % c)。我们直接进行赋值即可。

var matrixReshape = function (mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n != r * c) {
        return mat;
    }
    let result = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let i = 0; i < m * n; i++) {
        result[(i / c) >> 0][i % c] = mat[(i / n) >> 0][i % n]
    }
    return result;
};