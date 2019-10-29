/*
 * @lc app=leetcode id=779 lang=java
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
class Solution {
    public int kthGrammar(int N, int K) {
        if (N == 1) {
            return 0;
        }

        return ((K + 1)% 2) ^ kthGrammar(N - 1, (K + 1) / 2);
    }
}
// @lc code=end
