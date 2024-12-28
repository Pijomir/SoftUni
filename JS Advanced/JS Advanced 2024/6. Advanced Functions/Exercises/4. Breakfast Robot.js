function solution() {
    let storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }

    let listOfRecipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (data) {
        let [command, type, qty] = data.split(' ');
        switch (command) {
            case 'restock': return restock(type, qty);
            case 'prepare': return prepare(type, qty);
            case 'report': return report();
        }
    }

    function restock(microelement, quantity) {
        storage[microelement] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let neededIngredients = {};
        Object.entries(listOfRecipes[recipe]).forEach(el => neededIngredients[el[0]] = el[1] * quantity);
        for (let ingridient in neededIngredients) {
            if (storage[ingridient] - neededIngredients[ingridient] <= 0) {
                return `Error: not enough ${ingridient} in stock`;
            }

            storage[ingridient] -= neededIngredients[ingridient];
        }

        return 'Success';
    }
    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }
}

let manager = solution();
console.log(manager("restock flavour 50 ")); // Success 
console.log(manager("prepare lemonade 4 ")); // Success 
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 