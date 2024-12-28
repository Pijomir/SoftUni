function sortNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b, 0);
    let result = [];
    while(sortedArr.length > 0) {
        let currentNum = result.length % 2 === 0 ? sortedArr.shift() : sortedArr.pop();
        result.push(currentNum);
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));