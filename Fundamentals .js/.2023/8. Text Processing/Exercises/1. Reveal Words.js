function revealWords(words, text) {
    let replacingWords = words.split(', ');
    replacingWords.forEach(word => text = text.replace('*'.repeat(word.length), word));
    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
