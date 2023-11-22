function trackHeroesStats(input) {
    let heroesCount = input.shift();
    let heroesStats = {};
    for (let i = 0; i < heroesCount; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroesStats[name] = {};
        hp > 100 ? heroesStats[name].HP = 100 : heroesStats[name].HP = hp;
        mp > 200 ? heroesStats[name].MP = 200 : heroesStats[name].MP = mp;
    }

    while (input.length > 0) {
        let commandLine = input.shift().split(' - ');
        let command = commandLine.shift();
        if (command === 'End') {
            for (let [hero, stats] of Object.entries(heroesStats)) {
                console.log(hero);
                console.log(`  HP: ${stats.HP}`);
                console.log(`  MP: ${stats.MP}`);
            }

            break;
        }

        switch (command) {
            case 'CastSpell': let [casterName, mpNeeded, spellName] = commandLine;
                mpNeeded = Number(mpNeeded);
                if (heroesStats[casterName].MP >= mpNeeded) {
                    heroesStats[casterName].MP -= mpNeeded;
                    console.log(`${casterName} has successfully cast ${spellName} and now has ${heroesStats[casterName].MP} MP!`);
                } else {
                    console.log(`${casterName} does not have enough MP to cast ${spellName}!`);
                }

                break;
            case 'TakeDamage': let [damagedName, damage, attacker] = commandLine;
                damage = Number(damage);
                if (heroesStats[damagedName].HP > damage) {
                    heroesStats[damagedName].HP -= damage;
                    console.log(`${damagedName} was hit for ${damage} HP by ${attacker} and now has ${heroesStats[damagedName].HP} HP left!`);
                } else {
                    console.log(`${damagedName} has been killed by ${attacker}!`);
                    delete heroesStats[damagedName];
                }

                break;
            case 'Recharge': let [rechargedName, mpAmmount] = commandLine;
                mpAmmount = Number(mpAmmount);
                let ammountRecovered = heroesStats[rechargedName].MP + mpAmmount > 200 ? 200 - heroesStats[rechargedName].MP : mpAmmount;
                heroesStats[rechargedName].MP += ammountRecovered;
                console.log(`${rechargedName} recharged for ${ammountRecovered} MP!`);
                break;
            case 'Heal': let [healedName, hpAmmount] = commandLine;
                hpAmmount = Number(hpAmmount)
                let hpAmmountRecovered = heroesStats[healedName].HP + hpAmmount > 100 ? 100 - heroesStats[healedName].HP : hpAmmount;
                heroesStats[healedName].HP += hpAmmountRecovered;
                console.log(`${healedName} healed for ${hpAmmountRecovered} HP!`);
        }
    }
}

trackHeroesStats(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);