function changeArray(input) {
    let originaldSum = input.reduce((a, b) => a + b, 0);
    console.log(input.map((num, idx, arr) => arr[idx] = num % 2 === 0 ? num + idx : num - idx));
    console.log(originaldSum);
    console.log(input.reduce((a, b) => a + b, 0));
}

changeArray([5, 15, 23, 56, 35]);