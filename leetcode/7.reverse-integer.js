/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.45%)
 * Total Accepted:    498.9K
 * Total Submissions: 2M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var ret = 0;
    var factor = 1;
    if (x < 0) {
        factor = -1;
        x = -x;
    }

    while (x) {
        ret = ret * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    ret *= factor;
    if (ret > Math.pow(2, 31) - 1 || ret < -1 * Math.pow(2, 31)) {
        return 0;
    }

    return ret;
};

/*
x
overflow -> 0

0
0





*/
