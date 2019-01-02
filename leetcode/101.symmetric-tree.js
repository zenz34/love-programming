/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (42.13%)
 * Total Accepted:    332.2K
 * Total Submissions: 788.4K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 *
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 *
 * But the following [1,2,2,null,3,null,3]  is not:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 *
 *
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

[1, 2, 2, null, 3, null, 3];
[1, 2, 2, 3, 4, 4, 3];
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;

    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const size = queue.length;
        const curLevel = [];

        for (let i = 0, j = size - 1; i < size; i++, j--) {
            const root = queue.shift();

            if (root) {
                queue.push(root.left);
                queue.push(root.right);
                curLevel.push(root.val);
            } else {
                curLevel.push(null);
            }
        }

        //  check
        for (let i = 0, j = curLevel.length - 1; i < j; i++, j--) {
            if (curLevel[i] !== curLevel[j]) {
                return false;
            }
        }
    }

    return true;
};
