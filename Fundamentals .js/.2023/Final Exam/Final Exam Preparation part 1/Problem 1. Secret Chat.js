function revealSecretChar(input) {
    let message = input.shift();
    while (input.length > 0) {
        let currentLine = input.shift().split(':|:');
        let currentCommand = currentLine.shift();
        if (currentCommand === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }

        switch (currentCommand) {
            case 'InsertSpace': let [index] = currentLine;
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index);
                message = firstPart + ' ' + secondPart;
                console.log(message);
                break;
            case 'Reverse': let [theSubString] = currentLine;
                if (!message.includes(theSubString)) {
                    console.log('error');
                } else {
                    let reversedSubString = theSubString.split('').reverse().join('');
                    message = message.replace(theSubString, reversedSubString);
                    console.log(message);
                }
                break;
            case 'ChangeAll': let [stringToReplace, replacement] = currentLine;
                if (message.includes(stringToReplace)) {
                    while (message.includes(stringToReplace)) {
                        message = message.replace(stringToReplace, replacement)
                    }
                    console.log(message);
                }
                break;
        }
    }
}

revealSecretChar([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);