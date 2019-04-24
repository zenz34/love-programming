/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  return pascalsTriangleRow(0, rowIndex, new Array(rowIndex + 1));

  function pascalsTriangleRow(i, n, arr) {
    if (i > n) return arr;

    for (let j = i; j >= 0; j--) {
      if (j === 0 || j === i) {
        arr[j] = 1;
      } else {
        arr[j] = arr[j - 1] + arr[j];
      }
    }

    return pascalsTriangleRow(i + 1, n, arr);
  }
};

