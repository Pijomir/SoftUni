function manageListForPArty(arr) {
    let partyList = [];
    while (arr.length > 0) {
        let currnetAction = arr.shift().split(' ');
        let currentGuest = currnetAction.shift();
        if (currnetAction.includes('not')) {
            partyList.includes(currentGuest) ? partyList.splice(partyList.indexOf(currentGuest), 1) : console.log(`${currentGuest} is not in the list!`);
        } else {
            partyList.includes(currentGuest) ? console.log(`${currentGuest} is already in the list!`) : partyList.push(currentGuest);
        }
    }

    console.log(partyList.join('\n'));
}

manageListForPArty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);