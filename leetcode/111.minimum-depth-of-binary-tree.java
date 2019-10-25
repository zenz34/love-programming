/*
 * @lc app=leetcode id=111 lang=java
 *
 * [111] Minimum Depth of Binary Tree
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
    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        if (root.left == null && root.right == null) {
            return 1;
        }

        //  coming here, has 3 cases, root has one of the child, root has both left and right child
        int min = Integer.MAX_VALUE;

        if (root.left != null) {
            min = Math.min(minDepth(root.left), min);
        }

        if (root.right != null) {
            min = Math.min(minDepth(root.right), min);
        }

        return min + 1;
    }
}
// @lc code=end

/*
[1,2]
root to leaf
1 is not a leaf

1. add leaf as a base case
2. check if child is null.
    if a child is null, don't call minDepth on it

*/