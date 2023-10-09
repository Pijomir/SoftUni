function printFinalStateOfATrain(arr) {
    let train = arr.shift().split(' ').map(Number);
    let wagonCapacity = Number(arr.shift());
    while (arr.length > 0) {
        let currentCommand = arr.shift().split(' ');
        if (currentCommand.length > 1) {
            let newWagon = Number(currentCommand[1])
            train.push(newWagon);
        } else {
            for (let i = 0; i < train.length; i++) {
                let wagon = train[i];
                let passengers = Number(currentCommand[0]);
                if (wagon + passengers <= wagonCapacity) {
                    train[i] = wagon += passengers;
                    break;
                }
            }
        }
    }

    console.log(train.join(' '));
}

printFinalStateOfATrain(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
