function countStringOccurrences(text, word) {
    let result = text.split(' ').filter(a => a === word).length
    console.log(result);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
