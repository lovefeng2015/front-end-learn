/*
 * @Author: yhf 
 * @Date: 2021-11-Fr 10:39:52 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Fr 10:39:52 
 */

/**
 * 744. 寻找比目标字母大的最小字母
 * 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
     let left=0,right=letters.length-1;
     if (target>letters[right]) {
         return letters[0];
     }
     let ans=0;
     while (left<=right) {
         let mid=left+((right-left)>>1);
         if(letters[mid]<=target){
            left=mid+1;
         }else{
             right=mid-1;
             ans=mid;
         }
         
     }
     return letters[ans];

};

var nextGreatestLetter = function(letters, target) {
    let left=0,right=letters.length-1;
    while (left<=right) {
        let mid=left+((right-left)>>1);
        if(letters[mid]<=target){
           left=mid+1;
        }else{
            right=mid-1;
        }
        
    }
    return l<letters.length?letters[1]:letters[0];//letters[l%letters.length]

};