### 涉及题目

### 异或运算有以下三个性质。

```
- 任何数和 00 做异或运算，结果仍然是原来的数，即a⊕0=a。
- 任何数和其自身做异或运算，结果是 00，即 a⊕a=0。
- 异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
```
```
 x & -x 
- ① 这个结果只有一位值是1， 其他位均是0 
- ② 这个值的末位0的个数与原值保持一致（就是最低位的1）
```
当一个数与其取负后的值相与， 如果这个数是偶数， 则结果是能整除这个偶数的最大的2的幂(即： m = n & -n , 则 n % m = 0, 且 m = 2 ^ k)， 如果这个数是奇数， 则结果必为1”


[2 的幂  x & -x  x&(x-1)的解释 ](https://leetcode-cn.com/problems/power-of-two/solution/2de-mi-by-leetcode-solution-rny3/)



- 与&：0&0=0 0&1=0 1&0=0 1&1=1

- 或|：0|0=0 0|1=1 1|0=1 1|1=1

- 异或^：0^0=0 0^1=1 1^0=1 1^1=0

- 取反~：~1=0 ~0=1

- 左移<<：左边的二进制位丢弃，右边补0

- 右移>>：正数左补0，负数左补1，右边丢弃

- 无符号左移<<<：左边的二进制位丢弃，右边补0

- 无符号右移>>>：忽略符号位，空位都以0补齐



[链接：](https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-solution/)


[single-number 只出现一次的数字 q136](https://leetcode-cn.com/problems/single-number/)

[reverse-bits 颠倒二进制位 q190](https://leetcode-cn.com/problems/reverse-bits/)

[single-number-iii 只出现一次的数字 III q260](https://leetcode-cn.com/problems/single-number-iii/)

[missing-number 丢失的数字 q268](https://leetcode-cn.com/problems/missing-number/)

[power-of-two  2 的幂 q231](https://leetcode-cn.com/problems/power-of-two/)

[maximum-product-of-word-lengths  最大单词长度乘积 q318](https://leetcode-cn.com/problems/maximum-product-of-word-lengths/)

[counting-bits  比特位计数 q338](https://leetcode-cn.com/counting-bits/)

[power-of-four  4 的幂 q342](https://leetcode-cn.com/problems/power-of-four/)

[sum-of-two-integers  两整数之和 q371](https://leetcode-cn.com/sum-of-two-integers/)

[hamming-distance 汉明距离 q461](https://leetcode-cn.com/problems/hamming-distance/)

[number-complement 数字的补数 q476](https://leetcode-cn.com/problems/number-complement/)

[binary-number-with-alternating-bits 交替位二进制数 q693](https://leetcode-cn.com/problems/binary-number-with-alternating-bits/)

[https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof  I. 数组中数字出现的次数 剑指 Offer 56](https://leetcode-cn.com/problems/https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)



















### 关键字

- q136 位运算^ 利用 x ^ x = 0  x ^ 0s = x 

- q190  n&1;二进制最后一位bit,位运算分治,奇偶交换 通过|0来替换

- q231 n & (n - 1) 直接将 n 二进制表示的最低位 1移除  n & (-n) 直接获取 n 二进制表示的最低位的 1

- q260 位运算^ 利用 x ^ x = 0  x ^ 0s = x 使用位运算x & -x 取出 x 的二进制表示中最低位那个 1   a&(-a)=最低位为1的二进制（从又到左）不能说是最低位的1的位置，而是最低位的1+后面的0组成的二进制数 比如1  10  100  1000等 找到ret二进制数中第几位是1，证明这两个数在这个位置的二进制不一样，所以可以在这里区分两个数

- q268 位运算^ 数学 排序 交换正确位置 哈希set

- q318 判断两个字符串是否含相同字符，由于字符串只含有小写字符，总共 26 位，因此可以用一个 32 位的整数来存储每个字符是否出现过。  val[i] |= 1 << (c - 'a');把单词放到二进制位置上。判断第 i 个单词和第 j 个单词是否有公共字母可以通过判断 masks[i] & masks[j] 是否等于 0 实现

- q342  (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;  (((n & (-n)) == n && (n & 0x55555555) === n;

- q338  i & (i - 1)可以去掉i最右边的一个1（如果有） x/2==x>>1,x%2==x&1 动态规划

- q371  在不考虑进位的情况下，其无进位加法结果为a⊕b  而所有需要进位的位为a & b，进位后的进位结果为 (a & b) << 1

- Offer 56 位运算^ 利用 x ^ x = 0  x ^ 0s = x  a&(-a)=最低位为1的二进制（从又到左）不能说是最低位的1的位置，而是最低位的1+后面的0组成的二进制数 比如1  10  100  1000等 找到ret二进制数中第几位是1，证明这两个数在这个位置的二进制不一样，所以可以在这里区分两个数

- q461 (z & 1) == 1 我们可以不断地检查 s 的最低位，如果最低位为 1 令 s 整体右移一位，这样 s 的最低位将被舍去，原本的次低位就变成了新的最低位
使用 z&(z-1) 去除 z 位级表示最低的那一位。使用Brian Kernighan 算法进行优化，具体地，该算法可以被描述为这样一个结论：记 f(x) 表示 x 和 x−1 进行与运算所得的结果（即 f(x)=x & (x−1)），那么 f(x) 恰为 x 删去其二进制表示中最右侧的 1 的结果。

- q476  对于 00000101，要求补码可以将它与 00000111 进行异或操作。那么问题就转换为求掩码 00000111 让最高位1右边的二进制全部为1 翻转所有最高位1后面的位数为1 /前边补1，然后就可以直接取反了

- q693  n&1(相当于n%2) 对于 1010 这种位级表示的数，把它向右移动 1 位得到 101，这两个数每个位都不同，因此异或得到的结果为 1111 转为二进制字符串