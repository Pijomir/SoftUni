function checkPrimeOrNot(num) {
    let divisions = 0;
    for (let i = num; i >= 0; i--) {
        if(num % i === 0) {
            divisions++;
        }
    }

    console.log(divisions === 2 ? 'true' : 'false');
}

checkPrimeOrNot(7);
