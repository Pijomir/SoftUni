function createHeroicInventory(input) {
    let inventory = [];
    input.forEach(line => {
        let [name, level, items] = line.split(' / ');
        let currentHeroData = {name, 'level': Number(level), 'items': items ? items.split(', ') : []};
        inventory.push(currentHeroData);
    });
    return JSON.stringify(inventory);
}

console.log(createHeroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));