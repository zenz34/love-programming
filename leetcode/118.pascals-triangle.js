/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.21%)
 * Total Accepted:    223.5K
 * Total Submissions: 505.5K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [];
    for (let i = 0; i < numRows; i++) {
        ans[i] = new Array(i + 1);
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                ans[i][j] = 1;
            } else {
                ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
            }
        }
    }

    return ans;
};
