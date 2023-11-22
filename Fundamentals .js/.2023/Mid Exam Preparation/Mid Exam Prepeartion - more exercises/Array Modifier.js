function modifyAnArray(input) {
    let arr = input.shift().split(' ').map(Number);
    let allCommands = {'swap': swap, 'multiply': multiply, 'decrease': decrease};
    while(input[0] !== 'end') {
        let [command, index1, index2] = input.shift().split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        arr = allCommands[command](arr, index1, index2);
    }

    console.log(arr.join(', '));

    function swap(arr, index1, index2) {
        let currentNum1 = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = currentNum1
        return arr;
    }

    function multiply(arr, index1, index2) {
        arr[index1] *= arr[index2];
        return arr;
    }

    function decrease(arr) {
        return arr.map(a => a - 1);
    }
}

modifyAnArray([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);