function matrixDiagonalsSums(input) {
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < input.length; i++) {
        firstSum += input[i][i];
        secondSum += input[i][input.length - 1 - i];
    }

    console.log(firstSum, secondSum);
}

matrixDiagonalsSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);