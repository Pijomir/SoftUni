function keepTrackOfResources(input) {
    let listOfResources = {};
    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());
        listOfResources.hasOwnProperty(resource) ? listOfResources[resource] += quantity : listOfResources[resource] = quantity;
    }

    Object.entries(listOfResources).forEach(el => console.log(el[0], '->', el[1]));
}

keepTrackOfResources([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);