/*
Given a sorted integer array nums, where the range of elements are in the inclusive
 range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let ans = [];
    let next = lower;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < next) continue;

        if (nums[i] === next) {
            next++;
            continue;
        }

        ans.push(getRange(next, nums[i] - 1));
        next = nums[i] + 1;
    }

    if (next <= upper) {
        ans.push(getRange(next, upper));
    }

    return ans;
};

function getRange(lo, hi) {
    return (lo === hi) ? '' + lo : `${lo}->${hi}`;
}

const nums = [0,1,3,50,75]
console.log(findMissingRanges(nums, 0, 99));
