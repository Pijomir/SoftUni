function revealSecretChar(input) {
    let message = input.shift();
    let currentCommandLine = input.shift();
    while (currentCommandLine !== 'Reveal') {
        currentCommandLine = currentCommandLine.split(':|:');
        let currentCommand = currentCommandLine.shift();
        switch (currentCommand) {
            case 'InsertSpace': let index = Number(currentCommandLine.shift());
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index);
                message = firstPart + ' ' + secondPart;
                console.log(message);
                break;
            case 'Reverse': let [theSubString] = currentCommandLine;
                if (!message.includes(theSubString)) {
                    console.log('error');
                } else {
                    let lengthToBeCut = theSubString.length;
                    let startIndex = message.indexOf(theSubString);
                    let manipulatedMessage = message.split('');
                    let reversedString = manipulatedMessage.splice(startIndex, lengthToBeCut).reverse().join('');
                    message = manipulatedMessage.join('') + reversedString;
                    console.log(message);
                }

                break;
            case 'ChangeAll': let [subStringToReplace, replacement] = currentCommandLine;
                while(message.includes(subStringToReplace)) {
                    message = message.replace(subStringToReplace, replacement);
                }

                console.log(message);
                break;
        }

        currentCommandLine = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

revealSecretChar([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);