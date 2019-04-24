/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  return checkBalancedAndGetHeight(root) !== -1;

  function checkBalancedAndGetHeight(root) {
    if (!root) return 0;

    const left = checkBalancedAndGetHeight(root.left);
    if (left === -1) return -1;

    const right = checkBalancedAndGetHeight(root.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
}


