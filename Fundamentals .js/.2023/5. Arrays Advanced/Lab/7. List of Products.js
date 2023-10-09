function printAListOfProducts(arr) {
    let listOfProducts = arr.sort();
    listOfProducts.forEach((el, index) => console.log(`${index + 1}.${el}`));
}

printAListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
