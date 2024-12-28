function manageCarFactory(order) {
    const car = {model: order.model};
    if (order.power >= 200) {
        car.engine = {power: 200, volume: 3500};
    } else if (order.power >= 120) {
        car.engine = {power: 120, volume: 2400};
    } else {
        car.engine = {power: 90, volume: 1800};
    }
    car.carriage = {type: order.carriage, color: order.color};
    const wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    car.wheels = new Array(4).fill(wheelSize);

    return car;
}

console.log(manageCarFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));