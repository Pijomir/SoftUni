function findFiveTopNumbers(singleLine) {
    let sequence = singleLine.split(' ').map(Number);
    let theAverage = sequence.reduce((a, b) => a + b) / sequence.length;
    let biggerThanAverage = sequence.filter(a => a > theAverage).sort((a, b) => b - a);
    let result = biggerThanAverage.slice(0, 5);
    console.log(result.length > 0 ? result.join(' ') : 'No');
}

findFiveTopNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')