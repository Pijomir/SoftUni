function makeDictionary(input) {
    let dictionary = {};
    for (let line of input) {
        let currentWordAndDefinition = JSON.parse(line);
        // let currentWord = Object.keys(currentWordAndDefinition)[0]; - вариант 1;
        // let currentDefinition = Object.values(currentWordAndDefinition)[0]; - вариант 1;
        // let [currentWord, currentDefinition] = Object.entries(currentWordAndDefinition)[0]; - вариант 2;
        // dictionary[currentWord] = currentDefinition;
        dictionary = Object.assign(dictionary, currentWordAndDefinition);
    }

    let sortedDictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDictionary.forEach(a => console.log(`Term: ${a[0]} => Definition: ${a[1]}`));
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);