/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    const wUN = new weightedQuickUnion(m, n);
    let ans = [];

    for (let i = 0; i < positions.length; i++) {
        const r = positions[i][0];
        const c = positions[i][1];
        const id = r * n + c;

        wUN.addOneCount(id);

        if (c - 1 >= 0 && wUN.isValid(r * n + c - 1)) {
            wUN.connect(
                id,
                r * n + c - 1
            );
        }

        if (c + 1 < n && wUN.isValid(r * n + c + 1)) {
            wUN.connect(
                id,
                r * n + c + 1
            );
        }

        if (r - 1 >= 0 && wUN.isValid((r - 1) * n + c)) {
            wUN.connect(
                id,
                (r - 1) * n + c
            );
        }

        if (r + 1 < m && wUN.isValid((r + 1) * n + c)) {
            wUN.connect(
                id,
                (r + 1) * n + c
            );
        }

        ans.push(wUN.getCount());
    }

    return ans;
};

class weightedQuickUnion {
    constructor(m, n) {
        this.root = [];
        this.rank = [];
        this.count = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.root[i * n + j] = -1;
                this.rank[i * n + j] = 1;
            }
        }
    }

    isValid(id) {
        return this.root[id] !== -1;
    }

    find(p) {
        if (p !== this.root[p]) {
            this.root[p] = this.find(this.root[p]);
        }

        return this.root[p];
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    connect(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);

        if (pRoot === qRoot) {
            return;
        }

        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.root[pRoot] = this.root[qRoot];
        } else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.root[qRoot] = this.root[pRoot];
        } else {
            this.root[qRoot] = this.root[pRoot];
            this.rank[pRoot]++;
        }

        this.count--;
    }

    addOneCount(id) {
        this.root[id] = id;
        this.rank[id] = 1;
        this.count++;
    }

    getCount() {
        return this.count;
    }
}

console.log(
    numIslands2(3, 3, [[0, 1], [1, 2], [2, 1], [1, 0], [0, 2], [0, 0], [1, 1]])
);

//Array(7)[(1, 2, 3, 4, 3, 2, 1)];
//Array(7)[1, 2, 3, 4, 3, 2, -1]
