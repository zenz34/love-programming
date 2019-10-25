/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const queue = [];
  const nodes = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length !== 0) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      level.push(node.val);
    }

    nodes.push(level);
  }

/*
总结
1个queue
1个临时array
一个while loop
一个for循环
两者都用到queue当前的size

*/
