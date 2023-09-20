function printAndSum(start, end) {
    let sum = 0;
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
        sum+=i;
    }

    console.log(`${numbers.join(' ')}\nSum: ${sum}`);
}   

printAndSum(5, 10);