function mapDestinations(input) {
    let destinationsPattern = /(=|\/)(?<dest>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;
    let currentDest = destinationsPattern.exec(input);

    while (currentDest !== null) {
        let {dest} = currentDest.groups;
        destinations.push(dest);
        travelPoints += dest.length;
        currentDest = destinationsPattern.exec(input);
    }    

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

mapDestinations("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

mapDestinations("ThisIs some InvalidInput");