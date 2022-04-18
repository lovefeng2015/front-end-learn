/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 08:38:09 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 08:38:09 
 */


/**
 * 367. 有效的完全平方数
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * @param {number} num
 * @return {boolean}
 */
//间隔：3,5,7,... 1+3+5+7+9+…+(2n-1)=n^2，即完全平方数肯定是前n个连续奇数的和
// 间隔为等差数列，使用这个特性可以得到从 1 开始的平方序列。
 var isPerfectSquare = function(num) {
     let sumNum=1;
     while (num>0) {
         num-=sumNum;
         sumNum+=2; 
     }
     return num==0;
};
//判断是否整数
var isPerfectSquare = function(num) {
    return Number.isInteger(Math.sqrt(num));
};
//暴力
var isPerfectSquare = function(num) {
    let x=1,squre=1;
    while (squre<=num) {
        if(squre==num){
            return true;
        }
        x++;
        squre=x*x;
        
    }
    return false;
};
//二分查询
var isPerfectSquare = function(num) {
    let left=0,right=num;
    while (left<=right) {
        let mid=left+((right-left)>>1);
        let sum=mid*mid;
        if(sum==num){
            return true;
        }else  if(sum>num){
            right=mid-1;
           
        }else{
            left=mid+1;
        }
    }
    return false;
};
//牛顿迭代法
var isPerfectSquare = function(num) {
    if (num<=1) {
        return num;
    }
    let r=num;
    while (r>num/r) {
        let temp=r;
        r=0.5*(r+num/r);
        if (Math.abs(r-temp)<1e-7) {
            break;
        }
    }
    let squre=r>>0;
    return squre*squre==num;
};