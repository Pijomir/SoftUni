function manageCars(input) {
    let parking = [];
    for (let entry of input) {
        let [command, car] = entry.split(', ');
        switch (command) {
            case 'IN': 
                if (!parking.includes(car)) {
                    parking.push(car);
                }
            
                break;
            case 'OUT': 
                if (parking.includes(car)) {
                    let index = parking.indexOf(car);
                    parking.splice(index, 1);
                }

                break;
        }
    }

    if (parking.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCarNumbers = parking.sort((a, b) => a.localeCompare(b));
        sortedCarNumbers.forEach(a => console.log(a));
    }
}

manageCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);