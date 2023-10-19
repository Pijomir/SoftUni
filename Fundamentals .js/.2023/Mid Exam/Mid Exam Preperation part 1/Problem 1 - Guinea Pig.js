function checkIfGarmentsWillBeEnough(input) {
    let foodInGrams = Number(input.shift()) * 1000;
    let hayInGrams = Number(input.shift()) * 1000;
    let coverInGrams = Number(input.shift()) * 1000;
    let pigWeight = Number(input.shift()) * 1000;
    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;
        if (i % 2 === 0) {
            hayInGrams -= foodInGrams * 0.05;
        }

        if (i % 3 === 0) {
            coverInGrams -= pigWeight / 3;
        }

        if (foodInGrams < 0 || hayInGrams < 0 || coverInGrams < 0) {
            return 'Merry must go to the pet store!';
        }
    }

    return `Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`
}

console.log(checkIfGarmentsWillBeEnough(['10', 
'5', 
'5.2', 
'1']));