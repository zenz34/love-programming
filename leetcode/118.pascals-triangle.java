/*
 * @lc app=leetcode id=118 lang=java
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> list = new ArrayList<>();
        generate(list, numRows);
        return list;
    }

    private void generate(List<List<Integer>> list, int numRows) {
        if (numRows == 1) {
            list.add(Arrays.asList(1));
        } else if (numRows > 1) {
            generate(list, numRows - 1);

            List<Integer> preList = list.get(numRows - 2);
            List<Integer> curList = new ArrayList<>();
            for (int i = 0; i < preList.size(); i++) {
                if (i == 0) {
                    curList.add(1);
                }
                
                if (i > 0) {
                    curList.add(i, preList.get(i - 1) + preList.get(i));
                }

                if (i == preList.size() - 1) {
                    curList.add(1);
                }
            }
            list.add(curList);
        }
    }
}
// @lc code=end
