function signCheck(n1, n2, n3) {
    let result = [n1, n2, n3].filter(a => a < 0).length % 2 === 1 ? 'Negative' : 'Positive';
    console.log(result);
}

signCheck( 5,
    12,
   -15); 