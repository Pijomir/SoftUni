function manageTseamAccount(input) {
    let gamesAccount = input.shift().split(' ');
    while(input[0] !== 'Play!') {
        let [command, currentGame] = input.shift().split(' ');
        switch (command) {
            case 'Install': installGame(gamesAccount, currentGame); break;
            case 'Uninstall': uninstallGame(gamesAccount, currentGame); break;
            case 'Update': updateGame(gamesAccount, currentGame); break;
            case 'Expansion':
                let [gameToBeExpanded, gameExpansion] = currentGame.split('-');
                expansionGame(gamesAccount, gameToBeExpanded, gameExpansion); break;
        }
    }
    
    function installGame(collection, game) {
        if (!collection.includes(game)) {
           return collection.push(game);
        }
    }

    function uninstallGame(collection, game) {
        let gamePosition = collection.indexOf(game);
        if (collection.includes(game)) {
            return collection.splice(gamePosition, 1);
        }
    }

    function updateGame(collection, game) {
        let gamePosition = collection.indexOf(game);
        if (collection.includes(game)) {
            let updatedGame = collection.splice(gamePosition, 1);
            return collection.push(...updatedGame);
        }
    }

    function expansionGame(collection, game, exp) {
        let gamePosition = collection.indexOf(game);
        if (collection.includes(game)) {
            return collection.splice(gamePosition + 1, 0, `${game}:${exp}`); 
        }
    }

    console.log(gamesAccount.join(' '));
}

manageTseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
