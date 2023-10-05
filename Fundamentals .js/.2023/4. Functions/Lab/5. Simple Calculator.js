function createSImpleCalculator(num1, num2, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    switch (operator) {
        case 'multiply': return multiply(num1, num2);
        case 'divide': return divide(num1, num2);
        case 'add': return add(num1, num2);
        case 'subtract': return subtract(num1, num2);
    }
}

// function createSimpleCalculator(n1, n2, operator) {
//     let operators = {multiply: (a, b) => a * b, divide: (a, b) => a / b, add: (a, b) => a + b, subtract: (a, b) => a - b};
//     console.log(operators[operator](n1, n2));
// }

console.log(createSImpleCalculator(5, 5, 'multiply'));

