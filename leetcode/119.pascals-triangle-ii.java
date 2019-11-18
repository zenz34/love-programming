/*
 * @lc app=leetcode id=119 lang=java
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
class Solution {
    public List<Integer> getRow(int rowIndex) {
        if (rowIndex == 0) {
            return Arrays.asList(1);
        }

        List<Integer> preList = getRow(rowIndex - 1);
        List<Integer> curList = new ArrayList<>();
        for (int i = 0; i < preList.size(); i++) {
            if (i == 0) {
                curList.add(1);
            }
            if (i > 0) {
                curList.add(preList.get(i - 1) + preList.get(i));
            }
            if (i == preList.size() - 1) {
                curList.add(1);
            }
        }

        return curList;
    }
}
// @lc code=end

