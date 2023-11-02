function manageStoreProvision(stockProducts, orderedProducts) {
    let stockList = {};
    for (let i = 0; i < stockProducts.length; i += 2) {
        let product = stockProducts[i];
        let quantity = Number(stockProducts[i + 1]);
        stockList[product] = quantity;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);
        stockList.hasOwnProperty(product) ? stockList[product] += quantity : stockList[product] = quantity;
    }

    for (let [product, quantity] of Object.entries(stockList)) {
        console.log(`${product} -> ${quantity}`);
    }
}

manageStoreProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
