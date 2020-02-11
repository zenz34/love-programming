let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// a[0] = 5;
// ro[0] = 12;
// ro.push(3);
// ro.length = 100;
// console.log(ro);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

interface SquareAttr {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquareInfo(attr: SquareAttr): { color: string; area: number } {
    let newSquare = { color: "green", area: 200 };
    if (attr.color) {
        newSquare.color = attr.color;
    }
    if (attr.width) {
        newSquare.area = attr.width * attr.width;
    }
    return newSquare;
}

// let mySquareAttr = createSquareInfo({ color: "yellow", width: 10 });
let mySquareAttr = createSquareInfo({ colour: "y", width: 10 });

console.log(createSquareInfo(mySquareAttr));

let mySquareAttr2 = createSquareInfo({ colour: "y", width: 10 } as SquareAttr);

console.log(createSquareInfo(mySquareAttr2));

interface aa {
    test1: string;
    readonly testOption?: string;
    testArr?: ReadonlyArray<string>;
    [propertyName: string]: any;
}

let aaTest1: aa = { test1: "a" };
let aaTest2: aa = { test1: "a", testOption: "test" };
let aaTest3: aa = { test1: "a", testOptionn: "test" };

// aaTest2.testOption = "123";
/**
 
 

 if there's any readonly property
 will do 
 Excess Property Checks
 */

let x: [string, number] = ["hi", 123];
console.log(x);

let x1: any = "hello world!";
let xLen: number = (<string>x1).length;
console.log(xLen);
let xLen2: number = (x1 as string).length;
console.log(xLen2);

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
};

//  Indexable Types
interface StringArray {
    [idx: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface stringIdxArray {
    [idx: string]: string;
}

let myArr: stringIdxArray = { a: "ps4", b: "switch" };

let myStr1: string = myArr[0];

//  Indexable problem
class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOk {
    // [x: number]: Animal;
    [y: string]: Dog;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArr2: ReadonlyStringArray = ["Alice", "Peter"];
// myArr2[2] = "abc";

/* 
Class Types implementing an interface
*/
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

function identity<T, U>(arg: T): U {
    return;
}
