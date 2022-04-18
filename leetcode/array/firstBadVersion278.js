/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 05:19:34 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 05:19:34 
 */


/**
 * 278. 第一个错误的版本
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=0,right=n-1;
        while (left<right) {
            let mid=left+((right-left)>>1);
            if (isBadVersion(mid)) {
                right=mid;  
            } else {
                left=mid+1;
            }
            
        }
        return left;
    };
};

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left=0,right=n-1;
        while (left<=right) {
            let mid=left+((right-left)>>1);
            if (isBadVersion(mid)) {
                right=mid-1;  
            } else {
                left=mid+1;
            }
            
        }
        return left;
    };
};