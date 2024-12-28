function findGreatestCommonDivisor(num1, num2) {
    let startNum = Math.min(num1, num2);
    let GCD = 1;
    for (let i = startNum; i > 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            GCD = i;
            break;
        }
    }

    console.log(GCD);
}

findGreatestCommonDivisor(2154, 458);