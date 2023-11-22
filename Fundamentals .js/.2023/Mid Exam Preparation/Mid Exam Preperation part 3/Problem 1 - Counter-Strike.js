function keepTrackOfEveryWinInCS(input) {
    let energy = Number(input.shift());
    let winnings = 0;
    for (el of input) {
        if (el === 'End of battle') {
            break;
        }

        let currentDistance = Number(el);
        if (energy - currentDistance >= 0) {
            winnings++;
            energy -=currentDistance;
        } else {
            console.log(`Not enough energy! Game ends with ${winnings} won battles and ${energy} energy`);
            return;
        }

        if (winnings % 3 === 0) {
            energy += winnings;
        }        
    }

    console.log(`Won battles: ${winnings}. Energy left: ${energy}`);
} 

keepTrackOfEveryWinInCS(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);

keepTrackOfEveryWinInCS(["200",
"54",
"14",
"28",
"13",
"End of battle"]);
