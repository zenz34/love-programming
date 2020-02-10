/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
    let count = 0;
    //    [10,13,12,14,15]

    for (let i = 0; i < A.length; i++) {
        for (let j = i, oddJTime = true; j < A.length; oddJTime != oddJTime) {
            if (j === A.length - 1) {
                count++;
                break;
            }

            let k = j + 1;
            if (oddJTime) {
                let min = Number.MAX_SAFE_INTEGER;
                let minId = A.length;
                while (k < A.length) {
                    if (A[k] >= A[j] && A[k] < min) {
                        minId = k;
                    }
                    k++;
                }

                j = minId;
            } else {
                let max = Number.MIN_SAFE_INTEGER;
                let maxId = A.length;
                while (k < A.length) {
                    if (A[k] <= A[j] && A[k] > max) {
                        maxId = k;
                    }
                    k++;
                }

                j = maxId;
            }
        }
    }

    return count;
};
oddEvenJumps([(10, 13, 12, 14, 15)]);
