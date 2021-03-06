class QuickUnionDS {
    constructor(n) {
        this.id = [];
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
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

        this.id[this.find(p)] = this.find(q);
    }
}

const qf = new QuickUnionDS(5);
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
