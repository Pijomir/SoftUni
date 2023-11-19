function findMaxIntegers(input) {
    let topIntegers = [];
    input.forEach((n, i, arr) =>{
        if (n > Math.max(...arr.slice(i + 1))) {
            topIntegers.push(n);
        }
    });
    console.log(topIntegers.join(' '));
}

findMaxIntegers([14, 24, 3, 19, 15, 17])