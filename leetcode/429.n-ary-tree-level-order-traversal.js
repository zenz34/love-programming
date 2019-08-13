/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [];
  let nodes = [];
  if (root) {
    queue.push(root);
  }

  while (queue.length !== 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      for (child of node.children) {
        if (child) {
          queue.push(child);
        }
      }
      level.push(node.val);
    }
    nodes.push(level);
  }

  return nodes;
};
