function printEvenAndOddSums(num) {
    let evenSum = 0;
    let oddSum = 0;
    let digits = num.toString().split('').map(Number);
    for (let digit of digits) {
        digit % 2 === 0 ? evenSum += digit : oddSum += digit;
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(printEvenAndOddSums(3495892137259234));