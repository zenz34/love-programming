/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.22%)
 * Total Accepted:    253.6K
 * Total Submissions: 645.8K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    if (n === 2) return '11';
    let str = '11';

    for (let i = 3; i <= n; i++) {
        str += '$';
        let curDigitCh = '';
        let tmpStr = '';
        let cnt = 0;

        for (let j = 0; j < str.length; j++) {
            if (curDigitCh === str.charAt(j)) {
                cnt++;
            } else {
                if (cnt !== 0) {
                    tmpStr += cnt + curDigitCh;
                }
                curDigitCh = str.charAt(j);
                cnt = 1;
            }
        }
        str = tmpStr;
    }

    return str;
};

for (let i = 3; i < 7; i++) {
    console.log(countAndSay(i));
}