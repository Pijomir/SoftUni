function checkTypes(...input) {
    let result = {};
    input.forEach(el => {
        console.log(`${typeof(el)}: ${el}`);
        if (!result.hasOwnProperty(typeof(el))) {
            result[typeof(el)] = 0;
        }

        result[typeof(el)] ++;
    });
    
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]).map(a => a = `${a[0]} = ${a[1]}`);
    sortedResult.forEach(el => console.log(el))
}

checkTypes('cat', 42, function () { console.log('Hello world!'); })

