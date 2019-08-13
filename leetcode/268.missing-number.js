/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let expectSum = 0;
    for (let i = 0, j = 1; i < nums.length; i++, j++) {
        expectSum += j;
        sum += nums[i];
    }

    return expectSum - sum;
};
