function washCar(input) {
    let value = 0;
    let allComands = {'soap': addSoap, 'water': addWater, 'vacuum cleaner': addVacumCleaner, 'mud': addMud};
    while(input.length > 0) {
        let currentCommand = input.shift();
        value = allComands[currentCommand](value);
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);

    function addSoap(value) {
        return value += 10;
    }

    function addWater(value) {
        return value *= 1.2;
    }

    function addVacumCleaner(value) {
        return value *= 1.25;
    }

    function addMud(value) {
        return value *= 0.9;
    }
}

washCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
