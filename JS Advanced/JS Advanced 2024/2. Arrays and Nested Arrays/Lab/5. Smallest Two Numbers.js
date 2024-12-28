function findTwoSmallestNumbers(arr) {
    return arr.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(findTwoSmallestNumbers([3, 0, 10, 4, 7, 3]));