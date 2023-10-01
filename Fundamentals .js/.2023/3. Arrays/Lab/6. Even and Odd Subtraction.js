function substractEvenAndOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        num % 2 === 0 ? evenSum += num : oddSum += num;
    }

    console.log(evenSum - oddSum);
}

substractEvenAndOddSums([1,2,3,4,5,6]);
