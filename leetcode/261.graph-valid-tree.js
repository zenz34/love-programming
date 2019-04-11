/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  let graph = [];
  
  for (let i = 0; i < n; i++) {
      graph[i] = [];
  }
  
  for (let i = 0; i < edges.length; i++) {
      graph[edges[i][0]].push(edges[i][1]);
      graph[edges[i][1]].push(edges[i][0]);
  }
  
  let visited = (new Array(n)).fill(false);
  
  function hasCycle(node, parent, graph, visited) {
      if (visited[node]) {
          return true;
      }

      visited[node] = true;
      
      for (let nei of graph[node]) {
          if (parent === nei) {
              continue;
          }
          
          if (visited[nei] || hasCycle(nei, node, graph, visited)) {
              return true;
          }
      }
      
      return false;
  }
  
  if (hasCycle(0, -1, graph, visited)) {
      return false;
  }
  
  for (let i = 0; i < n; i++) {
      if (!visited[i]) {
          return false;
      }
  }
  
  return true;
};