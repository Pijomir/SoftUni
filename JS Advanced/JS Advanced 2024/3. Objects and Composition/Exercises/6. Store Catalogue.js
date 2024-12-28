function createStoreCatalogue(input) {
    let catalogue = {};
    input.forEach(el => {
        let [product, price] = el.split(' : ');
        if (!catalogue.hasOwnProperty(product[0])) {
            catalogue[product[0]] = {};
        }

        catalogue[product[0]][product] = Number(price);
    });

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    sortedCatalogue.forEach(el => {
        let sortedProductsData = Object.entries(el[1]).sort((a, b) => a[0].localeCompare(b[0])).map((a) => `${a[0]}: ${a[1]}`);
        console.log(el[0]);
        sortedProductsData.forEach(a => console.log(` ${a}`))
    });
}

createStoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);