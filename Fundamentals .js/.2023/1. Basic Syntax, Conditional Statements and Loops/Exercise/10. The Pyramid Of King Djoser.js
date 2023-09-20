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
            if (step % 5 === 0) {
                lapisLazuli += (Math.pow(base, 2) - Math.pow(base - 2, 2)) * increment;
            } else {
                marble += (Math.pow(base, 2) - Math.pow(base - 2, 2)) * increment;
            }
        }

        base -= 2;
    }

    let pyramidHeight = Math.floor(step * increment);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);
}

thePyramidOfKingDjoser(23, 0.5);