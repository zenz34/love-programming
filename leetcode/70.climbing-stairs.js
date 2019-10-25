/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache = [];
    cache[1] = 1;
    cache[2] = 2;

    if (n < 3) {
      return cache[n];
    }

    return helper(n, cache);

    function helper(n, cache) {
      if (!cache[n]) {
        cache[n] = helper(n - 1, cache) + helper(n - 2, cache);
        return cache[n];
      }

      return cache[n];
    }
};

