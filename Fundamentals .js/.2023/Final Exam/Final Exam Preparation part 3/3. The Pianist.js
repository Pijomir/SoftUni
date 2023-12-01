function keepListOfPianoPieces(input) {
    let collection = {};
    let numOfPieces = input.shift();
    let pieces = input.splice(0, numOfPieces);
    pieces.forEach(line => {
        let [piece, composer, key] = line.split('|');
        collection[piece] = { composer, key };
    });
    let stopIndex = input.indexOf('Stop');
    let commandLines = input.slice(0, stopIndex);
    commandLines.forEach(line => {
        line = line.split('|');
        let command = line.shift();
        switch (command) {
            case 'Add': let [pieceToAdd, composerToAdd, keyToAdd] = line;
                if (collection.hasOwnProperty(pieceToAdd)) {
                    console.log(`${pieceToAdd} is already in the collection!`);
                } else {
                    collection[pieceToAdd] = { 'composer': composerToAdd, 'key': keyToAdd };
                    console.log(`${pieceToAdd} by ${composerToAdd} in ${keyToAdd} added to the collection!`);
                }

                break;
            case 'Remove': let [pieceToRemove] = line;
                if (collection.hasOwnProperty(pieceToRemove)) {
                    console.log(`Successfully removed ${pieceToRemove}!`);
                    delete collection[pieceToRemove];
                } else {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                }

                break;
            case 'ChangeKey': let [pieceToModify, newKey] = line;
                if (collection.hasOwnProperty(pieceToModify)) {
                    collection[pieceToModify].key = newKey;
                    console.log(`Changed the key of ${pieceToModify} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToModify} does not exist in the collection.`);
                }

                break;
        }
    });
    Object.entries(collection).forEach(piece => console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`));
}

keepListOfPianoPieces([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);