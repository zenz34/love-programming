/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (!matrix || matrix.length === 0) return [];
  
  let m = matrix.length;
  let n = matrix[0].length;
  let ret = [];
  let row = 0;
  let col = 0;
  let d = 0;
  let dirs = [[-1, 1], [1, -1]];
  
  for (let i = 0; i < m * n; i++) {
      ret[i] = matrix[row][col];
      row += dirs[d][0];
      col += dirs[d][1];
      
      if (row >= m) {
          row = m - 1;
          col += 2;
          d = 1 - d;
      }
      
      if (col >= n) {
          col = n - 1;
          row += 2;
          d = 1 - d;
      }
      
      if (row < 0) {
          row = 0;
          d = 1- d;
      }
      
      if (col < 0) {
          col = 0;
          d = 1 - d;
      }
  }
       
  return ret;
};

