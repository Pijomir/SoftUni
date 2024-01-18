function isMagicMatricesOrNot(matrix) {
    let result = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let i = 0; i < matrix.length; i++) {
        let sumRows = matrix[i].reduce((a, b) => a + b, 0);
        let sumColumns = matrix.map(x => x[i]).reduce((a, b) => a + b, 0);

        if (sumRows !== sumColumns || sumColumns !== sum || sumRows !== sum) {
            result = false;
        }
    }

    return result
}

console.log(isMagicMatricesOrNot([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));