function managePartyList(input) {
    let partyList = {'VIP': [], 'regular': []};
    while (input.length > 0) {
        let entry = input.shift();
        let typeOfGuest = entry[0];
        if (entry === 'PARTY') {
            break;
        } else {
            isNaN(Number(typeOfGuest)) ? partyList.regular.push(entry) : partyList.VIP.push(entry);
        }
    }
    
    for (let guest of input) {
        if (partyList.VIP.includes(guest)) {
            let index = partyList.VIP.indexOf(guest);
            partyList.VIP.splice(index, 1);
        } else if (partyList.regular.includes(guest)) {
            let index = partyList.regular.indexOf(guest);
            partyList.regular.splice(index, 1);
        }
    }

    console.log(partyList.VIP.length + partyList.regular.length);
    partyList.VIP.forEach(a => console.log(a));
    partyList.regular.forEach(a => console.log(a));
}

managePartyList(['7IK9Yo0h',
'9NoBUajQ','Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);