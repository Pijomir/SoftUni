function returnDeckOfCards(input) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    let deck = [];
    for (let card of input) {
        let [face, suit] = card.length === 2 ? card.split('') : [card.slice(0, 2), card.slice(2)];
        if (!faces.includes(face) || !suits.includes(suit)) {
            console.log(`Invalid card: ${card}`);
            return;
        }

        switch (suit) {
            case 'S': suit = '\u2660'; break;
            case 'H': suit = '\u2665'; break;
            case 'D': suit = '\u2666'; break;
            case 'C': suit = '\u2663'; break;
        }

        deck.push(face + suit);
    }
    
    console.log(deck.join(' '));
}

returnDeckOfCards(['5S', '3D', 'QD', '1C'])

