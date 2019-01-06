/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
        return;
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let n = matrix[0].length;

    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            let tmp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = tmp;
        }
        top++;
        bottom--;
        left++;
        right--;
        n -= 2;
    }
};
