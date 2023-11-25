function checkForPairs([input]) {
    let pairsPattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1/g;
    let currentPair = pairsPattern.exec(input);
    let pairsCount = 0;
    let mirrorWords = [];
    while(currentPair !== null) {
        pairsCount++;
        let {wordOne, wordTwo} = currentPair.groups;
        if (wordOne === wordTwo.split('').reverse().join('')) {
            mirrorWords.push(`${wordOne} <=> ${wordTwo}`);
        }

        currentPair = pairsPattern.exec(input);
    }

    console.log(pairsCount > 0 ? `${pairsCount} word pairs found!` : 'No word pairs found!');
    if (mirrorWords.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    }
}

checkForPairs(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);