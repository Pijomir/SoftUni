function keepTrackOfTheRace(input) {
    let racers = input.shift().split(', ');
    let results = {};
    let namesPattern = /[A-Za-z]/g;
    let digitsPattern = /\d/g;
    let currentRacer = input.shift();

    while (currentRacer !== 'end of race') {
        let name = currentRacer.match(namesPattern).join('');
        let distance = currentRacer.match(digitsPattern).map(Number).reduce((a, b) => a + b, 0);
        if (racers.includes(name)) {
            if (results.hasOwnProperty(name)) {
                distance += results[name];
            }

            results[name] = distance;
        }

        currentRacer = input.shift();
    }

    let sortedFinalResults = Object.entries(results).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedFinalResults[0][0]}`);
    console.log(`2nd place: ${sortedFinalResults[1][0]}`);
    console.log(`3rd place: ${sortedFinalResults[2][0]}`);
}

keepTrackOfTheRace(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);