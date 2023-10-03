function printAnOrderPrice(product, quantity) {
    let price = 0;
    switch (product) {
        case 'coffee':price = 1.5; break;
        case 'water': price = 1; break;
        case 'coke': price = 1.4; break;
        case 'snacks': price = 2; break;
    }

    return (price * quantity).toFixed(2);
}

console.log(printAnOrderPrice('water', 5));

