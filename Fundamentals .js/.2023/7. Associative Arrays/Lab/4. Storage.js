function manageStorage(input) {
    let storage = {};
    for (let el of input) {
        let [product, quantity] = el.split(' ');
        quantity = Number(quantity);
        storage.hasOwnProperty(product) ? storage[product] += quantity : storage[product] = quantity;
    }

    let storageEntries = Object.entries(storage);
    storageEntries.forEach(el => console.log(el[0], '->', el[1]));
}

manageStorage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);