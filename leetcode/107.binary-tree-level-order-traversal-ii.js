/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (45.60%)
 * Total Accepted:    213K
 * Total Submissions: 464.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


// class TreeNode {
//     constructor(val, left, right) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }


// const node15 = new TreeNode(15, null, null);
// const node7 = new TreeNode(15, null, null);

// const node9 = new TreeNode(9, null, null);
// const node20 = new TreeNode(20, node15, node7);

// const root = new TreeNode(3, node9, node20);


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let queue = [];
  let ans = [];
  
  if (root !== null) {
      queue.push(root);
  }

  while (queue.length > 0) {
    let len = queue.length;
    let tmp = [];
    
    for (let i = 0; i < len; i++) {
        const node = queue.shift();
        tmp.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    ans.unshift(tmp);
  }

  return ans;
};


// levelOrderBottom(root);
