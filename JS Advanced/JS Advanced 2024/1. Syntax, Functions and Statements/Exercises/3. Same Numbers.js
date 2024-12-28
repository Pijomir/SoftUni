function findSameOrNot(input) {
    let arr = input.toString().split('').map(Number);
    let sum = arr.reduce((a, b) => a + b, 0);
    console.log(arr.every((a, i, arr) => a === arr[0]));
    console.log(sum);
}

findSameOrNot(2222222);