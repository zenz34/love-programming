/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) {
      return 0;
    }

    let sum = 0;
    if (root.val < R) {
      sum += rangeSumBST(root.right, L, R);
    }

    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }

    if (root.val > L) {
      sum += rangeSumBST(root.left, L, R);
    }

    return sum;
};

