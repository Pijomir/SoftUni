function createAnArrary(n, k) {
    let arr = [1];
    for (let i = 0; i < n - 1; i++) {
        let currentSum = arr.slice(-k).reduce((a, b) => a + b, 0);
        arr.push(currentSum);
    }

    return arr;
}

console.log(createAnArrary(6, 3));
