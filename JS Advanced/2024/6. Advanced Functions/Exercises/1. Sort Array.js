function sortAnArray(input, param) {
    return param === 'asc' ? input.sort((a, b) => a - b) : input.sort((a, b) => b - a);
}

console.log(sortAnArray([14, 7, 17, 6, 8], 'desc'));