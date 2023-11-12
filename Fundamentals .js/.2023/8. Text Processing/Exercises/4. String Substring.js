function checkWord(word, text) {
    let words = text.toLowerCase().split(' ');
    console.log(words.includes(word) ? word : `${word} not found!`);
}

checkWord('javascript', 'JavaScript is the best programming language');
