function farmForLegendaryItem(input) {
    let junks = {};
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };
    let farmedMaterials = input.split(' ');
    while (farmedMaterials.length > 0) {
        let qty = Number(farmedMaterials.shift());
        let material = farmedMaterials.shift().toLowerCase();
        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += qty;
            if (keyMaterials[material] >= 250) {
                console.log(`${legendaries[material]} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }

        } else {
            junks.hasOwnProperty(material) ? junks[material] += qty : junks[material] = qty;
        }
    }

    console.log(Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(a => `${a[0]}: ${a[1]}`).join('\n'));
    console.log(Object.entries(junks).sort((a, b) => a[0].localeCompare(b[0])).map(a => `${a[0]}: ${a[1]}`).join('\n'));
}

farmForLegendaryItem('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')