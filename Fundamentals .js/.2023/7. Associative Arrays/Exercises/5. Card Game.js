function playCardGame(input) {
    let decks = {};
    let powers = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    let types = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    input.forEach(line => {
        let [player, cards] = line.split(': ');
        let playerCards = cards.split(', ');
        if (!decks.hasOwnProperty(player)) {
            decks[player] = [];
        }

        for (let card of playerCards) {
            if (!decks[player].includes(card)) {
                decks[player].push(card);
            }
        }
    });
    for (let [player, cards] of Object.entries(decks)) {
        let cardsValue = 0;
        for (let card of cards) {
            if (card.length === 3) {
                cardsValue += 10 * types[card[2]];
            } else {
                let [power, type] = card.split('');
                cardsValue += Number(power) > 1 && Number(power) < 10 ? Number(power) * types[type] : powers[power] * types[type];
            }
        }

        console.log(`${player}: ${cardsValue}`);
    }
}

playCardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);