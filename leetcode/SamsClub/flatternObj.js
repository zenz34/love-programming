const testObj = {
    a: {
        a1: 1,
        a2: 2,
        a3: {
            a11: 11,
            a22: {
                a221: 221
            }
        },
        a4: 4
    },
    b: 5,
    c: 6,
    d: {
        d1: 7
    }
};

function flatten(obj) {
    return Object.keys(obj).reduce((acc, current) => {
        const _key = `${current}`;
        const currentValue = obj[current];
        if (
            Array.isArray(currentValue) ||
            Object(currentValue) === currentValue
        ) {
            Object.assign(acc, flatten(currentValue));
        } else {
            acc[_key] = currentValue;
        }
        return acc;
    }, {});
}

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

// console.log(flattenObj(testObj));

function flattenObject(ob) {
    var toReturn = {};
    var flatObject;
    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) {
            continue;
        }
        if (typeof ob[i] === "object") {
            flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                    continue;
                }
                toReturn[x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

const flatObjNew = obj => {
    return Object.keys(obj).reduce((acc, curVal, curIdx) => {
        if (typeof obj[curVal] === "object" && obj[curVal] !== null) {
            Object.assign(acc, flatObjNew(obj[curVal]));
        } else {
            acc[curVal] = obj[curVal];
        }
        return acc;
    }, {});
};
const a = flatObjNew(testObj);
console.log(a);
