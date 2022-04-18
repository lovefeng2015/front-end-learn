/*
 * @Author: yhf 
 * @Date: 2021-11-Mo 10:25:25 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Mo 10:25:25 
 */

/**
 * 搜索二维矩阵 II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == target) {
                return true;
            }

        }

    }
    return false;
};
//二分法，找出第一列中不大于target的row下标，然后再用二分法找出这些row中等于target的下标
var searchMatrix = function (matrix, target) {
    let maxRow = searchMin(matrix, target);
    if (maxRow == -1) {
        return false;
    }
    if (matrix[maxRow][0] == target) {
        return true;
    }
    for (let i = 0; i <= maxRow; i++) {
        let ans = search(matrix[i], target);
        if (ans > 0) {
            return true;
        }
    }
    return false;
};
var searchMin = function (nums, target) {
    let length = nums.length;
    if (nums[length - 1][0] <= target) {
        return length - 1;
    }
    if (nums[0][0] == target) {
        return 0;
    }
    if (nums[0][0] > target) {
        return -1;
    }
    let left = 0;
    let right = nums.length; // 定义target在左闭右开的区间里，即：[left, right]
    let mid;
    while (left < right) {
        mid = Math.floor(left + (right - left) / 2); //可以防止left+right溢出（超出整数范围）。
        //mid=left+((right-left)>>1);//有符号右移1相当于除于2，并去掉小数得到整数
        if (nums[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }
    return (nums[left][0] > target) ? (left - 1) : left;
}

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1; // 定义target在左闭右开的区间里，即：[left, right]
    let mid;
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2); //可以防止left+right溢出（超出整数范围）。
        //mid=left+((right-left)>>1);//有符号右移1相当于除于2，并去掉小数得到整数
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// 方法三：Z 字形查找
// 思路与算法

// 我们可以从矩阵 \matrix 的右上角 (0, n-1)进行搜索。在每一步的搜索过程中，如果我们位于位置 (x,y)，那么我们希望在以 \matrix 的左下角为左下角、以 (x,y) 为右上角的矩阵中进行搜索，即行的范围为 [x, m - 1][x,m−1]，列的范围为 [0, y][0,y]：

// 如果 matrix[x,y]=target，说明搜索完成；

// 如果 matrix[x,y]>target，由于每一列的元素都是升序排列的，那么在当前的搜索矩阵中，所有位于第 y 列的元素都是严格大于 arget 的，因此我们可以将它们全部忽略，即将 y 减少 1；

// 如果 matrix[x,y]<target，由于每一行的元素都是升序排列的，那么在当前的搜索矩阵中，所有位于第 x 行的元素都是严格小于 target 的，因此我们可以将它们全部忽略，即将 x 增加 1。

// 在搜索的过程中，如果我们超出了矩阵的边界，那么说明矩阵中不存在target。
// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/solution/sou-suo-er-wei-ju-zhen-ii-by-leetcode-so-9hcx/

var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let x = 0,
        y = n - 1;
    while (x < m && y >= 0) {
        if (matrix[x][y] == target) {
            return true;
        }
        if (matrix[x][y] > target) {
            y--;
        }
        if (matrix[x][y] < target) {
            x++;
        }
    }
    return false;
};

var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let x = 0,
        y = n - 1;
    while (x < m && y >= 0) {
        let temp = matrix[x][y]
        if (temp == target) {
            return true;
        }
        if (temp > target) {
            y--;
        }
        if (temp < target) {
            x++;
        }
    }
    return false;
};