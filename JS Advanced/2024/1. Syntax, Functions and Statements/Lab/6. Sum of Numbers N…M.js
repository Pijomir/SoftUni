function calculateSum(n, m) {
    let sum = 0;
    n = Number(n);
    m = Number(m);
    for (let i = n; i <= m; i++) {
        sum += i;
    }

    console.log(sum);
}

calculateSum('-8', '20')