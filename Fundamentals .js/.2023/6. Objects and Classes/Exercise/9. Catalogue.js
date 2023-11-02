function createStoreCatalogue(input) {
    let catalogue = {};
    for (let productInfo of input) {
        let [productName, productPrice] = productInfo.split(' : ');
        let initial = productName[0];
        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }

        catalogue[initial][productName] = productPrice
    }

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [initial, productsInfo] of sortedCatalogue) {
        console.log(initial);
        let sortedProductInfo = Object.entries(productsInfo).sort((a, b) => a[0].localeCompare(b[0]));
        sortedProductInfo.forEach(a => console.log(`  ${a[0]}: ${a[1]}`));
    }
}

createStoreCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);