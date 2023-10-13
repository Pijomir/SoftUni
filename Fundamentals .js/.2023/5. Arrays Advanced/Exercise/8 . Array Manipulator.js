function manipulateAnArray(arr, commands) {
    for (let command of commands) {
        let currentCommand = command.split(' ');
        let currentCase = currentCommand.shift();
        let currentElements = currentCommand.map(Number);
        switch (currentCase) {
            case 'add': let [index1, el] = currentElements; add(arr, index1, el); break;
            case 'addMany': let index2 = currentElements.shift(); addMany(arr, index2, currentElements); break;
            case 'contains': let el1 = currentElements.shift(); conatains(arr, el1); break;
            case 'remove': let index3 = currentElements.shift(); remove(arr, index3); break;
            case 'shift': let positionsToShift = currentElements.shift(); shift(arr, positionsToShift); break;
            case 'sumPairs': arr = sumPairs(arr); break;
            case 'print': print(arr); break;
        }
    }
    
    
    function add(array, index, element) {
        return array.splice((index), 0, element);
    }

    function addMany(array, index, elements) {
        return array.splice(index, 0, ...elements);
    }

    function conatains(array, element) {
        console.log(array.indexOf(element));
    }

    function remove(array, index) {
        return array.splice(index, 1);
    }

    function shift(array, positions) {
        for (let i = 0; i < positions; i++) {
            let currentEl = array.shift();
            array.push(currentEl);
        }

        return array;
    }

    function sumPairs(array) {
        let newArr = [];
        for (let i = 0; i < array.length; i += 2) {
            let firstNum = array[i];
            let secondNum = array[i + 1];
            secondNum ? newArr.push(firstNum + secondNum) : newArr.push(firstNum);
        }

        return newArr;
    }

    function print(array) {
        console.log(`[ ${array.join(', ')} ]`);
    }
}

manipulateAnArray([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
