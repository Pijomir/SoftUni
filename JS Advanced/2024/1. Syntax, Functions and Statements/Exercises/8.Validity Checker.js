function validityChecker(x1, y1, x2, y2) {
    function integerCheck(x1, x2, y1, y2) {
        if (Number.isInteger(Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2)))) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    integerCheck(x1, 0, y1, 0);
    integerCheck(x2, 0, y2, 0);
    integerCheck(x1, x2, y1, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1)