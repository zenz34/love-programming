/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.87%)
 * Total Accepted:    398.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
//  '["flower","flow","flight"]'
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';

    let minLen = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < strs.length; i++) {
        minLen = Math.min(minLen, strs[i].length);
    }

    let idx = -1;

    for (let j = 0; j < minLen; j++) {
        let k = 0;
        while (k < strs.length) {
            if (strs[0].charAt(j) !== strs[k].charAt(j)) {
                break;
            }
            k++;
        }

        if (k !== strs.length) {
            break;
        }

        idx++;
    }


    return idx < 0 ? '': strs[0].substring(0, idx + 1);
};
