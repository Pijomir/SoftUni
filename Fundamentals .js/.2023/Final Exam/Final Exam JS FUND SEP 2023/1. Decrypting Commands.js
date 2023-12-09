function decryptMessage(input) {
    let message = input.shift();
    let currentCommandLine = input.shift();
    while (currentCommandLine !== 'Finish') {
        currentCommandLine = currentCommandLine.split(' ');
        let currentCommand = currentCommandLine.shift();
        switch (currentCommand) {
            case 'Replace': let [currentChar, newChar] = currentCommandLine;
                message = message.split(currentChar).join(newChar);
                console.log(message);
                break;
            case 'Cut': let [startIndex, endIndex] = currentCommandLine;
                startIndex = Number(startIndex);
                endIndex = Number(endIndex);
                if (startIndex >= 0 && startIndex < message.length && endIndex >= startIndex && endIndex < message.length) {
                    let firstPart = message.slice(0, startIndex);
                    let secondPart = message.slice(endIndex + 1);
                    message = firstPart + secondPart;
                    console.log(message);
                } else {
                    console.log('Invalid indices!');
                }
                break;
            case 'Make': let theCase = currentCommandLine.shift();
                message = theCase === 'Upper' ? message.toUpperCase() : message.toLowerCase();
                console.log(message);
                break;
            case 'Check': let stringToCheck = currentCommandLine.shift();
                console.log(message.includes(stringToCheck) ? `Message contains ${stringToCheck}` : `Message doesn't contain ${stringToCheck}`);
                break;
            case 'Sum': let [startIdx, endIdx] = currentCommandLine;
                startIdx = Number(startIdx);
                endIdx = Number(endIdx);
                if (startIdx >= 0 && startIdx < message.length && endIdx >= startIdx && endIdx < message.length) {
                    let sum = 0;
                    let theSubString = message.slice(startIdx, endIdx + 1);
                    for (let char of theSubString) {
                        sum += char.charCodeAt();
                    }

                    console.log(sum);
                } else {
                    console.log('Invalid indices!');
                }
        }


        currentCommandLine = input.shift();
    }
}

// decryptMessage(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"]);

decryptMessage(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"]);

