function aggregateElements(input) {
    //only my decision:
    // let sum = arr => arr.reduce((a, b) => a + b, 0);
    // let inverseSum = arr => arr.reduce((a, b) => a + 1/b, 0);
    // let concat = arr => arr.join('');
    // console.log(sum(input));
    // console.log(inverseSum(input));
    // console.log(concat(input)); 

    //my variation of presentation's decision
    aggregate(input, (a, b) => a + b, 0);
    aggregate(input, (a, b) => a + 1/b, 0);
    aggregate(input, (a, b) => a + b, '');
    function aggregate(arr, func, initialValue) {
        console.log(arr.reduce(func, initialValue));
    }
}

aggregateElements([2, 4, 8, 16]);
