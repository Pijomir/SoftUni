function decryptMessages(input) {
    let messagesCount = Number(input.shift());
    let planets = { 'A': [], 'D': [] };
    let decryptedMessages = [];
    let starPattern = /[star]/gi;
    while (messagesCount > 0) {
        let currentMessage = input.shift();
        let currentDecryptedMessage = '';
        let match = currentMessage.match(starPattern);
        if (match) {
            let starLettersCount = currentMessage.match(starPattern).length;
            for (let char of currentMessage) {
                let code = char.charCodeAt();
                currentDecryptedMessage += String.fromCharCode(code - starLettersCount);
            }
        } else {
            currentDecryptedMessage = currentMessage;
        }

        decryptedMessages.push(currentDecryptedMessage);
        messagesCount--;
    }

    let messageDecryptionPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<command>[AD])![^@\-!:>]*->\d+/;
    decryptedMessages.forEach(message => {
        let validMessage = message.match(messageDecryptionPattern);
        if (validMessage) {
            let { name, command } = validMessage.groups;
            planets[command].push(name);
        }
    });
    let sortedAttackedPlanetsList = planets.A.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${planets.A.length}`);
    if (planets.A.length > 0) {
        sortedAttackedPlanetsList.forEach(planet => console.log(`-> ${planet}`));
    }

    let sortedDestroyedPlanetsList = planets.D.sort((a, b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${planets.D.length}`);
    if (planets.D.length > 0) {
        sortedDestroyedPlanetsList.forEach(planet => console.log(`-> ${planet}`));
    }
}

decryptMessages(['2', 'CDoghudd4=63333$D$053333', 'EHfsytsnhf?8555&I&2C9555SR']);