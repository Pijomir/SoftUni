function checkIfPlunderedEnough(input) {
    let plunderingDays = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let totalPlunder = 0;
    for (let i = 1; i <= plunderingDays; i++) {
        i % 3 === 0 ? totalPlunder += dailyPlunder * 1.5 : totalPlunder += dailyPlunder;
        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageOfPlunder = (totalPlunder / expectedPlunder * 100).toFixed(2);
        console.log(`Collected only ${percentageOfPlunder}% of the plunder.`);
    }
}

checkIfPlunderedEnough(["5", "40", "100"]);
checkIfPlunderedEnough(["10", "20", "380"]);
