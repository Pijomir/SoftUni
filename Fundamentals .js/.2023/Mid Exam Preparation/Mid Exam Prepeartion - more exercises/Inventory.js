function manageAnInventory(input) {
    let journal = input.shift().split(', ');
    let commands = { 'Collect': collect, 'Drop': drop, 'Combine Items': combineItems, 'Renew': renew };
    for (let el of input) {
        if (el === 'Craft!') {
            break;
        }

        let [command, items] = el.split(' - ');
        if (command === 'Combine Items') {
            let [item1, item2] = items.split(':');
            journal = commands[command](journal, item1, item2);
        } else {
            journal = commands[command](journal, items);
        }
    }

    console.log(journal.join(', '));

    function collect(arr, item) {
        if (!arr.includes(item)) {
            arr.push(item);
        }

        return arr;
    }

    function drop(arr, item) {
        if (arr.includes(item)) {
            arr = arr.filter(a => a !== item);
        }

        return arr;
    }

    function combineItems(arr, oldItem, newItem) {
        if (arr.includes(oldItem)) {
            let startIndex = arr.indexOf(oldItem);
            arr.splice(startIndex + 1, 0, newItem);
        }

        return arr
    }

    function renew(arr, item) {
        if (arr.includes(item)) {
            let startIndex = arr.indexOf(item);
            let theRenewedItem = arr.splice(startIndex, 1);
            arr.push(theRenewedItem);
        }

        return arr;
    }
}

manageAnInventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);