function checkForPairs([input]) {
    let pairsPattern = /([@#]){1}(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1{1}/g;
    let allPairs = input.match(pairsPattern);
    let pairsCount = 0;
    let mirrorWords = [];
    if (allPairs !== null) {
        pairsCount = allPairs.length;
        allPairs.forEach(pair => {
            let match = pair.match(/([@#]){1}(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1{1}/);
            let { wordOne, wordTwo } = match.groups;
            if (wordOne === wordTwo.split('').reverse().join('')) {
                mirrorWords.push([wordOne, wordTwo]);
            }
        });
    }

    console.log(pairsCount > 0 ? `${pairsCount} word pairs found!` : 'No word pairs found!');
    if (mirrorWords.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.map(a => a.join(' <=> ')).join(', '));
    }
}

checkForPairs(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);