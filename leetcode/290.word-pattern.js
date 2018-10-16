/*
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (33.99%)
 * Total Accepted:    118.4K
 * Total Submissions: 348.2K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters separated by a single space.
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var mapIToC = [];
    var mapCToI = [];
    var strArr = str.split(" ");
    //testcase: '"abba"\n"dog cat cat dog"'
    // console.log(pattern.length);
    // console.log(strArr);

    if (pattern.length !== strArr.length) {
        return false;
    }

    for (var i = 0; i < pattern.length && i < strArr.length; i++) {
        var chAscNum = pattern.charAt(i).charCodeAt(0);

        // console.log(ch);
        // console.log(strArr[i]);

        if (!mapIToC[chAscNum] && !mapCToI[strArr[i]]) {
            mapIToC[chAscNum] = strArr[i];
            mapCToI[strArr[i]] = chAscNum;
        } else if (
            mapIToC[chAscNum] !== strArr[i] ||
            mapCToI[strArr[i]] !== chAscNum
        ) {
            return false;
        }
    }

    return true;
};

/**
 * a    hello
 * a    hello world
 * ab   hello world
 * aba  hello world hello
 *
 */
