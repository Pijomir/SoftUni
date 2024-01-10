function makeSquareOfStars(param) {
    param === undefined ? param = 5 : param = param;
    for (let i = 1; i <= param; i++) {
        console.log('* '.repeat(param));
    }
}

makeSquareOfStars(7);