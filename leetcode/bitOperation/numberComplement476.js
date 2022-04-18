/*
 * @Author: yhf 
 * @Date: 2021-11-We 11:21:51 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-We 11:21:51 
 */


/**
 * 476. 数字的补数
 * 对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。
例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。
给你一个整数 num ，输出它的补数
 * @return {number}
 */
//对于 00000101，要求补码可以将它与 00000111 进行异或操作。那么问题就转换为求掩码 00000111。
var findComplement = function (num) {
    if (num == 0) {
        return 1;
    }
    let mask = 1 << 30;
    while ((num & mask) == 0) {
        mask >>= 1;
    }
    mask = (mask << 1) - 1;//让最高位1右边的二进制全部为1
    return num ^ mask;
};

var findComplement = function (num) {
    let mask = num;
    mask |= mask >> 1;//反转1位
    mask |= mask >> 2;
    mask |= mask >> 4;
    mask |= mask >> 8;
    mask |= mask >> 16;//翻转所有最高位1后面的位数为1
    return (mask ^ num);
};

var findComplement = function (num) {
    if (num == 0) {
        return 1;
    }
    let mask = 1 ;
    if(num>=(1<<30)){//不能超过01000000000000000000000000000000，不然mask会溢出
       mask=0x7fffffff;
    }
    else{
        while (mask<=num) {
            mask <<= 1;
        }
        mask=mask-1;

    }
    return  num ^ mask;
};
//前边补1，然后就可以直接取反了
var findComplement = function (num) {
    if (num == 0) {
        return 1;
    }
    let mask = 1<<30;
    while ((num & mask) == 0) {
        num|=mask;
        mask >>= 1;
    }
    
    return  ~(num|(1<<31));//把符号位变成1在取反
};

var findComplement = function (num) {
    if (num == 0) {
        return 1;
    }
    let mask = 1 ;
    if(num>=(1<<30)){//不能超过01000000000000000000000000000000，不然mask会溢出
       mask=0x7fffffff;
    }
    else{
        while (mask<=num) {
            mask <<= 1;
        }
        mask=mask-1;

    }
    return  mask-num;
};

var findComplement = function (num) {
    if (num == 0) {
        return 1;
    }
    let temp=num,mask=0;
    while (temp!=0) {
        temp>>=1;
        mask=(mask<<1)+1;
    }
    return  mask-num;//mask^num
};
//0变成1，1变成0
var findComplement = function (num) {
    let ans=0;
    let k=0;
    while(num)
    {
        if(num%2==0){//最后一位
            ans = ans|1<<k;
        }
        num =num>>1;
        ++k;
    }
    return ans;
}
