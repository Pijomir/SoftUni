function thePyramidOfKingDjoser(base, increment) {
    let step = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    while (base > 0) {
        step++;
        if (base <= 2) {
            gold = Math.pow(base, 2) * increment;
        } else {
            stone += Math.pow(base - 2, 2) * increment;
            step % 5 === 0 ? lapisLazuli += (Math.pow(base, 2) - Math.pow(base - 2, 2)) * increment
                : marble += (Math.pow(base, 2) - Math.pow(base - 2, 2)) * increment;
        }

        base -= 2;
    }

    let pyramidHeight = Math.floor(step * increment);
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${pyramidHeight}`);
}

thePyramidOfKingDjoser(23, 0.5);