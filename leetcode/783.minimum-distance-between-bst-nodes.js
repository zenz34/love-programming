/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
 * @return {number}
 */
var minDiffInBST = function(root) {
  let prev = null;
  let ans = Number.MAX_SAFE_INTEGER;
  dfs(root);
  return ans;

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (prev !== null) {
      ans = Math.min(ans, root.val - prev);
    }
    prev = root.val;
    dfs(root.right);
  }
};
/*
recurrence relation
找到我前一个
前一个跟我比较
我就是前一个
叫后面的吧

复杂的地方，
call function两次，一次是找到前一个节点，
找到了才能开始计算，
另一次是启动下一个节点的计算

因为Inorder 就是排好了顺序！！


或者可以这么理解
找到我left most child node
我和它比较
我就是我right most child node要比较的对象
告诉我right most child node开始计算

*/