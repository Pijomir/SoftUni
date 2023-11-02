function createHeroesRegister(input) {
    let heroesRegister = [];
    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        heroesRegister.push({ Hero: name, level: level, items: items });
    }

    let sortedRegister = heroesRegister.sort((a, b) => a.level - b.level);
    sortedRegister.forEach(a => {
        for (let [key, value] of Object.entries(a)) {
            console.log(key === 'Hero' ? `${key}: ${value}` : `${key} => ${value}`);
        }
    });
}

createHeroesRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
