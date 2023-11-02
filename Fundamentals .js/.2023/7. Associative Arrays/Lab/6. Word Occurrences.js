function countWords(input) {
    let words = {};
    for (let word of input) {
        words.hasOwnProperty(word) ? words[word] ++ : words[word] = 1;
    }

    let sortedEntries = Object.entries(words).sort((a, b) => b[1] - a[1]);
    sortedEntries.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));
}

countWords(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
