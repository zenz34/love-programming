/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [];
    let ans = [];

    if (!root) {
        return ans;
    }

    queue.push(root);
    while (queue.length > 0) {
        const size = queue.length;
        const curLevel = [];
        for (let i = 0; i < size; i++) {
            const root = queue.shift();

            if (root.left) {
                queue.push(root.left);
            }
            if (root.right) {
                queue.push(root.right);
            }
            curLevel.push(root.val);
        }

        ans.push(curLevel);
    }

    return ans;
};
