function manageChestContent(input) {
    let chestContent = input.shift().split('|');
    let commands = {'Loot': loot, 'Drop' : drop, 'Steal': steal};

    for (let el of input) {
        let currentEl = el.split(' ');
        let currentCommand = currentEl.shift();
        if (currentCommand === 'Yohoho!') {
            break;
        }

        commands[currentCommand](chestContent, currentEl);
    }

    let treasureGain = 0;
    chestContent.forEach(a => treasureGain += a.length);
    let averageTreasureGain = treasureGain / chestContent.length;
    console.log(chestContent.length === 0 ? 'Failed treasure hunt.' : `Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);

    function loot(arr, input) {
        for ( let item of input) {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        }
    }

    function drop(arr, index) {
        index = Number(index[0]);
        if (arr[index]) {
            let droppedLoot = arr.splice(index, 1);
            arr.push(droppedLoot[0]);
        }
    }

    function steal(arr, count) {
        count = Number(count[0]);
        let stealedItemsCount = Math.min(count, arr.length);
        let stealedItems = arr.splice(arr.length - stealedItemsCount);
        console.log(stealedItems.join(', '));
    }
}

manageChestContent((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
)