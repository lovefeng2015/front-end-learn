/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 10:03:19 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 10:03:19 
 */

// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果 可以变为  1，那么这个数就是快乐数。
// 如果 n 是快乐数就返回 true ；不是，则返回 false 。

// 算法分为两部分，我们需要设计和编写代码。

// 给一个数字 nn，它的下一个数字是什么？
// 按照一系列的数字来判断我们是否进入了一个循环。

// 第 1 部分我们按照题目的要求做数位分离，求平方和。

// 第 2 部分可以使用哈希集合完成。每次生成链中的下一个数字时，我们都会检查它是否已经在哈希集合中。

// 如果它不在哈希集合中，我们应该添加它。
// 如果它在哈希集合中，这意味着我们处于一个循环中，因此应该返回 false。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/happy-number/solution/kuai-le-shu-by-leetcode-solution/




/**
 * @param {number} n
 * @return {boolean}
 * getNext获取所有位数
 */
function getNext(n) {
    let totalSum = 0;
    while (n > 0) {
        let result = n % 10;
        totalSum += result * result;
        n = (n / 10) >> 0;//取整
    }
    return totalSum;
}
var isHappy = function (n) {
    const set = new Set();
    while (n != 1 && !set.has(n)) {
        set.add(n);
        n = getNext(n);
    }
    return n === 1;
};
// 方法二：快慢指针法
// 通过反复调用 getNext(n) 得到的链是一个隐式的链表。隐式意味着我们没有实际的链表节点和指针，但数据仍然形成链表结构。起始数字是链表的头 “节点”，链中的所有其他数字都是节点。next 指针是通过调用 getNext(n) 函数获得。

// 意识到我们实际有个链表，那么这个问题就可以转换为检测一个链表是否有环。因此我们在这里可以使用弗洛伊德循环查找算法。这个算法是两个奔跑选手，一个跑的快，一个跑得慢。在龟兔赛跑的寓言中，跑的慢的称为 “乌龟”，跑得快的称为 “兔子”。

// 不管乌龟和兔子在循环中从哪里开始，它们最终都会相遇。这是因为兔子每走一步就向乌龟靠近一个节点（在它们的移动方向上）。
// 我们不是只跟踪链表中的一个值，而是跟踪两个值，称为快跑者和慢跑者。在算法的每一步中，慢速在链表中前进 1 个节点，快跑者前进 2 个节点（对 getNext(n) 函数的嵌套调用）。

// 如果 n 是一个快乐数，即没有循环，那么快跑者最终会比慢跑者先到达数字 1。

// 如果 n 不是一个快乐的数字，那么最终快跑者和慢跑者将在同一个数字上相遇。

var isHappy = function (n) {
    var slowRunner = n;
    var fastRunner = getNext(n);
    while (fastRunner != 1 && slowRunner != fastRunner) {
        slowRunner = getNext(slowRunner);
        fastRunner = getNext(getNext(fastRunner));
    }
    return fastRunner === 1;
};
//数学法
// 下一个值可能比自己大的最大数字是什么？根据我们之前的分析，我们知道它必须低于 243。因此，我们知道任何循环都必须包含小于 243 的数字，用这么小的数字，编写一个能找到所有周期的强力程序并不困难。

// 如果这样做，您会发现只有一个循环：4 \rightarrow 16 \rightarrow 37 \rightarrow 58 \rightarrow 89 \rightarrow 145 \rightarrow 42 \rightarrow 20 \rightarrow 44→16→37→58→89→145→42→20→4。所有其他数字都在进入这个循环的链上，或者在进入 11 的链上。

// 因此，我们可以硬编码一个包含这些数字的散列集，如果我们达到其中一个数字，那么我们就知道在循环中



var isHappy = function (n) {
    const set = new Set([4, 16, 37, 58, 89, 145, 42, 20]);
    while (n != 1 && !set.has(n)) {
        n = getNext(n);
    }
    return n === 1;
};