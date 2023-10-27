//theLift не е мое решение

function theLift (input) {
    let train = [];
    let people = Number(input[0]);
    let wagons = input[1].split(' ').map(Number);
    for (let current of wagons) {
        if (people >= 4 - current) { //
            people -= 4 - current;	 //fill current wagon to max size of 4
            train.push(4);			 //
        } else {							//
            train.push(current + people);	//fill last wagon
            people = 0;						//
        } 
    }
    if (!people && train[train.length-1] < 4) console.log('The lift has empty spots!');
    if (people) console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(train.join(' '));
}

theLift([
         "15",
         "0 0 0 0"])

// Това е моето решение:
// function manageALift(input) {
//     let people = Number(input.shift());
//     let liftCabins = input.shift().split(' ').map(Number);
//     let maxCabinsCapacity = liftCabins.length * 4;
//     for (let i = 0; i < liftCabins.length; i++) {
//         let cabin = liftCabins[i];
//         let currentFreeSPace = 4 - cabin;
//         people - currentFreeSPace >= 0 ? liftCabins[i] += currentFreeSPace : liftCabins[i] += people;
//         people -= currentFreeSPace;
//         if (people <= 0) {
//             break;
//         }
//     }

//     let finalCabinsCapacity = liftCabins.reduce((a, b) => a + b, 0);
//     if (maxCabinsCapacity === finalCabinsCapacity && people === 0) {
//         return liftCabins.join(' ');
//     } else if (maxCabinsCapacity > finalCabinsCapacity && people <= 0) {
//         return `The lift has empty spots!\n${liftCabins.join(' ')}`;
//     } else if (maxCabinsCapacity === finalCabinsCapacity && people > 0) {
//         return `There isn't enough space! ${people} people in a queue!\n${liftCabins.join(' ')}`;
//     }
// }

// console.log(manageALift([
//     "15",
//     "0 0 0 0"]));