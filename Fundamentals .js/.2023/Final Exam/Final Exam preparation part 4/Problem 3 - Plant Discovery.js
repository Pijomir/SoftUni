function gatherPlantInfo(input) {
    let numberOfPlants = Number(input.shift());
    let plants = input.splice(0, numberOfPlants);
    let exhibitionPlants = {};
    plants.forEach(line => {
        let [plant, rarity] = line.split('<->');
        rarity = Number(rarity);
        exhibitionPlants[plant] = { 'Rarity': rarity, 'Rating': [] };
    });
    let currentLine = input.shift();
    while (currentLine !== `Exhibition`) {
        currentLine = currentLine.split(': ');
        let command = currentLine.shift();
        let [plant, num] = currentLine.shift().split(' - ');
        if (exhibitionPlants.hasOwnProperty(plant)) {
            switch (command) {
                case 'Rate': exhibitionPlants[plant].Rating.push(Number(num)); break;
                case 'Update': exhibitionPlants[plant].Rarity = Number(num); break;
                case 'Reset': exhibitionPlants[plant].Rating = []; break;
            }
        } else {
            console.log('error');
        }
        currentLine = input.shift();
    }
    console.log('Plants for the exhibition:');
    Object.entries(exhibitionPlants).forEach(entry => {
        let plant = entry[0];
        let rarity = entry[1].Rarity;
        let ratings = entry[1].Rating;
        let averageRating = ratings.length === 0 ? 0 : ratings.reduce((a, b) => a + b, 0) / ratings.length;
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    });
}

gatherPlantInfo(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

// gatherPlantInfo(["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"]);