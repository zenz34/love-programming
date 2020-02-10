const arr1 = ["a", "b", ["c", "d", ["e", "f"]], "g"];






function flattenArr(arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
        );
    }, []);
}

console.log(flatten(arr1));

function flattern(arr) {
    return arr.reduce((flatArr, element) => {
        return flatArr.concat(
            Array.isArray(element) ? flatten(element) : element
        );
    }, []);
}
