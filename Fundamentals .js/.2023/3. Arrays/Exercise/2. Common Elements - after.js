function findCommonElements(arr1, arr2) {
    arr1.forEach(el => {
        if (arr2.includes(el)) {
            console.log(el);
        }
    })
}

findCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
