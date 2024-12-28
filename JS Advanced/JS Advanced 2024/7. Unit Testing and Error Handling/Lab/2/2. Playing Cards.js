function returnCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];

    if (!faces.includes(face.toString())) {
        throw new Error('Invalid Face');
    }

    if (!suits.includes(suit)) {
        throw new Error('Invalid suit');
    }

    switch (suit) {
        case 'S': suit = '\u2660'; break;
        case 'H': suit = '\u2665'; break;
        case 'D': suit = '\u2666'; break;
        case 'C': suit = '\u2663'; break;
    }

    return {
        face,
        suit,
         toString() {
            return this.face + this.suit;
        }
    };
}


