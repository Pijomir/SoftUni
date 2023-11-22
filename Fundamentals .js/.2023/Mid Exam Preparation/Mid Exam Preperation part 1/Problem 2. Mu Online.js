function manageMuOnline(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0
    while (rooms.length > 0) {
        bestRoom++;
        let [currentCommand, num] = rooms.shift().split(' ');
        num = Number(num);
        switch (currentCommand) {
            case 'potion':
                console.log(`You healed for ${health + num <= 100 ? num : 100 - health} hp.`);
                health + num > 100 ? health = 100 : health += num;
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += num;
                console.log(`You found ${num} bitcoins.`);
                break;
            default:
                health -= num;
                if (health > 0) {
                    console.log(`You slayed ${currentCommand}.`);
                } else {
                    console.log(`You died! Killed by ${currentCommand}.`);
                    console.log(`Best room: ${bestRoom}`);
                    return;
                }
        }
    }

    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

manageMuOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
