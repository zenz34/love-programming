/*
 * @lc app=leetcode id=912 lang=java
 *
 * [912] Sort an Array
 */

// @lc code=start
class Solution {
    public List<Integer> sortArray(int[] nums) {
        
    }
}
// @lc code=end

/*

function merge_sort(list m)
    // Base case. A list of zero or one elements is sorted, by definition.
    if length of m ≤ 1 then
        return m

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    var left := empty list
    var right := empty list
    for each x with index i in m do
        if i < (length of m)/2 then
            add x to left
        else
            add x to right

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)
    

*/