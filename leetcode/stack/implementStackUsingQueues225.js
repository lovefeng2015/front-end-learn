/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 02:17:42 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 02:17:42 
 */
/*
225. 用队列实现栈
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
实现 MyStack 类：
void push(int x) 将元素 x 压入栈顶。
int pop() 移除并返回栈顶元素。
int top() 返回栈顶元素。
boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 */


var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};
/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    return this.queue1.shift();
};


/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let x = this.pop();
    this.queue1.push(x);
    return x;
};


/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue1.length && !this.queue2.length;
};