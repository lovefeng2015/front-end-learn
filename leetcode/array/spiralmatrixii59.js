/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 08:46:28 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 08:46:28 
 */
/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 08:10:25 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 08:10:25 
 */


/**
对于每层，从左上方开始以顺时针的顺序填入所有元素。假设当前层的左上角位于 (\textit{top}, \textit{left})(top,left)，右下角位于 (\textit{bottom}, \textit{right})(bottom,right)，按照如下顺序填入当前层的元素。

从左到右填入上侧元素，依次为 (\textit{top}, \textit{left})(top,left) 到 (\textit{top}, \textit{right})(top,right)。

从上到下填入右侧元素，依次为 (\textit{top} + 1, \textit{right})(top+1,right) 到 (\textit{bottom}, \textit{right})(bottom,right)。

如果 \textit{left} < \textit{right}left<right 且 \textit{top} < \textit{bottom}top<bottom，则从右到左填入下侧元素，依次为 (\textit{bottom}, \textit{right} - 1)(bottom,right−1) 到 (\textit{bottom}, \textit{left} + 1)(bottom,left+1)，以及从下到上填入左侧元素，依次为 (\textit{bottom}, \textit{left})(bottom,left) 到 (\textit{top} + 1, \textit{left})(top+1,left)。

填完当前层的元素之后，将 \textit{left}left 和 \textit{top}top 分别增加 11，将 \textit{right}right 和 \textit{bottom}bottom 分别减少 11，进入下一层继续填入元素，直到填完所有元素为止。

链接：https://leetcode-cn.com/problems/spiral-matrix-ii/solution/luo-xuan-ju-zhen-ii-by-leetcode-solution-f7fp/

 */


var generateMatrix = function (n) {
    let num = 1;
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            matrix[top][column] = num;
            num++;
        }
        for (let row = top + 1; row <= bottom; row++) {
            matrix[row][right] = num;
            num++;
        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                matrix[bottom][column] = num;
                num++;
            }
            for (let row = bottom; row > top; row--) {
                matrix[row][left] = num;
                num++;
            }

        }
        top++;
        left++;
        bottom--;
        right--;

    }
    return matrix;
};

var generateMatrix = function (n) {
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let index = 1;
    let left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1;
    let max = Math.pow(n, 2);
    while (index <= max) {
        for (let column = left; column <= right; column++) {
            matrix[top][column] = index++;
        }
        top++;
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = index++;
        }
        right--;
        for (let column = right; column >= left; column--) {
            matrix[bottom][column] = index++;
        }
        bottom--;
        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = index++;
        }

        left++;
    }
    return matrix;
};