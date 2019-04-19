/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (37.35%)
 * Total Accepted:    203.7K
 * Total Submissions: 545.4K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it
 * possible for you to finish all courses?
 * 
 * Example 1:
 * 
 * 
 * Input: 2, [[1,0]] 
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * Example 2:
 * 
 * 
 * Input: 2, [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should
 * also have finished course 1. So it is impossible.
 * 
 * 
 * Note:
 * 
 * 
 * The input prerequisites is a graph represented by a list of edges, not
 * adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input
 * prerequisites.
 * 
 * 
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let inDegrees = (new Array(numCourses)).fill(0);
  let neighbors = [];

  for (let pre of prerequisites) {
    const start = pre[1];
    const end = pre[0];
    inDegrees[end]++;
    if (!neighbors[start]) {
      neighbors[start] = [];
    }
    neighbors[start].push(end);
  }

  let queue = [];
  let count = 0;

  // inDegrees.map((e, i) => {
  //   if (e === 0) {
  //     queue.push(i);
  //   }
  // });
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length !== 0) {
    let course = queue.shift();
    if (neighbors[course] && neighbors[course].length !== 0) { //  note! add guard, when it reaches end point, no neighbors
      neighbors[course].map(e => {
        if (--inDegrees[e] === 0) {
          queue.push(e);
        }
      });
    }
    count++;
  }

  return count === numCourses;
};
