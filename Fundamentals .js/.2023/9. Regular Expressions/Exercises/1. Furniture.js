function calculateFurniturePrice(input) {
    let totalCost = 0;
    let boughtFurniture = [];
    let currentFurniture = input.shift();
    let pattern = />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    while (currentFurniture !== 'Purchase') {
        let match = currentFurniture.match(pattern);
        if (match) {
            let { furniture, price, qty } = match.groups;
            boughtFurniture.push(furniture);
            totalCost += Number(price) * Number(qty);
        }

        currentFurniture = input.shift();
    }

    console.log('Bought furniture:');
    if (boughtFurniture.length > 0) {
        console.log(boughtFurniture.join('\n'));
    }

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

calculateFurniturePrice(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);  