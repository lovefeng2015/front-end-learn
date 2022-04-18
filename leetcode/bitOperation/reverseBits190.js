/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 11:03:38 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 11:03:38 
 */


/**
 * 190. 颠倒二进制位
 * 颠倒给定的 32 位无符号整数的二进制位。
 * 
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let rev=0;
    for (let i = 0; i < 32&&n>0; i++) {
        rev|=(n&1)<<(31-i);//通过&1，每次枚举出最右一位，然后移动到相应的位置，再通过|0来替换
        n>>>=1; //移除最后一位
    }
    return rev>>>0;
};
// 另外分治其实也不难理解: 简化原理如下:

// 原数据为:12345678
// 第一轮 奇偶位交换 21436587
// 第二轮 每两位交换 43218765
// 第三轮 每四位交换 87654321

// 首先，我们知道 （单个二进制码 & 1) = 其本身，所以对于参数 M1，可以看成是用来将一串二进制码的奇数位提取出来；
// 接着，n >> 1，右移，可以看作是将 n 上原来的偶数位变成奇数位，为什么不说奇数位也变成偶数位，是因为右移将第一个奇数位移除了；
// 其次，(n >> 1) & M1，就是如1所述，将（n >> 1）的奇数位提取出来，也就是原 n 的偶数位；
// 再次，(n & M1) << 1，就是先将 n 的奇数位提出来，然后左移，将其变成偶数位；
// 然后，奇数位(原 n 的偶数位) | 偶数位(原 n 的奇数位)，相或，就达到了原 n 的奇数位和偶数位互换的目的；
// 最后，本人萌新，若有错误的地方，望指正，谢谢~~

var reverseBits = function(n) {
    const M1 = 0x55555555; // 01010101010101010101010101010101
    const M2 = 0x33333333; // 00110011001100110011001100110011
    const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
    const M8 = 0x00ff00ff; // 00000000111111110000000011111111

    n = n >>> 1 & M1 | (n & M1) << 1;//这是1换1
    n = n >>> 2 & M2 | (n & M2) << 2;//2换2
    n = n >>> 4 & M4 | (n & M4) << 4;//4换4
    n = n >>> 8 & M8 | (n & M8) << 8;//8换8
    return (n >>> 16 | n << 16) >>> 0;//16换16，完成
};

var reverseBits = function(n) {
    let ans=0;
    //进制的本质
    let i=32;
    while(i--)
    {
        ans<<=1;//赋值后左移
        ans+=n&1;//取出最右边的二进制并赋值
        n>>=1;//丢掉已经赋值的二进制
    }
    return ans>>>0;//确保返回无符号整型
};

var reverseBits = function(n) {
    let ans=0;
    for(let i=0;i<=31;i++){
        ans=ans+((1&(n>>i))<<(31-i));//通过枚举出相应的每一位，然后移动到相应的位置，再通过|0或者相加来替换
    }
    return ans>>>0;//确保返回无符号整型
};
var reverseBits = function(n) {
    let ans=0;
    for(let i=0;i<=31;i++){
        ans=ans|((1&(n>>i))<<(31-i));//通过枚举出相应的每一位，然后移动到相应的位置，再通过|0或者相加来替换
    }
    return ans>>>0;//确保返回无符号整型
};

var reverseBits = function(n) {
    let res = n;
        // 交换前后16位
        res = (res >>> 16) | (res << 16);
        // 在每个16位中再交换8位
        res = ((res & 0xff00ff00) >>> 8) | ((res & 0x00ff00ff) << 8);
        // 在每个8位中再交换4位
        res = ((res & 0xf0f0f0f0) >>> 4) | ((res & 0x0f0f0f0f) << 4);
        // ... 1100110011001100...          0011001100110011...
        res = ((res & 0xcccccccc) >>> 2) | ((res & 0x33333333) << 2);
        //     1010101010101010...          0101010101010101...
        res = ((res & 0xaaaaaaaa) >>> 1) | ((res & 0x55555555) << 1);
        return res;
};

var reverseBits = function(n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i); // n&1的结果和n的最后一位相同，等于是取出了n的最后一位，再把这一位左移31-i位就移到了翻转之后对称的位置
        n >>>= 1; // 再将n右移一位
    }
    return rev>>>0;
};

var reverseBits = function(n) {
    let ans = 0;
    for(let i = 0; i < 32; i++) {
        //二进制最后一位bit
        let bit = n&1;
        //右移一位
        n = n >> 1;
        //ans左移一位加上bit
        ans = (ans << 1) + bit;
    }
    return ans>>>0;
};
