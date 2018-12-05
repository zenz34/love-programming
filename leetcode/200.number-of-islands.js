/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    let wUN = new WeightedUnionFind(grid);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "0";
                if (i - 1 >= 0 && grid[i - 1][j] === "1") {
                    wUN.connect(
                        i * grid[0].length + j,
                        (i - 1) * grid[0].length + j
                    );
                }

                if (i + 1 < grid.length && grid[i + 1][j] === "1") {
                    wUN.connect(
                        i * grid[0].length + j,
                        (i + 1) * grid[0].length + j
                    );
                }

                if (j - 1 >= 0 && grid[i][j - 1] === "1") {
                    wUN.connect(
                        i * grid[0].length + j,
                        i * grid[0].length + (j - 1)
                    );
                }

                if (j + 1 < grid[0].length && grid[i][j + 1] === "1") {
                    wUN.connect(
                        i * grid[0].length + j,
                        i * grid[0].length + (j + 1)
                    );
                }
            }
        }
    }

    return wUN.getCount();
};

class WeightedUnionFind {
    constructor(arr) {
        this.id = [];
        this.size = [];
        this.count = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] === "1") {
                    this.id[i * arr[0].length + j] = i * arr[0].length + j;
                    this.count++;
                }

                this.size[i * arr[0].length + j] = 1;
            }
        }
    }

    find(p) {
        while (p !== this.id[p]) {
            p = this.id[p];
        }

        return p;
    }

    connect(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        const pRootSize = this.size[pRoot];
        const qRootSize = this.size[qRoot];

        if (pRoot != qRoot) {
            if (pRootSize < qRootSize) {
                this.id[pRoot] = qRoot;
                this.size[qRootSize] += pRootSize;
            } else {
                this.id[qRoot] = pRoot;
                this.size[pRootSize] += qRootSize;
            }

            this.count--;
        }
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    getCount() {
        return this.count;
    }
}

const testArr = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"],
    ["0", "0", "0", "0", "1"]
];
console.log(numIslands(testArr));

/**
 connect()
 如果不加同一个父亲的判断
 if (rootP != rootQ)
 会出现重复扣的情况
 [1][0]多扣了右边一次，右边[1][1]已经被扣过一次了
 [2][0]多扣了右边一次，右边[2][1]已经被扣过一次了

如果不加这句
 if (grid[i][j] === "1") {
[1][2]会多扣1次
 */
