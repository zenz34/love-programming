class QuickFindDS {
    constructor(n) {
        this.id = [];
        for (let i = 0; i < n; i++) {
            this.id[i] = i;
        }
    }

    connect(p, q) {
        const pId = this.id[p];
        const qId = this.id[q];

        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pId) {
                this.id[i] = qId;
            }
        }
    }

    isConnected(p, q) {
        return this.id[p] === this.id[q];
    }
}

// class QuickFindDS {
//     constructor(N) {
//         this.id = [];

//         for (let i = 0; i < N; i++) {
//             this.id[i] = i;
//         }
//     }

//     isConnected(p, q) {
//         return this.id[p] === this.id[q];
//     }

//     connect(p, q) {
//         const pId = this.id[p];
//         const qId = this.id[q];

//         for (let i = 0; i < this.id.length; i++) {
//             if (this.id[i] === pId) {
//                 this.id[i] = qId;
//             }
//         }
//     }
// }

const qf = new QuickFindDS(5);
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
