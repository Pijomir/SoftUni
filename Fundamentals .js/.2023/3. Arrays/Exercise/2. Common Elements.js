function compareElements(arr1, arr2) {
    for (let el1 of arr1) {
        for (let el2 of arr2) {
            if (el1 === el2) {
                console.log(el1);
            }
        }
    }
}

compareElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);