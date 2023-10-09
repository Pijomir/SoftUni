function manipulateAnArray(arr) {
    let arrayToBeManipulated = arr.shift().split(' ').map(Number);
    while (arr.length > 0) {
        let [command, parameter, index] = arr.shift().split(' ');
        switch (command) {
            case 'Add': arrayToBeManipulated.push(+parameter); break;
            case 'Remove': arrayToBeManipulated = arrayToBeManipulated.filter(el => el !== +parameter); break;
            case 'RemoveAt': arrayToBeManipulated.splice(+parameter, 1); break;
            case 'Insert':
                arrayToBeManipulated.splice(+index, 0, parameter);
                break;
        }
    }

    console.log(arrayToBeManipulated.join(' '));
}

manipulateAnArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);