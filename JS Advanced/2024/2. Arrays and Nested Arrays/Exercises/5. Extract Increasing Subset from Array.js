function extractIncreasingSubsetFromArray(arr) {
    // let result = arr.reduce((acc, curr) => {
    //     if (curr >= Math.max(...acc)) {
    //         acc.push(curr);
    //     }
    //     return acc;
    // }, []);

    // return result.join('\n');
    let biggestNum = Number.MIN_SAFE_INTEGER;
    return arr.reduce ((acc, val) => {
        if (val >= biggestNum) {
            biggestNum = val;
            acc.push(biggestNum);
        }

        return acc;
    }, []).join('\n');
}

console.log(extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));