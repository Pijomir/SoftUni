function decideSpecialOrNot(num) {
    for (let i = 1; i <= num; i++) {
        let currentSum = i.toString()
            .split('')
            .reduce((a, b) => +a + +b);
        console.log(+currentSum === 5 || +currentSum === 7 || +currentSum === 11 ? `${i} -> True` : `${i} -> False`) 
    }
}

decideSpecialOrNot(15);
