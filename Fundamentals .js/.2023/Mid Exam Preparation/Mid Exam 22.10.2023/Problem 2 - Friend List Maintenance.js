function checkFriendsListForErrors(input) {
    let frindsList = input.shift().split(', ');
    for (let el of input) {
        let commandAndParameters = el.split(' ');
        let command = commandAndParameters.shift();
        if (command === 'Report') {
            break;
        }

        switch (command) {
            case 'Blacklist':
                let blackListedName = commandAndParameters.shift();
                if (!frindsList.includes(blackListedName)) {
                    console.log(`${blackListedName} was not found.`);
                } else {
                    let blackListedIndex = frindsList.indexOf(blackListedName);
                    frindsList.splice(blackListedIndex, 1, 'Blacklisted');
                    console.log(`${blackListedName} was blacklisted.`);
                }

                break;
            case 'Error':
                let errorIndex = Number(commandAndParameters.shift());
                if (errorIndex >= 0 && errorIndex < frindsList.length) {
                    if (frindsList[errorIndex] !== 'Lost' && frindsList[errorIndex] !== 'Blacklisted') {
                        console.log(`${frindsList[errorIndex]} was lost due to an error.`);
                        frindsList[errorIndex] = 'Lost';
                    }
                }

                break;
            case 'Change':
                let [changeIndex, newName] = commandAndParameters;
                changeIndex = Number(changeIndex);
                if (changeIndex >= 0 && changeIndex < frindsList.length) {
                    console.log(`${frindsList[changeIndex]} changed his username to ${newName}.`);
                    frindsList.splice(changeIndex, 1, newName);
                }

                break;
        }
    }

    let blacklistedNames = frindsList.filter(a => a === 'Blacklisted');
    let lostNames = frindsList.filter(a => a === 'Lost');
    console.log(`Blacklisted names: ${blacklistedNames.length}`);
    console.log(`Lost names: ${lostNames.length}`);
    console.log(frindsList.join(' '));
}

checkFriendsListForErrors(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"]);

// checkFriendsListForErrors(["Mike, John, Eddie, William",
// "Error 3",
// "Error 3",
// "Change 0 Mike123",
// "Report"]);

// checkFriendsListForErrors(["Mike, John, Eddie, William",
// "Blacklist Maya",
// "Error 1",
// "Change 4 George",
// "Report"]);

