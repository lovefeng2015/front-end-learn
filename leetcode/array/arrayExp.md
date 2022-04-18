## 数组
数组是存放在连续内存空间上的相同类型数据的集合。

数组可以方便的通过下标索引的方式获取到下标下对应的数据。
- 数组下标都是从0开始的。
- 数组内存空间的地址是连续的

正是因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址。


### 涉及题目

[remove-element 移除元素 27](https://leetcode-cn.com/problems/remove-element/)

[find-first-and-last-position-of-element-in-sorted-array 在排序数组中查找元素的第一个和最后一个位置 34](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

[spiral-matrix-ii 螺旋矩阵 II 59](https://leetcode-cn.com/problems/spiral-matrix-ii/)

[sqrtx Sqrt(x) 69](https://leetcode-cn.com/problems/sqrtx/)

[find-minimum-in-rotated-sorted-array 寻找旋转排序数组中的最小值 153](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

[minimum-size-subarray-sum 长度最小的子数组 209](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

[search-a-2d-matrix-ii 搜索二维矩阵 II 240](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

[first-bad-version 第一个错误的版本 278](https://leetcode-cn.com/problems/first-bad-version/)

[move-zeroes 移动零 283](https://leetcode-cn.com/problems/move-zeroes/)

[find-the-duplicate-number 寻找重复数 287](https://leetcode-cn.com/problems/find-the-duplicate-number/)

[power-of-three 3的幂 326](https://leetcode-cn.com/problems/power-of-three/)

[valid-perfect-square  有效的完全平方数 367](https://leetcode-cn.com/problems/valid-perfect-square/)

[kth-smallest-element-in-a-sorted-matrix 有序矩阵中第 K 小的元素 378](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/)

[max-consecutive-ones 最大连续 1 的个数 485](https://leetcode-cn.com/problems/max-consecutive-ones/)

[single-element-in-a-sorted-array 有序数组中的单一元素 540](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/)

[array-nesting 数组嵌套 565](https://leetcode-cn.com/problems/array-nesting/)

[reshape-the-matrix 重塑矩阵 566](https://leetcode-cn.com/problems/reshape-the-matrix/)


[set-mismatch 错误的集合 645](https://leetcode-cn.com/problems/set-mismatch/)

[beautiful-arrangement-ii 优美的排列 II 667](https://leetcode-cn.com/problems/beautiful-arrangement-ii/) 此题意义不大

[degree-of-an-array 数组的度 697](https://leetcode-cn.com/problems/degree-of-an-array/) 

[binary-search 二分查找 q704](https://leetcode-cn.com/problems/binary-search/)

[find-smallest-letter-greater-than-target 寻找比目标字母大的最小字母 q744](https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/)

[toeplitz-matrix 托普利茨矩阵 q766](https://leetcode-cn.com/problems/toeplitz-matrix/)此题意义不大

[max-chunks-to-make-sorted 最多能完成排序的块 q769](https://leetcode-cn.com/problems/max-chunks-to-make-sorted/)

[squares-of-a-sorted-array 有序数组的平方 977](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

快慢指针 一直保证慢指针符合某个条件

### 关键字

- q27 for 快慢指针 while 双指针

- q34 哈希 二分查找大于等于target的下标

- q59 map创建二维数组，更新排和列的方法

- q69 二分查找（不大于target的k平方） 牛顿迭代

- q153 二分查找

- q209 单循环求积累和 前缀和，二分查找,双指针滑动窗口，三元运算符替代Math.min

- q240 Z 字形查找  二分查找 不大于target的下标

- q278 二分查找 

- q283 快慢指针 交换值 或者不交换 覆盖完成后直接置零

- q287 哈希 （双数组 set map 对象）快慢指针（循环链表）   因为小于target 的数 i 满足cnt[i]=i，大于等于target 的数 j满足 cnt[j]=j+1，通过二分解法找到cnt[i]>i的数

- q326 判断是否为最大 3 的幂的约数

- q367 二分查找 牛顿迭代

- q378 二分查找 边界问题（精）


- q485 中间变量保存最大值f

- q540 位运算 二分查找

- q565 //数组做bool哈希表  原数组使用Number.MAX_VALUE来替代visit 原数组使用-1标记访问过的

- q566 对于二维数组的值空间 x∈[0,mn)，第 x 个元素在nums 中对应的下标为(x / n,x % n)，而在新的重塑矩阵中对应的下标为(x / c,x % c)。我们直接进行赋值即可。

- q645 排序+set 排序+判断相差值为2 map保存数量 排序+分割边界 数值转化为下标，把访问过的位置重写为负数 数组差  数组做哈希表 通过判断nums[i]!=i+1；来判断是否在正确的位置

- q667 控制交错的变量(奇偶交替)

- q697 使用对象做哈希，使用keys或者values等方法可以循环对象 可以用属性保存数组或者对象 通过把坐标放进数组，然后判断数组长度来确定频数 数组做哈希，滑动窗口，再次用数组做哈希，找出重复数的最后坐标后，再次循环到重复数的第一个坐标，把数量减一，跳出循环

- q704 数组双指针 二分查找

- q744 二分查找 比目标大的target

- q766 意义不大

- q769 暴力解法，没有亮点

- q977 数组双指针 正负分割


