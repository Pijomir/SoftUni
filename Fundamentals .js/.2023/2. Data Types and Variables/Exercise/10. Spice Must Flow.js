function calculateTotalAmmountOfSpice(yieldSource) {
    let days = 0;
    let totalAmmountOfSpice = 0;
    while (yieldSource >= 100) {
        totalAmmountOfSpice += (yieldSource - 26);
        yieldSource -=10;
        days++;
    }

    totalAmmountOfSpice >= 26 ? totalAmmountOfSpice -= 26 : totalAmmountOfSpice = 0;
    console.log(days);
    console.log(totalAmmountOfSpice);
}

calculateTotalAmmountOfSpice(450);