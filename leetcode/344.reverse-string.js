/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  reverse(0, s.length - 1, s);
  
  function reverse(b, e, s) {
    if (b >= e) {
      return;
    }
    
    const tmp = s[b];
    s[b] = s[e];
    s[e] = tmp;

    reverse(b + 1, e - 1, s);
  }
};
