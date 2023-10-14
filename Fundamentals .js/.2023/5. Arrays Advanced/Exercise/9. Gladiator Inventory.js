function manageGladiatorInventory(input) {
    let inventory = input.shift().split(' ');
    for (let el of input) {
        let params = el.split(' ');
        let currentCommand = params.shift();
        let currentItem = params.shift();
        switch (currentCommand) {
            case 'Buy': buy(inventory, currentItem); break;
            case 'Trash': trash(inventory, currentItem); break;
            case 'Repair': repair(inventory, currentItem); break;
            case 'Upgrade': let [itemToBeUpgraded, currentUpgrade] = currentItem.split('-'); upgradeItem(inventory, itemToBeUpgraded, currentUpgrade); break;
        }
    }

    console.log(inventory.join(' '));

    function buy(inv, item) {
        if (!inv.includes(item)) {
            return inv.push(item);
        }
    }

    function trash(inv, item) {
        if (inv.includes(item)) {
            let itemPosition = inv.indexOf(item);
            return inv.splice(itemPosition, 1);
        } 
    }

    function repair(inv, item) {
        if (inv.includes(item)) {
            let itemPosition = inv.indexOf(item);
            inv.splice(itemPosition, 1);
            return inv.push(item)
        }
    }

    function upgradeItem(inv, item, theUpgrade) {
        if (inv.includes(item)) {
            let upgradedItem = `${item}:${theUpgrade}`;
            let itemPosition = inv.indexOf(item);
            return inv.splice(itemPosition + 1, 0, upgradedItem);
        }
    }
}

manageGladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);
