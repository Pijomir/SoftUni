function determineDivisibleOrNot(num) {
    let result =
        num % 10 === 0 ? 10 :
            num % 7 === 0 ? 7 :
                num % 6 === 0 ? 6 :
                    num % 3 === 0 ? 3 :
                        num % 2 === 0 ? 2 : 1;
    console.log(result === 1 ? 'Not divisible' : `The number is divisible by ${result}`);
}

determineDivisibleOrNot(30);