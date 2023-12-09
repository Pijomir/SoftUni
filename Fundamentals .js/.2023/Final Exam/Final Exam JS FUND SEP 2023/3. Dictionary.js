function gatherWordsAndDefinitions(input) {
    let wordsAndDefinitions = input.shift().split(' | ');
    let wordsToTest = input.shift().split(' | ');
    let command = input.shift();
    let dictionary = {};
    wordsAndDefinitions.forEach(line => {
        let [word, definition] = line.split(': ');
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }

        dictionary[word].push(definition);
    });
    let finalWords = [];
    wordsToTest.forEach(word => {
        if (dictionary.hasOwnProperty(word)) {
            finalWords.push(word);
        }
    });
    if (command === 'Hand Over') {
        console.log(Object.keys(dictionary).join(' '));
    } else {
        finalWords.forEach(word => {
            console.log(`${word}:`);
            dictionary[word] = dictionary[word].map(a => ` -${a}`);
            console.log(dictionary[word].join('\n'));
        });
    }
}

gatherWordsAndDefinitions(["programmer: an animal, which turns coffee into code | developer: a magician", "fish | domino", "Hand Over"]);

// gatherWordsAndDefinitions(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
// "care | kitchen | flower", "Test"]);

// gatherWordsAndDefinitions(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance", "bit | code | tackle", "Test"]); 