/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let carry = 0;
    let i = A.length - 1;

    while (K !== 0) {
        const digit = K % 10;
        let cur_digit = i >= 0 ? A[i] + digit + carry : digit + carry;
        carry = cur_digit >= 10 ? 1 : 0;
        cur_digit = cur_digit % 10;

        if (i >= 0) {
            A[i] = cur_digit;
        } else {
            A.unshift(cur_digit);
        }

        K = Math.floor(K / 10);
        i--;
    }

    if (carry === 1) A.unshift(cur_digit);

    return A;
};

let arr = [2, 7, 4];
let k = 181;

console.log(addToArrayForm(arr, k));
