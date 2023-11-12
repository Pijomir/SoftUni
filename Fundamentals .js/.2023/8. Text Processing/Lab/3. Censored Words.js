function censorWords(text, word) {
    let censoredText = text.split(word).join('*'.repeat(word.length));
    console.log(censoredText);
}

censorWords('A small sentence with some words', 'small')