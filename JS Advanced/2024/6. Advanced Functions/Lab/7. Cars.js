function createCarsObjects(input) {
    let carsCollection = {};
    let carsCreator = {
        create: (n) => carsCollection[n] = {},
        createAndInherits: (n, parrentN) => carsCollection[n] = Object.create(carsCollection[parrentN]),
        set: (n, key, value) => carsCollection[n][key] = value,
        print: (n) => {
            let result = [];
            for (let key in carsCollection[n]) {
                result.push(`${key}:${carsCollection[n][key]}`);
            }

            console.log(result.join(','));
        }
    }

    input.forEach(a => {
        let [command, car, otherParam1, otherParam2] = a.split(' ');
        if (command === 'create') {
            otherParam1 === 'inherit' ? carsCreator.createAndInherits(car, otherParam2) : carsCreator.create(car);
        } else if (command === 'set') {
            carsCreator.set(car, otherParam1, otherParam2);
        } else {
            carsCreator.print(car);
        }
    });
}

createCarsObjects(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

