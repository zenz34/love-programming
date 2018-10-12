/*
 * [292] Nim Game
 *
 * https://leetcode.com/problems/nim-game/description/
 *
 * algorithms
 * Easy (55.35%)
 * Total Accepted:    171.6K
 * Total Submissions: 309.9K
 * Testcase Example:  '4'
 *
 * You are playing the following Nim Game with your friend: There is a heap of
 * stones on the table, each time one of you take turns to remove 1 to 3
 * stones. The one who removes the last stone will be the winner. You will take
 * the first turn to remove the stones.
 * 
 * Both of you are very clever and have optimal strategies for the game. Write
 * a function to determine whether you can win the game given the number of
 * stones in the heap.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: false 
 * Explanation: If there are 4 stones in the heap, then you will never win the
 * game;
 * No matter 1, 2, or 3 stones you remove, the last stone will always
 * be 
 * removed by your friend.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if (n < 4) {
        return true;
    }

    var pre3 = true;
    var pre2 = true;
    var pre1 = true;
    var cur = false;

    for (var i = 4; i <= n; i++) {
        if (pre3 === false || pre2 === false || pre1 === false) {
            cur = true;
        } else {
            cur = false;
        }

        pre3 = pre2;
        pre2 = pre1;
        pre1 = cur;
    }

    return cur;
};
