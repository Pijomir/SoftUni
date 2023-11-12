function findWords(input) {
    let words = input.split(' ');
    let wantedWords = words.filter(word => word.startsWith('#') && word.length > 1).map(word => word = word.replace('#', ''));
    wantedWords.forEach(word => {
        let isValid = true;
        let chars = word.split('');
        chars.forEach(char => {
            if (char.toLowerCase().charCodeAt(0) < 97 && char.toLowerCase().charCodeAt(0 > 122)) {
                isValid = false;
            }
        })

        if (isValid) {
            console.log(word);
        }
    })
}

findWords('Nowadays everyone uses # to tag a #special word in socialMedia');
