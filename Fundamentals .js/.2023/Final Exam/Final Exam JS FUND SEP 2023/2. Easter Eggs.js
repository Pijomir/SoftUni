function countEggs([input]) {
    let eggPattern = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z\d]*\/+(?<amount>\d+)\/+/g;
    let currentEgg = eggPattern.exec(input);
    while (currentEgg !== null) {
        let {color, amount} = currentEgg.groups;
        console.log(`You found ${amount} ${color} eggs!`);
        currentEgg = eggPattern.exec(input);
    }
}

countEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);