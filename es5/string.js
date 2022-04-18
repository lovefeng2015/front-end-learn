/*
 * @Author: yhf 
 * @Date: 2021-10-Th 09:41:28 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-10-Th 09:41:28 
 */
//endsWith
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
        if (this_len == undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    }
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, pos) {
            pos = !pos || pos < 0 ? 0 : +pos;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}
//使用 indexOf 统计一个字符串中某个字母出现的次数
//在下例中，设置了 count 来记录字母 e 在字符串 str 中出现的次数：

// 翻译：生存还是毁灭？这是个问题。（莎士比亚《哈姆雷特》）

var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
    count++;
    pos = str.indexOf('e', pos + 1);
}

console.log(count); // displays 4
//padEnd
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function (targetLength, padString) {
        targetLength = targetLength >>> 0; // floor if number or convert non-number to 0
        padString = String((typeof padString !== 'undefined' ? padString : ''));
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += this.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            } else return String(this) + padString.substring(0, targetLength);
        }

    }
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function (targetLength, padString) {
        targetLength = targetLength >>> 0; // floor if number or convert non-number to 0
        padString = String((typeof padString !== 'undefined' ? padString : ''));
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += this.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            } else return padString.substring(0, targetLength) + String(this);
        }
    }

}
//split
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
//用split()来颠倒字符串顺序
const str = 'asdfghjkl';
const strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split() returns an array on which reverse() and join() can be applied
//trim
if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }