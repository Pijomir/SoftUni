function sumDigits(num) {
    let sum = num.toString()
                    .split('')
                    .reduce((a, b) => +a + +b);
    console.log(sum);
}

sumDigits(245678);
