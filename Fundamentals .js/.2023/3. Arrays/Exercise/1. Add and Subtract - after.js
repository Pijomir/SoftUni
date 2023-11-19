function changeArray(input) {
    let originalSum = input.reduce((a, b) => a + b, 0);
    input.forEach((n, i, arr) => n % 2 === 0 ? arr[i] = n + i : arr[i] = n - i);
    let modifiedSum = input.reduce((a, b) => a + b, 0);
    console.log(input);
    console.log(originalSum);
    console.log(modifiedSum);
}

changeArray([5, 15, 23, 56, 35]);