function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        num = Number(num)
        num % 2 === 0 ? sum += num : sum;
    }

    console.log(sum);
} 

sumEvenNumbers(['1','2','3','4','5','6']);
