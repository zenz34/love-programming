/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 *
 * https://leetcode.com/problems/clone-graph/description/
 *
 * algorithms
 * Medium (25.52%)
 * Total Accepted:    203.5K
 * Total Submissions: 797.5K
 * Testcase Example:  '{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}'
 *
 * Given a reference of a node in a connected undirected graph, return a deep
 * copy (clone) of the graph. Each node in the graph contains a val (int) and a
 * list (List[Node]) of its neighbors.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * 
 * 
 * Input:
 * 
 * {"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}
 * 
 * Explanation:
 * Node 1's value is 1, and it has two neighbors: Node 2 and 4.
 * Node 2's value is 2, and it has two neighbors: Node 1 and 3.
 * Node 3's value is 3, and it has two neighbors: Node 2 and 4.
 * Node 4's value is 4, and it has two neighbors: Node 1 and 3.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes will be between 1 and 100.
 * The undirected graph is a simple graph, which means no repeated edges and no
 * self-loops in the graph.
 * Since the graph is undirected, if node p has node q as neighbor, then node q
 * must have node p as neighbor too.
 * You must return the copy of the given node as a reference to the cloned
 * graph.
 * 
 * 
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = {};
    return clone(node, map);

    function clone(node) {
        if (!node) return node; // for null
    
        if (!map[node.val]) {
            map[node.val] = new Node(node.val, []);
            map[node.val].neighbors = node.neighbors.map(clone);
        }
        return map[node.val];   //  already cloned
    }
};


// function cloneGraph(graph) {
//     var map = {};
//     return traverse(graph);

//     function traverse(node) {
//         if (!node) return node;
//         if (!map[node.val]) {
//         map[node.val] = new Node(node.val, []);
//         map[node.val].neighbors = node.neighbors.map(traverse);
//         }
//         return map[node.val];
//     }
// }


// class Solution {
//     public Node cloneGraph(Node node) {
        
//         if (node == null)
//             return null;
//         Map<Node, Node> map = new HashMap<Node, Node>();
        
//         Queue<Node> q = new LinkedList<Node>();
//         map.put(node, new Node(node.val, new ArrayList<Node>()));
//         q.add(node);
        
//         while(!q.isEmpty()){
//             Node top = q.remove();
//             for (Node neighbor: top.neighbors) {
//                 // visited
//                 if (!map.containsKey(neighbor)) {
//                     map.put(neighbor, new Node(neighbor.val, new ArrayList<Node>()));
//                     q.add(neighbor);
//                 } 
//                 map.get(top).neighbors.add(map.get(neighbor));
//             }
//         }
//         return map.get(node);
        
//     }
// }


