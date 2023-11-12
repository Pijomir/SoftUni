function splitByPascalCase(input) {
    let result = [];
    let currentWord = input[0];
    for (let i = 1; i < input.length; i++) {
        if(input[i].toUpperCase() !== input[i]) {
            currentWord += input[i];
        } else {
            result.push(currentWord);
            currentWord = input[i];
        }
    }
    
    result.push(currentWord);
    console.log(result.join(', '));
}

splitByPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
