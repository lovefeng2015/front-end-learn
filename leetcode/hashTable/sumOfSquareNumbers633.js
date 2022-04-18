/*
 * @Author: yhf 
 * @Date: 2021-11-Th 10:40:07 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 10:40:07 
 */


/**
 * 平方数之和
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
 * 
 * @param {number} c
 * @return {boolean}
 */
//把小于开方的最大整数变成一个平方的数组，然后通过寻找两个之和等于target的下标找出来，如果没有则返回false
var judgeSquareSum = function (c) {
    let sqrt = Math.sqrt(c);
    if (Number.isInteger(sqrt)) {
        return true;
    };
    let intSqrt = sqrt >> 0;
    let arr = new Array(intSqrt + 1).fill(0);
    for (let i = 0; i <= intSqrt; i++) {
        arr[i] = Math.pow(i, 2);
    }
    let left = 0,
        right = intSqrt;
    while (left <= right) {
        let sum = arr[left] + arr[right];
        if (sum == c) {
            return true;
        } else if (sum > c) {
            right--;
        } else {
            left++;
        }

    }
    return false;
};

var judgeSquareSum = function (c) {
    let sqrt = Math.sqrt(c);
    if (Number.isInteger(sqrt)) {
        return true;
    };
    let intSqrt = sqrt >> 0;
    let left = 0,
        right = intSqrt;
    while (left <= right) {
        let sum = left*left + right*right;
        if (sum == c) {
            return true;
        } else if (sum > c) {
            right--;
        } else {
            left++;
        }

    }
    return false;
};
var judgeSquareSum = function (c) {
    let sqrt = Math.sqrt(c);
    if (Number.isInteger(sqrt)) {
        return true;
    };
  for (let a = 0; a*a <=c; a++) {
      let b=Math.sqrt(c-a*a);
      if(Number.isInteger(b)){
          return true;
      }
  }
    return false;
};
//费马平方和定理
// 一个非负整数 cc 如果能够表示为两个整数的平方和，当且仅当 cc 的所有形如4k+3 的质因子所对应的指数均为偶数。
// exponent是指数，不是幂。意思是c进行质因数分解时，分解出来的4k+3形式的质因子都得是偶数个。 例如 9=3*3可以，18=3*3*2可以，27=3*3*3不可以，以为这里质因子3有3个，171=19*3*3不可以因为19也是4k+3形式的但是只有一个。
var judgeSquareSum = function(c) {
    for (let base = 2; base * base <= c; base++) {
        // 如果不是因子，枚举下一个
        if (c % base !== 0) {
            continue;
        }

        // 计算 base 的幂
        let exp = 0;
        while (c % base == 0) {
            c /= base;
            exp++;
        }

        // 根据 Sum of two squares theorem 验证
        if (base % 4 === 3 && exp % 2 !== 0) {
            return false;
        }
    }

    // 例如 11 这样的用例，由于上面的 for 循环里 base * base <= c ，base == 11 的时候不会进入循环体
    // 因此在退出循环以后需要再做一次判断
    return c % 4 !== 3;
}

var judgeSquareSum = function(c) {
    for (let base = 2; base * base <= c; base++) {
        // 如果不是因子，枚举下一个
        if (c % base !== 0) {
            continue;
        }

        // 计算 base 的幂
        let exp = 0;
        while (c % base == 0) {
            c /= base;
            exp++;
        }

        // 根据 Sum of two squares theorem 验证
        if (base % 4 === 3 && exp % 2 !== 0) {
            return false;
        }
    }

    // 例如 11 这样的用例，由于上面的 for 循环里 base * base <= c ，base == 11 的时候不会进入循环体
    // 因此在退出循环以后需要再做一次判断
    return c % 4 !== 3;
}
// 定理：某个正整数是两平方数之和，当且仅当该正整数的所有 4k+3 型素因数的幂次均为偶数。 
// 任何一个正整数都可以因数分解为 c = (2^r)*(p1^n1)*(p2^n2)*...*(pk^nk)，其中p1...pk为素因数，n1...nk为因数的幂次。 
// 也就是说有一个形如4k+3的素因数pi，如果ni为奇数，那它就不可能被写为两个整数的平方数之和了。
//每一个数都可以分解成素数的乘积，例如 84 = 2(2) * 3(1) * 5(0) * 7(1) * 11(0) * 13(0) * 17(0) *

var judgeSquareSum = function(c) {
    if(c<=2){
        return true;
    }
    //代码第一步就是将2全部去掉，做素因数分解。
    while (c%2==0) {
        c/=2;
    }
    let p=3;//数分解的同时，判断素因数的类型和幂次。
    while (p*p<=c) {
        let index=0;
        while (c%p==0) {
            c/=p;
            index++;
        }
        if (p%4==3&&(index%2==1)) {
            return false;
        }
        p=p+2;
    }

    return c%4==1;//分解到最后的c实际上是一个素数，这时候其实判断c是形如4k+1的素数，那肯定可以写为两整数平方和（也可以判断不是形如4k+3的素数也行）
    // 例如 11 这样的用例，由于上面的 for 循环里 base * base <= c ，base == 11 的时候不会进入循环体
    // 因此在退出循环以后需要再做一次判断
    //return c % 4 !== 3;
}



