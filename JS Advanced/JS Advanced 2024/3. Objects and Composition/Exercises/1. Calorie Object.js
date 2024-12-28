function createCaloriesLibrary(input) {
    let caloriesLibrabry = {};
    for (let i = 0; i < input.length; i += 2) {
        caloriesLibrabry[input[i]] = Number(input[i + 1]);
    }

    return caloriesLibrabry;
}

console.log(createCaloriesLibrary(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));