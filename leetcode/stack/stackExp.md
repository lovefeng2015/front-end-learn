### 涉及题目

[valid-parentheses 有效的括号 q20](https://leetcode-cn.com/problems/valid-parentheses/)

[trapping-rain-water 接雨水 q42](https://leetcode-cn.com/problems/trapping-rain-water/)

[largest-rectangle-in-histogram 柱状图中最大的矩形 q84](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

[evaluate-reverse-polish-notation 逆波兰表达式求值 q150](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

[min-stack 最小栈 q155](https://leetcode-cn.com/problems/min-stack/)

[implement-stack-using-queues 用队列实现栈 q225](https://leetcode-cn.com/problems/implement-stack-using-queues/)

[implement-queue-using-stacks 用栈实现队列 q232](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

[sliding-window-maximum 滑动窗口最大值 q239](https://leetcode-cn.com/problems/sliding-window-maximum/)

[top-k-frequent-elements 前 K 个高频元素 q347](https://leetcode-cn.com/problems/top-k-frequent-elements/)

[next-greater-element-i 下一个更大元素 I q496](https://leetcode-cn.com/problems/next-greater-element-i/)

[next-greater-element-ii 下一个更大元素 II q503](https://leetcode-cn.com/problems/next-greater-element-ii/)

[daily-temperatures 每日温度 q739](https://leetcode-cn.com/problems/daily-temperatures/)

[remove-all-adjacent-duplicates-in-string 删除字符串中的所有相邻重复项 q1047](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)










### 关键字

- q20 使用switch 对象 map replace这几个方法来保存左括号或者右括号

- q42 双指针 单调栈 动态规划（暂时看不懂）

- q84 双指针 单调栈 动态规划（暂时看不懂）

- q150 取整新方法(b / a) | 0 位运算 转化字符串为数字 '4'*1 map映射匿名函数 双指针 原地算法

- q155 两个栈，一个维护数据，一个维护最小值

- q225 使用两个队列来实现，使用另一队列来复制

- q232 使用两个栈来实现

- q239 使用单调减队列

- q347 小顶堆 map转换为二维数组，。然后排序 跑一遍把频次拿出来先排个序，找到第k大的频次 target，再跑一遍map拿到所有大于等于 target的值。题目有说明答案集合唯一

- q496 单调栈 map哈希

- q503 单调栈  通过%模拟数组循环

- q739 单调栈

- q1047 建立新数组栈，发现相同的字符串就删除最后一项，没有就添加  双指针 原地算法
