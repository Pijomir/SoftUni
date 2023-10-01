function dungeonestDark(arr) {
    let rooms = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let isAlive = true;

    for (i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let currentCommand = room[0];
        let currentNumber = +room[1];

        switch (currentCommand) {
            case 'potion': 
                health + currentNumber > 100 ? currentNumber = 100 - health : currentNumber;
                health += currentNumber;
                console.log(`You healed for ${currentNumber} hp.\nCurrent health: ${health} hp.`);
                break;
            case 'chest':
                coins += currentNumber;
                console.log(`You found ${currentNumber} coins.`);
                break;
            default:
                health -= currentNumber;
                if (health > 0) {
                    console.log(`You slayed ${currentCommand}.`)
                } else {
                    console.log(`You died! Killed by ${currentCommand}.`);
                    console.log(`Best room: ${i + 1}`);
                    isAlive = false;
                } 
                break;
        }
        
        if (!isAlive) {
            break;
        }
    }
    
    if (isAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);