function devideTwoFactorialNumbers(num1, num2) {
    function calculateFactorial(n) {
        let factorial = 1;
        for (let i = n; i > 1; i--) {
            factorial *= i;
        }

        return factorial;
    }

    console.log((calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2));
}

devideTwoFactorialNumbers(5, 2);
