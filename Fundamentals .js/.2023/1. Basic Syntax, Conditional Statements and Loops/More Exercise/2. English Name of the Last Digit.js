function printNameOfDigit(num) {
    let numToString = String(num);
    let lastDigit = numToString[numToString.length - 1];
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(digits[lastDigit]);
} 

printNameOfDigit(512);
