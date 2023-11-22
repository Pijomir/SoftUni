function manageShopInventory(input) {
    let storeInventory = input.shift().split(', ');
    let commands = { 'Add': add, 'Remove': remove, 'Bonus phone': addBonusPhone, 'Last': moveLast };
    for (let el of input) {
        let [command, parameters] = el.split(' - ');
        if (command === 'End') {
            break;
        }

        if (command === 'Bonus phone') {
            let [oldPhone, newPhone] = parameters.split(':');
            storeInventory = commands[command](storeInventory, oldPhone, newPhone)
        } else {
            storeInventory = commands[command](storeInventory, parameters);
        }
    }

    console.log(storeInventory.join(', '));

    function add(inventory, phone) {
        if (!inventory.includes(phone)) {
            inventory.push(phone);
        }

        return inventory;
    }

    function remove(inventory, phone) {
        if (inventory.includes(phone)) {
            inventory = inventory.filter(a => a !== phone);
        }

        return inventory;
    }

    function addBonusPhone(inventory, phone, bonusPhone) {
        if (inventory.includes(phone)) {
            let phonePosition = inventory.indexOf(phone);
            inventory.splice(phonePosition + 1, 0, bonusPhone);
        }

        return inventory;
    }

    function moveLast(inventory, phone) {
        if (inventory.includes(phone)) {
            inventory = inventory.filter(a => a !== phone);
            inventory.push(phone);
        }

        return inventory;
    }
}

manageShopInventory(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);

// manageShopInventory(["HuaweiP20, XiaomiNote",
// "Remove - Samsung",
// "Bonus phone - XiaomiNote:Iphone5",
// "End"]);

// manageShopInventory(["SamsungA50, MotorolaG5, HuaweiP10",
// "Last - SamsungA50",
// "Add - MotorolaG5",
// "End"]);
