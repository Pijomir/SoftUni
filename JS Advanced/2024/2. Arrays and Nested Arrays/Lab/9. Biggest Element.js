function getTheBiggestElement(arr) {
    return Math.max(...arr.flat())
}

console.log(getTheBiggestElement([[20, 50, 10],
    [8, 33, 145]]));