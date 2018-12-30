class WeightedQuickUnionDS {
    constructor(n) {
        this.id = [];
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
        }

        this.size = [];
        for (let i = 0; i < n; i++) {
            this.size[i] = 1;
        }
    }

    find(p) {
        while (p !== this.id[p]) {
            p = this.id[p];
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

        const pId = this.find(p);
        const qId = this.find(q);

        if (this.size[pId] < this.size[qId]) {
            this.id[pId] = this.id[qId];
            this.size[qId] += this.size[pId];
        } else {
            this.id[qId] = this.id[pId];
            this.size[pId] += this.size[qId];
        }
    }
}

const qf = new WeightedQuickUnionDS(5);
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
