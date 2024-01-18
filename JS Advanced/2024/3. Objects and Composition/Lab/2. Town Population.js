function createTownsPopulationRegistry (input) {
    let registry = {};
    input.forEach(line => {
        let [townName, townPopulation] = line.split('<->');
        if (!registry.hasOwnProperty(townName)) {
            registry[townName] = 0;
        }

        registry[townName] += Number(townPopulation);
    });
    return Object.entries(registry).map(a => a = `${a[0]}: ${a[1]}`).join('\n');
}

console.log(createTownsPopulationRegistry(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']));