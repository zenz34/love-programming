var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = [1, 2, 3, 4];
var ro = a;
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
function createSquareInfo(attr) {
    var newSquare = { color: "green", area: 200 };
    if (attr.color) {
        newSquare.color = attr.color;
    }
    if (attr.width) {
        newSquare.area = attr.width * attr.width;
    }
    return newSquare;
}
// let mySquareAttr = createSquareInfo({ color: "yellow", width: 10 });
var mySquareAttr = createSquareInfo({ colour: "y", width: 10 });
console.log(createSquareInfo(mySquareAttr));
var mySquareAttr2 = createSquareInfo({ colour: "y", width: 10 });
console.log(createSquareInfo(mySquareAttr2));
var aaTest1 = { test1: "a" };
var aaTest2 = { test1: "a", testOption: "test" };
var aaTest3 = { test1: "a", testOptionn: "test" };
// aaTest2.testOption = "123";
/**
 
 

 if there's any readonly property
 will do
 Excess Property Checks
 */
var x = ["hi", 123];
console.log(x);
var x1 = "hello world!";
var xLen = x1.length;
console.log(xLen);
var xLen2 = x1.length;
console.log(xLen2);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var myArr = { a: "ps4", b: "switch" };
var myStr1 = myArr[0];
//  Indexable problem
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArr2 = ["Alice", "Peter"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function identity(arg) {
    return;
}
