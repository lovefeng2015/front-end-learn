/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 04:25:32 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 04:25:32 
 */

/**
  * 托普利茨矩阵
  * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。

 * @param {number[][]} matrix
 * @return {boolean}
 */
// 方法一：遍历
// 根据定义，当且仅当矩阵中每个元素都与其左上角相邻的元素（如果存在）相等时，该矩阵为托普利茨矩阵。因此，我们遍历该矩阵，将每一个元素和它左上角的元素相比对即可。


var isToeplitzMatrix = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] != matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true;
};