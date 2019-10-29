/*
 * @lc app=leetcode id=95 lang=java
 *
 * [95] Unique Binary Search Trees II
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
// class Solution {
//     public List<TreeNode> generateTrees(int n) {
        
//     }
// }
import java.util.List;
import java.util.ArrayList;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) {val = x;}
}

class Solution {
    public List<TreeNode> generateTrees(int n) {
        return genTrees(1,n);
    }

    public List<TreeNode> genTrees (int start, int end) {
        List<TreeNode> list = new ArrayList<TreeNode>();

        if (start > end) {
            list.add(null);
            return list;
        }
        
        if (start == end) {
            list.add(new TreeNode(start));
            return list;
        }
        
        List<TreeNode> left, right;
        for (int i = start; i <= end; i++) {
            left = genTrees(start, i - 1);
            right = genTrees(i + 1, end);
            
            for (TreeNode lnode: left) {
                for (TreeNode rnode: right) {
                    TreeNode root = new TreeNode(i);
                    root.left = lnode;
                    root.right = rnode;
                    list.add(root);
                }
            }
        }
        
        return list;
    }
}
// @lc code=end

