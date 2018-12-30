/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const wUN = new weightedQuickUnion(n);
    for (let i = 0; i < edges.length; i++) {
        wUN.connect(
            edges[i][0],
            edges[i][1]
        );
    }
    return wUN.getCount();
};

class weightedQuickUnion {
    constructor(n) {
        this.root = [];
        this.size = [];
        this.count = 0;
        for (let i = 0; i < n; i++) {
            this.root[i] = i;
            this.size[i] = 1;
            this.count++;
        }
    }

    find(p) {
        while (p !== this.root[p]) {
            p = this.root[p];
        }
        return p;
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    connect(p, q) {
        if (this.isConnected(p, q)) {
            return;
        }

        const pRoot = this.find(p);
        const qRoot = this.find(q);

        if (this.size[pRoot] < this.size[qRoot]) {
            this.root[pRoot] = this.root[qRoot];
            this.size[qRoot] += this.size[qRoot];
        } else {
            this.root[qRoot] = this.root[pRoot];
            this.size[pRoot] += this.size[qRoot];
        }
        this.count--;
    }

    getCount() {
        return this.count;
    }
}

const a = countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]);
console.log(a);
