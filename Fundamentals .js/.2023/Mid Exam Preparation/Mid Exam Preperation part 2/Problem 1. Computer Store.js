function printReceiptForComputer(input) {
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let priceWithTaxes = 0;
    let typeOfClient = input.pop();
    while (input.length > 0) {
        let currentPrice = Number(input.shift());
        if (currentPrice <= 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTaxes += currentPrice;
            taxes += currentPrice * 0.2;
            priceWithTaxes += currentPrice * 1.2;
        }
    }

    if (priceWithTaxes === 0) {
        console.log('Invalid order!');
    } else {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`${'-'.repeat(11)}`);
        console.log(`Total price: ${typeOfClient === 'regular' ? priceWithTaxes.toFixed(2) : (priceWithTaxes * 0.9).toFixed(2)}$`);
        
    }
}

printReceiptForComputer([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special']);
