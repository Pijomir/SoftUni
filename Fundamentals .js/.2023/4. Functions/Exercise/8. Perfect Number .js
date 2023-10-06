function checkIfPerfectNumber(num) {
    let sumOfdivisors = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sumOfdivisors += i;
        }
    }

    console.log(num === sumOfdivisors ? 'We have a perfect number!' : 'It\'s not so perfect.');
}

checkIfPerfectNumber(6);