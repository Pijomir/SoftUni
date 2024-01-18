function findLowestPriceForEveryProduct(input) {
    let products = {};
    input.forEach(line =>{
        let [cityName, product, price] = line.split(' | ');
        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        products[product][cityName] = Number(price);
    });

    for (let [product, data] of Object.entries(products)) {
        let sortedData = Object.entries(data).sort((a, b) => a[1] - b[1]);
        console.log(`${product} -> ${sortedData[0][1]} (${sortedData[0][0]})`);        
    }
}

findLowestPriceForEveryProduct(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);