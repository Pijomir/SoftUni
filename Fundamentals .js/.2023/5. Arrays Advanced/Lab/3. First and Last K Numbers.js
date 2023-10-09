function printFirstAndLastKNumbers(arr) {
    let k = arr.shift();
    let firstKNums = arr.slice(0, k);
    let lastKNums = arr.slice(arr.length - k);
    console.log(firstKNums.join(' '));
    console.log(lastKNums.join(' '));
}

printFirstAndLastKNumbers([3, 6, 7, 8, 9]);
