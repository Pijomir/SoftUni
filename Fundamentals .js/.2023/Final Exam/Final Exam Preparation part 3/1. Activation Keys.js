function createActivationKey(input) {
    let activationKey = input.shift();
    let currentLine = input.shift();
    while (currentLine !== 'Generate') {
        currentLine = currentLine.split('>>>');
        let command = currentLine.shift();
        switch (command) {
            case 'Contains': let stringToCheckFor = currentLine.shift();
                if (activationKey.includes(stringToCheckFor)) {
                    console.log(`${activationKey} contains ${stringToCheckFor}`);
                } else {
                    console.log('Substring not found!');
                }

                break;
            case 'Flip': let [letterCase, startIdx, endIdx] = currentLine;
                startIdx = Number(startIdx);
                endIdx = Number(endIdx);
                let beforePart = activationKey.slice(0, startIdx);
                let modifiedPart = letterCase === 'Upper' ? activationKey.slice(startIdx, endIdx).toUpperCase() : activationKey.slice(startIdx, endIdx).toLowerCase();
                let afterPart = activationKey.slice(endIdx);
                activationKey = beforePart + modifiedPart + afterPart;
                console.log(activationKey);
                break;
            case 'Slice': let [startIndex, endIndex] = currentLine;
                startIndex = Number(startIndex);
                endIndex = Number(endIndex);
                let firstPart = activationKey.slice(0, startIndex);
                let secondPart = activationKey.slice(endIndex);
                activationKey = firstPart + secondPart;
                console.log(activationKey);
                break;
        }   

        currentLine = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}

createActivationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);
