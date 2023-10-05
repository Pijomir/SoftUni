function addAndSubtract(n1, n2, n3) {
    let add = (a, b) => a + b;
    let subtract = (sum, c) => sum - c;
    return subtract(add(n1, n2), n3);
}

console.log(addAndSubtract(23, 6, 10));