function printLastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startingPosition = Math.max(0, i - k);
        let lastEl = result.slice(startingPosition);
        let sum = lastEl.reduce((a, b) => a + b);
        
        result.push(sum);        
    }

    console.log(result.join(' '));
}

printLastKNumbersSequence(6, 3);