/*
 * @lc app=leetcode id=701 lang=java
 *
 * [701] Insert into a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    //  iterative solution
    public TreeNode insertIntoBST(TreeNode root, int val) {
        TreeNode targetNode = new TreeNode(val);

        if (root == null) {
            return targetNode;
        }

        TreeNode head = root;
        TreeNode pre = root;
        Boolean isLeft = false;

        while (root != null && root.val != val) {
            pre = root;
            if (root.val > val) {
                root = root.left;
                isLeft = true;
            } else {
                root = root.right;
                isLeft = false;
            }
        }

        if (isLeft) {
            pre.left = targetNode;
        } else {
            pre.right = targetNode;
        }

        return head;
    }
}
// @lc code=end
