/*
 * @lc app=leetcode id=145 lang=java
 *
 * [145] Binary Tree Postorder Traversal
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
    //  recursion solution:
    // public List<Integer> postorderTraversal(TreeNode root) {
    //     List<Integer> answer = new ArrayList<>();
    //     traversal(root, answer);
    //     return answer;
    // }

    // private void traversal(TreeNode node, List<Integer> answer) {
    //     if (node == null) {
    //         return;
    //     }

    //     traversal(node.left, answer);
    //     traversal(node.right, answer);
    //     answer.add(node.val);
    // }

    //  iterative solution:
    public List<Integer> postorderTraversal(TreeNode root) {
    LinkedList<TreeNode> stack = new LinkedList<>();
    LinkedList<Integer> answer = new LinkedList<>();
    if (root == null) {
        return answer;
    }

    stack.add(root);
    while (!stack.isEmpty()) {
        TreeNode curr = stack.pollLast();
        answer.addFirst(curr.val);

        if (curr.left != null) {
            stack.add(curr.left);
        }

        if (curr.right != null) {
            stack.add(curr.right);
        }
    }

    return answer;
    }
}

// @lc code=end

