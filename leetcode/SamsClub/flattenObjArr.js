/*
flatten object array 
Given [{a: 1}, {b: 2, c: 3}, {d: 4}]
return {a:1, b:2, c:3, d:4}
*/
function flatten1LObjArr(arr) {
    return arr.reduce((acc, curVal) => {
        return Object.assign(
            acc,
            Object.keys(curVal).reduce((acc1, key) => {
                acc1[key] = curVal[key];
                return acc1;
            }, {})
        );
    }, {});
}

const objArr = [{ a: 1 }, { b: 2, c: 3 }, { d: { d1: 4 } }];

function flattenObj(obj) {
    return Object.keys(obj).reduce((acc, curKey) => {
        const key = `${curKey}`;
        const curVal = obj[curKey];

        if (typeof curVal === "object" && curVal !== null) {
            Object.assign(acc, flattenObj(curVal));
        } else {
            acc[key] = curVal;
        }
        return acc;
    }, {});
}
function flattenObjArr(arr) {
    return arr.reduce((acc, curVal) => {
        return Object.assign(acc, flattenObj(curVal));
    }, {});
}

console.log(flattenObjArr(objArr));
