/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (root === null) return false;

  let set = {};
  set[root.val] = true;
  
  //  dfs solution

  return find(root.left, k, set) || find(root.right, k, set);



  function find(root, t, set) {
    if (root === null || set === null) return false;
    if (set[t - root.val]) return true;

    set[root.val] = true;
    return find(root.left, t, set) || find(root.right, t, set);
  }
};

