function sortNumbers(input) {
    let result = [];
    input.forEach(a => {
        a < 0 ? result.unshift(a) : result.push(a);
    });
    return result.join('\n')
}

console.log(sortNumbers([7, -2, 8, 9]));