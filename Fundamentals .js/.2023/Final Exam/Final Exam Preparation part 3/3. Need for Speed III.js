function keepTrackOfMyCars(input) {
    let carsStorage = {};
    let numberOfCars = Number(input.shift());
    while (numberOfCars > 0) {
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carsStorage[car] = { mileage, fuel };
        numberOfCars--;
    }

    while (input.length > 0) {
        let currentCommand = input.shift();
        if (currentCommand === 'Stop') {
            let cars = Object.entries(carsStorage);
            cars.forEach(car => console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`))
            break;
        }

        currentCommand = currentCommand.split(' : ');
        let action = currentCommand.shift();
        switch (action) {
            case 'Drive': let [carToDrive, distance, usedFuel] = currentCommand;
                distance = Number(distance);
                usedFuel = Number(usedFuel);
                if (carsStorage[carToDrive].fuel < usedFuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carsStorage[carToDrive].mileage += distance;
                    carsStorage[carToDrive].fuel -= usedFuel;
                    console.log(`${carToDrive} driven for ${distance} kilometers. ${usedFuel} liters of fuel consumed.`);
                }

                if (carsStorage[carToDrive].mileage >= 100000) {
                    console.log(`Time to sell the ${carToDrive}!`);
                    delete carsStorage[carToDrive];
                }

                break;
            case 'Refuel': let [carToRefill, fuelCount] = currentCommand;
                fuelCount = Number(fuelCount);
                if (carsStorage[carToRefill].fuel + fuelCount > 75) {
                    fuelCount = 75 - carsStorage[carToRefill].fuel;
                }

                carsStorage[carToRefill].fuel += fuelCount;
                console.log(`${carToRefill} refueled with ${fuelCount} liters`);
                break;
            case 'Revert': let [carToModify, kmToRevert] = currentCommand;
                kmToRevert = Number(kmToRevert);
                carsStorage[carToModify].mileage -= kmToRevert;
                carsStorage[carToModify].mileage < 10000 ? carsStorage[carToModify].mileage = 10000
                    : console.log(`${carToModify} mileage decreased by ${kmToRevert} kilometers`);
                break;
        }
    }
}

keepTrackOfMyCars([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);