/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 09:16:14 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 09:16:14 
 */
/*
155. 最小栈
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 */




var MinStack = function () {
    this.dataStack = [];
    this.minStack = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.dataStack.push(val);
    this.minStack.push(Math.min(this.minStack[this.minStack.length-1],val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.dataStack.pop();
    this.minStack.pop();
 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.dataStack[this.dataStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length-1];
};