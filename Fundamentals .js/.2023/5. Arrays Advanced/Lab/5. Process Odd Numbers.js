function processOddNumbers(arr) {
    let result = arr.filter((a, i) => i % 2 !== 0).map(a => a * 2).reverse();
    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);
