function calculateFruitPrice(fruit, grams, pricePerKilo) {
    let kilograms = grams / 1000;
    let totalPrice = kilograms * pricePerKilo;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruitPrice('orange', 2500, 1.80);
