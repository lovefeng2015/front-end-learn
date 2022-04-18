/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 11:06:28 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 11:06:28 
 */

/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const stack = [],
        map = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
    for (const x of s) {
        if (map.hasOwnProperty(x)) {
            stack.push(x);
            continue;
        }
        if (!stack.length) {
            return false;
        }
        if (map[stack.pop()] != x) {
            return false;
        }
    }
    return !stack.length;
};


var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const stack = [];
    for (const x of object) {
        switch (x) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;

            default:
                if (!stack.length || x != stack.pop()) {
                    return false
                }
        }
    }
    return !stack.length;
};

var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const stack = [];
    for (const x of s) {
        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }
        if (!stack.length) {
            return false;
        }
        let stackPop = stack.pop();
        let b1 = x == ')' && stackPop != '(';
        let b2 = x == ']' && stackPop != '[';
        let b3 = x == '}' && stackPop != '{';
        if (b1 || b2 || b3) {
            return false;
        }
    }
    return !stack.length;
};

var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const stack = [],
        map = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);
    for (const x of s) {
        if (map.has(x)) {
            if (!stack.length || stack.pop() != map.get(x)) {
                return false;
            }

        } else {
            stack.push(x);
        }
    }
    return !stack.length;
};

var isValid = function (s) {
    let n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    while (n>0) {
        s = s.replace('{}', '');
        s = s.replace('[]', '');
        s = s.replace('()', '');
        let length=s.length;
        if(length==n){//已经替换完毕
            break;
        }
        n=length;
    }
    return s=='';
};
//每次最小替换掉两个字符
var isValid = function (s) {
    let n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    n=~~(n/2);
    for (let i = 0; i < n; i++) {
        s = s.replace('{}', '');
        s = s.replace('[]', '');
        s = s.replace('()', '');
        
    }
    return s.length;
};