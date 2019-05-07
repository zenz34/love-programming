/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (36.35%)
 * Total Accepted:    292.7K
 * Total Submissions: 798K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 *
 * push(x) -- Push element x onto stack.
 *
 *
 * pop() -- Removes the element on top of the stack.
 *
 *
 * top() -- Get the top element.
 *
 *
 * getMin() -- Retrieve the minimum element in the stack.
 *
 *
 *
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 *
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minValStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.minValStack.length === 0 || x <= this.getMin()) {
        console.log("come here");
        this.minValStack.push(x);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length === 0) {
        throw new Error("Stack is empty!");
    }

    if (this.stack.pop() === this.getMin()) {
        this.minValStack.pop();
    }

    return; 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) {
        throw new Error("Stack is empty!");
    }

    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minValStack.length === 0) {
        throw new Error("Stack is empty!");
    }

    return this.minValStack[this.minValStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

