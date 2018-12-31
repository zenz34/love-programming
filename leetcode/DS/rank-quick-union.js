class RankedQuickUnion {
    constructor(n) {
        this.id = [];
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
        }

        this.rank = [];
        for (let i = 0; i < n; i++) {
            this.rank[i] = 1;
        }
    }

    find(p) {
        if (p !== this.id[p]) {
            this.id[p] = this.find(this.id[p]);
        }
        return this.id[p];
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    connect(p, q) {
        const pId = this.find(p);
        const qId = this.find(q);

        if (pId === qId) {
            return;
        }

        if (this.rank[pId] < this.rank[qId]) {
            this.id[pId] = this.id[qId];
        } else if (this.rank[pId] > this.rank[qId]) {
            this.id[qId] = this.id[pId];
        } else {
            this.id[pId] = this.id[qId];
            this.rank[qId]++;
        }
    }
}

const qf = new RankedQuickUnion(5);
qf.connect(
    0,
    1
);

console.log(qf.isConnected(0, 1));
console.log(qf.isConnected(0, 2));
qf.connect(
    1,
    2
);
console.log(qf.isConnected(0, 2));

for (let i = 0; i < 5; i++) {
    console.log(qf.isConnected(0, i));
}
