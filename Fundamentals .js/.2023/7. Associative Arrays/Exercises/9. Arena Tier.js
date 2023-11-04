function manageGladiators(input) {
    let gladiatorsList = {};
    while (input.length > 0) {
        let el = input.shift();
        if (el === 'Ave Cesar') {
            break;
        } else {
            if (!el.includes('vs')) {
                let [name, technique, skillLevel] = el.split(' -> ');
                skillLevel = Number(skillLevel);
                if (!gladiatorsList.hasOwnProperty(name)) {
                    gladiatorsList[name] = { [technique]: skillLevel };
                } else {
                    if (gladiatorsList[name].hasOwnProperty(technique)) {
                        if (skillLevel < gladiatorsList[name][technique]) {
                            skillLevel = gladiatorsList[name][technique];
                        }
                    }

                    gladiatorsList[name][technique] = skillLevel;
                }
            } else {
                let [firstGladiator, secondGladiator] = el.split(' vs ');
                if (gladiatorsList.hasOwnProperty(firstGladiator) && gladiatorsList.hasOwnProperty(secondGladiator)) {
                    let firstTechnicks = Object.keys(gladiatorsList[firstGladiator]);
                    let secondTechnicks = Object.keys(gladiatorsList[secondGladiator]);
                    let equalTechnique = undefined;
                    for (let technique of firstTechnicks) {
                        if (secondTechnicks.includes(technique)) {
                            equalTechnique = technique;
                            break;
                        }
                    }

                    if (equalTechnique) {
                        gladiatorsList[firstGladiator][equalTechnique] > gladiatorsList[secondGladiator][equalTechnique]
                            ? delete gladiatorsList[secondGladiator]
                            : delete gladiatorsList[firstGladiator];
                    }
                }
            }
        }
    }

    for (let [name, techniqueAndSkill] of Object.entries(gladiatorsList)) {
        let totalSkill = Object.values(techniqueAndSkill).reduce((a, b) => a + b, 0);
        gladiatorsList[name] = [totalSkill, techniqueAndSkill];
    }

    let sortedList = Object.entries(gladiatorsList).sort((a, b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0]));
    sortedList.forEach(a => {
        console.log(`${a[0]}: ${a[1][0]} skill`);
        let sortedTechnics = Object.entries(a[1][1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(a => `- ${a[0]} <!> ${a[1]}`).join('\n');
        console.log(sortedTechnics);
    });
}

manageGladiators([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);
