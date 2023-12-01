function resetPassword(input) {
    let currentPass = input.shift();
    let allCommands = input.slice(0, input.indexOf('Done'));
    allCommands.forEach(commandLine => {
        commandLine = commandLine.split(' ');
        let command = commandLine.shift();
        switch (command) {
            case 'TakeOdd': let newRawPass = '';
                for (let i = 1; i < currentPass.length; i += 2) {
                    newRawPass += currentPass[i];
                }

                currentPass = newRawPass;
                console.log(currentPass);
                break;
            case 'Cut': let [idx, length] = commandLine;
                let cuttedString = currentPass.split('').splice(idx, length).join('');
                currentPass = currentPass.replace(cuttedString, '');
                console.log(currentPass);
                break;
            case 'Substitute': let [stringToReplace, replacement] = commandLine;
                if (currentPass.includes(stringToReplace)) {
                    currentPass = currentPass.split(stringToReplace).join(replacement);
                    console.log(currentPass);
                } else {
                    console.log('Nothing to replace!');
                }
        }
    });
    console.log(`Your password is: ${currentPass}`);
}

resetPassword(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
