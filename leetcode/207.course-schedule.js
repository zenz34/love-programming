/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    const seen = new Set();
    const seeing = new Set();
    const adj = new Array(numCourses).map(e => []);

    for (let [u, v] of prerequisites) {
        adj[v].push(u);
    }

    for (let c = 0; c < numCourses; c++) {
        if (hasCycle(c)) {
            return false;
        }
    }

    return true;

    function hasCycle(v) {
        if (seen.has(v)) return false;
        if (seeing.has(v)) return true;

        seeing.add(v);
        for (let nei of adj[v]) {
            if (hasCycle(nei)) {
                return true;
            }
        }
        seeing.delete(v);
        seen.add(v);

        return false;
    }
}
