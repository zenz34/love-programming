/*
 * @lc app=leetcode id=104 lang=java
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        if (root.left == null && root.right == null) {
            return 1;
        }

        int max = 0;

        if (root.left != null) {
            max = Math.max(maxDepth(root.left), max);
        }

        if (root.right != null) {
            max = Math.max(maxDepth(root.right), max);
        }

        return max + 1;
    }
}
// @lc code=end

