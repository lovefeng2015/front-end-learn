/*
 * @Author: yhf 
 * @Date: 2021-11-Tu 06:01:15 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Tu 06:01:15 
 */


/**
 * 剑指 Offer 05. 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    return s.replace(/\s/g, '%20')
};

var replaceSpace = function (s) {
    const length = s.length;
    const NewStringAarry = new Array(length * 3).fill('');
    let size = 0;
    for (let i = 0; i < length; i++) {
        const c = s.charAt(i);
            if (c == ' ') {
                NewStringAarry[size++] = '%';
                NewStringAarry[size++] = '2';
                NewStringAarry[size++] = '0';
            } else {
                NewStringAarry[size++] = c;
            }
    }

    return NewStringAarry.join('');
};

// 其实很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作。

// 这么做有两个好处：

// 不用申请新数组。
// 从后向前填充元素，避免了从前先后填充元素要来的 每次添加元素都要将添加元素之后的所有元素向后移动。

var replaceSpace = function (s) {
  
    const newStringAarry = Array.from(s);// const newStringAarry = [...s];s.split('');
    const length = newStringAarry.length;
    let count=0;
    //统计空格的数量
    for (let i = 0; i < length; i++) {
        if(newStringAarry[i]== ' '){
            count++;
        }
    }
    let left=length-1;
    let right=length+count*2-1;
    while (left>=0) {
        if (newStringAarry[left] == ' ') {
            newStringAarry[right--] = '0';
            newStringAarry[right--] = '2';
            newStringAarry[right--] = '%';
            left--;
        } else {
            newStringAarry[right--] = newStringAarry[left--] ;
        }  
    }
    return newStringAarry.join('');
};