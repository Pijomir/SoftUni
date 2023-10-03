function printElementsOfAnArray(arr) {
    let count = Number(arr.pop());
    let result = [];
    for (let i = 0; i < arr.length; i += count) {
        result.push(arr[i]);
    } 

    console.log(result.join(' '));
}

printElementsOfAnArray(['5', '20', '31', '4', '20', '2'])