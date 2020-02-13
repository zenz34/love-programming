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
    private void helper(TreeNode curr, TreeNode pre, boolean isLeft, int targetVal) {
        if (pre == null) {
            return;
        }

        if (curr == null) {
            TreeNode targetNode = new TreeNode(targetVal);
            if (isLeft) {
                pre.left = targetNode;
            } else {
                pre.right = targetNode;
            }
            return;
        }

        if (curr.val > targetVal) {
            helper(curr.left, curr, true, targetVal);
        } else {
            helper(curr.right, curr, false, targetVal);
        }
    }

    public TreeNode insertIntoBST(TreeNode root, int val) {
        helper(root, root, true, val);

        return root;
    }
}
// @lc code=end
