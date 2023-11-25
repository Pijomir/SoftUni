function keepTrackOnPirates(input) {
    let cities = {};
    let currentLine = input.shift();
    while (currentLine !== 'Sail') {
        let [cityName, population, gold] = currentLine.split('||');
        population = Number(population);
        gold = Number(gold);
        if (cities.hasOwnProperty(cityName)) {
            population += cities[cityName].population;
            gold += cities[cityName].gold;
        }

        cities[cityName] = {};
        cities[cityName].population = population;
        cities[cityName].gold = gold;
        currentLine = input.shift();
    }

    let currentLineAfterSail = input.shift();
    while (currentLineAfterSail !== 'End') {
        currentLineAfterSail = currentLineAfterSail.split('=>');
        let command = currentLineAfterSail.shift();
        switch (command) {
            case 'Plunder': let [townToPlunder, peopleToKill, goldToSteal] = currentLineAfterSail;
                peopleToKill = Number(peopleToKill);
                goldToSteal = Number(goldToSteal);
                cities[townToPlunder].population -= peopleToKill;
                cities[townToPlunder].gold -= goldToSteal;
                console.log(`${townToPlunder} plundered! ${goldToSteal} gold stolen, ${peopleToKill} citizens killed.`);
                if (cities[townToPlunder].population === 0 || cities[townToPlunder].gold === 0) {
                    console.log(`${townToPlunder} has been wiped off the map!`);
                    delete cities[townToPlunder];
                }

                break;
            case 'Prosper': let [townToProsper, goldToAdd] = currentLineAfterSail;
                goldToAdd = Number(goldToAdd);
                if (goldToAdd < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    cities[townToProsper].gold += goldToAdd;
                    console.log(`${goldToAdd} gold added to the city treasury. ${townToProsper} now has ${cities[townToProsper].gold} gold.`);
                }

                break;
        }

        currentLineAfterSail = input.shift();
    }

    let leftCities = Object.entries(cities);
    if (leftCities.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${leftCities.length} wealthy settlements to go to:`);
        leftCities.forEach(city => console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`));
    }
}

keepTrackOnPirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);