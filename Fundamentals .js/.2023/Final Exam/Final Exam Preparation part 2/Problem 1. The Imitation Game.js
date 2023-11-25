function decipherEnigmaCode(input) {
    let cryptedWord = input.shift();
    let currentCommandLine = input.shift();
    while (currentCommandLine !== 'Decode') {
        currentCommandLine = currentCommandLine.split('|');
        let currentCommand = currentCommandLine.shift();
        switch (currentCommand) {
            case 'Move': let numberOfLetters = currentCommandLine.shift();
                cryptedWord = cryptedWord.split('');
                let charsToBeMoved = cryptedWord.splice(0, numberOfLetters);
                cryptedWord.push(...charsToBeMoved);
                cryptedWord = cryptedWord.join('');
                break;
            case 'Insert': let [index, value] = currentCommandLine;
                let firstPart = cryptedWord.slice(0, index);
                let secondPart = cryptedWord.slice(index);
                cryptedWord = firstPart + value + secondPart;
                break;
            case 'ChangeAll': let [subString, replacement] = currentCommandLine;
                while (cryptedWord.includes(subString)) {
                    cryptedWord = cryptedWord.replace(subString, replacement);
                }
                
                break;
        }

        currentCommandLine = input.shift();
    }

    console.log(`The decrypted message is: ${cryptedWord}`);
}

decipherEnigmaCode([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);