function convertToObject(data) {
    let personData = JSON.parse(data);
    for (let [key, value] of Object.entries(personData)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')