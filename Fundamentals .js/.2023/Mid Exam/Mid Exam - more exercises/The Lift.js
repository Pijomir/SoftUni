function manageALift(input) {
    let people = Number(input.shift());
    let liftCabins = input.shift().split(' ').map(Number);
    let maxCabinsCapacity = liftCabins.length * 4;
    for (let i = 0; i < liftCabins.length; i++) {
        let cabin = liftCabins[i];
        let currentFreeSPace = 4 - cabin;
        people - currentFreeSPace >= 0 ? liftCabins[i] += currentFreeSPace : liftCabins[i] += people;
        people -= currentFreeSPace;
        if (people <= 0) {
            break;
        }
    }

    let finalCabinsCapacity = liftCabins.reduce((a, b) => a + b, 0);
    if (maxCabinsCapacity === finalCabinsCapacity && people === 0) {
        return liftCabins.join(' ');
    } else if (maxCabinsCapacity > finalCabinsCapacity && people <= 0) {
        return `The lift has empty spots!\n${liftCabins.join(' ')}`;
    } else if (maxCabinsCapacity === finalCabinsCapacity && people > 0) {
        return `There isn't enough space! ${people} people in a queue!\n${liftCabins.join(' ')}`;
    }
}

console.log(manageALift([
    "15",
    "0 0 0 0"]));