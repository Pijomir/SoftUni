function calculateBarIncome(input) {
    let totalIncome = 0;
    let validOrderPattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.1-9]*(?<price>\d+\.?\d*)\$/;
    let currentOrder = input.shift();
    while(currentOrder !== 'end of shift') {
        let validOrder = currentOrder.match(validOrderPattern);
        if (validOrder) {
            let {name, product, count, price} = validOrder.groups;
            let currentPrice = Number(count) * Number(price);
            console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`);
            totalIncome += currentPrice;
        }
        currentOrder = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

calculateBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);