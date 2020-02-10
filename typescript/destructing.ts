let [, second, , fourth] = [1, 2, 3, 4];
console.log(second);
console.log(fourth);

let [first] = [1, 2, 3, 4];

console.log(first);

let input = [1, 2];
[first, second] = input;
console.log(first);
console.log(second);

[second, first] = [first, second];
console.log(first);
console.log(second);

let [kkkkkk, ...rest] = [1, 2, 3, 4];
console.log(rest);

let o = {
    a: "foo",
    b: 12,
    c: "bar",
    d: 8
};

// let { a, b, d } = o;
// console.log(a);
// console.log(b);
// console.log(d);

({ a, b } = o);
console.log(a);
console.log(b);

({ a, b } = { b, a }); //  doesn't work
console.log(a);
console.log(b);

let { c: newName1, d: newName2 }: { c: string; d: number } = o;
console.log(newName1);
console.log(newName2);

function keepWholeObject(wholeObject: { a: string; b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

type C = { a: string; b?: number };
function f({ a, b }: C): void {}

function f1({ a = "", b = 0 } = {}): void {}
f1();

function f2({ a, b = 0 } = { a: "" }): void {
    // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to { a: "" }, which then defaults b = 0
f2({}); // error, 'a' is required if you supply an argument

function fTmpt({ a = "", b = 0 } = {}): void {}
fTmpt();

function fDefault({ a, b = 0 } = { a: "" }: {a: string, b: number}): void {}
fDefault({ a: "h" });
fDefault();
fDefault({});
