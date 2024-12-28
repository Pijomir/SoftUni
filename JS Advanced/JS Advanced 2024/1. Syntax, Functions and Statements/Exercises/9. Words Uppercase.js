function makeUpperCase(input) {
    let allWords = input.split(/\W+/).filter(Boolean).map(a => a.toUpperCase());
    console.log(allWords.join(', '));
}

makeUpperCase('Hi, how are you?');