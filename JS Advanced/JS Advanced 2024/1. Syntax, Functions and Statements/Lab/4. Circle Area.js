function findCircleArea(arg) {
    console.log(typeof arg === 'number' ? (arg ** 2 * Math.PI).toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof arg}.`);
}

findCircleArea(5);