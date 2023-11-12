function replaceRepeatingChars(input) {
    let result = '';
    for (let char of input) {
        if (result[result.length - 1] !== char) {
            result += char;
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')