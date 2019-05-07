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

/*
0 建立queue 将root节点放入queue
1 获取queue的length 如果len不等于0
2 for循环将len个节点依次从queue弹出 
    每个节点弹出的同时 将它的左右子节点加入queue
    将此节点的值加入临时array
    循环结束后 push临时array进入ans array
    开始下一轮循环直到len为0


总结
1个queue
1个临时array
一个while loop
一个for循环
两者都用到queue当前的size

*/
