/*
 * @lc app=leetcode id=450 lang=java
 *
 * [450] Delete Node in a BST
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
    public TreeNode deleteNode(TreeNode root, int key) {
        if (root.val == key) {
            return null;
        }

        TreeNode head = root;
        TreeNode pre = root;
        Boolean isLeft = true;

        while (root != null && root.val != key) {
            pre = root;
            if (root.val > key) {
                root = root.left;
                isLeft = true;
            } else {
                root = root.right;
                isLeft = false;
            }
        }

        if (isLeft) {
            pre.left = null;
        } else {
            pre.right = null;
        }

        return root;
    }
}
// @lc code=end

