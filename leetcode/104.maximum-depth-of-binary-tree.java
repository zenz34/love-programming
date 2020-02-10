/*
 * @lc app=leetcode id=104 lang=java
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * end to end product search page : React components, filters, ui-guild not ok
 * Mobile, Hamburg components responsive design
 * 
 * work flow parsing data key + value
 * 
 * request API k + v
 * 
 * 
 * 
 * 
 * 
 * update password forget password re-direct, rule changes on email, password
 * 
 * production description page new product calendar start, end component
 * personalized storybook work flow on Node.js
 * 
 * 
 * 
 * Kroger
 * bloomreach
 * 
 * 
 */
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        if (root.left == null && root.right == null) {
            return 1;
        }

        int left = Integer.MIN_VALUE;

        if (root.left != null) {
            left = Math.max(left, maxDepth(root.left));
        }

        int right = Integer.MIN_VALUE;

        if (root.right != null) {
            right = Math.max(right, maxDepth(root.right));
        }

        return Math.max(left, right) + 1;
    }
}
// @lc code=end
