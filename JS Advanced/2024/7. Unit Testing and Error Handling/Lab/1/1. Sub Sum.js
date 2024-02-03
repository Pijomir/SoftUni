function subSum(arr, startIdx, endIdx) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIdx < 0) {
        startIdx = 0;
    }

    if (endIdx > arr.length - 1) {
        endIdx = arr.length -1;
    }

    let sum = arr.map(Number).slice(startIdx, endIdx + 1).reduce((acc, b) => acc + b, 0);
    return sum;
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2));

