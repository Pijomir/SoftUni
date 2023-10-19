function modifyNumber(num) {
    while (findAverageOfDigits(num) <= 5) {
        num = Number(`${num}` + '9');
    }

    function findAverageOfDigits(n) {
        let countOfDigits = n.toString().length;
        let sum = n.toString().split('').map(Number).reduce((a, b) => a + b);
        return sum / countOfDigits;
    }
    
    console.log(num);
}

modifyNumber(101);