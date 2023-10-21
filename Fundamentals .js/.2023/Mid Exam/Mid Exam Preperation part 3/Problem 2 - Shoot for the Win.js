function keepTrackOfShotTargets(input) {
    let shotTargets = 0;
    let targets = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'End') {
            break;
        }

        let currentIndex = Number(input[i]);
        let currentTarget = targets[currentIndex];
        if (currentIndex >= 0 && currentIndex < targets.length) {
            targets[currentIndex] = -1;
            shotTargets++;
            for (let j = 0; j < targets.length; j++) {
                let target = targets[j]
                if (target !== -1) {
                    target > currentTarget ? targets[j] -= currentTarget : targets[j] += currentTarget;
                }
            }
        }
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

keepTrackOfShotTargets(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);


