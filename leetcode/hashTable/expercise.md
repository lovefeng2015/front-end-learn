## 哈希
首先什么是 哈希表，哈希表（英文名字为Hash table，国内也有一些算法书籍翻译为散列表，大家看到这两个名称知道都是指hash table就可以了）。

        哈希表是根据关键码的值而直接进行访问的数据结构。

这么这官方的解释可能有点懵，其实直白来讲其实数组就是一张哈希表。

哈希表中关键码就是数组的索引下表，然后通过下表直接访问数组中的元素，如下图所示：

场景

        那么哈希表能解决什么问题呢，一般哈希表都是用来快速判断一个元素是否出现集合里
### 常见的三种哈希结构
当我们想使用哈希法来解决问题的时候，我们一般会选择如下三种数据结构。

- 数组
- set （集合）
- map(映射)

        哈希表使用 O(N) 空间复杂度存储数据，并且以 O(1) 时间复杂度求解问题。
- Java 中的 HashSet 用于存储一个集合，可以查找元素是否在集合中。
- 如果元素有穷，并且范围不大，那么可以用一个布尔数组来存储一个元素是否存在。例如对于只有小写字符的元素，就可以用一个长度为 26 的布尔数组来存储一个字符集合，使得空间复杂度降低为 O(1)。

### 涉及题目

[two-sum 两数之和 q1](https://leetcode-cn.com/problems/two-sum/)

[3sum 三数之和 q15](https://leetcode-cn.com/problems/3sum/)

[4sum 四数之和 q18](https://leetcode-cn.com/problems/4sum/)

[merge-sorted-array 合并两个有序数组 q88](https://leetcode-cn.com/problems/merge-sorted-array/)

[longest-consecutive-sequence 最长连续序列 q128](https://leetcode-cn.com/problems/longest-consecutive-sequence/)

[two-sum-ii-input-array-is-sorted 两数之和 II - 输入有序数组 q167](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

[happy-number 快乐数 q202](https://leetcode-cn.com/problems/happy-number/)

[contains-duplicate 存在重复元素 q217](https://leetcode-cn.com/problems/contains-duplicate/)

[valid-anagram 有效的字母异位词 q242](https://leetcode-cn.com/problems/valid-anagram/)

[reverse-vowels-of-a-string 反转字符串中的元音字母 q345](https://leetcode-cn.com/problems/reverse-vowels-of-a-string/)

[intersection-of-two-arrays 两个数组的交集 q349](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

[ransom-note 赎金信 q383](https://leetcode-cn.com/problems/ransom-note/)

[4sum-ii 四数相加 II q454](https://leetcode-cn.com/problems/4sum-ii/)

[longest-word-in-dictionary-through-deleting 通过删除字母匹配到字典里最长单词 q524](https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/)

[longest-harmonious-subsequence 最长和谐子序列 q594](https://leetcode-cn.com/problems/longest-harmonious-subsequence/)

[sum-of-square-numbers 平方数之和 q633](https://leetcode-cn.com/problems/sum-of-square-numbers/)

[valid-palindrome-ii  验证回文字符串 Ⅱ q680](https://leetcode-cn.com/problems/valid-palindrome-ii/)



### 关键字

- q1 使用map或者对象来查找
- q15、q18 排序+双指针
- q88  双指针+新数组  逆双指针
- q128 set,使用set.has(num-1)来判断是否起点，当循环未知长度数组时，用while来循环，使用中间变量来保存最大的次数
- q167 哈希 二分查找 双指针 （二分查找+双指针）
- q202 快慢指针法（龟兔）+set
- q217 set set判断长度
- q242 排序或者字典数组
- q345 哈希+双数组+双指针 swap函数交换 解构赋值交换
- q349 set
- q383 字典数组
- q454 map
- q524 双指针 排序 字符串比较方法  a>b a.charCodeAt()>b.charCodeAt() a.localeCompare(b) 动态规划
- q594 set 使用中间变量来保存最大的次数
- q633 双指针 费马平方和定理
- q680 双指针 单独函数判断是否回文，双指针 循环时发现不同，删除一个字符，子串范围为(i+1, j)或(i, j-1)的俩子串只要有任意一个是回文串，则结果就是回文串，否则就不是
- q704 数组双指针





