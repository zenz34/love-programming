/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (44.30%)
 * Total Accepted:    289.3K
 * Total Submissions: 653K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * Note:
 *
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 *
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map();

  for (let str of strs) {
    let count = new Array(26);
    count.fill(0);
    for (let i = 0; i < str.length; i++) {
      count[str.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let key = "";
    for (let i = 0; i < 26; i++) {
      key += `#${count[i]}`;
    }

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return [...map.values()];
};

