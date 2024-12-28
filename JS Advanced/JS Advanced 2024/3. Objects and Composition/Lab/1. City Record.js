function createCityRecor(name, population, treasury) {
    let cityRecord = { name, population, treasury};
    return cityRecord;
}

console.log(createCityRecor('Tortuga',
7000,
15000));