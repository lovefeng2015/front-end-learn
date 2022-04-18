/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 08:01:30 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 08:01:30 
 */


/**
 * 翻转字符串里的单词
 * 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。
 * 
 * @param {string} s
 * @return {string}
 */
//先用match正则转化成数组，然后再反转
var reverseWords = function (s) {
    let newStr = s.match(/\b\w+\b/g);
    let left = 0,
        right = newStr.length - 1;
    while (left < right) {
        [newStr[left], newStr[right]] = [newStr[right], newStr[left]];
        left++;
        right--;

    }
    return newStr.join(' ');
};

var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};
// 移除多余空格
// 将整个字符串反转
// 将每个单词反转
// 先转化成数组，然后去掉头尾和重复的空格，翻转字符串，再翻转单词


var reverseWords = function(s) {
    // 字符串转数组
    const strArr = Array.from(s);
    // 移除多余空格
    removeExtraSpaces(strArr);
    // 翻转
    reverse(strArr, 0, strArr.length - 1);
 
    let start = 0;
 
    for(let i = 0; i <= strArr.length; i++) {
      if (strArr[i] === ' ' || i === strArr.length) {
        // 翻转单词
        reverse(strArr, start, i - 1);
        start = i + 1;
      }
    }
 
    return strArr.join('');
 };
 
 // 删除多余空格
 function removeExtraSpaces(strArr) {
   let slowIndex = 0;
   let fastIndex = 0;
 
   while(fastIndex < strArr.length) {
     // 移除开始位置和重复的空格
     if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
       fastIndex++;
     } else {
       strArr[slowIndex++] = strArr[fastIndex++];
     }
   }
 
   // 移除末尾空格
   strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
 }
 
 // 翻转从 start 到 end 的字符
 function reverse(strArr, start, end) {
   let left = start;
   let right = end;
 
   while(left < right) {
     // 交换
     [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
     left++;
     right--;
   }
 }
// 翻转这个数组
 function reverse( s_arr,  i,  j) {
    while (i < j) {
        let t = s_arr[i];
        s_arr[i++] = s_arr[j];
        s_arr[j--] = t;
    }
}

  // 翻转每个单词
function word_reverse( s_arr,  n) {
    let i = 0;
    let j = 0;
    while (j < n) {
        // 找到第一个首字母
        while (i < n && s_arr[i] == ' ') i++;
        j = i;
        // 末位置
        while (j < n && s_arr[j] != ' ') j++;
        reverse(s_arr, i, j - 1);
        i = j;
    }
}

// 去除多余空格
function clean_space( s_arr,  n) {
    let i = 0;
    let j = 0;
    while (j < n) {
        while (j < n && s_arr[j] == ' ') j++;
        while (j < n && s_arr[j] != ' ') s_arr[i++] = s_arr[j++];
        while (j < n && s_arr[j] == ' ') j++;
        if (j < n) s_arr[i++] = ' ';
    }
    return new String(s_arr).substring(0, i);
}