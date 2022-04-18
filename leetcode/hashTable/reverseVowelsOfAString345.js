/*
 * @Author: yhf 
 * @Date: 2021-11-Th 03:03:28 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 03:03:28 
 */


/**
 * 345. 反转字符串中的元音字母
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let set = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    let arr = Array.from(s);
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        if (set.has(arr[left]) && set.has(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else if (set.has(arr[left])) {
            right--;
        } else if (set.has(arr[right])) {
            left++;
        } else {
            left++;
            right--;
        }

    }

    return arr.join('');
};
//哈希+双数组+双指针
var reverseVowels = function (s) {
    let set = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    const length = s.length;
    let arr = new Array(length);
    let left = 0,
        right = length - 1;
    while (left <= right) {
        let leftC = s[left];
        let rightC = s[right];
        if (!set.has(leftC)) {
            arr[left++] = leftC;
        } else if (!set.has(rightC)) {
            arr[right--] = rightC;
        } else {
            arr[left++] = rightC;
            arr[right--] = leftC;
        }
    }
    return arr.join('');
};

var reverseVowels = function (s) {
    let set = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    const length = s.length;
    let arrChars = Array.from(s);
    let left = 0,
        right = length - 1;
    while (left < right) {
        while (left < length && !set.has(arrChars[left])) {
            ++left;
        }
        while (right > 0 && !set.has(arrChars[right])) {
            --right;
        }
        if (left < right) {
            swap(arrChars, left, right);
            ++left;
            --right;
        }

    }
    return arrChars.join('');
};
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}