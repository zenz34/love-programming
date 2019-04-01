/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    //  dfs
    const adjList = constructAdjacencyList(n, edges);
    const visited = {};
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            dfs(i, adjList, visited);
        }
    }
    
    return count;
};

//  to add vertices into visited
function dfs(v, adjList, visited) {
    if (visited[v]) return;

    visited[v] = true;
    for (let i = 0; i < adjList[v].length; i++) {
        dfs(adjList[v][i], adjList, visited);
    }

    return;
}

function constructAdjacencyList(n, edges) {
    const adjList = new Array(n);

    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        adjList[edges[i][0]].push(edges[i][1]);
        adjList[edges[i][1]].push(edges[i][0]);
    }

    return adjList;
}
/*
core concept is to convert edge list representaion into adjacency list
then do the dfs traversal on the adjacency list

T 
O(V + E)
S
O(V + E)



dfs is to traversal and !update the visited group!

tips:
1 create a adjacency list for every node, even a node has an empty list
  so, when we do traversal from node No. 0 to No. n - 1, we can detect this isolated one
2 when construct adjacency list, for each edge, update adjacency list twice.





employ an extro visited object to help save the connected number
one idea is import

instead of using n sets or a map to save all the groups
we only need to save previous connected components
example:
0 - 1 2 - 3
n = 4

4 is another isolated component
we do not need to save
[0, 1] and [2, 3] two groups
we only need to save
[0, 1, 2, 3] is visited before

same thing for 2,
[0, 1]
2 is not,
simply add 2 and dfs(2... ) into the visited group






//  var countComponents = function(n, edges) {
//     const wUN = new weightedQuickUnion(n);
//     for (let i = 0; i < edges.length; i++) {
//         wUN.connect(
//             edges[i][0],
//             edges[i][1]
//         );
//     }
//     return wUN.getCount();
// };

// class weightedQuickUnion {
//     constructor(n) {
//         this.root = [];
//         this.size = [];
//         this.count = 0;
//         for (let i = 0; i < n; i++) {
//             this.root[i] = i;
//             this.size[i] = 1;
//             this.count++;
//         }
//     }

//     find(p) {
//         while (p !== this.root[p]) {
//             p = this.root[p];
//         }
//         return p;
//     }

//     isConnected(p, q) {
//         return this.find(p) === this.find(q);
//     }

//     connect(p, q) {
//         if (this.isConnected(p, q)) {
//             return;
//         }

//         const pRoot = this.find(p);
//         const qRoot = this.find(q);

//         if (this.size[pRoot] < this.size[qRoot]) {
//             this.root[pRoot] = this.root[qRoot];
//             this.size[qRoot] += this.size[qRoot];
//         } else {
//             this.root[qRoot] = this.root[pRoot];
//             this.size[pRoot] += this.size[qRoot];
//         }
//         this.count--;
//     }

//     getCount() {
//         return this.count;
//     }
// }

// const a = countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]);
// console.log(a);
