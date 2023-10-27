function findHowLongItTakes(input) {
    let students = Number(input.pop());
    let studentsPerHour = input.map(Number).reduce((a, b) => a + b, 0);
    let neededHours = 0;
    while (students > 0) {
        neededHours++;
        if (neededHours % 4 !== 0) {
            students -= studentsPerHour;
        }
    }

    console.log(`Time needed: ${neededHours }h.`);
}

findHowLongItTakes(['1','2','3','45']);
