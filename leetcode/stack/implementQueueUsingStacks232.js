/*
 * @Author: yhf 
 * @Date: 2021-11-Sa 12:59:56 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Sa 12:59:56 
 */
/*
232. 用栈实现队列
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
实现 MyQueue 类：
void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
 */


var MyQueue = function() {
    this.stack1=[];
    this.stack2=[];

};
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
 MyQueue.prototype.pop = function() {
     if(!this.stack2.length){
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
     }
     return this.stack2.pop();

};


/**
 * @return {number}
 */
 MyQueue.prototype.peek = function() {
   let ans=this.pop();
   this.stack2.push(ans);
   return ans;
};


/**
 * @return {boolean}
 */
 MyQueue.prototype.empty = function() {
return !this.stack1.length&&!this.stack2.length;
};